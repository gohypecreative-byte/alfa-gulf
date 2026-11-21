# Alfa Gulf — Hostinger VPS deployment

Domain: **https://alfa-gulf.com**  
Repository: **https://github.com/gohypecreative-byte/alfa-gulf**

Use a fresh, dedicated **Ubuntu 24.04 VPS**. About 4 GB RAM is a reasonable starting point for building this project. This guide uses Nginx, Node.js 24, systemd, HTTPS, and basic server protection. Commands run on the VPS unless marked otherwise. Replace `YOUR_VPS_IP` and `YOUR_EMAIL` with your real values.

## 1. Set DNS and Hostinger firewall

At your domain's DNS provider, configure:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | YOUR_VPS_IP |
| CNAME | www | alfa-gulf.com |

Remove conflicting records. Remove old AAAA records unless their IPv6 address reaches this VPS. Wait for both names to resolve correctly before requesting HTTPS.

In Hostinger's VPS firewall, allow TCP **80 and 443** publicly and **22** from your own IP. Do not open port **3000**. Enable VPS backups and take a snapshot before setup. If SSH uses a different port, use that port throughout this guide.

## 2. Connect

From Windows PowerShell or your computer's terminal:

```bash
ssh root@YOUR_VPS_IP
```

## 3. Install packages and Node.js

```bash
apt update && apt upgrade -y && apt install -y git curl nginx ufw fail2ban certbot python3-certbot-nginx unattended-upgrades build-essential
```

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x -o /tmp/nodesource.sh && bash /tmp/nodesource.sh && apt install -y nodejs
```

```bash
node --version && npm --version
```

Node should report version `v24.x`.

## 4. Download and build

Create an application account without administrator privileges:

```bash
adduser --disabled-password --gecos '' deploy
```

```bash
sudo -H -u deploy git clone https://github.com/gohypecreative-byte/alfa-gulf.git /home/deploy/alfa-gulf
```

If the repository is private, configure a read-only GitHub SSH deploy key for this account and use `git@github.com:gohypecreative-byte/alfa-gulf.git`. Never paste an access token into the clone URL. Your local checkout currently has a different Git remote owner; make sure your latest code is pushed to the repository above.

```bash
sudo -H -u deploy bash -c 'cd /home/deploy/alfa-gulf && npm ci && npm run build'
```

The current project requires no database or configured environment variables. Builds need internet access, including Google Fonts. If secrets are added later, store them in `.env.production`, restrict access, and never commit them. `NEXT_PUBLIC_` values are public and embedded during build.

## 5. Keep the website running

```bash
nano /etc/systemd/system/alfagulf.service
```

Paste:

```ini
[Unit]
Description=Alfa Gulf website
After=network.target

[Service]
User=deploy
Group=deploy
WorkingDirectory=/home/deploy/alfa-gulf
Environment=NODE_ENV=production
Environment=NEXT_TELEMETRY_DISABLED=1
ExecStart=/usr/bin/node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3000
Restart=always
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
UMask=0027

[Install]
WantedBy=multi-user.target
```

Save with **Ctrl+O**, **Enter**, then **Ctrl+X**.

```bash
systemctl daemon-reload && systemctl enable --now alfagulf
```

```bash
curl -I http://127.0.0.1:3000
```

## 6. Set up Nginx

```bash
nano /etc/nginx/sites-available/alfagulf
```

Paste:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name alfa-gulf.com www.alfa-gulf.com;
    server_tokens off;
    client_max_body_size 10m;
    client_header_timeout 15s;
    client_body_timeout 15s;

    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        proxy_buffering off;
        proxy_read_timeout 60s;
    }
}
```

Save, then run:

```bash
ln -sfn /etc/nginx/sites-available/alfagulf /etc/nginx/sites-enabled/alfagulf && nginx -t && systemctl enable --now nginx && systemctl reload nginx
```

## 7. Enable firewall and HTTPS

Allow your actual SSH port **before** enabling UFW. These commands assume port 22:

```bash
ufw allow 22/tcp && ufw allow 'Nginx Full' && ufw default deny incoming && ufw default allow outgoing && ufw enable
```

