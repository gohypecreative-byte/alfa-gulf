import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "Passive Fireproofing | Alfa Gulf Construction",
  description: "UL-certified intumescent and cementitious fireproofing coatings for steel structures in Saudi Arabia.",
}

export default function FireproofingWorksSubPage() {
  const data = SUB_SERVICES_DATA["fireproofing-works"]
  return <SubServiceDetailView data={data} />
}
