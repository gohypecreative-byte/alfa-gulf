import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Specialized Services & Divisions | Alfa Gulf Construction & Technologies",
  description:
    "Explore Alfa Gulf's 10 specialized divisions delivering turnkey commercial construction, MEP engineering, structural steel, fit-out, and smart technology across Saudi Arabia.",
}

const SERVICES_OVERVIEW = [
  {
    num: "01",
    title: "Commercial Projects",
    category: "CIVIL & COMMERCIAL CONTRACTING",
    desc: "Multi-story office towers, corporate headquarters, lifestyle centers, and industrial logistics facilities built to SBC 201.",
    image: "/services/commercial_projects.jpg",
    href: "/services/commercial-projects",
    tags: ["Office Towers", "Mixed-Use", "Logistics Hubs", "SBC 201"],
  },
  {
    num: "02",
    title: "Residential Complex & Villas",
    category: "HIGH-END RESIDENTIAL & COMPOUNDS",
    desc: "Bespoke modern private estates, gated residential compounds, and master-planned communities with luxury architectural finishes.",
    image: "/services/residential_villas.jpg",
    href: "/services/residential-buildings-villas",
    tags: ["Luxury Villas", "Gated Communities", "Smart Homes", "Waterproofing"],
  },
  {
    num: "03",
    title: "MEP Services",
    category: "MECHANICAL, ELECTRICAL & PLUMBING",
    desc: "Medium-voltage power distribution, potable water hydraulics, automatic fire suppression, and building automation systems (BMS).",
    image: "/services/mep_services.jpg",
    href: "/services/mep-services",
    tags: ["Power Distribution", "Hydraulics", "Fire Fighting", "BIM LOD 400"],
  },
  {
    num: "04",
    title: "Steel Structure & Fire Proofing",
    category: "INDUSTRIAL & STRUCTURAL ENGINEERING",
    desc: "Heavy industrial structural steel frames, PEB warehouses, long-span roof trusses, and UL 263 certified intumescent coatings.",
    image: "/services/steel_structures.jpg",
    href: "/services/steel-structures",
    tags: ["PEB Warehouses", "Intumescent Paint", "UL Certified", "AISC Standard"],
  },
  {
    num: "05",
    title: "Fit-Out Works",
    category: "INTERIOR ARCHITECTURE & COMMERCIAL FIT-OUT",
    desc: "Turnkey corporate interior fit-out, acoustic partitioning, executive boardrooms, bespoke joinery, and luxury retail environments.",
    image: "/services/fitout_works.jpg",
    href: "/services/fitout-works",
    tags: ["Corporate HQs", "Acoustic Walls", "Bespoke Joinery", "Turnkey Delivery"],
  },
  {
    num: "06",
    title: "IT & CCTV Services",
    category: "ENTERPRISE IT INFRASTRUCTURE & SECURITY",
    desc: "AI-powered IP CCTV surveillance, biometric access control, optical fiber structured cabling, and Tier-rated data center buildouts.",
    image: "/services/cctv_it_services.jpg",
    href: "/services/cctv-it-sales",
    tags: ["AI Surveillance", "Access Control", "Data Centers", "Civil Defense"],
  },
  {
    num: "07",
    title: "Landscaping Works",
    category: "ARCHITECTURAL HARDSCAPING & IRRIGATION",
    desc: "Commercial plazas, granite hardscaping, shade pergolas, automated water-efficient drip irrigation, and landscape lighting.",
    image: "/services/landscaping_works.jpg",
    href: "/services/landscaping-works",
    tags: ["Hardscaping", "Smart Irrigation", "Pergolas", "Native Flora"],
  },
  {
    num: "08",
    title: "Building Material Supplies",
    category: "STRUCTURAL MATERIAL PROCUREMENT & DISTRIBUTION",
    desc: "Direct procurement of SASO & ASTM certified deformed steel rebar, ready-mix concrete, thermal XPS insulation, and site consumables.",
    image: "/services/steel_rebar_supply.jpg",
    href: "/services/building-materials",
    tags: ["Deformed Rebar", "Ready-Mix", "XPS Insulation", "SASO Mark"],
  },
  {
    num: "09",
    title: "HVAC Systems",
    category: "CLIMATE CONTROL & CENTRAL CHILLER PLANTS",
    desc: "Central chilled water plants, VRF multisplit systems, industrial AHUs, and SMACNA certified galvanized duct fabrication.",
    image: "/services/hvac_division.jpg",
    href: "/services/hvac-division",
    tags: ["Chilled Water Plants", "VRF Systems", "SMACNA Ducting", "SEEC Approved"],
  },
  {
    num: "10",
    title: "Demolition & Renovation",
    category: "CONTROLLED STRUCTURAL DISMANTLING & RETROFIT",
    desc: "Controlled structural demolition, robotic concrete breaking, diamond wire sawing, CFRP strengthening, and Balady municipal permits.",
    image: "/services/structural_demolition.jpg",
    href: "/services/demolition-renovation",
    tags: ["Controlled Demolition", "Wire Sawing", "CFRP Retrofit", "Balady Permits"],
  },
]

