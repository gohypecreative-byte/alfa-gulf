"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronRight, Server, ShieldCheck, Layers } from "lucide-react"

export interface ITDataCenterData {
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

export function ITDataCenterView({ data }: { data: ITDataCenterData }) {
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

      {/* ── 2. DATA CENTER ARCHITECTURE OVERVIEW ── */}
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
                Mission-Critical Infrastructure
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

              {/* Data Center Certification Badges */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    TIA-942 Tier III Architecture Ready
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    Precision PAC In-Row & Perimeter Cooling
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    FM-200 / Novec Gas Fire Suppression
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-700 font-medium">
                    N+1 Redundant UPS Power Systems
                  </span>
                </div>
              </div>
            </div>

            {/* Right Data Center Image Card (No Text, No Dark Overlay) */}
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

      {/* ── 3. FOUR-STAGE DEPLOYMENT PROCESS TIMELINE ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Deployment Phases
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Data Center Engineering & Delivery Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0081c6]">PHASE 01</span>
              <h3 className="text-base font-semibold text-zinc-950">Site Audit & Heat Modeling</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Evaluating thermal dissipation, power draw limits, and floor load capacity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0081c6]">PHASE 02</span>
              <h3 className="text-base font-semibold text-zinc-950">Civil & Raised Flooring</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Installing heavy antistatic concrete elevated flooring and containment walls.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0081c6]">PHASE 03</span>
              <h3 className="text-base font-semibold text-zinc-950">PAC Cooling & Power UPS</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Mounting precision PAC cooling units, busway trunking, and online double-conversion UPS.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0081c6]">PHASE 04</span>
              <h3 className="text-base font-semibold text-zinc-950">Testing & Commissioning</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">Fluke cable certification, thermal imaging, gas dump testing, and Tier handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WIDE DATA CENTER SHOWCASE BANNER (No Text, No Dark Overlay) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
            <Image
              src={data.showcaseBanner}
              alt="Data Center Server Room Showcase"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 5. CORE DELIVERABLES ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              System Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Infrastructure Scope & Equipment Integration
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

      {/* ── 6. TECHNICAL PARAMETERS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Technical Metrics
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Data Center System Specifications
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

      {/* ── 6B. DATA CENTER ARCHITECTURAL PILLARS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="max-w-[1440px] mx-auto w-full space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              Mission-Critical Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
              Data Center Engineering & Safety Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0081c6] flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Power Redundancy & Dual A/B Bus</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Dual feed utility connections backed by N+1 online double-conversion UPS clusters and automatic generator ATS failover panels guaranteeing zero downtime.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0081c6] flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Precision Thermal Management (PAC)</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Hot/cold aisle containment layouts coupled with EC fan in-row precision cooling units keeping rack temperatures locked at optimal operating ranges.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0081c6] flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Clean Agent Fire Protection</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                VESDA early warning aspirating smoke detection system combined with zero-residue FM-200 / Novec 1230 gas fire suppression manifolds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0081c6] flex items-center justify-center font-bold text-base">
                04
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Heavy Concrete Raised Flooring</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Pedestal-mounted antistatic concrete-core floor panels supporting 1500 kg/m² point loads for high-density blade server cabinets.
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
                Data Center Consultation • {data.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Engage our data center engineering team in Riyadh.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with Alfa Gulf data center consultants for thermal modeling, TIA-942 audit reports, and turnkey server room tenders.
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
