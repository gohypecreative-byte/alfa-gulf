import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Perimeter Fencing & Barriers | Alfa Gulf Construction",
  description: "High-security perimeter fencing, crash-rated anti-ram bollards, and boundary walls in Saudi Arabia.",
}

export default function FencingBarriersSubPage() {
  const data = SUB_SERVICES_DATA["fencing-barriers"]
  return <SubServiceDetailView data={data} />
}
