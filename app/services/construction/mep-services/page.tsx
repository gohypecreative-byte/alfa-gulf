import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "MEP Services | Alfa Gulf Construction",
  description: "Integrated mechanical, electrical, and plumbing infrastructure for commercial assets in Saudi Arabia.",
}

export default function ConstructionMepPage() {
  const data = SUB_SERVICES_DATA["mep-services"]
  return <SubServiceDetailView data={data} />
}
