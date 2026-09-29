import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Industrial Safety Gear & PPE | Alfa Gulf General Trading",
  description: "Certified safety helmets, high-vis vests, steel-toe boots, and fall protection in Saudi Arabia.",
}

export default function IndustrialPpeSubPage() {
  const data = SUB_SERVICES_DATA["industrial-ppe"]
  return <SubServiceDetailView data={data} />
}
