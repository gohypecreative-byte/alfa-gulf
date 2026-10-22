export interface ServiceDetailData {
  divisionNum: string
  divisionTitle: string
  category: string
  headline: string
  summary: string
  heroImage: string
  heroImageCaption: string
  stats: {
    num: string
    label: string
    desc: string
  }[]
  overviewEyebrow: string
  overviewHeading: string
  overviewDesc: string
  accordionItems: {
    title: string
    content: string
  }[]
  overviewImage: string
  capabilitiesEyebrow: string
  capabilitiesHeading: string
  capabilitiesDesc: string
  capabilities: {
    num: string
    title: string
    desc: string
  }[]
  complianceEyebrow: string
  complianceHeading: string
  complianceDesc: string
  complianceItems: string[]
  complianceImage: string
  relatedDivisions: {
    num: string
    title: string
    href: string
  }[]
}

export interface SubServiceData {
  slug: string
  title: string
  category: string
  department: string // "CONSTRUCTION SERVICES" | "IT SOLUTIONS" | "GENERAL TRADING"
  headline: string
  description: string
  heroImage: string
  /** Optional scroll-scrubbed frame sequence that replaces the static hero. */
  heroFrames?: { dir: string; count: number; digits?: number; ext?: "webp" | "jpg" }
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  complianceItems?: string[]
  /** Real site photos shown in place of the stock showcase banner. */
  gallery?: { src: string; alt: string; caption?: string }[]
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
    certificateNumber?: string
    href?: string
  }[]
  certificationRecord?: string
  parentHref: string
  parentTitle: string
}

export interface ITDataCenterData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  parentHref: string
  parentTitle: string
}

export interface ITNetworkData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  gallery?: { src: string; alt: string; caption?: string }[]
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  parentHref: string
  parentTitle: string
}

export interface ITSecurityData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  galleryImage?: string
  showcaseBanner?: string
  complianceImage: string
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  parentHref: string
  parentTitle: string
}

export interface ITWorkplaceData {
  slug: string
  title: string
  category: string
  headline: string
  description: string
  heroImage: string
  overviewImage: string
  showcaseBanner: string
  complianceImage: string
  features: {
    title: string
    desc: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  parentHref: string
  parentTitle: string
}
