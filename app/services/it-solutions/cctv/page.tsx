import { Metadata } from "next"
import { ITSecurityView } from "@/components/services/it/it-security-view"
import { CctvScrollHero } from "@/components/services/it/cctv-scroll-hero"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "CCTV Surveillance Systems | Alfa Gulf IT Solutions",
  description: "High-definition 4K IP security cameras and Civil Defense video retention systems in Saudi Arabia.",
}

export default function CctvSubPage() {
  const data = SUB_SERVICES_DATA["cctv"]
  return <ITSecurityView data={data} hero={<CctvScrollHero key="cctv-scroll-hero" />} />
}
