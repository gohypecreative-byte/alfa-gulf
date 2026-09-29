"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronRight, Monitor, Headphones, Truck } from "lucide-react"

export interface ITWorkplaceData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
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

export function ITWorkplaceView({ data }: { data: ITWorkplaceData }) {
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

      {/* ── 2. WORKPLACE TECHNOLOGY OVERVIEW ── */}
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
                Workplace Digital Transformation
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

              {/* Workplace Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Authorized OEM Distribution (Dell, HP, Cisco, Lenovo)
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Teams & Zoom Rooms Certified Integration
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    24/7 Managed IT Support & Maintenance SLAs
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    SASO & CITC Compliant Logistics Supply
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Card (No Text, No Dark Overlay) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
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

      {/* ── 3. OEM BRAND & HARDWARE DISTRIBUTION MATRIX ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Procurement & Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Enterprise Technology Distribution Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center">
                <Monitor className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Hardware Procurement</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Direct bulk supply of commercial workstations, laptops, and displays.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center">
                <Headphones className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Managed Helpdesk SLAs</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Dedicated certified engineers providing 24/7 on-site and remote IT operations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Kingdom-Wide Logistics</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Fast-track delivery and staging from our central warehousing hub in Riyadh.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-950">OEM On-Site Support</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">3 to 5-year direct manufacturer warranties backed by official replacement parts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WIDE WORKPLACE SHOWCASE BANNER (No Text, No Dark Overlay) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
            <Image
              src={data.showcaseBanner}
              alt="Workplace Technology Field Image"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 5. CORE DELIVERABLES GRID ── */}
      {data.features && data.features.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-12 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Workplace Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                Key Scope & Service Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs hover:border-[#0081c6] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center font-mono font-bold text-xs">
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

      {/* ── 6. TECHNICAL PARAMETERS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Technical Metrics
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              System Specifications & Operational SLA
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

      {/* ── 6B. OEM VENDOR COMPATIBILITY & 4-PHASE STAGING WORKFLOW ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full space-y-16">
          {/* Vendor Ecosystem */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Global OEM Partnerships
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Authorized Tier-1 Vendor Ecosystem
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                Dell Technologies
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                HP Enterprise
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                Cisco Systems
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                Poly / Yealink
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                Microsoft Teams
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 text-center font-bold text-zinc-800 text-sm shadow-xs flex items-center justify-center min-h-[60px]">
                Synology Storage
              </div>
            </div>
          </div>

          {/* Staging Timeline */}
          <div className="space-y-6 pt-8 border-t border-zinc-200/80">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Lifecycle Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950">
              4-Phase IT Staging & Procurement Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
                <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Phase 01</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Needs Assessment & BOQ</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Analyzing workstation specs, license requirements, and generating official BOQs.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
                <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Phase 02</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Pre-Delivery Warehouse Staging</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  RAM/SSD upgrades, OS image flashing, BIOS hardening, and hardware testing.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
                <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Phase 03</span>
                <h5 className="font-semibold text-zinc-900 text-sm">On-Site Rack & Desk Setup</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Physical installation, cable organization, AV calibration, and network registration.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
                <span className="text-xs font-mono text-[#0081c6] font-bold uppercase">Phase 04</span>
                <h5 className="font-semibold text-zinc-900 text-sm">24/7 SLA Operations</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Helpdesk ticket monitoring, warranty handling, and resident engineer support.
                </p>
              </div>
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
                Workplace Consultation • {data.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Engage our workplace technology team in Riyadh.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with Alfa Gulf consultants for commercial hardware tenders, AV meeting room designs, and managed IT service agreements.
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
