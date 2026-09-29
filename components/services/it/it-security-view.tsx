"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronRight, ShieldCheck } from "lucide-react"

export interface ITSecurityData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  galleryImage?: string
  showcaseBanner?: string
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

export function ITSecurityView({ data }: { data: ITSecurityData }) {
  const galleryImg = data.galleryImage || data.showcaseBanner || data.overviewImage
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

      {/* ── 2. PHYSICAL SECURITY NARRATIVE & OVERVIEW ── */}
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
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Physical & Optical Security
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

              {/* Security Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Saudi Civil Defense & MOI Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    90-Day RAID-6 Video Storage Retention
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Touchless Biometric & RFID Authentication
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    24/7 Control Room Integration
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Overview Image Card (No Text, No Dark Overlay) */}
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

      {/* ── 3. DUAL SECURITY GALLERY SHOWCASE (No Text, No Dark Overlay) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={galleryImg}
                alt="Security Deployment Field Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={data.complianceImage}
                alt="Compliance & Monitoring Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KEY DELIVERABLES MATRIX ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Security Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Surveillance & Physical Access Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 space-y-3 shadow-xs hover:border-[#0081c6] hover:bg-white transition-all duration-200"
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

      {/* ── 5. TECHNICAL SPECIFICATIONS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Security Parameters
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              System Specifications & Retention Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs"
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

      {/* ── 5B. REGULATORY COMPLIANCE & 4-STEP DEPLOYMENT ROADMAP ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full space-y-16">
          {/* Compliance Framework */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Saudi Regulatory Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Government Mandates & Inspection Standards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#0081c6]" />
                <h4 className="font-semibold text-zinc-900 text-base">Saudi MOI Compliant</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  90-day RAID-6 storage retention and camera placement conforming strictly to Ministry of Interior directives.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#0081c6]" />
                <h4 className="font-semibold text-zinc-900 text-base">Civil Defense Clearances</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Official Balady and Civil Defense (Salama) inspection sign-offs and municipal license support.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#0081c6]" />
                <h4 className="font-semibold text-zinc-900 text-base">HCIS Security Directives</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  High Commission for Industrial Security (HCIS) Class 1/2/3 perimeter protection standards.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#0081c6]" />
                <h4 className="font-semibold text-zinc-900 text-base">SASO Testing Certified</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Hardware tested for SASO electrical safety and IP67 weather resistance in desert environments.
                </p>
              </div>
            </div>
          </div>

          {/* Deployment Process Timeline */}
          <div className="space-y-6 pt-8 border-t border-zinc-200/80">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Engineering Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950">
              4-Step Security System Delivery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
              <div className="space-y-2 p-5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-xs font-mono text-[#0081c6] font-bold">PHASE 01</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Site Audit & Optics Map</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  On-site field survey to identify blindspots, focal distances, and fiber cabling routes.
                </p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-xs font-mono text-[#0081c6] font-bold">PHASE 02</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Fiber & Conduit Laying</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Pulling armored optical fiber backbone cables and installing heavy EMT conduits.
                </p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-xs font-mono text-[#0081c6] font-bold">PHASE 03</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Rack & VMS Staging</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Mounting 4K cameras, setting up RAID-6 SAN arrays, and configuring VMS analytics software.
                </p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="text-xs font-mono text-[#0081c6] font-bold">PHASE 04</span>
                <h5 className="font-semibold text-zinc-900 text-sm">Civil Defense Handover</h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Final testing, authority inspection sign-off, operator training, and handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INQUIRY FOOTER ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Technical Security Scope • {data.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Consult with our security engineers in Riyadh.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with Alfa Gulf security specialists for Ministry of Interior compliance audits, BOQ estimates, and camera layout designs.
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
