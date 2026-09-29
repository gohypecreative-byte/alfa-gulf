import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Steel Structures | Alfa Gulf Construction",
  description: "Heavy industrial structural steel fabrication, erection, and clear-span engineering in Saudi Arabia.",
}

export default function SteelStructureSubPage() {
  const data = SUB_SERVICES_DATA["steel-structure"]
  return <SubServiceDetailView data={data} />
}
