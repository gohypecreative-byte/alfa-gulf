import { Metadata } from "next"
import { ITSecurityView } from "@/components/services/it/it-security-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "CCTV Surveillance Systems | Alfa Gulf IT Solutions",
  description: "High-definition 4K IP security cameras and Civil Defense video retention systems in Saudi Arabia.",
}

export default function CctvSubPage() {
  const data = SUB_SERVICES_DATA["cctv"]
  return <ITSecurityView data={data} />
}