Once both domain names point to this VPS:

```bash
certbot --nginx -d alfa-gulf.com -d www.alfa-gulf.com --redirect --agree-tos --email YOUR_EMAIL --non-interactive
```

This accepts Let's Encrypt's terms and enables HTTPS for both names. Both names serve the website; this does not redirect `www` to the apex domain.

```bash
systemctl enable --now certbot.timer && certbot renew --dry-run
```

Keep port 80 open for HTTP redirects and certificate validation.

## 8. Enable security updates and SSH protection

```bash
printf '[sshd]\nenabled = true\nbackend = systemd\nport = 22\n' > /etc/fail2ban/jail.d/sshd.local && systemctl enable --now fail2ban && systemctl restart fail2ban
```

If using a different SSH port, replace `22` above.

```bash
dpkg-reconfigure -plow unattended-upgrades
```

Choose **Yes**. Automatic Ubuntu updates do not update npm dependencies; review those separately.

Create a separate administrator:

```bash
adduser admin && usermod -aG sudo admin
```

On your computer, run `ssh-keygen -t ed25519` if you do not already have a key. In Windows PowerShell, display the public key:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

On the VPS:

```bash
install -d -m 700 -o admin -g admin /home/admin/.ssh && nano /home/admin/.ssh/authorized_keys
```

Paste your **public key**, save, then run:

```bash
chown admin:admin /home/admin/.ssh/authorized_keys && chmod 600 /home/admin/.ssh/authorized_keys
```

Keep the original root connection open. In a second computer terminal, run `ssh admin@YOUR_VPS_IP`, then `sudo -v`. Only after both succeed, run this in the original root session:

```bash
printf 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\n' > /etc/ssh/sshd_config.d/00-alfagulf.conf && sshd -t && systemctl reload ssh
```

```bash
sshd -T | grep -E 'permitrootlogin|passwordauthentication|kbdinteractiveauthentication'
```

All three should show `no`. Verify another fresh admin login before closing the root session. Keep Hostinger console recovery available.

## 9. Verify the deployment

From the admin account:

```bash
curl -I https://alfa-gulf.com && curl -I https://www.alfa-gulf.com && sudo systemctl is-active alfagulf nginx fail2ban
```

```bash
sudo ufw status && sudo ss -lntp && sudo certbot renew --dry-run
```

Port 3000 must listen only on `127.0.0.1`. Check navigation, mobile layout, images, videos, and contact links in your browser. Review UFW for unwanted pre-existing public rules.

## 10. Future deployment — one command

Push your changes to GitHub and take a VPS snapshot first. Then, from the admin SSH session:

```bash
sudo systemctl stop alfagulf && (sudo -H -u deploy bash -c 'cd /home/deploy/alfa-gulf && git pull --ff-only && npm ci && npm run build' && sudo systemctl start alfagulf)
```

**The website is offline during this update.** If the build fails, the service stays stopped: fix the error and rerun, or restore the snapshot. This simple procedure does not provide automatic rollback or zero-downtime deployment.

## Useful commands

| Task | Command |
| --- | --- |
| App logs | `sudo journalctl -u alfagulf -n 100 --no-pager` |
| Nginx errors | `sudo tail -n 100 /var/log/nginx/error.log` |
| Restart app | `sudo systemctl restart alfagulf` |
| Check Nginx | `sudo nginx -t` |
| Check disk | `df -h` |
| Check renewal timer | `sudo systemctl list-timers certbot.timer` |
| OS updates | `sudo apt update && sudo apt upgrade -y` |

Schedule required reboots. Monitor uptime, disk usage, and certificate expiry. Keep protected off-server backups and test restoration. This provides basic single-server protection; application security, route-specific rate limits, and disaster recovery need ongoing review.

References: [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting), [NodeSource](https://deb.nodesource.com/), [Hostinger firewall](https://www.hostinger.com/support/4805502-how-to-set-up-a-firewall-at-vps/), [Certbot](https://certbot.eff.org/instructions?ws=nginx&os=snap).
