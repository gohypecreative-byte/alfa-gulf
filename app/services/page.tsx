import React from "react"
import { SERVICE_DIVISIONS } from "@/lib/services"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Building2, Network, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Specialized Services & Divisions | Alfa Gulf Construction & Technologies",
  description:
    "Explore Alfa Gulf's construction, engineering, smart building integration, and turnkey office IT services across Saudi Arabia.",
}

const divisionDetails = [
  { title: "Construction services", description: "From the first foundations to the final fit-out. Civil works, building systems, and specialist contracting for every stage of your project.", icon: Building2, short: "Build" },
  { title: "IT solutions", description: "Connected workplaces, secure infrastructure, and technology that supports your daily operations.", icon: Network, short: "Connect" },
  { title: "General trading", description: "Materials, equipment, and workplace essentials sourced to keep your projects moving.", icon: Package, short: "Supply" },
]

export default function ServicesIndexPage() {
  return (
    <div className="bg-white text-zinc-950 min-h-screen pt-20 md:pt-[84px]">
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-[1340px] px-6 py-12 sm:px-10 sm:py-20 lg:px-8">
          <p className="mb-5 text-sm font-medium text-brand">Our services</p>
          <div className="grid items-end gap-7 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <h1 className="max-w-3xl text-[42px] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Built around<br />your project.</h1>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">Construction expertise, connected technology, and dependable supply. Explore all {SERVICE_DIVISIONS.reduce((total, division) => total + division.items.length, 0)} services across our three divisions.</p>
          </div>
          <nav aria-label="Service divisions" className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3">
            {SERVICE_DIVISIONS.map((division, index) => {
              const detail = divisionDetails[index]
              const Icon = detail.icon
              return (
                <a key={division.id} href={`#${division.id}`} className="group flex items-center gap-4 rounded-xl bg-white p-5 transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:p-6">
                  <Icon aria-hidden="true" className="size-7 shrink-0 text-brand group-hover:text-white" strokeWidth={1.5} />
                  <div className="flex-1"><span className="block text-lg font-medium">{detail.short}</span><span className="mt-1 block text-sm text-slate-500 group-hover:text-white/80">{division.items.length} services</span></div>
                  <ArrowRight aria-hidden="true" className="size-5" />
                </a>
              )
            })}
          </nav>
        </div>
      </section>
      <div className="mx-auto max-w-[1340px] px-6 sm:px-10 lg:px-8">
        {SERVICE_DIVISIONS.map((division, index) => {
          const detail = divisionDetails[index]
          const DivisionIcon = detail.icon
          return (
            <section key={division.id} id={division.id} className="grid scroll-mt-28 gap-8 border-b border-slate-200 py-12 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-16">
              <div>
                <div className="lg:sticky lg:top-32">
                  <DivisionIcon aria-hidden="true" className="mb-5 size-10 text-brand" strokeWidth={1.3} />
                  <h2 className="text-3xl font-medium tracking-tight">{detail.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">{detail.description}</p>
                  <p className="mt-5 text-sm font-medium text-brand">{division.items.length} specialist services</p>
                </div>
              </div>
              <div className="grid content-start gap-x-6 gap-y-8 sm:grid-cols-2">
                {division.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link key={item.href} href={item.href} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-soft">
                        <Image src={item.image} alt={item.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 440px" className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
                      </div>
                      <div className="flex w-full flex-1 items-start gap-3 p-5">
                      <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.5} />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-medium leading-6 text-slate-900 group-hover:text-brand">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{item.concept}</p>
                      </div>
                      <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-slate-400 group-hover:text-brand" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-zinc-200/80">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand hover:bg-brand-hover text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>About Our Firm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+966534979774"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-colors border border-zinc-200/80"
              >
                <Phone className="w-4 h-4 text-brand" />
                <span>+966534979774</span>
              </a>
            </div>
          </div>

          {/* Quick Info Line */}
          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand" />
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand" />
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
