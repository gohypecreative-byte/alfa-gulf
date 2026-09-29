import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "General Construction | Alfa Gulf",
  description: "Turnkey civil engineering and general contracting for commercial and municipal developments in Saudi Arabia.",
}

export default function GeneralConstructionPage() {
  const data = SUB_SERVICES_DATA["general-construction"]
  return <SubServiceDetailView data={data} />
}
