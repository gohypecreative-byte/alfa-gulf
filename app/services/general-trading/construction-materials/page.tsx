import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Construction Materials | Alfa Gulf General Trading",
  description: "Direct mill supply of SASO deformed steel rebar, ready-mix concrete, and cement in Saudi Arabia.",
}

export default function ConstructionMaterialsSubPage() {
  const data = SUB_SERVICES_DATA["construction-materials"]
  return <SubServiceDetailView data={data} />
}
