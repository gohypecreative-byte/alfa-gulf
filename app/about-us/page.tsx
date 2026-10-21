import Image from "next/image"
import Link from "next/link"
import { Building2, ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Flame, Zap, Wrench, Camera, Trees, Package, Wind, Hammer, CheckCircle2 } from "lucide-react"
import { CertificationsSection } from "@/components/services/certifications-section"

const DIVISIONS = [
  {
    title: "Commercial Projects",
    desc: "Modern office towers, commercial hubs & corporate headquarters.",
    href: "/services/commercial-projects",
    icon: Building2,
  },
  {
    title: "Residential Complex & Villas",
    desc: "Luxury residential compounds, private villas & master communities.",
    href: "/services/residential-buildings-villas",
    icon: Building2,
  },
  {
    title: "MEP Services",
    desc: "Integrated mechanical, electrical, plumbing & low-current engineering.",
    href: "/services/mep-services",
    icon: Zap,
  },
  {
    title: "Steel Structure & Fire Proofing",
    desc: "Industrial structural steel fabrication & UL certified fireproofing.",
    href: "/services/steel-structures",
    icon: Flame,
  },
  {
    title: "Fit-Out Works",
    desc: "Premium corporate interiors, acoustic ceilings & turnkey delivery.",
    href: "/services/fitout-works",
    icon: Wrench,
  },
  {
    title: "IT & CCTV Services",
    desc: "AI CCTV surveillance, access control & data center infrastructure.",
    href: "/services/cctv-it-sales",
    icon: Camera,
  },
  {
    title: "Landscaping Works",
    desc: "Architectural hardscaping, automated irrigation & environmental design.",
    href: "/services/landscaping-works",
    icon: Trees,
  },
  {
    title: "Building Material Supplies",
    desc: "Direct procurement of certified structural steel, rebar & concrete.",
    href: "/services/building-materials",
    icon: Package,
  },
  {
    title: "HVAC Systems",
    desc: "Central chilled water plants, engineered VRF units & ductwork.",
    href: "/services/hvac-division",
    icon: Wind,
  },
  {
    title: "Demolition & Renovation",
    desc: "Safe controlled dismantling, concrete cutting & retrofitting.",
    href: "/services/demolition-renovation",
    icon: Hammer,
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 text-slate-900">
      <section className="bg-gradient-to-br from-white via-sky-50/60 to-sky-100/70 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-medium text-brand">About Alfa Gulf</p>
            <h1 className="max-w-[14ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl xl:text-6xl">One team. From construction to connection.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We bring construction, building services and digital infrastructure together for projects across Saudi Arabia.</p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">Based in Riyadh, Alfa Gulf Technologies &amp; Construction Company supports projects from civil works and fit-out to network installation and material supply.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex min-h-12 items-center gap-3 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover">Explore our services <ArrowRight className="size-4" /></Link>
              <a href="#certifications" className="inline-flex min-h-12 items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-brand hover:bg-sky-100">Our certifications <ArrowUpRight className="size-4" /></a>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-sky-100">
              <Image src="/service-img/site-camp-02.jpg" alt="Civil excavation work beside industrial buildings at an Alfa Gulf project site" fill preload sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-slate-500">On site with Alfa Gulf: civil works and project delivery.</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div><p className="mb-4 text-sm font-medium text-brand">How we work</p><h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Practical expertise.<br />A shared responsibility.</h2></div>
            <p className="max-w-xl self-end text-base leading-8 text-slate-600">Our teams coordinate the physical and technical parts of a project, keeping construction, installation and handover connected. Quality, safety and clear communication guide the work at every step.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-16">
            {[{title:"Our mission",text:"Deliver construction and technology solutions that support Saudi Arabia's growing businesses and communities."},{title:"Our values",text:"Work with integrity, take responsibility for quality, and build lasting relationships with clients and project partners."},{title:"Our direction",text:"Contribute to Saudi Vision 2030 through practical engineering, reliable infrastructure and sustainable construction."}].map(item=>(<article key={item.title}><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></article>))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-sm font-medium text-brand">What we do</p><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Capabilities that work together.</h2></div><Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">All services <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-4 md:grid-cols-2">
            {DIVISIONS.map((division)=>{const Icon=division.icon;return (<Link key={division.title} href={division.href} className="group flex items-start gap-4 rounded-md bg-white p-5 transition-colors hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-brand sm:p-6"><Icon className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.5} /><div className="flex-1"><h3 className="text-base font-medium group-hover:text-brand">{division.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{division.desc}</p></div><ArrowUpRight className="mt-1 size-4 shrink-0 text-brand" /></Link>)})}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100"><Image src="/img/network-cable-dressing-01.jpg" alt="Alfa Gulf technician working on network cabling in a communications rack" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
          <div><p className="mb-4 text-sm font-medium text-brand">Quality and safety</p><h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Care in the details.<br />Confidence in the result.</h2><p className="mt-5 text-base leading-7 text-slate-600">From site preparation to the final connections, our approach brings safe working practices and quality checks into everyday project delivery.</p><ul className="mt-7 space-y-4">{["Coordination across civil, MEP and technology teams","Material checks and installation inspections","Safe working practices on active project sites","Quality, environmental and occupational safety management systems"].map(item=><li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />{item}</li>)}</ul></div>
        </div>
      </section>

      <CertificationsSection />

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] rounded-md bg-gradient-to-br from-sky-50 to-sky-100/70 p-7 sm:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-xl"><p className="mb-4 text-sm font-medium text-brand">Let&apos;s talk</p><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Tell us what you&apos;re building.</h2><p className="mt-4 text-base leading-7 text-slate-600">Discuss your scope, site requirements and next steps with our team in Riyadh.</p></div><a href="tel:+966534979774" className="inline-flex min-h-12 w-fit items-center gap-3 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-hover"><Phone className="size-4" /> +966 53 497 9774</a></div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600"><span className="inline-flex items-center gap-2"><MapPin className="size-4 text-brand" />Riyadh, Saudi Arabia</span><a href="mailto:info@alfa-gulf.com" className="inline-flex items-center gap-2 hover:text-brand"><Mail className="size-4 text-brand" />info@alfa-gulf.com</a></div>
        </div>
      </section>
    </div>
  )
}
