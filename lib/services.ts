import type * as React from "react"
import { Armchair, Bell, Building2, Camera, Cpu, Database, Fence, Flame, Hammer, HardHat, Headphones, Home as HomeIcon, KeyRound, Laptop, Monitor, Network, Package, PhoneCall, Server, Shield, ShieldAlert, Trees, Truck, Tv, Wind, Wrench, Zap } from "lucide-react"

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

export const SERVICE_DIVISIONS: ServiceCategory[] = [
  {
    id: "construction",
    num: "01",
    title: "CONSTRUCTION SERVICES",
    badge: "DIVISION 01 • 11 SERVICES",
    badgeColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300",
    activeTitle: "General Construction & Civil Works",
    items: [
      { num: "01", title: "General Construction & Civil Works", concept: "From Ground to Completion", href: "/services/construction/general-construction", icon: Building2, image: "/services/directory/general-construction.webp" },
      { num: "02", title: "MEP Services", concept: "Hidden Systems Behind Every Building", href: "/services/construction/mep-services", icon: Wrench, image: "/services/directory/mep-services.webp" },
      { num: "03", title: "HVAC Solutions", concept: "Invisible Comfort", href: "/services/construction/hvac-solutions", icon: Wind, image: "/services/directory/hvac-solutions.webp" },
      { num: "04", title: "Fire Alarm Systems", concept: "Every Second Counts", href: "/services/construction/fire-alarm-systems", icon: Bell, image: "/services/directory/fire-alarm-systems.webp" },
      { num: "05", title: "Fire & Life Safety Systems", concept: "Designed Around Safety", href: "/services/construction/fire-life-safety", icon: Shield, image: "/services/directory/fire-life-safety.webp" },
      { num: "06", title: "Fireproofing Works", concept: "Protection Within Structure", href: "/services/construction/fireproofing-works", icon: Flame, image: "/services/directory/fireproofing-works.jpg" },
      { num: "07", title: "Steel Structure & Erection", concept: "Precision in Every Connection", href: "/services/construction/steel-structure", icon: Hammer, image: "/services/directory/steel-structure.jpg" },
      { num: "08", title: "Fit-Out & Renovation", concept: "From Empty Space to Finished", href: "/services/construction/fit-out-renovation", icon: HomeIcon, image: "/services/directory/fit-out-renovation.jpg" },
      { num: "09", title: "Landscaping & External Works", concept: "Transforming Space Around You", href: "/services/construction/landscaping", icon: Trees, image: "/services/directory/landscaping.jpg" },
      { num: "10", title: "Demolition & Renovation", concept: "Make Way for What's Next", href: "/services/construction/demolition", icon: HardHat, image: "/services/directory/demolition.webp" },
      { num: "11", title: "Fencing, Gates & Barriers", concept: "Secure the Perimeter", href: "/services/construction/fencing-barriers", icon: Fence, image: "/services/directory/fencing-barriers.jpg" },
    ],
  },
  {
    id: "it-solutions",
    num: "02",
    title: "IT SOLUTIONS",
    badge: "DIVISION 02 • 14 SERVICES",
    badgeColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",
    activeTitle: "Data Centre Solutions",
    items: [
      { num: "12", title: "Data Centre Solutions", concept: "Build the Digital Core", href: "/services/it-solutions/data-centre", icon: Server, image: "/services/directory/data-centre.webp" },
      { num: "13", title: "Structured Cabling", concept: "Network Beneath Everything", href: "/services/it-solutions/structured-cabling", icon: Network, image: "/services/cctv/structured_cabling_datacenter.jpg" },
      { num: "14", title: "Enterprise Networking", concept: "Everything Connected", href: "/services/it-solutions/networking", icon: Cpu, image: "/services/directory/networking.webp" },
      { num: "15", title: "CCTV / IP Surveillance", concept: "See. Detect. Protect.", href: "/services/it-solutions/cctv", icon: Camera, image: "/services/directory/cctv.jpg" },
      { num: "16", title: "Access Control & Time Attendance", concept: "Access, Controlled.", href: "/services/it-solutions/access-control", icon: KeyRound, image: "/services/directory/access-control.webp" },
      { num: "17", title: "Servers & Storage", concept: "Where Your Data Lives", href: "/services/it-solutions/servers-storage", icon: Database, image: "/services/cctv/cloud_server_infrastructure.jpg" },
      { num: "18", title: "Meeting Room / AV Solutions", concept: "Connects Everyone", href: "/services/it-solutions/meeting-rooms", icon: Tv, image: "/services/directory/meeting-rooms.jpg" },
      { num: "19", title: "UPS & Power Backup Solutions", concept: "Power Without Interruption", href: "/services/it-solutions/ups", icon: Zap, image: "/services/directory/ups.webp" },
      { num: "21", title: "IT Hardware & Tech Supply", concept: "Powers Your Business", href: "/services/it-solutions/hardware-supply", icon: Laptop, image: "/services/directory/hardware-supply.webp" },
      { num: "22", title: "Network Security & Cyber", concept: "Secure Every Connection", href: "/services/it-solutions/cybersecurity", icon: ShieldAlert, image: "/services/directory/cybersecurity.jpg" },
      { num: "23", title: "IP Telephony & Unified Comm.", concept: "Connected Organization", href: "/services/it-solutions/ip-telephony", icon: PhoneCall, image: "/services/directory/ip-telephony.jpg" },
      { num: "24", title: "Managed IT Services / AMC", concept: "Always Supported", href: "/services/it-solutions/managed-services", icon: Headphones, image: "/services/directory/managed-services.jpg" },
      { num: "29", title: "Smart Building & Technology Integration", concept: "Connected Building Operations", href: "/services/it-solutions/smart-building", icon: Building2, image: "/services/directory/smart-building.jpg" },
      { num: "30", title: "Complete Office IT Setup / Turnkey IT Infrastructure", concept: "Your Office, Ready to Work", href: "/services/it-solutions/turnkey-it-infrastructure", icon: Network, image: "/services/directory/turnkey-it-infrastructure.jpg" },
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
      { num: "20", title: "General Trading / Sourcing", concept: "Requirement to Reality", href: "/services/general-trading/sourcing-supply", icon: Package, image: "/services/directory/sourcing-supply.jpg" },
      { num: "25", title: "Construction, MEP & Electrical Supply", concept: "Keep Projects Moving", href: "/services/general-trading/construction-materials", icon: Truck, image: "/services/directory/construction-materials.jpg" },
      { num: "26", title: "IT & Tech Products Supply", concept: "Ready to Deploy", href: "/services/general-trading/it-products", icon: Monitor, image: "/services/directory/it-products.jpg" },
      { num: "27", title: "Office, Furniture & Facility Supply", concept: "Workplace Supply", href: "/services/general-trading/office-furniture", icon: Armchair, image: "/services/directory/office-furniture.jpg" },
      { num: "28", title: "Industrial Materials & PPE Supply", concept: "Ready for Project", href: "/services/general-trading/industrial-ppe", icon: HardHat, image: "/services/directory/industrial-ppe.webp" },
    ],
  },
]

