"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronRight, ShieldAlert, Cpu, Lock } from "lucide-react"

export interface ITNetworkData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  gallery?: { src: string; alt: string; caption?: string }[]
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  parentHref: string
  parentTitle: string
}

export function ITNetworkView({ data }: { data: ITNetworkData }) {
  return (
    <div className="bg-white text-zinc-950 min-h-screen pt-20 md:pt-[84px]">
      {/* ── 1. FULL-SCREEN LIGHT HERO BANNER (No Text, No Dark Color) ── */}
      <section className="relative w-full h-[calc(100vh-84px)] min-h-[500px] max-h-[1080px] bg-white border-b border-zinc-200/80 overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ── 2. NETWORK & CYBER DEFENSE OVERVIEW ── */}
      <section className="px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-8 text-xs text-zinc-500 font-mono">
            <Link href="/services" className="hover:text-[#0081c6] transition-colors uppercase">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-400" />
            <Link href={data.parentHref} className="hover:text-[#0081c6] transition-colors uppercase">
              {data.parentTitle}
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-400" />
            <span className="text-[#0081c6] font-bold uppercase">{data.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Enterprise Connectivity & Defense
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-zinc-950 tracking-tight">
                {data.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-zinc-800 leading-snug">
                {data.headline}
              </p>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                {data.description}
              </p>

              {/* Network Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    10Gbps Optical Fiber Backbone Architecture
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    NCA ECC & SAMA Cybersecurity Approved
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    High-Density Enterprise Wi-Fi 6 Access Points
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Zero-Trust Next-Gen Firewall (NGFW) Defense
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Card (No Text, No Dark Overlay) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={data.overviewImage}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SITE PHOTOS (real installation work) or stock showcase banner ── */}
      {data.gallery && data.gallery.length > 0 ? (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-10 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                On site
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                Our engineers at work
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
                Real photos from recent rack build-outs: switch installation, patch panel
                termination, cable dressing and NVR rack commissioning.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {data.gallery.map((photo) => (
                <figure key={photo.src} className="flex flex-col">
                  <div className="relative aspect-3/4 w-full overflow-hidden bg-zinc-100 border border-zinc-200/80">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  {photo.caption && (
                    <figcaption className="mt-2.5 text-xs sm:text-sm text-zinc-600">{photo.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 sm:px-10 lg:px-16 py-12 border-b border-zinc-200/80 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={data.showcaseBanner}
                alt="Network Topology Field Image"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── 4. FEATURE CARDS GRID ── */}
      {data.features && data.features.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-12 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Capability Matrix
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                Network Architecture & Threat Protection Deliverables
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-none bg-zinc-50/70 border border-zinc-200/80 space-y-3 shadow-xs hover:border-[#0081c6] hover:bg-white transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-none bg-sky-50 text-[#0081c6] flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-medium text-zinc-950">{feat.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. CYBER COMPLIANCE & SECURITY AUDIT WITH IMAGE ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Compliance Image Card (No Text, No Dark Overlay) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs order-2 lg:order-1">
              <Image
                src={data.complianceImage}
                alt="Cybersecurity & Audit"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Regulatory Cybersecurity Mandate
              </span>

              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950 leading-tight">
                Engineered to meet Saudi National Cybersecurity Authority (NCA) controls.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                All network drops, firewall policies, encrypted VPN tunnels, and wireless authentication protocols adhere to NCA Essential Cybersecurity Controls (ECC) and SAMA security frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">NCA ECC Compliance Validated</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">AES-256 Bit Hardware Encryption</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">24/7 Security Operations Center (SOC)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">Fluke Tested & Certified Cable Drops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TECHNICAL PARAMETERS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Technical Metrics
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              System Specifications & Performance Parameters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  {spec.label}
                </span>
                <p className="text-base sm:text-lg font-semibold text-zinc-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6B. ZERO-TRUST SECURITY & NETWORK PROTOCOL MATRIX ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-sky-50/30">
        <div className="max-w-[1440px] mx-auto w-full space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Security Protocol Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Zero-Trust Architecture & Defense Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Perimeter Firewall</span>
              <h4 className="text-lg font-semibold text-zinc-900">Deep Packet Inspection (DPI)</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                SSL decryption, sandboxing, and real-time signature updates isolating malicious payloads before entering the internal network LAN.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Identity & Access</span>
              <h4 className="text-lg font-semibold text-zinc-900">802.1X NAC & SAML 2.0 MFA</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Hardware MAC filtering, 802.1X port authentication, and mandatory Multi-Factor Authentication (MFA) for every remote user connection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Continuous SOC</span>
              <h4 className="text-lg font-semibold text-zinc-900">24/7 SIEM Threat Isolation</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Centralized syslog monitoring with AI automated endpoint containment responding to anomalies within 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INQUIRY FOOTER ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Network Consultation • {data.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Discuss your enterprise network infrastructure with our engineers.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with Alfa Gulf network architects in Riyadh for security audits, topology design, and fiber backbone installation tenders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0081c6] hover:bg-[#0070ad] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>About Alfa Gulf</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:00966510737090"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-colors border border-zinc-200/80"
              >
                <Phone className="w-4 h-4 text-[#0081c6]" />
                <span>+966 510 737 090</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0081c6]" />
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0081c6]" />
              <span>info@alfa-gulf.com</span>
            </div>
            <div>
              <span>Sunday – Thursday: 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
