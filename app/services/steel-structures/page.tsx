import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Steel Structure & Fire Proofing | Alfa Gulf Construction & Technologies",
  description:
    "Heavy structural steel fabrication, pre-engineered buildings, and UL-certified intumescent fireproofing solutions in Saudi Arabia.",
}

export default function SteelStructuresPage() {
  const data = SERVICES_DATA["steel-structures"]
  return <ServiceDetailView data={data} />
}
