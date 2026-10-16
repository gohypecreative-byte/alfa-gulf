import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Commercial Projects | Alfa Gulf Construction & Technologies",
  description:
    "Turnkey engineering, procurement, and construction for office towers, commercial complexes, and logistics hubs in Saudi Arabia.",
}

export default function CommercialProjectsPage() {
  const data = SERVICES_DATA["commercial-projects"]
  return <ServiceDetailView data={data} />
}
