"use client"

import { CertificationsSection } from "@/components/services/certifications-section"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Flame,
  Zap,
  Wrench,
  Camera,
  Trees,
  Package,
  Wind,
  Hammer,
  CheckCircle2,
} from "lucide-react"

const STATS = [
  {
    num: "15+",
    label: "Years in Saudi Arabia",
    desc: "Established track record of execution across the Kingdom",
  },
  {
    num: "100+",
    label: "Completed Projects",
    desc: "Commercial, industrial, luxury residential & IT facilities",
  },
  {
    num: "10",
    label: "Specialized Divisions",
    desc: "Turnkey integrated contracting from civil to tech",
  },
  {
    num: "100%",
    label: "SBC Code Compliance",
    desc: "Strict adherence to Saudi Building Code & Civil Defense",
  },
]

const ACCORDION_ITEMS = [
  {
    title: "Our Mission",
    content:
      "Revolutionizing construction with innovative, sustainable solutions to drive progress and realize Saudi Vision 2030 across commercial, residential, and industrial sectors.",
  },
  {
    title: "Core Values",
    content:
      "Driven by integrity, excellence, innovation, collaboration, and a customer-centric approach to deliver exceptional structural and electro-mechanical solutions.",
  },
  {
    title: "Saudi Vision 2030 Catalyst",
    content:
      "Actively contributing to the Kingdom's rapid urban transformation by developing smart commercial hubs, critical data infrastructure, and sustainable communities.",
  },
]

const DIVISIONS = [
  {
    num: "01",
    title: "Commercial Projects",
    desc: "Modern office towers, commercial hubs & corporate headquarters.",
    href: "/services/commercial-projects",
    icon: Building2,
  },
  {
    num: "02",
    title: "Residential Complex & Villas",
    desc: "Luxury residential compounds, private villas & master communities.",
    href: "/services/residential-buildings-villas",
    icon: Building2,
  },
  {
    num: "03",
    title: "MEP Services",
    desc: "Integrated mechanical, electrical, plumbing & low-current engineering.",
    href: "/services/mep-services",
    icon: Zap,
  },
  {
    num: "04",
    title: "Steel Structure & Fire Proofing",
    desc: "Industrial structural steel fabrication & UL certified fireproofing.",
    href: "/services/steel-structures",
    icon: Flame,
  },
  {
    num: "05",
    title: "Fit-Out Works",
    desc: "Premium corporate interiors, acoustic ceilings & turnkey delivery.",
    href: "/services/fitout-works",
    icon: Wrench,
  },
  {
    num: "06",
    title: "IT & CCTV Services",
    desc: "AI CCTV surveillance, access control & data center infrastructure.",
    href: "/services/cctv-it-sales",
    icon: Camera,
  },
  {
    num: "07",
    title: "Landscaping Works",
    desc: "Architectural hardscaping, automated irrigation & environmental design.",
    href: "/services/landscaping-works",
    icon: Trees,
  },
  {
    num: "08",
    title: "Building Material Supplies",
    desc: "Direct procurement of certified structural steel, rebar & concrete.",
    href: "/services/building-materials",
    icon: Package,
  },
  {
    num: "09",
    title: "HVAC Systems",
    desc: "Central chilled water plants, engineered VRF units & ductwork.",
    href: "/services/hvac-division",
    icon: Wind,
  },
  {
    num: "10",
    title: "Demolition & Renovation",
    desc: "Safe controlled dismantling, concrete cutting & retrofitting.",
    href: "/services/demolition-renovation",
    icon: Hammer,
  },
]

