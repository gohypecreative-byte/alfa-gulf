import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Demolition & Dismantling | Alfa Gulf Construction",
  description: "Controlled structural demolition, concrete wire-sawing, and site remediation in Saudi Arabia.",
}

export default function DemolitionSubPage() {
  const data = SUB_SERVICES_DATA["demolition"]
  return <SubServiceDetailView data={data} />
}
