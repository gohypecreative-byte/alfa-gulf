import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Residential Complex & Villas | Alfa Gulf Construction & Technologies",
  description:
    "Bespoke luxury private villas, gated residential compounds, and master-planned community developments across Saudi Arabia.",
}

export default function ResidentialBuildingsVillasPage() {
  const data = SERVICES_DATA["residential-buildings-villas"]
  return <ServiceDetailView data={data} />
}
