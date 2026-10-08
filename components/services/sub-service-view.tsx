"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronRight, ShieldCheck } from "lucide-react"

export interface SubServiceData {
  slug: string
  title: string
  category: string
  department: string // "CONSTRUCTION SERVICES" | "IT SOLUTIONS" | "GENERAL TRADING"
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  complianceItems?: string[]
  /** Real site photos shown in place of the stock showcase banner. */
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

interface SubServiceViewProps {
  data: SubServiceData
}

export function SubServiceDetailView({ data }: SubServiceViewProps) {
  const overviewImg = data.overviewImage
  const showcaseImg = data.showcaseBanner
  const complianceImg = data.complianceImage

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

      {/* ── 2. HEADLINE & OVERVIEW SECTION WITH SIDE IMAGE ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-zinc-200/80 bg-white">
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
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-zinc-950 tracking-tight">
                {data.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-zinc-800 leading-snug">
                {data.headline}
              </p>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                {data.description}
              </p>

              {/* Quality Checklist Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Saudi Building Code (SBC) Certified
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Civil Defense & Municipal Licensed
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    ISO 9001 & ISO 45001 Standards
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Turnkey Kingdom-Wide Execution
                  </span>
                </div>
              </div>
            </div>

            {/* Right Contextual Overview Image Card (No Text, No Dark Overlay) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={overviewImg}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WIDE SHOWCASE IMAGE BANNER CARD (No Text, No Dark Overlay) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
            <Image
              src={showcaseImg}
              alt={`${data.title} Field Showcase`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 4. KEY CAPABILITIES & FEATURES GRID ── */}
      {data.features && data.features.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-12 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Scope & Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                Core Deliverables & Technical Expertise
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

      {/* ── 5. QUALITY, SAFETY & COMPLIANCE SECTION WITH IMAGE ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Compliance Image Card (No Text, No Dark Overlay) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-none overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs order-2 lg:order-1">
              <Image
                src={complianceImg}
                alt="Quality & Compliance Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Compliance Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Quality Assurance & Regulatory Mandate
              </span>

              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950 leading-tight">
                Strict adherence to Saudi Building Codes and safety mandates.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Every project executed by Alfa Gulf undergoes continuous third-party testing, on-site quality assurance audits, and strict occupational safety monitoring to guarantee compliance with Saudi Civil Defense and municipal regulations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(data.complianceItems || [
                  "Saudi Building Code (SBC 201 / 801) Certified",
                  "Saudi Civil Defense (Salama) Compliant",
                  "Full Material Mill Test Certifications (MTR)",
                  "Continuous Inspection Test Reports (ITR)",
                  "Daily Tool-Box Safety & Zero-Harm Culture",
                  "BIM 3D Clash Detection Prior to Execution",
                ]).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0081c6] shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TECHNICAL SPECIFICATIONS GRID ── */}
      {data.specifications && data.specifications.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-12 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Technical Specifications
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                System Parameters & Engineering Benchmarks
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
      )}

      {/* ── 7. INQUIRY & CONTACT FOOTER ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Technical Consultation • {data.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Discuss your {data.title} project scope with our engineers.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with Alfa Gulf engineering managers in Riyadh for tenders, technical data sheets, and BOQ estimates.
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
