"use client";

import React from "react";
import Image from "next/image";
import footerLogo from "@/public/alfa-gulf-footer-transparent.png";
import { DEPARTMENT_CONTACTS } from "@/data/contact";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
} from "@/components/ui/hover-footer";

export function HoverFooter() {
  const footerLinks = [
    {
      title: "Sectors",
      links: [
        { label: "Commercial Megastructures", href: "#sectors" },
        { label: "Heavy Industrial & Petrochemical", href: "#sectors" },
        { label: "Sustainable Residential Communities", href: "#sectors" },
        { label: "Infrastructure & Civil Engineering", href: "#sectors" },
        { label: "Turnkey MEP & Fireproofing", href: "#sectors" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Alfa Gulf", href: "/about-us" },
        { label: "Featured Projects", href: "#projects" },
        { label: "Saudi Vision 2030", href: "#vision2030" },
        { label: "Safety & Culture Charter", href: "#safety" },
        { label: "Careers", href: "#careers" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-[#0081c6]" />,
      text: "+966534979774",
      href: "tel:+966534979774",
    },
    {
      icon: <MapPin size={18} className="text-[#0081c6]" />,
      text: "King Fahd Road, Al-Olaya, Riyadh, KSA",
    },
  ];

  // Social media icons matching media_1788856754017.png:
  // Facebook, Instagram, Twitter, Dribbble, Globe
  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      label: "Facebook",
      href: "#",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 stroke-current fill-none stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      label: "Instagram",
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
      label: "Twitter",
      href: "#",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 stroke-current fill-none stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      ),
      label: "Dribbble",
      href: "#",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 stroke-current fill-none stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      label: "Globe",
      href: "/",
    },
  ];

  return (
    <footer className="w-full bg-white relative h-fit overflow-hidden text-slate-800 pt-14 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Image
              src={footerLogo}
              alt="Alfa Gulf Technologies & Construction Co. — Construction, IT & Trading"
              sizes="(max-width: 767px) 320px, (max-width: 1023px) 50vw, 320px"
              className="h-auto w-full max-w-[320px] object-contain"
            />
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-900 text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-[#0081c6] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-slate-900 text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              {DEPARTMENT_CONTACTS.map(({ label, email }) => (
                <li key={label}>
                  <a href={`mailto:${email}`} className="flex items-start gap-3 hover:text-[#0081c6] transition-colors">
                    <Mail size={18} className="mt-0.5 shrink-0 text-[#0081c6]" />
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-slate-900">{label}</span>
                      <span className="break-words">{email}</span>
                    </span>
                  </a>
                </li>
              ))}
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#0081c6] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-200/80 mt-8 mb-12" />

        {/* Footer bottom bar - exact layout as in demo screenshot media_1788856754017.png */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 relative z-30">
          {/* Social icons */}
          <div className="flex space-x-6 text-slate-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#0081c6] transition-colors text-slate-500 hover:text-slate-900"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ALFA GULF CONTRACTING COMPANY. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect cleanly positioned with line clearance and social bar overlap */}
      <div className="w-full flex justify-center items-center h-[24rem] sm:h-[28rem] -mt-32 sm:-mt-38 -mb-24 sm:-mb-30 relative z-20 pointer-events-auto overflow-hidden">
        <TextHoverEffect text="ALFA GULF" className="w-full max-w-[1500px] px-2 sm:px-4 z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
