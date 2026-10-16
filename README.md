# Alfa Gulf website

Next.js App Router website built with TypeScript and Tailwind CSS.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Restart the development server after moving source folders.

## Project structure

```text
app/                 Routes, layouts, metadata, and global CSS
  about-us/
  services/          Construction, IT, and trading routes
components/
  navigation/        Shared navigation
  sections/          Homepage sections and footer
  services/          Shared service page templates and certificates
    it/              Specialized IT page templates
  ui/                Reusable UI and animation components
data/
  services/
    divisions.ts     Main service division content
    sub-services.ts  Individual service content
  certifications.ts  Certificate numbers and PDF links
  contact.ts         Shared contact information
hooks/               Reusable React hooks
lib/                 Utility functions
types/
  services.ts        Service content interfaces
public/                Images, videos, frame sequences, and certificate PDFs
```

Project configuration stays at the repository root. `.next/` and `node_modules/` are generated folders; do not edit them.

## Where to make changes

- Edit service copy in `data/services/`.
- Edit the IT workplace layout in `components/services/it/it-workplace-view.tsx`.
- Update certificates in `data/certifications.ts`; their shared presentation is in `components/services/certifications-section.tsx`.
- Add or change a route in `app/`. Folder names here determine URLs.
- Put public assets in `public/` and reference them with `/filename`, without a `public` prefix.
- Import application files using `@/`, which resolves to the project root.
- Keep shared content types in `types/` and use `import type` for them. Data should not depend on UI components.

## Validation

```bash
npx next typegen
npx tsc --noEmit
npm run lint
npm run build
```

The production build downloads the configured Google fonts and requires network access to Google Fonts.
