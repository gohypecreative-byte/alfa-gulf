"use client"

import React, { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const CATEGORIES = [
  {
    number: "01",
    title: "Construction",
    subtitle: "Civil & Structural Engineering",
    description:
      "Turnkey commercial complexes, industrial plants, and certified structural steel erection engineered to Saudi Building Code standards.",
    image: "/other-service/WhatsApp Image 2026-10-05 at 2.33.20 PM (2).jpeg",
    alt: "Excavation and civil works beside an industrial building",
    href: "/services/commercial-projects",
  },
  {
    number: "02",
    title: "IT & Technology",
    subtitle: "Smart Systems & Digital Infrastructure",
    description:
      "Mission-critical tier datacenters, intelligent BMS automation, high-speed fiber networks, and integrated enterprise security ecosystems.",
    image: "/img/network-cable-dressing-01.jpg",
    alt: "Alfa Gulf technician installing network cabling",
    href: "/services/cctv-it-sales",
  },
  {
    number: "03",
    title: "Trading",
    subtitle: "Materials, Equipment & Procurement",
    description:
      "Sourcing and supplying building materials, industrial equipment, and essential project supplies for businesses across Saudi Arabia.",
    image: "/other-service/WhatsApp Image 2026-10-05 at 2.33.21 PM (1).jpeg",
    alt: "Project materials stored inside a construction site",
    href: "/services/building-materials",
  },
]

export function CategoriesSection({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return
        // Keep the entire card readable; only the photograph moves with scrolling.
        const photo = card.querySelector("img")
        if (!photo) return
        gsap.fromTo(photo, { yPercent: -3, scale: 1.08 }, {
          yPercent: 3,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="categories"
      className={`relative w-full bg-white text-zinc-950 border-b border-zinc-200/80 ${className}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Natural page flow keeps all divisions accessible together. */}
      <div
        ref={containerRef}
        className="relative w-full bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >

        <div
          className="w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Section Header: Clean Architectural Split */}
            <div
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-zinc-200/80"
            >
              <div className="space-y-2.5 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-brand uppercase">
                  Core Categories
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-zinc-950 leading-[1.14]">
                  Construction, digital infrastructure, and trading.
                </h2>
              </div>

              <p className="text-[14px] sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-normal">
                Three specialized divisions operating seamlessly across the Kingdom to deliver integrated physical and technological excellence.
              </p>
            </div>

            {/* Three divisions with subtle photographic parallax */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pt-6 sm:pt-8 w-full">
              {CATEGORIES.map((cat, idx) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  ref={(el) => {
                    cardRefs.current[idx] = el
                  }}
                  className="group flex flex-col justify-between cursor-pointer space-y-3.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-sky-600"
                >
                  {/* Clean Image Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200/80 shadow-xs">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Text Information */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-zinc-400">
                        {cat.number}
                      </span>
                      <span className="text-xs font-medium text-brand tracking-wide">
                        {cat.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-brand group-hover:text-brand-hover transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-[14px] text-zinc-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand group-hover:text-brand-hover transition-colors">
                      <span>Explore division</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
