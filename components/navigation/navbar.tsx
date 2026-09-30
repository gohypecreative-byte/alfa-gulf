"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
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
  Settings,
  Share2,
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
    badgeColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300",
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
  const [activeServiceIdx, setActiveServiceIdx] = React.useState(0)
  const [activeHoverCategory, setActiveHoverCategory] = React.useState<number>(0)
  const [hoveredServiceTitle, setHoveredServiceTitle] = React.useState<Record<number, string>>({})
  const [activeShowcase, setActiveShowcase] = React.useState<{ title: string; image: string }>({
    title: "General Construction & Civil Works",
    image: "/services/commercial_projects.jpg",
  })
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
            isTransparent ? "opacity-0 bg-transparent" : "opacity-100 bg-[#0081c6]"
          }`}
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-[84px]">
            {/* Left: ALFA Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center group py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0081c6] rounded"
                aria-label="Alfa Gulf Home"
              >
                <div className="relative h-12 sm:h-14 w-auto aspect-[238/199]">
                  <Image
                    src="/alfa-logo.png"
                    alt="Alfa Gulf Technologies & Construction Company"
                    fill
                    sizes="(max-width: 640px) 140px, 180px"
                    className={`object-contain transition-all duration-300 ${
                      isTransparent
                        ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                        : ""
                    }`}
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
                      : "text-slate-800 hover:text-[#0081c6]"
                  }`}
                >
                  HOME
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-[#0081c6]"
                    }`}
                  />
                </Link>

                <Link
                  href="/about-us"
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-2 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-[#0081c6]"
                  }`}
                >
                  ABOUT US
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-[#0081c6]"
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
                        ? "text-[#0081c6]"
                        : "text-slate-800 hover:text-[#0081c6]"
                    }`}
                  >
                    SERVICES
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isServicesOpen
                          ? "rotate-180 " + (isTransparent ? "text-sky-400" : "text-[#0081c6]")
                          : isTransparent
                          ? "text-white/80 group-hover:text-white"
                          : "text-slate-500 group-hover:text-[#0081c6]"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                        isTransparent
                          ? isServicesOpen
                            ? "bg-sky-400 w-full"
                            : "bg-white w-0 group-hover:w-full"
                          : isServicesOpen
                          ? "bg-[#0081c6] w-full"
                          : "bg-[#0081c6] w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </div>

                <Link
                  href="/news"
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors py-2 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      : "text-slate-800 hover:text-[#0081c6]"
                  }`}
                >
                  NEWS
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full ${
                      isTransparent ? "bg-white" : "bg-[#0081c6]"
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
                      : "text-slate-800 hover:text-[#0081c6]"
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
                      : "text-slate-900 hover:text-[#0081c6]"
                  }`}
                >
                  {/* Custom 2x2 square dot grid icon matching the reference image */}
                  <span
                    className={`grid grid-cols-2 gap-[2.5px] w-3 h-3 transition-colors ${
                      isTransparent
                        ? "text-white group-hover:text-sky-300"
                        : "text-slate-900 group-hover:text-[#0081c6]"
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
                    : "text-slate-800 hover:text-[#0081c6]"
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
                    : "text-slate-800 hover:text-[#0081c6]"
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
                    : "text-slate-900 hover:text-[#0081c6]"
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

        {/* FULL-WIDTH DESKTOP MEGA DROPDOWN DRAWER (MATCHING NAVBAR BACKGROUND DYNAMICALLY) */}
        <div
          className={`hidden lg:block w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-2xl ${
            isTransparent
              ? "bg-[#0b0f19]/98 text-white border-b border-white/10 backdrop-blur-2xl"
              : "bg-white text-slate-900 border-b border-slate-200/80 shadow-2xl"
          } ${
            isServicesOpen
              ? "max-h-[720px] opacity-100 py-7 border-t border-slate-200/80 dark:border-white/10"
              : "max-h-0 opacity-0 py-0 border-t-0 border-b-0 pointer-events-none"
          }`}
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-6 xl:gap-8 items-start">
              
              {/* ── SECTION 1: CATEGORY MENU (3 COLS) ── */}
              <div className={`col-span-3 pr-4 border-r space-y-2 ${isTransparent ? "border-white/10" : "border-slate-200/80"}`}>
                <div className={`pb-2 mb-2 border-b ${isTransparent ? "border-white/10" : "border-slate-200"}`}>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#0081c6] dark:text-sky-400 uppercase block">
                    SERVICES DEPARTMENTS
                  </span>
                  <h4 className={`text-[11px] font-semibold uppercase tracking-wider mt-0.5 ${isTransparent ? "text-slate-300" : "text-slate-600"}`}>
                    SELECT A CATEGORY
                  </h4>
                </div>

                <div className="space-y-1.5">
                  {DIVISIONS_28_DATA.map((cat, idx) => {
                    const isActive = activeHoverCategory === idx
                    return (
                      <div
                        key={cat.id}
                        onMouseEnter={() => {
                          setActiveHoverCategory(idx)
                          const firstItem = DIVISIONS_28_DATA[idx]?.items[0]
                          if (firstItem) {
                            setActiveShowcase({ title: firstItem.title, image: firstItem.image })
                          }
                        }}
                        className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                          isActive
                            ? isTransparent
                              ? "bg-sky-500/20 border-sky-400/80 text-sky-300 font-semibold translate-x-0.5"
                              : "bg-sky-50 border-[#0081c6]/40 text-[#0081c6] font-semibold shadow-2xs translate-x-0.5"
                            : isTransparent
                            ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white font-medium"
                            : "bg-slate-50/70 border-slate-200/70 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium"
                        }`}
                      >
                        <span className="text-[12px] font-semibold tracking-wider uppercase truncate">
                          {cat.title}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isActive
                              ? "text-[#0081c6] dark:text-sky-400 translate-x-0.5 opacity-100"
                              : "text-slate-400 opacity-60 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                    )
                  })}
                </div>

                <div className={`pt-3 border-t mt-3 ${isTransparent ? "border-white/10" : "border-slate-100"}`}>
                  <Link
                    href="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0081c6] dark:text-sky-400 hover:text-[#005a8c] uppercase tracking-wider transition-colors"
                  >
                    <span>VIEW ALL 28 SERVICES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* ── SECTION 2: SUB-CATEGORIES PANEL (5 COLS) ── */}
              <div className={`col-span-5 pr-4 border-r ${isTransparent ? "border-white/10" : "border-slate-200/80"}`}>
                {/* Active Category Header with accent underline */}
                <div className="pb-2 mb-3 border-b-2 border-[#0081c6]">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isTransparent ? "text-white" : "text-slate-800"}`}>
                    {DIVISIONS_28_DATA[activeHoverCategory]?.title}
                  </h4>
                </div>

                {/* Sub-categories List Grid */}
                <div className="grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                  {DIVISIONS_28_DATA[activeHoverCategory]?.items.map((s) => {
                    const IconComp = s.icon
                    const isSubActive = activeShowcase.title === s.title
                    return (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => setIsServicesOpen(false)}
                        onMouseEnter={() => {
                          setActiveShowcase({ title: s.title, image: s.image })
                        }}
                        className={`group flex items-center justify-between p-2.5 rounded-xl border transition-all duration-150 ${
                          isSubActive
                            ? isTransparent
                              ? "bg-sky-500/20 border-sky-400 text-sky-300 font-semibold shadow-2xs"
                              : "bg-sky-50 border-[#0081c6]/35 text-[#0081c6] font-semibold shadow-2xs"
                            : isTransparent
                            ? "border-white/10 bg-white/5 hover:bg-sky-500/15 hover:border-sky-400/60 text-slate-200 hover:text-sky-300"
                            : "border-slate-100 hover:border-sky-200 bg-white hover:bg-sky-50/60 text-slate-700 hover:text-[#0081c6] shadow-2xs"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-1">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isSubActive
                              ? "text-[#0081c6] bg-sky-100 border border-sky-200"
                              : isTransparent
                              ? "text-sky-400 bg-white/10 border border-white/10 group-hover:bg-sky-500/20 group-hover:text-sky-300"
                              : "text-[#0081c6] bg-sky-50/80 border border-sky-100 group-hover:bg-sky-100 group-hover:border-sky-200"
                          }`}>
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[11.5px] font-semibold tracking-wide uppercase leading-tight line-clamp-2">
                            {s.title}
                          </span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-colors shrink-0 ${
                          isSubActive
                            ? "text-[#0081c6] dark:text-sky-300"
                            : "text-slate-300 dark:text-slate-600 group-hover:text-[#0081c6] dark:group-hover:text-sky-400"
                        }`} />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* ── SECTION 3: DYNAMIC SHOWCASE FRAME (4 COLS - IMAGE & TITLE UPDATE ON HOVER) ── */}
              <div className="col-span-4">
                <div className={`rounded-2xl border p-4 space-y-3.5 ${
                  isTransparent
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-slate-200/90 bg-slate-50/80 text-slate-900 shadow-2xs"
                }`}>
                  
                  {/* CLEAN DYNAMIC IMAGE BOX */}
                  <div className={`relative aspect-[16/9] w-full rounded-xl overflow-hidden border ${
                    isTransparent ? "border-white/10 bg-slate-900" : "border-slate-200/80 bg-white"
                  }`}>
                    <Image
                      key={activeShowcase.image}
                      src={activeShowcase.image}
                      alt={activeShowcase.title}
                      fill
                      sizes="33vw"
                      className="object-cover hover:scale-105 transition-all duration-500 ease-out animate-in fade-in"
                    />
                  </div>

                  {/* DYNAMIC TITLE SECTION BELOW THE IMAGE */}
                  <div className="space-y-2.5">
                    <h3 className={`text-sm font-extrabold leading-snug uppercase tracking-wider min-h-[40px] ${isTransparent ? "text-white" : "text-slate-900"}`}>
                      {activeShowcase.title}
                    </h3>

                    {/* 3 FEATURE PILLS */}
                    <div className={`rounded-xl p-2.5 border grid grid-cols-3 gap-1 text-center ${
                      isTransparent
                        ? "bg-white/10 border-white/10 text-white"
                        : "bg-white border-slate-200 text-slate-900 shadow-2xs"
                    }`}>
                      <div className="flex flex-col items-center justify-center p-1 rounded-md hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                        <Building2 className="w-3.5 h-3.5 text-[#0081c6] dark:text-sky-400 mb-0.5" />
                        <span className="text-[9.5px] font-bold uppercase">Civil & Struct.</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 rounded-md hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                        <Settings className="w-3.5 h-3.5 text-[#0081c6] dark:text-sky-400 mb-0.5" />
                        <span className="text-[9.5px] font-bold uppercase">MEP & Infra</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 rounded-md hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                        <Share2 className="w-3.5 h-3.5 text-[#0081c6] dark:text-sky-400 mb-0.5" />
                        <span className="text-[9.5px] font-bold uppercase">IT & Tech</span>
                      </div>
                    </div>
                  </div>

                </div>
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
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                HOME
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                ABOUT US
              </Link>

              {/* Mobile Services Categorized Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
                >
                  <span>SERVICES</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-[#0081c6]" : "text-slate-400"
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-2 pr-2 py-3 space-y-4 bg-slate-50/90 rounded-xl mt-1.5 border border-slate-200/70">
                    {DIVISIONS_28_DATA.map((cat) => (
                      <div key={cat.title} className="space-y-1.5">
                        <div className="flex items-center gap-2 px-2 pb-1 border-b border-slate-200/60">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-[#0081c6]">
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
                              className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0081c6] hover:bg-[#0081c6]/10 rounded-lg transition-colors"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="font-mono text-[10px] font-bold text-[#0081c6]">{s.num}</span>
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
                className="px-3 py-2.5 text-sm font-bold tracking-wider uppercase text-slate-800 hover:text-[#0081c6] hover:bg-slate-50 rounded-md transition-colors"
              >
                NEWS
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#0081c6] text-white font-bold tracking-wider text-xs uppercase shadow-sm hover:bg-[#0070ad] transition-colors"
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
                            <div className="text-sm font-medium text-slate-900 group-hover:text-[#0081c6]">
                              {service.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0081c6] transition-colors" />
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
                          className="text-xs bg-slate-100 hover:bg-sky-50 hover:text-[#0081c6] text-slate-700 px-3 py-1.5 rounded-full transition-colors"
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
                      <Building2 className="w-3.5 h-3.5 text-[#0081c6]" /> About Alfa Gulf
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false)
                        setIsContactOpen(true)
                      }}
                      className="p-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-2 text-left"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0081c6]" /> Contact & Inquiries
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* GET IN TOUCH MODAL / DRAWER */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#e3f2fd] via-[#eaf5fe] to-[#f0f8ff] text-slate-800 border-b border-[#0081c6]/20 p-6 relative">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span
                  className="grid grid-cols-2 gap-[2.5px] w-3.5 h-3.5 text-[#0081c6]"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                  <span className="w-1.5 h-1.5 rounded-[0.5px] bg-current" />
                </span>
                <span className="text-xs uppercase tracking-widest text-[#0081c6] font-bold">
                  Alfa Gulf Direct Contact
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Get In Touch With Us</h3>
              <p className="text-slate-600 text-xs mt-1">
                Have a project or construction inquiry? Speak directly with our team.
              </p>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-[#0081c6]/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Numbers */}
            <div className="grid grid-cols-2 gap-3 p-5 bg-slate-50 border-b border-slate-100">
              <a
                href="tel:00966510737090"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 hover:border-[#0081c6] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0081c6] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Direct Call</div>
                  <div className="text-xs font-bold text-slate-800 tracking-tight">+966 510 737 090</div>
                </div>
              </a>

              <a
                href="mailto:info@alfa-gulf.com"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 hover:border-[#0081c6] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-[#0081c6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0081c6] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Email Inquiries</div>
                  <div className="text-xs font-bold text-slate-800 tracking-tight">info@alfa-gulf.com</div>
                </div>
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
              {inquirySubmitted ? (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-center space-y-1">
                  <div className="font-bold text-sm">Inquiry Received!</div>
                  <div className="text-xs text-emerald-600">
                    Our technical representative will get back to you shortly.
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+966 ..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6]"
                      defaultValue="Commercial Projects"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your scope of work, timeline, or location..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0081c6] focus:ring-1 focus:ring-[#0081c6] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Riyadh, KSA
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0081c6] hover:bg-[#0070ad] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Request
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

    </>
  )
}
