import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Building Material Supplies | Alfa Gulf Construction & Technologies",
  description:
    "Direct mill procurement and site distribution of ASTM & SASO certified deformed steel rebar, ready-mix concrete, thermal insulation, and civil consumables in Saudi Arabia.",
}

export default function BuildingMaterialsPage() {
  const data = SERVICES_DATA["building-materials"]
  return <ServiceDetailView data={data} />
}
