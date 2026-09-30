import { ServiceDetailData } from "./service-detail-view"

export const SERVICES_DATA: Record<string, ServiceDetailData> = {
  "commercial-projects": {
    divisionNum: "01",
    divisionTitle: "Commercial Projects",
    category: "CIVIL & COMMERCIAL CONTRACTING",
    headline: "Engineering modern corporate towers and commercial landmarks.",
    summary:
      "Alfa Gulf delivers turnkey engineering, procurement, and construction (EPC) solutions for multi-story office headquarters, mixed-use commercial developments, logistics hubs, and retail destinations across Saudi Arabia, fully certified to SBC 201 and international safety standards.",
    heroImage: "/services/commercial_projects.jpg",
    heroImageCaption:
      "Turnkey structural and civil execution for commercial office towers and corporate headquarters in Riyadh.",
    stats: [
      {
        num: "50+",
        label: "Commercial Deliveries",
        desc: "High-spec towers, commercial complexes & logistics hubs",
      },
      {
        num: "100%",
        label: "SBC 201 Compliance",
        desc: "Saudi Building Code structural & seismic engineering",
      },
      {
        num: "ISO",
        label: "9001 & 45001",
        desc: "Certified QA/QC and occupational safety standards",
      },
      {
        num: "EPC",
        label: "Turnkey Contracting",
        desc: "Single-source civil, structural, MEP & fit-out management",
      },
    ],
    overviewEyebrow: "01 // Operational Methodology",
    overviewHeading: "Integrated construction that eliminates contractor friction.",
    overviewDesc:
      "We operate as a single-point general contractor. By self-performing civil groundwork, reinforced concrete frames, structural steel, and MEP coordination, Alfa Gulf eliminates scheduling clashes and safeguards capital investment.",
    accordionItems: [
      {
        title: "Fast-Track Project Delivery",
        content:
          "Advanced CPM scheduling, value engineering, and concurrent multi-trade execution ensure mission-critical commercial milestones are met without compromising build quality.",
      },
      {
        title: "Structural Precision & Seismic Design",
        content:
          "Full adherence to SBC 201 and 301 structural regulations, incorporating post-tensioned slabs, grade 60 steel rebar, and tested high-performance concrete mixes.",
      },
      {
        title: "Sustainable & Energy-Efficient Building",
        content:
          "Implementing high thermal-performance building envelopes, double-glazed low-E facades, and smart BMS integration aligned with Saudi Green Initiative benchmarks.",
      },
    ],
    overviewImage: "/services/fitout_works.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "End-to-End Commercial Construction Capabilities",
    capabilitiesDesc:
      "From deep foundation excavations to final architectural handovers and Civil Defense licensing.",
    capabilities: [
      {
        num: "01",
        title: "Corporate Headquarters & Office Towers",
        desc: "Grade-A multi-floor office buildings engineered for corporate resilience, flexible floor plates, and intelligent low-voltage systems.",
      },
      {
        num: "02",
        title: "Retail Hubs & Lifestyle Centers",
        desc: "Destination retail spaces, shopping galleries, and hospitality venues featuring high acoustic ratings and expansive open spans.",
      },
      {
        num: "03",
        title: "Industrial & Logistics Facilities",
        desc: "High-bay logistics warehouses, distribution centers, and manufacturing plants with heavy-duty post-tensioned slab-on-grade.",
      },
      {
        num: "04",
        title: "Substructure & Foundation Works",
        desc: "Deep shoring, dewatering, mass concrete rafts, and basement waterproofing systems engineered for Saudi soil characteristics.",
      },
      {
        num: "05",
        title: "Architectural Curtain Wall & Facades",
        desc: "Unitized glass curtain walls, composite cladding, and solar shading louvers engineered for harsh desert thermal differentials.",
      },
      {
        num: "06",
        title: "Turnkey Commissioning & Handover",
        desc: "Complete civil defense certification, municipality occupancy permits, and comprehensive as-built MEP documentation.",
      },
    ],
    complianceEyebrow: "03 // Quality & Regulatory Mandate",
    complianceHeading: "Uncompromising compliance across every square meter.",
    complianceDesc:
      "Every project follows strict Quality Assurance and HSE protocols, with dedicated on-site inspectors verifying concrete pour temperatures, rebar ties, and fire barrier integrity.",
    complianceItems: [
      "Saudi Building Code (SBC 201 / 801) Certified",
      "Saudi Civil Defense (Salama) Compliant",
      "Full Material Mill Test Certifications (MTR)",
      "Continuous Third-Party Concrete Slump & Cube Testing",
      "Daily Tool-Box Safety Talks and Zero-Harm HSE Culture",
      "BIM 3D Clash Detection Prior to MEP Rough-In",
    ],
    complianceImage: "/safety/teamwork_structural.jpg",
    relatedDivisions: [
      { num: "03", title: "MEP Services", href: "/services/mep-services" },
      { num: "04", title: "Steel Structures", href: "/services/steel-structures" },
      { num: "05", title: "Fit-Out Works", href: "/services/fitout-works" },
    ],
  },

  "residential-buildings-villas": {
    divisionNum: "02",
    divisionTitle: "Residential Complex & Villas",
    category: "HIGH-END RESIDENTIAL & COMPOUNDS",
    headline: "Mastering luxury residences and private community developments.",
    summary:
      "From bespoke modern private villas to expansive gated compounds and multi-family residential complexes, Alfa Gulf blends architectural distinction with premium structural engineering, providing discerning clients with homes of enduring quality.",
    heroImage: "/services/residential_villas.jpg",
    heroImageCaption:
      "Bespoke private villas and gated residential compounds engineered with luxury architectural finishes in Riyadh.",
    stats: [
      {
        num: "100+",
        label: "Luxury Residences",
        desc: "Bespoke private villas & master compound developments",
      },
      {
        num: "100%",
        label: "SBC Compliant",
        desc: "Saudi Building Code residential structural standards",
      },
      {
        num: "Grade A",
        label: "Finish Quality",
        desc: "Custom imported marble, architectural woodwork & thermal glass",
      },
      {
        num: "Smart",
        label: "Home Integration",
        desc: "KNX automation, intelligent climate control & security",
      },
    ],
    overviewEyebrow: "01 // Residential Craftsmanship",
    overviewHeading: "Where architectural elegance meets structural durability.",
    overviewDesc:
      "We understand that a luxury residence demands meticulous attention to detail. Our residential division handles structural concrete, acoustic wall insulation, custom stone cladding, and concealed MEP systems with uncompromising finesse.",
    accordionItems: [
      {
        title: "Turnkey Luxury Villa Construction",
        content:
          "From structural grey works to fine interior joinery, automated infinity pools, and landscape hardscaping, we take full responsibility for turnkey completion.",
      },
      {
        title: "Compound & Multi-Family Developments",
        content:
          "Scalable construction management for gated residential compounds, including private clubhouse facilities, access control gates, and community infrastructure.",
      },
      {
        title: "Thermal Insulation & Acoustic Comfort",
        content:
          "Double-wall masonry with extruded polystyrene insulation, double-glazed thermal break windows, and insulated acoustic pipes for supreme living comfort.",
      },
    ],
    overviewImage: "/categories/construction.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Comprehensive Residential Construction Solutions",
    capabilitiesDesc:
      "Tailored for private owners, developers, and sovereign residential funds throughout the Kingdom.",
    capabilities: [
      {
        num: "01",
        title: "Bespoke Architectural Private Villas",
        desc: "Contemporary, neoclassical, and modern minimalist private estates executed with custom engineering and premium materials.",
      },
      {
        num: "02",
        title: "Gated Residential Compounds",
        desc: "Master-planned residential communities complete with internal roadways, guardhouses, landscaping, and community amenities.",
      },
      {
        num: "03",
        title: "Smart Home & Automation Ready",
        desc: "Integrated structured wiring, smart lighting control, automated shading, and multi-zone HVAC integration.",
      },
      {
        num: "04",
        title: "Swimming Pools & Water Features",
        desc: "Skimmer and overflow swimming pools, water walls, and Jacuzzis built with heavy waterproofing and dual-filter systems.",
      },
      {
        num: "05",
        title: "Natural Stone & Exterior Cladding",
        desc: "Mechanical fixing of Riyadh stone, travertine, and ventilated porcelain facades for supreme weather resistance.",
      },
      {
        num: "06",
        title: "Private Interior Fine Finishing",
        desc: "Handcrafted gypsum moldings, concealed LED coves, Italian porcelain tiles, and luxury hardwood door installations.",
      },
    ],
    complianceEyebrow: "03 // Quality & Material Integrity",
    complianceHeading: "Certified materials designed for Saudi climate endurance.",
    complianceDesc:
      "Residential projects in Saudi Arabia face severe thermal cycles. We implement premium waterproofing and insulation systems that protect your home against heat and ground moisture for decades.",
    complianceItems: [
      "Rigid Multi-Layer SBS Foundation Waterproofing",
      "SBC 1101 Residential Code Compliance",
      "Thermal Break Aluminum Window Systems",
      "PEX-a Plumbing with Zero Concealed Joints",
      "Low-Noise Acoustic Waste Piping Systems",
      "10-Year Structural & Waterproofing Warranty",
    ],
    complianceImage: "/safety/people_safety_culture.jpg",
    relatedDivisions: [
      { num: "05", title: "Fit-Out Works", href: "/services/fitout-works" },
      { num: "07", title: "Landscaping Works", href: "/services/landscaping-works" },
      { num: "09", title: "HVAC Systems", href: "/services/hvac-division" },
    ],
  },

  "mep-services": {
    divisionNum: "03",
    divisionTitle: "MEP Services",
    category: "MECHANICAL, ELECTRICAL & PLUMBING",
    headline: "Precision engineering powering building lifelines and critical systems.",
    summary:
      "Alfa Gulf’s MEP division provides complete mechanical, electrical, plumbing, and low-current engineering services. From medium-voltage power distribution to complex chilled water piping and automated building management systems, we engineer infrastructure built for reliability.",
    heroImage: "/services/mep_services.jpg",
    heroImageCaption:
      "Integrated mechanical, electrical, and plumbing engineering executed to highest Saudi standards.",
    stats: [
      {
        num: "100%",
        label: "Code Compliance",
        desc: "Strict adherence to SEC, NWC, and SBC standards",
      },
      {
        num: "BIM",
        label: "LOD 400 Coordination",
        desc: "Zero-clash 3D modeling before on-site fabrication",
      },
      {
        num: "Civil",
        label: "Defense Approved",
        desc: "Full NFPA and Saudi Civil Defense fire protection",
      },
      {
        num: "Tier",
        label: "Engineered Systems",
        desc: "Industrial, commercial & mission-critical reliability",
      },
    ],
    overviewEyebrow: "01 // Engineering Excellence",
    overviewHeading: "Coordinated MEP systems that maximize lifecycle efficiency.",
    overviewDesc:
      "Complex buildings require synchronized engineering. Our MEP engineers use 3D BIM clash detection to coordinate HVAC ducting, electrical cable trays, fire suppression piping, and domestic plumbing, avoiding on-site conflicts and expensive rework.",
    accordionItems: [
      {
        title: "Electrical & Medium-Voltage Systems",
        content:
          "Substation design, distribution transformers, motor control centers (MCC), low-voltage switchgear, and diesel emergency generator synchronization.",
      },
      {
        title: "Hydraulic & Plumbing Engineering",
        content:
          "Potable water filtration plants, solar hot water generation, booster pump stations, storm drainage, and sanitary waste drainage systems.",
      },
      {
        title: "Fire Protection & Life Safety",
        content:
          "Automatic sprinkler systems, FM-200 clean agent gas suppression for data rooms, fire hose reels, and UL/FM certified diesel fire pumps.",
      },
    ],
    overviewImage: "/services/chilled_water_plant.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Comprehensive Electro-Mechanical Solutions",
    capabilitiesDesc:
      "Delivering seamless physical systems across commercial towers, healthcare facilities, and industrial complexes.",
    capabilities: [
      {
        num: "01",
        title: "Electrical Power Distribution",
        desc: "Complete electrical networks from SEC connection points to final distribution boards, busway trunking, and UPS clean power backup.",
      },
      {
        num: "02",
        title: "Plumbing & Drainage Engineering",
        desc: "Advanced multi-stage pressure booster pumps, water storage reservoirs, greywater treatment, and acoustic-insulated drainage stacks.",
      },
      {
        num: "03",
        title: "Building Automation & BMS",
        desc: "Centralized direct digital control (DDC) systems monitoring energy consumption, AHU performance, and electrical switchgear.",
      },
      {
        num: "04",
        title: "Fire Protection & Life Safety",
        desc: "NFPA-compliant wet pipe sprinklers, pre-action systems, fire hydrants, and integrated smoke evacuation ventilation.",
      },
      {
        num: "05",
        title: "Low-Current & ELV Infrastructure",
        desc: "Structured optical fiber cabling, intercom, public address (PA/VA), master antenna (SMATV), and clock synchronization.",
      },
      {
        num: "06",
        title: "Testing, Adjusting & Balancing (TAB)",
        desc: "Rigorous electrical Megger testing, hydraulic pressure testing, and certified NEBB/AABC air balancing before project handover.",
      },
    ],
    complianceEyebrow: "03 // Standards & Certifications",
    complianceHeading: "Fully certified by SEC, NWC, and Saudi Civil Defense.",
    complianceDesc:
      "All installations strictly follow Saudi Electricity Company (SEC) technical specifications, National Water Company (NWC) codes, and NFPA fire safety standards.",
    complianceItems: [
      "Saudi Electricity Company (SEC) Regulations",
      "National Water Company (NWC) Standards",
      "NFPA 13, 20 & 72 Fire Protection Standards",
      "ASHRAE 90.1 Energy Conservation Compliance",
      "Pressure-Tested at 1.5x Operating Limits",
      "Full As-Built Drawings & O&M Manuals Provided",
    ],
    complianceImage: "/safety/safety_team_site.jpg",
    relatedDivisions: [
      { num: "09", title: "HVAC Systems", href: "/services/hvac-division" },
      { num: "06", title: "IT & CCTV Services", href: "/services/cctv-it-sales" },
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
    ],
  },

  "steel-structures": {
    divisionNum: "04",
    divisionTitle: "Steel Structure & Fire Proofing",
    category: "INDUSTRIAL & STRUCTURAL ENGINEERING",
    headline: "Engineered structural steel fabrication and certified fireproofing.",
    summary:
      "Alfa Gulf specializes in heavy structural steel erection, industrial warehouse frameworks, long-span roof trusses, and UL-certified intumescent fireproofing coatings, delivering industrial strength and civil defense compliance across the Kingdom.",
    heroImage: "/services/steel_structures.jpg",
    heroImageCaption:
      "Heavy industrial structural steel erection and UL-certified fire protection coatings on site.",
    stats: [
      {
        num: "1,000+",
        label: "Tons Erected",
        desc: "Industrial structural frames, trusses & crane gantries",
      },
      {
        num: "UL 263",
        label: "Certified Coatings",
        desc: "1 to 3 hour fire-rated intumescent protection",
      },
      {
        num: "AISC",
        label: "Standards Compliant",
        desc: "Precision fabrication, bolting and certified welding",
      },
      {
        num: "100%",
        label: "Civil Defense Approved",
        desc: "Approved testing laboratory certificates for all coatings",
      },
    ],
    overviewEyebrow: "01 // Structural Integrity",
    overviewHeading: "Built for extreme spans, heavy loads, and life safety.",
    overviewDesc:
      "From logistics distribution hubs requiring 40-meter clear spans to multi-level industrial platforms, our structural steel team provides detailed connection engineering, computerized fabrication, and swift field erection with zero compromise on safety.",
    accordionItems: [
      {
        title: "Industrial Warehouses & PEB Structures",
        content:
          "Pre-engineered steel buildings (PEB), custom built-up sections, mezzanine decks, and crane-supporting frameworks fabricated to AISC standards.",
      },
      {
        title: "UL-Certified Intumescent & Cementitious Coatings",
        content:
          "Passive fireproofing systems applied by certified applicators. Intumescent thin-film coatings expand under heat to insulate steel for up to 180 minutes.",
      },
      {
        title: "Non-Destructive Testing (NDT) QA/QC",
        content:
          "Ultrasonic testing (UT), magnetic particle inspection (MPI), and radiographic testing of full-penetration welds ensure zero defects.",
      },
    ],
    overviewImage: "/services/steel_rebar_supply.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Heavy Industrial Steel & Passive Fireproofing",
    capabilitiesDesc:
      "Comprehensive structural steel design, shop detailing, shop fabrication, and mobile crane erection.",
    capabilities: [
      {
        num: "01",
        title: "Structural Steel Frame Fabrication",
        desc: "Heavy columns, rafters, floor beams, and crane runway girders detailed using Tekla Structures 3D modeling.",
      },
      {
        num: "02",
        title: "Intumescent Thin-Film Coatings",
        desc: "Aesthetically pleasing fire-retardant paint for exposed architectural steel in commercial lobbies, airports, and malls.",
      },
      {
        num: "03",
        title: "Cementitious Fireproofing Spray",
        desc: "High-density cementitious sprays providing robust hydrocarbon fire protection for industrial steel and offshore structures.",
      },
      {
        num: "04",
        title: "Pipe Racks & Industrial Walkways",
        desc: "Heavy-duty industrial platforms, access stair towers, handrails, and grating for manufacturing and energy plants.",
      },
      {
        num: "05",
        title: "Long-Span Roof Trusses & Space Frames",
        desc: "Architectural tubular trusses and space frames for sports arenas, hangars, and exhibition convention centers.",
      },
      {
        num: "06",
        title: "Surface Preparation & Blasting",
        desc: "Sa 2.5 grit blasting, zinc-rich epoxy primers, and polyurethane topcoats ensuring corrosion resistance in Saudi ambient humidity.",
      },
    ],
    complianceEyebrow: "03 // Rigorous Certification",
    complianceHeading: "Verified by third-party testing labs and Saudi Civil Defense.",
    complianceDesc:
      "Every dry film thickness (DFT) reading and magnetic gauge inspection is documented in certified inspection test reports (ITR) required for municipal handover.",
    complianceItems: [
      "AISC 360 Specification for Structural Steel Buildings",
      "AWS D1.1 Structural Welding Code Certified Welders",
      "UL 263 / ASTM E119 Fire Resistance Ratings",
      "Saudi Civil Defense Official Approval Letters",
      "Magnetic DFT Thickness Gauge Verification Reports",
      "Full Mill Test Certificates for S275 / S355 Structural Steel",
    ],
    complianceImage: "/safety/teamwork_structural.jpg",
    relatedDivisions: [
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "08", title: "Building Materials", href: "/services/building-materials" },
      { num: "10", title: "Demolition & Renovation", href: "/services/demolition-renovation" },
    ],
  },

  "fitout-works": {
    divisionNum: "05",
    divisionTitle: "Fit-Out Works",
    category: "INTERIOR ARCHITECTURE & COMMERCIAL FIT-OUT",
    headline: "Transforming raw shell & core spaces into bespoke corporate interiors.",
    summary:
      "Alfa Gulf executes turnkey commercial interior fit-outs, executive headquarters, retail flagships, and acoustic environments. We blend architectural craftsmanship, custom millwork, and advanced MEP integration with accelerated turnaround schedules.",
    heroImage: "/services/fitout_works.jpg",
    heroImageCaption:
      "Turnkey executive interior fit-outs with premium acoustic ceilings, custom millwork, and lighting in Riyadh.",
    stats: [
      {
        num: "45+",
        label: "Fit-Out Projects",
        desc: "Corporate HQs, luxury retail flagships & commercial spaces",
      },
      {
        num: "LOD 350",
        label: "Interior Detailing",
        desc: "Shop drawing coordination and millwork fabrication",
      },
      {
        num: "Acoustic",
        label: "STC 50+ Certified",
        desc: "Sound attenuation partitions for executive privacy",
      },
      {
        num: "Turnkey",
        label: "Single Contract",
        desc: "Demountable glass, MEP, ceilings, flooring & joinery",
      },
    ],
    overviewEyebrow: "01 // Interior Craftsmanship",
    overviewHeading: "Precision interior finishing tailored for corporate excellence.",
    overviewDesc:
      "Modern workplaces must foster productivity, brand identity, and operational flexibility. We transform raw spaces into inspiring work environments, coordinating acoustic engineering, low-voltage connectivity, and custom millwork under strict confidentiality.",
    accordionItems: [
      {
        title: "Corporate Headquarters & Boardrooms",
        content:
          "High-performance executive boardrooms featuring integrated audio-visual walls, motorized video conferencing screens, and premium acoustic fabric panels.",
      },
      {
        title: "Bespoke Millwork & Architectural Joinery",
        content:
          "In-house and partnered joinery workshops manufacturing custom reception counters, executive wood paneling, solid surface desks, and luxury credenzas.",
      },
      {
        title: "Demountable Glass Partitions & Ceilings",
        content:
          "Double-glazed acoustic aluminum partition systems, micro-perforated acoustic metal ceilings, and seamless monolithic gypsum installations.",
      },
    ],
    overviewImage: "/services/commercial_projects.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Complete Interior Turnkey Fit-Out Capabilities",
    capabilitiesDesc:
      "Managing everything from landlord lease approvals and base build alterations to final FF&E placement.",
    capabilities: [
      {
        num: "01",
        title: "Executive Office Fit-Outs",
        desc: "End-to-end design coordination, drywall partitions, acoustic isolation, and premium carpet tile or hardwood flooring.",
      },
      {
        num: "02",
        title: "Luxury Retail & Hospitality Spaces",
        desc: "High-traffic boutique retail interiors with specialized spotlighting, illuminated display vitrines, and bespoke marble checkout counters.",
      },
      {
        num: "03",
        title: "Acoustic Engineering & Ceilings",
        desc: "Bespoke acoustic baffling, wood slat ceiling systems, perforated gypsum boards, and NRC-certified acoustic ceiling tiles.",
      },
      {
        num: "04",
        title: "Concealed MEP & Low Voltage Integration",
        desc: "Underfloor cable raceways, floor box installations, architectural cove lighting, and individual thermostatic climate controls.",
      },
      {
        num: "05",
        title: "Custom Architectural Joinery",
        desc: "Wall paneling, timber veneer cladding, bespoke reception desks, pantry cabinets, and custom acoustic timber doors.",
      },
      {
        num: "06",
        title: "Authority Approvals & Civil Defense",
        desc: "Comprehensive civil defense approval for emergency lighting, sprinkler drops, exit signage, and fire alarm integration.",
      },
    ],
    complianceEyebrow: "03 // Quality Assurance",
    complianceHeading: "Flawless finishes with zero tolerance for imperfections.",
    complianceDesc:
      "Our interior supervisors conduct rigorous laser-level alignments, acoustic decibel testing, and paint finish inspections under artificial architectural lighting before handover.",
    complianceItems: [
      "ASTM E84 Class A Fire-Rated Interior Materials",
      "STC 45–55 Tested Acoustic Wall Partitions",
      "LEED & WELL Low-VOC Paint and Adhesives",
      "Saudi Civil Defense Interior Modification Permits",
      "Detailed As-Built Joinery and MEP Drawings",
      "Comprehensive Post-Handover Defect Liability Support",
    ],
    complianceImage: "/safety/common_good_infra.jpg",
    relatedDivisions: [
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "06", title: "IT & CCTV Services", href: "/services/cctv-it-sales" },
      { num: "03", title: "MEP Services", href: "/services/mep-services" },
    ],
  },

  "cctv-it-sales": {
    divisionNum: "06",
    divisionTitle: "IT & CCTV Services",
    category: "ENTERPRISE IT INFRASTRUCTURE & SECURITY",
    headline: "Mission-critical surveillance, AI analytics, and smart digital systems.",
    summary:
      "Alfa Gulf’s technology division delivers enterprise-grade IP CCTV video surveillance, biometric access control, optical fiber structured cabling, Tier-certified data center builds, and smart building automation compliant with Saudi Civil Defense and HCIS requirements.",
    heroImage: "/services/cctv_it_services.jpg",
    heroImageCaption:
      "Enterprise security monitoring, AI camera networks, and data center infrastructure in Saudi Arabia.",
    stats: [
      {
        num: "1,500+",
        label: "Cameras Deployed",
        desc: "AI-powered 4K IP security surveillance systems",
      },
      {
        num: "100%",
        label: "Civil Defense Approved",
        desc: "Compliant with Kingdom surveillance retention mandates",
      },
      {
        num: "Tier III",
        label: "Data Center Ready",
        desc: "Precision cooling, UPS backup and structured cabling",
      },
      {
        num: "10 Gbps",
        label: "Fiber Backbones",
        desc: "OM4 / OS2 certified high-speed structured cabling",
      },
    ],
    overviewEyebrow: "01 // Smart Infrastructure",
    overviewHeading: "Intelligent digital backbones powering modern commercial assets.",
    overviewDesc:
      "Digital connectivity and physical security are inseparable. We design and install high-density network cabling, redundant server rooms, and AI-driven surveillance platforms that provide proactive site visibility, access accountability, and uninterruptible uptime.",
    accordionItems: [
      {
        title: "AI Video Surveillance & Retention Servers",
        content:
          "High-definition IP cameras equipped with facial recognition, license plate recognition (LPR), perimeter intrusion detection, and RAID-6 storage servers conforming to Saudi 90-day video retention laws.",
      },
      {
        title: "Biometric & RFID Access Control",
        content:
          "Touchless facial recognition readers, fingerprint scanners, speed gates, turnstiles, and automated barrier gates integrated into centralized card management software.",
      },
      {
        title: "Data Center & Server Room Buildout",
        content:
          "Raised access flooring, precision air conditioning (PAC), FM-200 / Novec 1230 gas suppression, modular UPS power systems, and environmental monitoring.",
      },
    ],
    overviewImage: "/categories/it-technology.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Complete Information & Security Technology",
    capabilitiesDesc:
      "Full turnkey deployment from IT design and fiber trenching to final software commissioning.",
    capabilities: [
      {
        num: "01",
        title: "IP CCTV Surveillance Networks",
        desc: "Dome, bullet, PTZ, and panoramic cameras with Starlight low-light sensors, vandal-proof IK10 housings, and cloud-hybrid management.",
      },
      {
        num: "02",
        title: "Access Control & Time Attendance",
        desc: "Multi-factor authentication, electromagnetic locks, emergency push bars, and integration with corporate HR attendance databases.",
      },
      {
        num: "03",
        title: "Structured Cabling & Fiber Optics",
        desc: "Cat6A shielded copper cabling, multi-mode and single-mode optical fiber splicing, patch panels, and Fluke Networks certification.",
      },
      {
        num: "04",
        title: "Server Racks & UPS Power Systems",
        desc: "42U server cabinets, intelligent power distribution units (iPDUs), dual-conversion online UPS systems, and battery health monitors.",
      },
      {
        num: "05",
        title: "Commercial Audio-Visual & Intercom",
        desc: "Video conferencing meeting rooms, digital signage displays, PA/BGM audio zones, and multi-tenant video door intercom systems.",
      },
      {
        num: "06",
        title: "Wireless Networking & Cybersecurity",
        desc: "Enterprise Wi-Fi 6 access points, managed PoE switches, next-generation firewalls (NGFW), and secure VPN gateways.",
      },
    ],
    complianceEyebrow: "03 // Security Mandates",
    complianceHeading: "Compliant with Saudi Ministry of Interior & Civil Defense standards.",
    complianceDesc:
      "Our installations adhere strictly to national security regulations, including certified camera lux sensitivity, camera coverage angles, and encrypted video storage.",
    complianceItems: [
      "Saudi Civil Defense & Ministry of Interior Video Guidelines",
      "90-Day RAID-6 Video Storage Retention Standards",
      "TIA-942 Telecommunications Infrastructure for Data Centers",
      "Fluke DTX-1800 Tested and Certified Cable Drops",
      "24/7 Remote Diagnostics and Service Level Agreements",
      "Certified Integration with Enterprise BMS Platforms",
    ],
    complianceImage: "/services/it/it_cctv_compliance.jpg",
    relatedDivisions: [
      { num: "03", title: "MEP Services", href: "/services/mep-services" },
      { num: "05", title: "Fit-Out Works", href: "/services/fitout-works" },
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
    ],
  },

  "landscaping-works": {
    divisionNum: "07",
    divisionTitle: "Landscaping Works",
    category: "ARCHITECTURAL HARDSCAPING & AUTOMATED IRRIGATION",
    headline: "Creating sustainable outdoor environments and architectural landscapes.",
    summary:
      "Alfa Gulf’s landscape division merges sustainable horticultural science with precision hardscaping engineering. We design and construct green plazas, luxury villa gardens, automated smart irrigation networks, and exterior illumination systems across the Kingdom.",
    heroImage: "/services/landscaping_works.jpg",
    heroImageCaption:
      "Architectural hardscaping, automated drip irrigation, and luxury outdoor environments in Riyadh.",
    stats: [
      {
        num: "30+",
        label: "Landscape Projects",
        desc: "Commercial plazas, gated communities & private estates",
      },
      {
        num: "40%",
        label: "Water Conservation",
        desc: "Smart weather-sensing drip irrigation controllers",
      },
      {
        num: "Native",
        label: "Adaptive Flora",
        desc: "Drought-tolerant plants engineered for desert climates",
      },
      {
        num: "Turnkey",
        label: "Hardscape & Softscape",
        desc: "Granite paving, pergolas, waterscapes & lighting",
      },
    ],
    overviewEyebrow: "01 // Sustainable Landscapes",
    overviewHeading: "Thriving outdoor spaces engineered for the Saudi climate.",
    overviewDesc:
      "Designing landscapes in the arid Gulf environment demands scientific soil preparation, water-efficient hydraulics, and thermal-resistant paving materials. We create lush, resilient outdoor environments that elevate property value and support Saudi Green Initiative objectives.",
    accordionItems: [
      {
        title: "Architectural Hardscaping & Stonework",
        content:
          "Granite pavers, stamped concrete, terrazzo plazas, interlocking brick driveways, retaining walls, and custom steel-and-wood shade pergolas.",
      },
      {
        title: "Smart Water-Efficient Irrigation Networks",
        content:
          "Subsurface drip irrigation, weather station-connected automated solenoid valves, pressure regulators, and treated sewage effluent (TSE) storage tanks.",
      },
      {
        title: "Night Landscape Lighting & Illumination",
        content:
          "Low-voltage IP68 LED spotlights, tree uplights, illuminated water features, and recessed pathway bollards with automated twilight timers.",
      },
    ],
    overviewImage: "/services/residential_villas.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Comprehensive Exterior Landscape Solutions",
    capabilitiesDesc:
      "Transforming bare desert ground into functional, cooling, and aesthetically stunning architectural spaces.",
    capabilities: [
      {
        num: "01",
        title: "Commercial Plazas & Walkways",
        desc: "Pedestrian walkways, seating benches, waste receptacles, bike racks, and tree grates designed for heavy public foot traffic.",
      },
      {
        num: "02",
        title: "Custom Timber & Aluminum Pergolas",
        desc: "Custom structural shade structures, motorized louvered pergolas, and decorative privacy screens finished with UV-resistant coatings.",
      },
      {
        num: "03",
        title: "Automated Drip & Sprinkler Systems",
        desc: "Hydraulically calculated piping loops, smart rain sensors, root-zone drip lines, and variable frequency drive irrigation booster pumps.",
      },
      {
        num: "04",
        title: "Water Features & Decorative Fountains",
        desc: "Architectural cascading water walls, reflective infinity ponds, fountain nozzles, underwater LED lighting, and chemical dosing systems.",
      },
      {
        num: "05",
        title: "Horticultural Planting & Native Flora",
        desc: "Specimen date palms, Acacia tortilis, Bougainvillea, desert ornamental grasses, and specialized soil conditioning mixes.",
      },
      {
        num: "06",
        title: "Drainage & Stormwater Runoff",
        desc: "French drains, channel trench grates, soakaway pits, and porous pavement designs preventing localized standing water.",
      },
    ],
    complianceEyebrow: "03 // Environmental Excellence",
    complianceHeading: "Aligned with Saudi Green Initiative water conservation.",
    complianceDesc:
      "We design all irrigation networks to meet strict water conservation metrics, using central irrigation controllers that automatically throttle water volume based on Riyadh evapotranspiration rates.",
    complianceItems: [
      "Saudi Green Initiative Water Conservation Alignment",
      "ASABE S633 Smart Irrigation System Standards",
      "UV-Stabilized HDPE Irrigation Piping Tested at 10 Bar",
      "IP68 Submersible Waterproof Low-Voltage Lighting",
      "Organic Soil Amendments & Mycorrhizal Fungi Inoculation",
      "Comprehensive Horticultural Maintenance Programs",
    ],
    complianceImage: "/safety/people_safety_culture.jpg",
    relatedDivisions: [
      { num: "02", title: "Residential Complex & Villas", href: "/services/residential-buildings-villas" },
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "08", title: "Building Materials", href: "/services/building-materials" },
    ],
  },

  "building-materials": {
    divisionNum: "08",
    divisionTitle: "Building Material Supplies",
    category: "STRUCTURAL MATERIAL PROCUREMENT & DISTRIBUTION",
    headline: "Direct mill procurement of certified structural materials and rebar.",
    summary:
      "Alfa Gulf’s material division supplies certified structural steel rebar, ready-mix concrete, thermal insulation, cement, and civil consumables directly to contractors and major infrastructure projects throughout the Kingdom with guaranteed Mill Test Certificates (MTR).",
    heroImage: "/services/steel_rebar_supply.jpg",
    heroImageCaption:
      "Direct bulk procurement of ASTM and SASO certified steel rebar, concrete, and building consumables.",
    stats: [
      {
        num: "10,000+",
        label: "Tons Supplied",
        desc: "Certified deformed steel rebar and structural sections",
      },
      {
        num: "100%",
        label: "SASO Certified",
        desc: "Strict compliance with Saudi Standards Organization",
      },
      {
        num: "24/7",
        label: "Logistics Dispatch",
        desc: "Heavy flatbed fleet delivering directly to job sites",
      },
      {
        num: "Tier 1",
        label: "Mill Sources",
        desc: "Hadeed Sabic, Rajhi, and approved regional steel producers",
      },
    ],
    overviewEyebrow: "01 // Supply Chain Assurance",
    overviewHeading: "Eliminating supply bottlenecks for Kingdom megaprojects.",
    overviewDesc:
      "Construction timelines depend on steady material flow. Alfa Gulf maintains dedicated warehousing and logistics fleets in Riyadh and Dammam, supplying high-tensile steel rebar, cement, thermal insulation, and MEP consumables with full batch traceability.",
    accordionItems: [
      {
        title: "Certified Deformed Steel Rebar (Grade 60)",
        content:
          "High-yield deformed steel rebar conforming to ASTM A615 / SASO 2 / ISO 6935-2, available in standard 12-meter lengths and custom cut-and-bend configurations.",
      },
      {
        title: "Ready-Mix Concrete & Specialized Admixtures",
        content:
          "Partnership batching plants supplying OPC, SRC (sulfate resistant), and silica fume concrete with slump guarantees and temperature-controlled delivery.",
      },
      {
        title: "Thermal & Moisture Protection Systems",
        content:
          "Extruded polystyrene (XPS) boards, rockwool insulation, SBS torch-applied bituminous membranes, and liquid polyurea waterproofing coats.",
      },
    ],
    overviewImage: "/services/building_materials.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Core Material Supply Categories",
    capabilitiesDesc:
      "Reliable bulk procurement backed by direct manufacturer warranties and independent laboratory test sheets.",
    capabilities: [
      {
        num: "01",
        title: "Deformed Steel Rebar (8mm to 32mm)",
        desc: "Full range of bar diameters, bundled and tagged with heat numbers and tensile strength yield certificates.",
      },
      {
        num: "02",
        title: "Structural Steel Beams & Channels",
        desc: "HEB, IPE, UNP, and hollow structural sections (HSS) cut to specified fabrication lengths with protective shop primer.",
      },
      {
        num: "03",
        title: "Extruded Polystyrene (XPS) Insulation",
        desc: "High compressive strength thermal insulation boards for roof decks, foundations, and cavity walls compliant with SEC thermal limits.",
      },
      {
        num: "04",
        title: "Waterproofing & Vapor Barriers",
        desc: "Heavy-duty 4mm SBS membranes, dimpled protection drainage sheets, PVC waterstops, and polyurethane sealants.",
      },
      {
        num: "05",
        title: "Masonry Blocks & Concrete Products",
        desc: "Autoclaved aerated concrete (AAC) blocks, hollow concrete blocks, insulated thermal blocks, and precast curb stones.",
      },
      {
        num: "06",
        title: "Jobsite Consumables & Fasteners",
        desc: "Tie wire, rebar spacers, high-tensile grade 8.8 bolts, anchor bolts, chemical anchors, and construction adhesives.",
      },
    ],
    complianceEyebrow: "03 // Quality Verification",
    complianceHeading: "Batch traceability and independent laboratory test sheets.",
    complianceDesc:
      "No material is dispatched without a certified Mill Test Report (MTR). Our quality assurance engineers coordinate third-party tensile testing to ensure zero substandard steel reaches your job site.",
    complianceItems: [
      "SASO Quality Mark (Saudi Standards, Metrology and Quality)",
      "ASTM A615 / A615M Grade 60 Rebar Specification",
      "Full Heat Number Traceability on All Delivered Bundles",
      "Third-Party Independent Laboratory Tensile & Bending Tests",
      "Delivery Fleet Equipped with Hydraulic Unloading Cranes",
      "Competitive Direct Mill Pricing for Bulk Contractor Orders",
    ],
    complianceImage: "/categories/transportation.jpg",
    relatedDivisions: [
      { num: "04", title: "Steel Structures", href: "/services/steel-structures" },
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "10", title: "Demolition & Renovation", href: "/services/demolition-renovation" },
    ],
  },

  "hvac-division": {
    divisionNum: "09",
    divisionTitle: "HVAC Systems",
    category: "CLIMATE CONTROL & CENTRAL CHILLER PLANTS",
    headline: "Engineered thermal comfort and industrial cooling solutions.",
    summary:
      "Alfa Gulf’s HVAC division designs, supplies, installs, and commissions central chilled water plants, VRF multisplit air conditioning systems, industrial air handling units (AHUs), and fabricated galvanized ductwork engineered to master extreme Saudi ambient temperatures.",
    heroImage: "/services/hvac_division.jpg",
    heroImageCaption:
      "Central chilled water plants, cooling towers, and engineered VRF air conditioning installations.",
    stats: [
      {
        num: "5,000+",
        label: "Tons of Cooling",
        desc: "Installed across commercial towers, hospitals & malls",
      },
      {
        num: "50°C+",
        label: "Ambient Design",
        desc: "Engineered specifically for peak Saudi summer temperatures",
      },
      {
        num: "SMACNA",
        label: "Certified Ducting",
        desc: "Leakage-tested galvanized sheet metal duct fabrication",
      },
      {
        num: "30%",
        label: "Energy Savings",
        desc: "High-efficiency inverter compressors and VRF modulation",
      },
    ],
    overviewEyebrow: "01 // Thermal Engineering",
    overviewHeading: "Cooling systems built for relentless desert performance.",
    overviewDesc:
      "Air conditioning is the single largest energy consumer in Saudi buildings. We engineer thermodynamic solutions that balance peak 50°C cooling capacity with energy-efficiency ratings (EER) that comply with SASO and Saudi Energy Efficiency Center (SEEC) mandates.",
    accordionItems: [
      {
        title: "Central Chilled Water Plants & Chillers",
        content:
          "Air-cooled and water-cooled centrifugal and screw chillers, primary/secondary variable speed pumping stations, and thermal energy storage systems.",
      },
      {
        title: "Variable Refrigerant Flow (VRF) Systems",
        content:
          "High-efficiency heat recovery VRF systems enabling simultaneous heating and cooling in separate zones with long refrigerant piping capabilities.",
      },
      {
        title: "Duct Fabrication & Air Distribution",
        content:
          "In-house automated CNC duct fabrication following SMACNA standards, wrapped with fiberglass or elastomeric thermal insulation to prevent condensation.",
      },
    ],
    overviewImage: "/services/chilled_water_plant.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Turnkey HVAC Engineering Capabilities",
    capabilitiesDesc:
      "From thermodynamic cooling load calculations (HAP software) to final room air diffusion balancing.",
    capabilities: [
      {
        num: "01",
        title: "Chiller Plant Installation & Piping",
        desc: "Heavy steel chilled water headers, grooved Victaulic joints, motorized balancing valves, and chemical water treatment systems.",
      },
      {
        num: "02",
        title: "Air Handling Units (AHUs) & FCUs",
        desc: "Double-skin hygienic AHUs with thermal breaks, HEPA filtration for healthcare, and quiet ceiling-concealed fan coil units.",
      },
      {
        num: "03",
        title: "Galvanized Sheet Metal Ductwork",
        desc: "Lockformer seam fabrication, acoustic internal lining, fire dampers, motorized volume control dampers (VCD), and linear slot diffusers.",
      },
      {
        num: "04",
        title: "Kitchen Ecology & Exhaust Systems",
        desc: "High-temperature exhaust ducting with grease filters, electrostatic precipitators (ESP), and makeup air fans for commercial kitchens.",
      },
      {
        num: "05",
        title: "Smoke Management & Staircase Pressurization",
        desc: "Saudi Civil Defense certified smoke spill fans, fire-rated duct wraps, and differential pressure sensors ensuring exit escape safety.",
      },
      {
        num: "06",
        title: "Testing, Adjusting & Balancing (TAB)",
        desc: "Complete airflow hood measurements, water flow meter calibration, and sound level decibel checks verifying design comfort.",
      },
    ],
    complianceEyebrow: "03 // Standards & SEEC Adherence",
    complianceHeading: "SASO energy efficiency ratings and ASHRAE ventilation compliance.",
    complianceDesc:
      "Every system is designed according to ASHRAE 62.1 fresh air ventilation standards, with refrigerants strictly conforming to Montreal Protocol ozone-friendly guidelines (R-410A / R-32).",
    complianceItems: [
      "Saudi Energy Efficiency Center (SEEC) High-EER Compliance",
      "SMACNA HVAC Duct Construction Standards (Metal and Flexible)",
      "ASHRAE 90.1 Energy Standard for Buildings",
      "Saudi Civil Defense Fire Damper & Pressurization Approvals",
      "Pressure-Tested Refrigerant Lines with Nitrogen Purging",
      "Certified Air & Water Balancing Report Included",
    ],
    complianceImage: "/safety/teamwork_structural.jpg",
    relatedDivisions: [
      { num: "03", title: "MEP Services", href: "/services/mep-services" },
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "05", title: "Fit-Out Works", href: "/services/fitout-works" },
    ],
  },

  "demolition-renovation": {
    divisionNum: "10",
    divisionTitle: "Demolition & Renovation",
    category: "CONTROLLED STRUCTURAL DISMANTLING & RETROFITTING",
    headline: "Safe, precision dismantling and structural rehabilitation.",
    summary:
      "Alfa Gulf executes controlled structural demolition, robotic concrete breaking, diamond wire sawing, load-bearing modifications, and full architectural renovations with certified safety barricading and municipal environmental waste disposal permits.",
    heroImage: "/services/structural_demolition.jpg",
    heroImageCaption:
      "Controlled structural demolition, concrete diamond wire cutting, and building retrofit in Riyadh.",
    stats: [
      {
        num: "35+",
        label: "Dismantling Scopes",
        desc: "Commercial buildings, industrial plants & residential structures",
      },
      {
        num: "Zero",
        label: "Safety Incidents",
        desc: "Exemplary HSE record with zero harm to adjacent properties",
      },
      {
        num: "Diamond",
        label: "Wire Sawing",
        desc: "Vibration-free concrete cutting for sensitive occupied buildings",
      },
      {
        num: "100%",
        label: "Municipal Permits",
        desc: "Balady demolition permits & legal environmental dumping",
      },
    ],
    overviewEyebrow: "01 // Controlled Execution",
    overviewHeading: "Engineered dismantling with zero collateral vibration.",
    overviewDesc:
      "Demolition in dense urban environments requires surgical precision. Our structural engineers prepare phased dismantling plans, install temporary shoring, and use vibration-damped hydraulic breakers to protect neighboring buildings, active utilities, and foundation soil.",
    accordionItems: [
      {
        title: "Total & Selective Building Demolition",
        content:
          "Mechanical dismantling of multi-story reinforced concrete structures, steel frameworks, and industrial warehouses using heavy excavators with hydraulic shears.",
      },
      {
        title: "Diamond Core Drilling & Wire Sawing",
        content:
          "Dust-controlled, vibration-free concrete cutting for new elevator shafts, MEP penetrations, staircase openings, and structural beam removal.",
      },
      {
        title: "Structural Retrofitting & Carbon Fiber (CFRP)",
        content:
          "Strengthening existing concrete columns and slabs using carbon fiber reinforced polymers (CFRP), steel jacketing, and epoxy crack injection.",
      },
    ],
    overviewImage: "/services/demolition_renovation.jpg",
    capabilitiesEyebrow: "02 // Division Scope",
    capabilitiesHeading: "Precision Demolition & Renovation Services",
    capabilitiesDesc:
      "From initial Balady permit acquisition to final slab retrofitting and site clearance.",
    capabilities: [
      {
        num: "01",
        title: "Controlled Concrete Demolition",
        desc: "Robotic remote-controlled Brokk demolition machines for tight basements and sensitive internal slab removals.",
      },
      {
        num: "02",
        title: "Diamond Wire Sawing & Stitch Drilling",
        desc: "Clean cutting through heavily reinforced concrete walls up to 1.5 meters thick with zero structural micro-cracking.",
      },
      {
        num: "03",
        title: "Interior Strip-Out & Architectural Demolition",
        desc: "Fast-track removal of non-load-bearing masonry, drywall, ceilings, floor tiles, and obsolete MEP conduits.",
      },
      {
        num: "04",
        title: "Structural Shoring & Temporary Propping",
        desc: "Engineered heavy-duty steel props and needle beams supporting upper floors during load-bearing wall removal.",
      },
      {
        num: "05",
        title: "CFRP Structural Strengthening",
        desc: "High-tensile carbon fiber wrap applications increasing load-bearing capacity for building repurposing and additional floors.",
      },
      {
        num: "06",
        title: "Debris Haulage & Recycled Aggregates",
        desc: "Dust-suppressed hauling with licensed dump trucks to authorized municipal recycling facilities.",
      },
    ],
    complianceEyebrow: "03 // Safety Protocols",
    complianceHeading: "Balady permits, Civil Defense clearance, and seismic monitoring.",
    complianceDesc:
      "All demolition operations are backed by approved engineering method statements (MSRA), real-time vibration monitoring sensors on adjacent properties, and licensed safety marshals.",
    complianceItems: [
      "Official Balady Municipality Demolition Permits",
      "Civil Defense Safety Barricade and Fire Safety Clearances",
      "Vibration Monitoring on Neighboring Structural Foundations",
      "Dust Suppression Water-Mist Cannons Operating Continuously",
      "Certified Structural Temporary Shoring Calculations",
      "Licensed Hazardous Material & Waste Disposal Tracking",
    ],
    complianceImage: "/safety/safety_team_site.jpg",
    relatedDivisions: [
      { num: "01", title: "Commercial Projects", href: "/services/commercial-projects" },
      { num: "04", title: "Steel Structures", href: "/services/steel-structures" },
      { num: "05", title: "Fit-Out Works", href: "/services/fitout-works" },
    ],
  },
}
