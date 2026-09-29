import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping | Alfa Gulf Construction",
  description: "Architectural plazas, granite hardscaping, and automated drip irrigation in Saudi Arabia.",
}

export default function LandscapingSubPage() {
  const data = SUB_SERVICES_DATA["landscaping"]
  return <SubServiceDetailView data={data} />
}