export default function ServicesIndexPage() {
  return (
    <div className="bg-white text-zinc-950 min-h-screen pt-20 md:pt-[84px]">
      {/* ── 1. FULL-SCREEN LIGHT HERO BANNER (No Text, No Dark Color) ── */}
      <section className="relative w-full h-[calc(100vh-84px)] min-h-[500px] max-h-[1080px] bg-white border-b border-zinc-200/80 overflow-hidden">
        <Image
          src="/services/commercial_projects.jpg"
          alt="Alfa Gulf Specialized Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ── 2. EDITORIAL HEADLINE & OVERVIEW SECTION (Below Banner) ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-zinc-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Main Headline */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] text-zinc-950 tracking-tight">
              Integrated engineering and construction capabilities across the Kingdom.
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-zinc-600 font-normal leading-relaxed max-w-3xl">
              Alfa Gulf operates as a unified general contractor. By self-performing civil construction,
              heavy structural steel, electro-mechanical systems, enterprise IT, and interior fit-out,
              we eliminate subcontractor friction and guarantee strict adherence to the Saudi Building Code.
            </p>
          </div>

          {/* Key Numbers Strip */}
          <div className="mt-14 pt-10 border-t border-zinc-200/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl sm:text-5xl font-light text-zinc-950">10</div>
              <div className="text-xs font-semibold uppercase text-zinc-900 mt-2">
                Specialized Divisions
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">Turnkey EPC under one roof</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-light text-zinc-950">15+</div>
              <div className="text-xs font-semibold uppercase text-zinc-900 mt-2">
                Years of Execution
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">Proven Kingdom track record</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-light text-zinc-950">100%</div>
              <div className="text-xs font-semibold uppercase text-zinc-900 mt-2">
                SBC Code Compliance
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">Strict civil defense adherence</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-light text-zinc-950">Zero</div>
              <div className="text-xs font-semibold uppercase text-zinc-900 mt-2">
                Contractor Friction
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">Single-source project accountability</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE 10 DIVISIONS (Clean Architectural Cards) ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-[1440px] mx-auto w-full space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200/80">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Contracting Divisions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-tight text-zinc-950 mt-1">
                Explore Our Core Service Capabilities
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
              Select a specialized division below to review detailed technical specifications,
              compliance frameworks, and scopes of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES_OVERVIEW.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-zinc-200/80 hover:border-[#0081c6] transition-all duration-300 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider">
                      {item.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#0081c6] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium text-zinc-950 group-hover:text-[#0081c6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tags & Arrow */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0081c6] uppercase tracking-wider shrink-0 group-hover:translate-x-1 transition-transform">
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CLEAN PROPOSAL & CONTACT FOOTER ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                General Contracting Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
                Partner with Alfa Gulf on your next project.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                Connect directly with our estimating and engineering directors in Riyadh
                for project tenders, BOQs, and joint venture inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0081c6] hover:bg-[#0070ad] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>About Our Firm</span>
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
