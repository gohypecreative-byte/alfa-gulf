import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Global Sourcing & Supply Chain | Alfa Gulf General Trading",
  description: "International procurement, customs clearance, and Kingdom-wide logistics in Saudi Arabia.",
}

export default function SourcingSupplySubPage() {
  const data = SUB_SERVICES_DATA["sourcing-supply"]
  return <SubServiceDetailView data={data} />
}
