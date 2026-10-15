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
    image: "/categories/construction.jpg",
    href: "/services/commercial-projects",
  },
  {
    number: "02",
    title: "IT & Technology",
    subtitle: "Smart Systems & Digital Infrastructure",
    description:
      "Mission-critical tier datacenters, intelligent BMS automation, high-speed fiber networks, and integrated enterprise security ecosystems.",
    image: "/categories/it-technology.jpg",
    href: "/services/cctv-it-sales",
  },
  {
    number: "03",
    title: "Trading",
    subtitle: "Materials, Equipment & Procurement",
    description:
      "Sourcing and supplying building materials, industrial equipment, and essential project supplies for businesses across Saudi Arabia.",
    image: "/categories/general-trading.jpg",
    href: "/services/building-materials",
  },
]

export function CategoriesSection({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyViewRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ── Desktop & Tablet (>= 768px): CSS Sticky Viewport + GSAP Scrub Reveal ──
      // Uses native CSS position:sticky to prevent DOM reparenting / removeChild errors
      mm.add("(min-width: 768px)", () => {
        const validCards = cardRefs.current.filter(Boolean) as HTMLAnchorElement[]
        if (!containerRef.current || validCards.length < 3) return

        // Initial state for all 3 cards
        gsap.set(validCards, { opacity: 0, y: 50, scale: 0.96 })

        // Scrub timeline linked to the 220vh scrollable container
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.0,
          },
        })

        tl
          // ── Phase 1: Card 1 (Construction) reveals first ──
          .to(
            validCards[0],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power2.out",
            },
            0.05
          )
          .to({}, { duration: 0.35 })

          // ── Phase 2: Card 2 (IT & Technology) reveals next ──
          .to(
            validCards[1],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power2.out",
            },
            "+=0.1"
          )
          .to({}, { duration: 0.35 })

          // ── Phase 3: Card 3 (Trading) reveals last ──
          .to(
            validCards[2],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power2.out",
            },
            "+=0.1"
          )
          // Final hold so all 3 cards are fully visible together
          .to({}, { duration: 0.5 })
      })

      // ── Mobile (< 768px): Reveal each card sequentially as scrolled into view ──
      mm.add("(max-width: 767.9px)", () => {
        cardRefs.current.forEach((card) => {
          if (!card) return
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          )
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
      {/* 220vh scroll track container for smooth scrub progression on desktop */}
      <div
        ref={containerRef}
        className="relative w-full md:h-[220vh] h-auto bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Sticky Fullscreen Viewport on desktop: zero DOM reparenting, safe for React 19 */}
        <div
          ref={stickyViewRef}
          className="md:sticky md:top-0 md:h-screen h-auto w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-20 md:pt-24 pb-12 overflow-hidden bg-white"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Section Header: Clean Architectural Split */}
            <div
              ref={headerRef}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-zinc-200/80"
            >
              <div className="space-y-2.5 max-w-2xl">
                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
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

            {/* 3 Minimalist Category Cards: One-by-One Reveal on Scroll */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pt-6 sm:pt-8 w-full">
              {CATEGORIES.map((cat, idx) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  ref={(el) => {
                    cardRefs.current[idx] = el
                  }}
                  className="group flex flex-col justify-between cursor-pointer space-y-3.5 will-change-[transform,opacity]"
                >
                  {/* Clean Image Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200/80 shadow-xs">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </div>

                  {/* Text Information */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-zinc-400">
                        {cat.number}
                      </span>
                      <span className="text-xs font-medium text-[#0081c6] tracking-wide">
                        {cat.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 group-hover:text-[#0081c6] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-[14px] text-zinc-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:text-[#0081c6] transition-colors">
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
