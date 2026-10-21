"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export interface SectorItem {
  title: string
  description: string
  tags: string[]
  iconType: "commercial" | "residential" | "industrial"
}

export interface HeroScrollVideoRevealProps {
  whoWeAre?: { label: string; text: string }
  ourMission?: { label: string; text: string }
  coreValues?: { label: string; text: string }
  sectorsHeading?: string
  sectors?: SectorItem[]
  videoSrc?: string
  badgeImgSrc?: string
  showPlayButton?: boolean
  className?: string
}

// Minimalist line-art SVG icons matching the reference screenshots
function CommercialIcon() {
  return (
    <svg
      className="w-11 h-11 text-slate-900"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Tall left building with angled roof peak */}
      <path d="M9 39V13L17 8L25 13V39" />
      {/* Shorter right building */}
      <path d="M25 18L39 24V39" />
      {/* Ground baseline */}
      <path d="M6 39H42" />
      {/* Left building vertical dashed feature line */}
      <line x1="17" y1="16" x2="17" y2="33" strokeDasharray="3 3" />
      {/* Right building diagonal facade lines */}
      <line x1="30" y1="27" x2="35" y2="30" />
      <line x1="30" y1="31" x2="35" y2="34" />
      <line x1="30" y1="35" x2="35" y2="38" />
    </svg>
  )
}

function ResidentialIcon() {
  return (
    <svg
      className="w-11 h-11 text-slate-900"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 3D Polyhedral Prism Outer Edge */}
      <polygon points="14,13 29,8 39,18 23,41" />
      {/* Internal Facet Edges */}
      <line x1="14" y1="13" x2="39" y2="18" />
      <line x1="29" y1="8" x2="23" y2="41" />
      <line x1="14" y1="13" x2="26" y2="29" />
    </svg>
  )
}

function IndustrialIcon() {
  return (
    <svg
      className="w-11 h-11 text-slate-900"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Tall smokestack on left */}
      <path d="M10 9H16V11H10V9Z" />
      <path d="M11 11H15V39H11V11Z" />
      {/* Factory gable roof */}
      <path d="M18 22L22 17H34L38 22" />
      {/* Main factory building body */}
      <path d="M17 22H39V39H17V22Z" />
      {/* Central doorway */}
      <path d="M25 39V29H31V39" />
      {/* Ground baseline */}
      <line x1="6" y1="39" x2="42" y2="39" />
      {/* Left wall brick accents */}
      <line x1="20" y1="26" x2="22" y2="26" />
      <line x1="20" y1="33" x2="22" y2="33" />
      {/* Right wall brick accents */}
      <line x1="34" y1="26" x2="36" y2="26" />
      <line x1="34" y1="33" x2="36" y2="33" />
    </svg>
  )
}

function SectorIcon({ type }: { type: "commercial" | "residential" | "industrial" }) {
  if (type === "commercial") return <CommercialIcon />
  if (type === "residential") return <ResidentialIcon />
  return <IndustrialIcon />
}

const DEFAULT_WHO_WE_ARE = {
  label: "Who We Are",
  text: "At ALFA GULF, we transform ideas into iconic structures with unmatched innovation, precision, and reliability.",
}

const DEFAULT_MISSION = {
  label: "Our Mission",
  text: '"Revolutionizing construction with innovative, sustainable solutions to drive progress and realize Saudi Vision 2030."',
}

const DEFAULT_VALUES = {
  label: "Core Values",
  text: "Driven by integrity, excellence, innovation, collaboration, and a customer-centric approach to deliver exceptional construction solutions.",
}

