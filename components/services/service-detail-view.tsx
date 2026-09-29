"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react"

export interface ServiceDetailData {
  divisionNum: string
  divisionTitle: string
  category: string
  headline: string
  summary: string
  heroImage: string
  heroImageCaption: string
  stats: {
    num: string
    label: string
    desc: string
  }[]
  overviewEyebrow: string
  overviewHeading: string
  overviewDesc: string
  accordionItems: {
    title: string
    content: string
  }[]
  overviewImage: string
  capabilitiesEyebrow: string
  capabilitiesHeading: string
  capabilitiesDesc: string
  capabilities: {
    num: string
    title: string
    desc: string
  }[]
  complianceEyebrow: string
  complianceHeading: string
  complianceDesc: string
  complianceItems: string[]
  complianceImage: string
  relatedDivisions: {
    num: string
    title: string
    href: string
  }[]
}

interface ServiceDetailViewProps {
  data: ServiceDetailData
}

export function ServiceDetailView({ data }: ServiceDetailViewProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  return (
    <div className="bg-white text-zinc-950 min-h-screen pt-20 md:pt-[84px]">
      {/* ── 1. FULL-SCREEN LIGHT HERO BANNER (No Text, No Dark Color) ── */}
      <section className="relative w-full h-[calc(100vh-84px)] min-h-[500px] max-h-[1080px] bg-white border-b border-zinc-200/80 overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.divisionTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ── 2. HEADLINE & OVERVIEW SECTION (Below Full-Screen Banner) ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Main Headline */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-zinc-950 tracking-tight">
              {data.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-zinc-600 font-normal leading-relaxed max-w-3xl">
              {data.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. KEY METRICS & BENCHMARKS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950 font-sans">
                  {stat.num}
                </div>
                <div className="w-full h-[1px] bg-zinc-200/90" />
                <h4 className="text-xs sm:text-[13px] font-semibold tracking-wide text-zinc-900 uppercase">
                  {stat.label}
                </h4>
                <p className="text-xs text-zinc-500 font-normal leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OPERATING APPROACH & INTERACTIVE ACCORDION ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Heading & Accordion */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                {data.overviewEyebrow}
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 leading-[1.14]">
                {data.overviewHeading}
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
                {data.overviewDesc}
              </p>

              {/* Minimalist Accordion */}
              <div className="pt-6 space-y-0 max-w-xl">
                {data.accordionItems.map((item, idx) => {
                  const isOpen = openAccordion === idx
                  return (
                    <div
                      key={item.title}
                      className="border-b border-zinc-200/90 py-4 cursor-pointer transition-colors"
                      onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-base sm:text-lg font-normal tracking-tight transition-colors ${
                            isOpen
                              ? "text-[#0081c6] font-medium"
                              : "text-zinc-950 hover:text-[#0081c6]"
                          }`}
                        >
                          {item.title}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen
                              ? "text-[#0081c6] rotate-45"
                              : "text-zinc-400 group-hover:text-[#0081c6]"
                          }`}
                        />
                      </div>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-2.5"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm leading-relaxed text-zinc-600 pb-1">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Editorial Contextual Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src={data.overviewImage}
                alt={data.overviewHeading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SPECIALIZED CAPABILITIES & DELIVERABLES ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80 mb-12">
            <div className="space-y-2.5 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                {data.capabilitiesEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-zinc-950 leading-[1.14]">
                {data.capabilitiesHeading}
              </h2>
            </div>

            <p className="text-sm sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-normal">
              {data.capabilitiesDesc}
            </p>
          </div>

          {/* Grid of Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {data.capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group flex items-start justify-between py-4 border-b border-zinc-100 hover:border-zinc-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 group-hover:text-[#0081c6] transition-colors pt-0.5">
                    {cap.num}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-zinc-950 group-hover:text-[#0081c6] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-normal mt-1 max-w-md leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#0081c6] transition-colors shrink-0 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUALITY, SAFETY & COMPLIANCE ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs order-2 lg:order-1">
              <Image
                src={data.complianceImage}
                alt="Quality and Compliance"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                {data.complianceEyebrow}
              </span>

              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950 leading-tight">
                {data.complianceHeading}
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                {data.complianceDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {data.complianceItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0081c6] shrink-0" />
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

      {/* ── 6. RELATED DIVISIONS QUICK SWITCHER ── */}
      {data.relatedDivisions && data.relatedDivisions.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 py-16 border-b border-zinc-200/80 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200/80 mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Explore Adjacent Divisions
              </span>
              <Link
                href="/about-us"
                className="text-xs font-mono font-bold text-[#0081c6] hover:underline uppercase tracking-wider"
              >
                All 10 Divisions &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedDivisions.map((rel) => (
                <Link
                  key={rel.num}
                  href={rel.href}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-[#0081c6] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-[#0081c6] transition-colors">
                      {rel.num}
                    </span>
                    <span className="text-sm font-medium text-zinc-900 group-hover:text-[#0081c6] transition-colors">
                      {rel.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0081c6] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. CLEAN EDITORIAL PROPOSAL & INQUIRY FOOTER ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Inquiries &amp; Project Scopes • {data.divisionTitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Engage our technical engineering team in Riyadh.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Submit architectural plans, tender packages, or schedule a technical
                consultation with our certified project managers.
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

          {/* Quick Info Line */}
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