export default function AboutUsPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  return (
    <div className="bg-white text-zinc-950 min-h-screen pt-20 md:pt-[84px]">
      {/* ── 1. EDITORIAL HERO SECTION (Clean & Architectural) ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-20 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#0081c6]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
              About Alfa Gulf • Riyadh, KSA
            </span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] text-zinc-950 tracking-tight">
              Transforming ambitious visions into enduring landmark structures.
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-zinc-600 font-normal leading-relaxed max-w-3xl">
              Alfa Gulf Technologies &amp; Construction Company is a premier Saudi Arabian
              general contractor. Over 15 years, we have combined heavy structural engineering,
              civil construction, and smart infrastructure to deliver turnkey excellence
              strictly aligned with the Saudi Building Code and Vision 2030.
            </p>
          </div>

          {/* Cinematic Wide Image Banner */}
          <div className="mt-12 sm:mt-16 relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-xs">
            <Image
              src="/safety/teamwork_structural.jpg"
              alt="Alfa Gulf Engineers on Construction Site"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-lg">
              <span className="text-[11px] font-mono tracking-widest uppercase text-sky-400 font-bold block mb-1">
                Field Excellence
              </span>
              <p className="text-sm sm:text-base font-medium leading-snug">
                Unified EPC execution across Riyadh, Jeddah, Eastern Province, and national megaprojects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS & KEY METRICS (Like BuildingForTheBest on Homepage) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((stat, idx) => (
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

      {/* ── 3. HERITAGE & VISION 2030 (Clean Split Layout) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Heading & Accordion (Exact Home Page Interaction) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                01 // Operating Philosophy
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 leading-[1.14]">
                Built on Saudi ground. Engineered to international standards.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
                Founded in Riyadh, Alfa Gulf provides the complete building lifecycle under one
                roof. We eliminate subcontractor friction, ensure strict timeline adherence,
                and apply advanced building technologies to every square meter.
              </p>

              {/* Minimalist Accordion */}
              <div className="pt-6 space-y-0 max-w-xl">
                {ACCORDION_ITEMS.map((item, idx) => {
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
                            isOpen ? "text-[#0081c6] font-medium" : "text-zinc-950 hover:text-[#0081c6]"
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
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0 mt-0"
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

            {/* Right: Editorial Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
              <Image
                src="/safety/safety_team_site.jpg"
                alt="Alfa Gulf Structural Engineering Quality"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 10 SPECIALIZED DIVISIONS (Minimalist Architectural Grid) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80 mb-12">
            <div className="space-y-2.5 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                02 // Integrated Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-zinc-950 leading-[1.14]">
                10 Specialized Divisions Under One Unified Team
              </h2>
            </div>

            <p className="text-sm sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-normal">
              Operating seamlessly across the Kingdom to deliver integrated physical,
              electro-mechanical, and technological excellence.
            </p>
          </div>

          {/* Grid of 10 Divisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {DIVISIONS.map((div) => {
              const Icon = div.icon
              return (
                <Link
                  key={div.num}
                  href={div.href}
                  className="group flex items-start justify-between py-4 border-b border-zinc-100 hover:border-zinc-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 group-hover:text-[#0081c6] transition-colors pt-0.5">
                      {div.num}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-zinc-950 group-hover:text-[#0081c6] transition-colors">
                        {div.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-normal mt-0.5 max-w-md">
                        {div.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#0081c6] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5. SAFETY & QUALITY INTEGRITY (Clean Image + Checklist) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs order-2 lg:order-1">
              <Image
                src="/safety/people_safety_culture.jpg"
                alt="Alfa Gulf HSE Quality Culture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                03 // Quality &amp; Safety Mandate
              </span>

              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950 leading-tight">
                Zero compromise on structural integrity and site safety.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Safety at Alfa Gulf is our foundational commitment. Every structural calculation,
                intumescent fire coating, and concrete pour is inspected by certified QA/QC
                engineers to safeguard human life and long-term asset value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% Saudi Building Code (SBC) Adherence",
                  "ISO 9001:2015 Quality Management",
                  "ISO 14001:2015 Environmental Management",
                  "ISO 45001:2018 Occupational Health & Safety",
                  "UL-Certified Fireproofing Inspections",
                  "Direct Certified Material Procurement",
                  "Dedicated HSE Officers on Active Sites",
                ].map((item, idx) => (
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

      <CertificationsSection />

      {/* ── 6. CLEAN EDITORIAL CONTACT / CTA (Clean White Architectural Banner) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Inquiries &amp; Project Proposals
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Ready to build your next landmark?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Speak directly with our technical team in Riyadh. We review commercial,
                industrial, and infrastructure scopes with prompt turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/services/commercial-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0081c6] hover:bg-[#0070ad] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+966534979774"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-colors border border-zinc-200/80"
              >
                <Phone className="w-4 h-4 text-[#0081c6]" />
                <span>+966534979774</span>
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