const DEFAULT_SECTORS: SectorItem[] = [
  {
    title: "Commercial",
    description:
      "Developing cutting-edge office spaces, retail centers, and commercial towers that drive business growth.",
    tags: ["Commercial", "Business"],
    iconType: "commercial",
  },
  {
    title: "Residential, Healthcare & Hospitals",
    description:
      "Designing and building modern, functional, and aesthetically pleasing homes and communities. Delivering advanced healthcare facilities designed for efficiency and patient comfort. Creating luxurious hotels, resorts, and entertainment spaces that redefine guest experiences.",
    tags: ["Residential", "Public Buildings", "Hospitals", "Hospitality"],
    iconType: "residential",
  },
  {
    title: "Heavy Industrial",
    description:
      "Constructing robust infrastructure to support manufacturing, logistics, and other industrial operations and the unique needs of clients in the petrochemical, oil and gas, pulp and paper, mining, and power and renewable industries.",
    tags: ["Factory", "Refinery"],
    iconType: "industrial",
  },
]

export const HeroScrollVideoReveal: React.FC<HeroScrollVideoRevealProps> = ({
  whoWeAre = DEFAULT_WHO_WE_ARE,
  ourMission = DEFAULT_MISSION,
  coreValues = DEFAULT_VALUES,
  sectorsHeading = "Our sectors",
  sectors = DEFAULT_SECTORS,
  videoSrc = "/Aerial_view_of_industrial_complex_202609071617_gwr_video_mvp.mp4",
  badgeImgSrc,
  showPlayButton = false,
  className = "",
}) => {
  const corporateSectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const pillarCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectorsSectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const videoBoxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoCaptionRef = useRef<HTMLDivElement>(null)

  const handleSectorHover = (idx: number, isHovering: boolean) => {
    const card = cardRefs.current[idx]
    if (!card) return
    const icon = card.querySelector(".sector-icon-wrap")
    const tags = card.querySelectorAll(".sector-tag-pill")

    if (isHovering) {
      gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" })
      if (icon) {
        gsap.to(icon, {
          y: -5,
          scale: 1.1,
          duration: 0.35,
          ease: "power2.out",
        })
      }
      if (tags.length) {
        gsap.to(tags, {
          backgroundColor: "#232d92",
          color: "#ffffff",
          borderColor: "#232d92",
          stagger: 0.04,
          duration: 0.25,
        })
      }
    } else {
      gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" })
      if (icon) {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        })
      }
      if (tags.length) {
        gsap.to(tags, {
          backgroundColor: "#f4f4f5",
          color: "#52525b",
          borderColor: "transparent",
          duration: 0.25,
        })
      }
    }
  }

  useEffect(() => {
    // Ensure video plays smoothly in background
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }

    const ctx = gsap.context(() => {
      // ── 1. Architectural Corporate Foundation Reveal ────────────────────────
      if (corporateSectionRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const groups = [badgeRef.current, titleRef.current, descRef.current, ...pillarCardRefs.current].filter(Boolean)
        groups.forEach((group) => {
          gsap.fromTo(group, { y: 16 }, {
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: group,
              start: "top 92%",
              once: true,
            },
          })
        })
      }

      // ── 2. "Our sectors" Section: Clean Upward Stagger Reveal on Scroll ───
      const validCards = cardRefs.current.filter(Boolean) as HTMLDivElement[]

      if (sectorsSectionRef.current) {
        const secTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectorsSectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        })

        if (headingRef.current) {
          secTl.fromTo(
            headingRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }
          )
        }

        if (validCards.length > 0) {
          secTl.fromTo(
            validCards,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.16,
              ease: "power3.out",
            },
            "-=0.4"
          )
        }
      }

      // ── 3. High-Performance Architectural Video Pin Reveal ─────────────────
      const mm = gsap.matchMedia()

      // Small Screens (Mobile < 640px)
      mm.add("(max-width: 639.9px)", () => {
        gsap.set(videoBoxRef.current, { clipPath: "circle(32% at 50% 50%)" })

        const vpTl = gsap.timeline({
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: "top top",
            end: "+=750",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onRefresh: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
            onToggle: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
          },
        })

        vpTl
          .fromTo(
            videoBoxRef.current,
            { clipPath: "circle(32% at 50% 50%)" },
            { clipPath: "circle(150% at 50% 50%)", ease: "power1.inOut", duration: 0.6 }
          )
          .fromTo(
            videoCaptionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" },
            0.35
          )
          .to({}, { duration: 0.25 })
      })

      // Mid Screens (Tablets 640px - 1023.9px)
      mm.add("(min-width: 640px) and (max-width: 1023.9px)", () => {
        gsap.set(videoBoxRef.current, { clipPath: "circle(26% at 50% 50%)" })

        const vpTl = gsap.timeline({
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: "top top",
            end: "+=950",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onRefresh: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
            onToggle: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
          },
        })

        vpTl
          .fromTo(
            videoBoxRef.current,
            { clipPath: "circle(26% at 50% 50%)" },
            { clipPath: "circle(150% at 50% 50%)", ease: "power1.inOut", duration: 0.6 }
          )
          .fromTo(
            videoCaptionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" },
            0.35
          )
          .to({}, { duration: 0.25 })
      })

      // Large Screens (Desktop >= 1024px)
      mm.add("(min-width: 1024px)", () => {
        gsap.set(videoBoxRef.current, { clipPath: "circle(22% at 50% 50%)" })

        const vpTl = gsap.timeline({
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: "top top",
            end: "+=1200",
            scrub: 1.0,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onRefresh: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
            onToggle: (self) => {
              if (self.pin?.parentElement) gsap.set(self.pin.parentElement, { backgroundColor: "#ffffff" })
              if (self.pin) gsap.set(self.pin, { backgroundColor: "#ffffff" })
            },
          },
        })

        vpTl
          .fromTo(
            videoBoxRef.current,
            { clipPath: "circle(22% at 50% 50%)" },
            { clipPath: "circle(150% at 50% 50%)", ease: "power1.inOut", duration: 0.6 }
          )
          .fromTo(
            videoCaptionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" },
            0.35
          )
          .to({}, { duration: 0.25 })
      })
    })

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 400)

    return () => {
      clearTimeout(refreshTimer)
      ctx.revert()
    }
  }, [])

  return (
    <div
      className={`w-full bg-white text-slate-900 font-sans overflow-x-hidden ${className}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .pin-spacer {
              background-color: #ffffff !important;
            }
          `,
        }}
      />

      {/* ── Section 1: Architectural Corporate Profile & Core Pillars ──────── */}
      <section
        ref={corporateSectionRef}
        className="w-full pt-20 sm:pt-28 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-16 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Header Row: Title & Editorial Narrative */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 sm:pb-10">
            <div className="space-y-3.5 max-w-2xl">
              <div ref={badgeRef} className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand uppercase">
                  Corporate Foundation
                </span>
              </div>
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-slate-900 leading-[1.12]"
              >
                Engineering monumental structures with uncompromising precision.
              </h2>
            </div>
            <p
              ref={descRef}
              className="text-[15px] sm:text-base text-zinc-600 max-w-md leading-relaxed font-normal"
            >
              Operating at the forefront of Saudi Arabia&apos;s construction renaissance, ALFA GULF integrates multidisciplinary engineering to bring iconic architectural visions to life.
            </p>
          </div>


          {/* 3 Modular Architectural Pillars */}
          <div
            ref={pillarsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pt-4 sm:pt-6"
          >
            {/* 01: Who We Are */}
            <div
              ref={(el) => {
                pillarCardRefs.current[0] = el
              }}
              className="group pt-8 md:pt-0 md:pr-8 lg:pr-12 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-brand inline-block">
                  Who we are
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
                Transforming ideas into enduring landmarks.
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                {whoWeAre.text}
              </p>
            </div>

            {/* 02: Our Mission */}
            <div
              ref={(el) => {
                pillarCardRefs.current[1] = el
              }}
              className="group pt-8 md:pt-0 md:px-8 lg:px-12 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-brand inline-block">
                  Our mission
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
                Empowering Saudi Vision 2030.
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                {ourMission.text.replace(/^"|"$/g, "")}
              </p>
            </div>

            {/* 03: Core Values */}
            <div
              ref={(el) => {
                pillarCardRefs.current[2] = el
              }}
              className="group pt-8 md:pt-0 md:pl-8 lg:pl-12 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-brand inline-block">
                  Core values
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
                Unyielding integrity & safety.
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                {coreValues.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: "Our Sectors" Simple Clean Layout ──────────────────── */}
      <section
        ref={sectorsSectionRef}
        className="w-full pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Clean Heading */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-zinc-950 mb-12 sm:mb-16 select-none"
          >
            {sectorsHeading}
          </h2>

          {/* 3 Simple Minimal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 xl:gap-16 w-full">
            {sectors.map((sector, idx) => (
              <div
                key={sector.title}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                onMouseEnter={() => handleSectorHover(idx, true)}
                onMouseLeave={() => handleSectorHover(idx, false)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Icon directly on white canvas with GSAP interactive wrapper */}
                  <div className="sector-icon-wrap mb-6 text-zinc-900 inline-block origin-bottom-left">
                    <SectorIcon type={sector.iconType} />
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-2xl sm:text-[26px] font-bold text-zinc-950 tracking-tight leading-snug mb-4 group-hover:text-zinc-700 transition-colors">
                    {sector.title}
                  </h3>

                  {/* Sector Description */}
                  <p className="text-[15px] text-zinc-600 leading-relaxed font-normal mb-8">
                    {sector.description}
                  </p>
                </div>

                {/* Simple Subtle Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="sector-tag-pill px-3 py-1 rounded-md bg-zinc-100 border border-transparent text-zinc-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Video Pin Reveal - Heavy Industrial Showcase ─────────── */}
      <section className="relative w-full bg-white" style={{ backgroundColor: "#ffffff" }}>
        {/* Architectural Section Intro Row */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-4 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-zinc-200/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                Megaproject Execution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 leading-tight">
              Engineering Saudi Arabia&apos;s industrial backbone.
            </h2>
          </div>
          <p className="text-[14.5px] sm:text-[15px] text-zinc-600 max-w-md leading-relaxed font-normal">
            Orchestrating turnkey engineering, petrochemical installations, and heavy civil works with uncompromising safety and precision.
          </p>
        </div>

        {/* Pinned Video Viewport */}
        <div
          ref={videoWrapperRef}
          className="w-full h-screen h-[100dvh] flex justify-center items-center relative overflow-hidden bg-white"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Absolute pure white underlay */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none bg-white z-0"
            style={{ backgroundColor: "#ffffff" }}
          />

          <div
            ref={videoBoxRef}
            className="relative w-full h-full overflow-hidden flex justify-center items-center bg-white will-change-[clip-path] z-10"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Ambient Dark Gradient for Legibility over Video */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none z-10" />

            {/* Optional custom badge image if passed */}
            {badgeImgSrc && (
              <img
                src={badgeImgSrc}
                alt="rotating badge"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 z-20 pointer-events-none animate-[spin_18s_linear_infinite] opacity-90 select-none object-contain"
              />
            )}

            {/* Video Element playing inside the aperture */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              crossOrigin="anonymous"
              className="w-full h-full object-cover bg-slate-900"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* A restrained caption keeps the architecture visible. */}
            <div
              ref={videoCaptionRef}
              className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 pt-20 text-white sm:px-10 sm:pb-16 lg:px-16 lg:pb-20"
            >
              <div className="mx-auto max-w-[1312px]">
                <div className="max-w-2xl border-l-[3px] border-[#3545a5] pl-5 sm:pl-7">
                  <h3 className="max-w-[18ch] text-[clamp(1.9rem,4vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-balance drop-shadow-lg">
                    Heavy industrial.<br />Built with precision.
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base lg:text-lg">
                    Petrochemical installations, structural steel and fireproofing systems for Saudi Arabia&apos;s most demanding projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered Glassmorphic Play Icon (if enabled) */}
            {showPlayButton && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex justify-center items-center shadow-2xl">
                  <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroScrollVideoReveal
