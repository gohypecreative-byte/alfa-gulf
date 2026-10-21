"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Dialog } from "@base-ui/react/dialog"
import { Select } from "@base-ui/react/select"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  Phone,
  Building2,
  Flame,
  Home as HomeIcon,
  Wrench,
  Zap,
  Camera,
  Trees,
  Package,
  Wind,
  Hammer,
  Send,
  ArrowRight,
  Check,
  Server,
  Network,
  Cpu,
  Shield,
  ShieldAlert,
  Bell,
  HardHat,
  Monitor,
  Laptop,
  PhoneCall,
  Headphones,
  Truck,
  Armchair,
  KeyRound,
  Database,
  Tv,
  Fence,
} from "lucide-react"

export interface SubServiceItem {
  num: string
  title: string
  concept: string
  href: string
  icon: React.ElementType
  image: string
}

export interface ServiceCategory {
  id: string
  num: string
  title: string
  badge: string
  badgeColor: string
  badgeBg: string
  activeTitle: string
  items: SubServiceItem[]
}

const DIVISIONS_28_DATA: ServiceCategory[] = [
  {
    id: "construction",
    num: "01",
    title: "CONSTRUCTION SERVICES",
    badge: "DIVISION 01 • 11 SERVICES",
    badgeColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300",
    activeTitle: "General Construction & Civil Works",
    items: [
      { num: "01", title: "General Construction & Civil Works", concept: "From Ground to Completion", href: "/services/construction/general-construction", icon: Building2, image: "/services/commercial_projects.jpg" },
      { num: "02", title: "MEP Services", concept: "Hidden Systems Behind Every Building", href: "/services/construction/mep-services", icon: Wrench, image: "/services/mep_services.jpg" },
      { num: "03", title: "HVAC Solutions", concept: "Invisible Comfort", href: "/services/construction/hvac-solutions", icon: Wind, image: "/services/chilled_water_plant.jpg" },
      { num: "04", title: "Fire Alarm Systems", concept: "Every Second Counts", href: "/services/construction/fire-alarm-systems", icon: Bell, image: "/services/cctv_it_services.jpg" },
      { num: "05", title: "Fire & Life Safety Systems", concept: "Designed Around Safety", href: "/services/construction/fire-life-safety", icon: Shield, image: "/safety/safety_team_site.jpg" },
      { num: "06", title: "Fireproofing Works", concept: "Protection Within Structure", href: "/services/construction/fireproofing-works", icon: Flame, image: "/safety/teamwork_structural.jpg" },
      { num: "07", title: "Steel Structure & Erection", concept: "Precision in Every Connection", href: "/services/construction/steel-structure", icon: Hammer, image: "/services/steel_structures.jpg" },
      { num: "08", title: "Fit-Out & Renovation", concept: "From Empty Space to Finished", href: "/services/construction/fit-out-renovation", icon: HomeIcon, image: "/services/fitout_works.jpg" },
      { num: "09", title: "Landscaping & External Works", concept: "Transforming Space Around You", href: "/services/construction/landscaping", icon: Trees, image: "/services/landscaping_works.jpg" },
      { num: "10", title: "Demolition & Renovation", concept: "Make Way for What's Next", href: "/services/construction/demolition", icon: HardHat, image: "/services/structural_demolition.jpg" },
      { num: "11", title: "Fencing, Gates & Barriers", concept: "Secure the Perimeter", href: "/services/construction/fencing-barriers", icon: Fence, image: "/services/landscaping/hardscaping_pergola.jpg" },
    ],
  },
  {
    id: "it-solutions",
    num: "02",
    title: "IT SOLUTIONS",
    badge: "DIVISION 02 • 12 SERVICES",
    badgeColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",
    activeTitle: "Data Centre Solutions",
    items: [
      { num: "12", title: "Data Centre Solutions", concept: "Build the Digital Core", href: "/services/it-solutions/data-centre", icon: Server, image: "/services/cctv/structured_cabling_datacenter.jpg" },
      { num: "13", title: "Structured Cabling", concept: "Network Beneath Everything", href: "/services/it-solutions/structured-cabling", icon: Network, image: "/services/cctv/structured_cabling_datacenter.jpg" },
      { num: "14", title: "Enterprise Networking", concept: "Everything Connected", href: "/services/it-solutions/networking", icon: Cpu, image: "/services/cctv/cybersecurity_network_defense.jpg" },
      { num: "15", title: "CCTV / IP Surveillance", concept: "See. Detect. Protect.", href: "/services/it-solutions/cctv", icon: Camera, image: "/services/cctv/cctv_ai_surveillance.jpg" },
      { num: "16", title: "Access Control & Time Attendance", concept: "Access, Controlled.", href: "/services/it-solutions/access-control", icon: KeyRound, image: "/services/cctv/biometric_access_control.jpg" },
      { num: "17", title: "Servers & Storage", concept: "Where Your Data Lives", href: "/services/it-solutions/servers-storage", icon: Database, image: "/services/cctv/cloud_server_infrastructure.jpg" },
      { num: "18", title: "Meeting Room / AV Solutions", concept: "Connects Everyone", href: "/services/it-solutions/meeting-rooms", icon: Tv, image: "/services/cctv_it_services.jpg" },
      { num: "19", title: "UPS & Power Backup Solutions", concept: "Power Without Interruption", href: "/services/it-solutions/ups", icon: Zap, image: "/services/chilled_water_plant.jpg" },
      { num: "21", title: "IT Hardware & Tech Supply", concept: "Powers Your Business", href: "/services/it-solutions/hardware-supply", icon: Laptop, image: "/services/cctv/cloud_server_infrastructure.jpg" },
      { num: "22", title: "Network Security & Cyber", concept: "Secure Every Connection", href: "/services/it-solutions/cybersecurity", icon: ShieldAlert, image: "/services/cctv/cybersecurity_network_defense.jpg" },
      { num: "23", title: "IP Telephony & Unified Comm.", concept: "Connected Organization", href: "/services/it-solutions/ip-telephony", icon: PhoneCall, image: "/services/cctv/biometric_access_control.jpg" },
      { num: "24", title: "Managed IT Services / AMC", concept: "Always Supported", href: "/services/it-solutions/managed-services", icon: Headphones, image: "/services/cctv/cctv_ai_surveillance.jpg" },
    ],
  },
  {
    id: "general-trading",
    num: "03",
    title: "GENERAL TRADING",
    badge: "DIVISION 03 • 5 SERVICES",
    badgeColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300",
    activeTitle: "General Trading / Sourcing",
    items: [
      { num: "20", title: "General Trading / Sourcing", concept: "Requirement to Reality", href: "/services/general-trading/sourcing-supply", icon: Package, image: "/categories/general-trading.jpg" },
      { num: "25", title: "Construction, MEP & Electrical Supply", concept: "Keep Projects Moving", href: "/services/general-trading/construction-materials", icon: Truck, image: "/services/steel_rebar_supply.jpg" },
      { num: "26", title: "IT & Tech Products Supply", concept: "Ready to Deploy", href: "/services/general-trading/it-products", icon: Monitor, image: "/services/cctv/cybersecurity_network_defense.jpg" },
      { num: "27", title: "Office, Furniture & Facility Supply", concept: "Workplace Supply", href: "/services/general-trading/office-furniture", icon: Armchair, image: "/services/fitout_works.jpg" },
      { num: "28", title: "Industrial Materials & PPE Supply", concept: "Ready for Project", href: "/services/general-trading/industrial-ppe", icon: HardHat, image: "/safety/safety_team_site.jpg" },
    ],
  },
]

const toTitleCase = (s: string) =>
  s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\bIt\b/, "IT")

// Real Alfa Gulf Services
const SERVICES = [
  {
    num: "01",
    title: "Commercial Projects",
    category: "CONSTRUCTION",
    href: "/services/commercial-projects",
    description: "Office towers, commercial hubs & corporate complexes",
    detailText: "We deliver modern commercial spaces, office towers and business hubs designed for growth, functionality and long-term value.",
    checklist: [
      "Civil Construction",
      "Structural Works",
      "MEP Coordination",
      "Project Management",
    ],
    previewImage: "/services/commercial_projects.jpg",
    icon: Building2,
  },
  {
    num: "02",
    title: "Residential Complex & Villas",
    category: "RESIDENTIAL",
    href: "/services/residential-buildings-villas",
    description: "Luxury villas, residential compounds & high-end living",
    detailText: "High-end residential compounds, modern apartment complexes, and luxury villa developments built to international structural and architectural standards.",
    checklist: [
      "Turnkey Villa Construction",
      "Residential Compounds",
      "Custom Interior Finishes",
      "Smart Home Ready",
    ],
    previewImage: "/services/residential_villas.jpg",
    icon: HomeIcon,
  },
  {
    num: "03",
    title: "MEP Services",
    category: "ENGINEERING",
    href: "/services/mep-services",
    description: "Mechanical, electrical, plumbing & low-current engineering",
    detailText: "Complete mechanical, electrical, plumbing, and low-current systems engineering designed for high efficiency, safety, and modern building standards.",
    checklist: [
      "HVAC & Piping Systems",
      "Electrical Distribution",
      "Plumbing & Drainage",
      "Low Voltage & Automation",
    ],
    previewImage: "/services/mep_services.jpg",
    icon: Zap,
  },
  {
    num: "04",
    title: "Steel Structure & Fire Proofing",
    category: "INDUSTRIAL",
    href: "/services/steel-structures",
    description: "Certified intumescent coating & industrial structural steel",
    detailText: "Industrial structural steel fabrication, erection, and UL-certified intumescent fireproofing solutions for commercial and heavy industrial assets.",
    checklist: [
      "Structural Steel Erection",
      "Intumescent Fire Coating",
      "Warehouse & Hangar Steel",
      "Quality & Safety Certified",
    ],
    previewImage: "/services/steel_structures.jpg",
    icon: Flame,
  },
  {
    num: "05",
    title: "Fit-Out Works",
    category: "INTERIORS",
    href: "/services/fitout-works",
    description: "Premium interior fit-out, finishes & turnkey delivery",
    detailText: "Bespoke corporate fit-outs, luxury retail interiors, acoustic ceilings, and high-end architectural wall cladding crafted with precision execution.",
    checklist: [
      "Corporate Office Fit-Out",
      "Gypsum & Acoustic Ceilings",
      "Custom Millwork & Joinery",
      "Turnkey Project Delivery",
    ],
    previewImage: "/services/fitout_works.jpg",
    icon: Wrench,
  },
  {
    num: "06",
    title: "IT & CCTV Services",
    category: "SECURITY & TECH",
    href: "/services/cctv-it-sales",
    description: "Security surveillance, networking & smart building tech",
    detailText: "Enterprise AI-powered CCTV surveillance, biometric access control, optical fiber networking, and server room infrastructure solutions.",
    checklist: [
      "AI CCTV Surveillance",
      "Biometric Access Control",
      "Structured Cabling & Fiber",
      "Data Center Setup",
    ],
    previewImage: "/services/cctv_it_services.jpg",
    icon: Camera,
  },
  {
    num: "07",
    title: "Landscaping Works",
    category: "ENVIRONMENTAL",
    href: "/services/landscaping-works",
    description: "Hardscaping, smart irrigation & architectural landscape",
    detailText: "Architectural softscaping, custom stone hardscaping, smart automated irrigation systems, and exterior landscape illumination.",
    checklist: [
      "Architectural Softscaping",
      "Hardscaping & Pergolas",
      "Smart Irrigation Systems",
      "Outdoor Lighting & Waterscapes",
    ],
    previewImage: "/services/landscaping_works.jpg",
    icon: Trees,
  },
  {
    num: "08",
    title: "Building Material Supplies",
    category: "SUPPLY CHAIN",
    href: "/services/building-materials",
    description: "Direct procurement of certified structural materials",
    detailText: "Certified deformed steel rebar, ready-mix concrete, thermal insulation, and high-tensile structural building materials supplied directly to major projects.",
    checklist: [
      "Deformed Steel Rebar",
      "Ready-Mix Concrete",
      "Thermal & Acoustic Insulation",
      "Certified Quality Materials",
    ],
    previewImage: "/services/steel_rebar_supply.jpg",
    icon: Package,
  },
  {
    num: "09",
    title: "HVAC Systems",
    category: "CLIMATE CONTROL",
    href: "/services/hvac-division",
    description: "Engineered ventilation, cooling plants & industrial ducting",
    detailText: "Heavy industrial chilled water plants, ducted split units, VRF systems, and clean-room ventilation engineered for extreme desert conditions.",
    checklist: [
      "Chilled Water Central Plants",
      "Ductwork Fabrication",
      "VRF & Package Units",
      "Preventive Maintenance",
    ],
    previewImage: "/services/chilled_water_plant.jpg",
    icon: Wind,
  },
  {
    num: "10",
    title: "Demolition & Renovation",
    category: "STRUCTURAL WORKS",
    href: "/services/demolition-renovation",
    description: "Safe controlled dismantling and structural retrofitting",
    detailText: "Controlled robotic demolition, heavy concrete saw cutting, structural retrofitting, interior gutting, and site clearing executed under strict safety protocols.",
    checklist: [
      "Controlled Demolition",
      "Structural Concrete Retrofitting",
      "Interior Gutting & Strip-Out",
      "Hazardous Material Remediation",
    ],
    previewImage: "/services/structural_demolition.jpg",
    icon: Hammer,
  },
]

export function Navbar() {
  const [isOverHero, setIsOverHero] = React.useState(true)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const [activeHoverCategory, setActiveHoverCategory] = React.useState<number>(0)
  const [activeShowcase, setActiveShowcase] = React.useState<SubServiceItem>(
    DIVISIONS_28_DATA[0].items[0]
  )
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isContactOpen, setIsContactOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [inquirySubmitted, setInquirySubmitted] = React.useState(false)

  const dropdownTimerRef = React.useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = React.useRef<HTMLInputElement | null>(null)
  const headerRef = React.useRef<HTMLElement | null>(null)

  // Track whether the video scroll hero section is active under the navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("video-hero-section")
      if (!heroEl) {
        setIsOverHero(false)
        return
      }
      const rect = heroEl.getBoundingClientRect()
      const navHeight = headerRef.current?.offsetHeight || 84
      // The video scroll hero is active while its bottom is still below the navbar
      setIsOverHero(rect.bottom > navHeight)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const isTransparent = isOverHero && !isMobileMenuOpen

  // Focus search input when search modal opens
  React.useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isSearchOpen])

  // Handle ESC key to close overlays
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setIsContactOpen(false)
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Close services dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnterServices = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setIsServicesOpen(true)
  }

  const handleMouseLeaveServices = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 250)
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySubmitted(true)
    setTimeout(() => {
      setInquirySubmitted(false)
      setIsContactOpen(false)
    }, 2000)
  }

  const filteredServices = searchQuery.trim()
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isTransparent
            ? isServicesOpen
              ? "bg-[#0b0f19]/98 backdrop-blur-2xl border-b border-white/10"
              : "bg-gradient-to-b from-black/60 via-black/25 to-transparent border-b border-transparent shadow-none"
            : "bg-white border-b border-slate-200/80 shadow-sm"
        }`}
      >
        {/* Top accent bar line - brand azure blue line matching website palette */}
        <div
          className={`h-[3px] w-full transition-all duration-300 ${
            isTransparent ? "opacity-0 bg-transparent" : "opacity-100 bg-brand"
          }`}
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-[84px]">
            {/* Left: ALFA Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center group py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                aria-label="Alfa Gulf Home"
              >
                <div className="relative h-16 sm:h-[68px] w-auto aspect-[585/513]">
                  <Image
                    src="/alfa-gulf-logo-transparent.png"
                    alt="Alfa Gulf Technologies & Construction Company"
                    fill
                    sizes="(max-width: 640px) 73px, 78px"
                    className="object-contain"

                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links & Actions */}
            <div className="hidden lg:flex items-center space-x-9 xl:space-x-11">
              {/* Navigation Items */}
              <nav className="flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
                <Link
                  href="/"
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-2 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-brand"
                  }`}
                >
                  HOME
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-brand"
                    }`}
                  />
                </Link>

                <Link
                  href="/about-us"
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-2 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-brand"
                  }`}
                >
                  ABOUT US
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-brand"
                    }`}
                  />
                </Link>

                {/* SERVICES Nav Item */}
                <div
                  className="relative py-2"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    className={`flex items-center gap-1 text-[13px] font-bold tracking-[0.08em] uppercase transition-colors relative group focus:outline-none ${
                      isTransparent
                        ? isServicesOpen
                          ? "text-white"
                          : "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                        : isServicesOpen
                        ? "text-brand"
                        : "text-slate-800 hover:text-brand"
                    }`}
                  >
                    SERVICES
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isServicesOpen
                          ? "rotate-180 " + (isTransparent ? "text-sky-400" : "text-brand")
                          : isTransparent
                          ? "text-white/80 group-hover:text-white"
                          : "text-slate-500 group-hover:text-brand"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                        isTransparent
                          ? isServicesOpen
                            ? "bg-sky-400 w-full"
                            : "bg-white w-0 group-hover:w-full"
                          : isServicesOpen
                          ? "bg-brand w-full"
                          : "bg-brand w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </div>

                <Link
                  href="/news"
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-2 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-brand"
                  }`}
                >
                  BLOG
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-brand"
                    }`}
                  />
                </Link>
              </nav>

              {/* Right Side: Search Icon, Vertical Divider, and 2x2 Grid Icon + GET IN TOUCH */}
              <div className="flex items-center pl-2">
                {/* Search Icon Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 transition-colors focus:outline-none rounded-md ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-brand"
                  }`}
                  aria-label="Open Search"
                >
                  <Search className="w-[17px] h-[17px] stroke-[2]" />
                </button>

                {/* Vertical Divider */}
                <div
                  className={`h-4 w-[1px] mx-3.5 transition-colors ${
                    isTransparent ? "bg-white/30" : "bg-slate-300"
                  }`}
                  aria-hidden="true"
                />

                {/* GET IN TOUCH Button with 4-dot / 2x2 grid icon */}
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className={`group flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-1.5 focus:outline-none ${
                    isTransparent
                      ? "text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-900 hover:text-brand"
                  }`}
                >
                  {/* Custom 2x2 square dot grid icon matching the reference image */}
                  <span
                    className={`grid grid-cols-2 gap-[2.5px] w-3 h-3 transition-colors ${
                      isTransparent
                        ? "text-white group-hover:text-sky-300"
                        : "text-slate-900 group-hover:text-brand"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                    <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  </span>
                  <span>GET IN TOUCH</span>
                </button>
              </div>
            </div>

            {/* Mobile Actions: Search, Get in Touch icon, and Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors focus:outline-none ${
                  isTransparent
                    ? "text-white hover:text-sky-300"
                    : "text-slate-800 hover:text-brand"
                }`}
                aria-label="Open Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className={`p-2 transition-colors focus:outline-none ${
                  isTransparent
                    ? "text-white hover:text-sky-300"
                    : "text-slate-800 hover:text-brand"
                }`}
                aria-label="Get in Touch"
              >
                <span
                  className={`grid grid-cols-2 gap-[2px] w-3.5 h-3.5 transition-colors ${
                    isTransparent ? "text-white" : "text-slate-900"
                  }`}
                  aria-hidden="true"
                >
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors focus:outline-none ${
                  isTransparent
                    ? "text-white hover:text-sky-300"
                    : "text-slate-900 hover:text-brand"
                }`}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop services dropdown */}
        <div
          className={`hidden lg:block w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isTransparent
              ? "bg-[#0b0f19]/98 text-white backdrop-blur-2xl"
              : "bg-white text-slate-900"
          } ${
            isServicesOpen
              ? `max-h-[640px] opacity-100 border-t border-b shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] ${
                  isTransparent ? "border-white/10" : "border-slate-200/80"
                }`
              : "max-h-0 opacity-0 border-0 pointer-events-none"
          }`}
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-10">

              {/* Divisions */}
              <div className="col-span-3">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] mb-3 ${isTransparent ? "text-slate-400" : "text-slate-500"}`}>
                  Divisions
                </p>
                <ul className="space-y-0.5">
                  {DIVISIONS_28_DATA.map((cat, idx) => {
                    const isActive = activeHoverCategory === idx
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onMouseEnter={() => {
                            setActiveHoverCategory(idx)
                            const firstItem = cat.items[0]
                            if (firstItem) setActiveShowcase(firstItem)
                          }}
                          onFocus={() => setActiveHoverCategory(idx)}
                          className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left text-[13px] font-semibold transition-colors ${
                            isActive
                              ? isTransparent
                                ? "bg-white/10 text-white"
                                : "bg-slate-100 text-slate-900"
                              : isTransparent
                              ? "text-slate-300 hover:bg-white/5 hover:text-white"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span
                              className={`w-1 h-4 rounded-full shrink-0 transition-colors ${
                                isActive ? "bg-brand" : "bg-transparent"
                              }`}
                            />
                            <span className="truncate">{toTitleCase(cat.title)}</span>
                          </span>
                          <span className={`text-[11px] font-medium tabular-nums ${isTransparent ? "text-slate-500" : "text-slate-400"}`}>
                            {cat.items.length}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>

                <Link
                  href="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="group mt-5 ml-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-[#1b2375] transition-colors"
                >
                  All 28 services
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Services in the active division */}
              <div className={`col-span-6 border-l pl-10 ${isTransparent ? "border-white/10" : "border-slate-200/80"}`}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] mb-3 ${isTransparent ? "text-slate-400" : "text-slate-500"}`}>
                  {toTitleCase(DIVISIONS_28_DATA[activeHoverCategory]?.title ?? "")}
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                  {DIVISIONS_28_DATA[activeHoverCategory]?.items.map((s) => {
                    const IconComp = s.icon
                    const isSubActive = activeShowcase.href === s.href
                    return (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setIsServicesOpen(false)}
                          onMouseEnter={() => setActiveShowcase(s)}
                          onFocus={() => setActiveShowcase(s)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            isSubActive
                              ? isTransparent
                                ? "bg-white/10 text-white"
                                : "bg-slate-100 text-slate-900"
                              : isTransparent
                              ? "text-slate-300 hover:bg-white/5 hover:text-white"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <IconComp
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isSubActive ? "text-brand" : isTransparent ? "text-slate-500" : "text-slate-400"
                            }`}
                          />
                          <span className="text-[13px] font-medium leading-snug truncate">{s.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Preview of the hovered service */}
              <div className="col-span-3">
                <Link
                  href={activeShowcase.href}
                  onClick={() => setIsServicesOpen(false)}
                  className="group block"
                >
                  <div className={`relative aspect-[4/3] w-full rounded-xl overflow-hidden ${isTransparent ? "bg-slate-900" : "bg-slate-100"}`}>
                    <Image
                      key={activeShowcase.image}
                      src={activeShowcase.image}
                      alt={activeShowcase.title}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] animate-in fade-in duration-300"
                    />
                  </div>
                  <h3 className={`mt-4 text-[15px] font-bold leading-snug ${isTransparent ? "text-white" : "text-slate-900"}`}>
                    {activeShowcase.title}
                  </h3>
                  <p className={`mt-1 text-[13px] leading-relaxed ${isTransparent ? "text-slate-400" : "text-slate-500"}`}>
                    {activeShowcase.concept}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand group-hover:text-[#1b2375] transition-colors">
                    View service
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-brand hover:bg-slate-50 rounded-md transition-colors"
              >
                HOME
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-brand hover:bg-slate-50 rounded-md transition-colors"
              >
                ABOUT US
              </Link>

              {/* Mobile Services Categorized Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-brand hover:bg-slate-50 rounded-md transition-colors"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-brand" : "text-slate-400"
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-2 pr-2 py-3 space-y-4 bg-slate-50/90 rounded-xl mt-1.5 border border-slate-200/70">
                    {DIVISIONS_28_DATA.map((cat) => (
                      <div key={cat.title} className="space-y-1.5">
                        <div className="flex items-center gap-2 px-2 pb-1 border-b border-slate-200/60">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-brand">
                            {cat.title} ({cat.items.length})
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          {cat.items.map((s) => (
                            <Link
                              key={s.num + s.title}
                              href={s.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsMobileServicesOpen(false)
                              }}
                              className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-brand hover:bg-brand/10 rounded-lg transition-colors"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="font-mono text-[10px] font-bold text-brand">{s.num}</span>
                                <span className="truncate">{s.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-brand hover:bg-slate-50 rounded-md transition-colors"
              >
                BLOG
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-brand text-white font-bold tracking-wider text-xs uppercase shadow-sm hover:bg-brand-hover transition-colors"
              >
                <span
                  className="grid grid-cols-2 gap-[2px] w-3 h-3 text-white"
                  aria-hidden="true"
                >
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                  <span className="w-1 h-1 rounded-[0.5px] bg-current" />
                </span>
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH MODAL OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center border-b border-slate-200 px-4 py-3">
              <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, projects, equipment, or news..."
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600 mr-2"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results / Quick Suggestions */}
            <div className="p-4 max-h-[380px] overflow-y-auto">
              {searchQuery.trim() ? (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Services & Solutions ({filteredServices.length})
                  </div>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => {
                            setIsSearchOpen(false)
                            setSearchQuery("")
                          }}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div>
                            <div className="text-sm font-medium text-slate-900 group-hover:text-brand">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand transition-colors" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-sm text-slate-500">
                      No matching results for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Steel&rdquo;, &ldquo;Commercial&rdquo;, or &ldquo;HVAC&rdquo;.
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Popular Categories
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Commercial Projects", "Steel Structure", "MEP Services", "Fit-Out", "HVAC", "Demolition"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSearchQuery(tag)}
                          className="text-xs bg-slate-100 hover:bg-sky-50 hover:text-brand text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Quick Links
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/about-us"
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                    >
                      <Building2 className="w-3.5 h-3.5 text-brand" /> About Alfa Gulf
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false)
                        setIsContactOpen(true)
                      }}
                      className="p-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2 text-left"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand" /> Contact & Inquiries
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact dialog */}
      <Dialog.Root open={isContactOpen} onOpenChange={setIsContactOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-[2px]" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-[61] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-md bg-white text-slate-900 shadow-2xl outline-none [color-scheme:light]" data-lenis-prevent>
            <Dialog.Close aria-label="Close contact dialog" className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-white/70 text-brand transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              <X className="size-5" />
            </Dialog.Close>
            <div className="px-5 pb-5 sm:px-7 sm:pb-6">
              <div className="-mx-5 mb-6 bg-brand-soft px-5 pb-6 pt-7 sm:-mx-7 sm:px-7">
                <p className="mb-3 text-xs font-medium text-brand">Alfa Gulf / Project inquiries</p>
                <Dialog.Title className="pr-10 text-[28px] font-medium leading-tight tracking-tight">Let&apos;s talk about your project.</Dialog.Title>
                <Dialog.Description className="mt-3 max-w-sm text-sm leading-6 text-slate-600">Share what you need and how we can reach you.</Dialog.Description>
              </div>
              <form onSubmit={handleInquirySubmit} className="mt-0">
                {inquirySubmitted ? (
                  <div role="status" className="flex min-h-80 flex-col items-center justify-center text-center">
                    <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sky-50 text-sky-700"><Check className="size-6" /></span>
                    <h3 className="text-xl font-semibold">Inquiry received!</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Our technical representative will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_label]:text-slate-700 [&_input]:min-h-12 [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-slate-200 [&_input]:bg-slate-50/70 [&_input]:px-3.5 [&_input]:text-base [&_input]:text-slate-900 [&_input]:outline-none [&_input]:placeholder:text-slate-500 [&_input:focus]:border-sky-600 [&_input:focus]:ring-2 [&_input:focus]:ring-sky-600/15">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="inquiry-name">Full name <span className="text-[#232d92]">*</span></label>
                          <input id="inquiry-name" name="name" autoComplete="name" required type="text" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="inquiry-phone">Phone / WhatsApp <span className="text-[#232d92]">*</span></label>
                          <input id="inquiry-phone" name="phone" autoComplete="tel" required type="tel" placeholder="+966 5X XXX XXXX" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="inquiry-service">Service <span className="text-[#232d92]">*</span></label>
                        <Select.Root name="service" required>
                          <Select.Trigger id="inquiry-service" className="flex min-h-12 w-full items-center justify-between gap-3 rounded-md border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-left text-base text-slate-900 outline-none transition-colors hover:border-slate-300 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/15 data-placeholder:text-slate-500">
                            <Select.Value placeholder="Choose a service" className="min-w-0 flex-1 truncate" />
                            <Select.Icon><ChevronDown className="size-4 text-brand" /></Select.Icon>
                          </Select.Trigger>
                          <Select.Portal>
                            <Select.Positioner side="bottom" align="start" sideOffset={6} alignItemWithTrigger={false} className="z-[80] outline-none">
                              <Select.Popup className="w-[var(--anchor-width)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-md border border-slate-200 bg-white p-1.5 text-slate-900 shadow-xl outline-none [color-scheme:light]">
                                <Select.List className="max-h-[min(280px,var(--available-height))] overflow-y-auto overscroll-contain" data-lenis-prevent>
                                  {DIVISIONS_28_DATA.map((category) => (
                                    <Select.Group key={category.id} className="pb-2">
                                      <Select.GroupLabel className="sticky top-0 z-10 bg-white px-3 py-2.5 text-xs font-semibold text-brand">{toTitleCase(category.title)}</Select.GroupLabel>
                                      {category.items.map((service) => (
                                        <Select.Item key={service.href} value={service.title} className="relative flex min-h-10 cursor-pointer items-center gap-3 rounded px-3 py-2 pr-9 text-sm outline-none data-highlighted:bg-brand-soft data-highlighted:text-brand data-selected:bg-brand-soft data-selected:font-medium data-selected:text-brand">
                                          <Select.ItemText>{service.title}</Select.ItemText>
                                          <Select.ItemIndicator className="absolute right-3"><Check className="size-4 text-brand" /></Select.ItemIndicator>
                                        </Select.Item>
                                      ))}
                                    </Select.Group>
                                  ))}
                                  <Select.Item value="General inquiry" className="relative flex min-h-10 cursor-pointer items-center rounded px-3 py-2 pr-9 text-sm outline-none data-highlighted:bg-brand-soft data-highlighted:text-brand data-selected:bg-brand-soft">
                                    <Select.ItemText>General inquiry</Select.ItemText>
                                    <Select.ItemIndicator className="absolute right-3"><Check className="size-4 text-brand" /></Select.ItemIndicator>
                                  </Select.Item>
                                </Select.List>
                              </Select.Popup>
                            </Select.Positioner>
                          </Select.Portal>
                        </Select.Root>
                      </div>
                      <div>
                        <label htmlFor="inquiry-message">Project details <span className="font-normal text-slate-500">(optional)</span></label>
                        <textarea id="inquiry-message" name="message" rows={2} placeholder="Project location, scope or timeline" className="w-full resize-y rounded-md border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-base text-slate-900 outline-none placeholder:text-slate-500 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15" />
                      </div>
                    </div>
                    <button type="submit" className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b2375] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                      Send inquiry <Send className="size-4" aria-hidden="true" />
                    </button>
                  </>
                )}
              </form>

            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>

    </>
  )
}
