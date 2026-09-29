import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "HVAC Solutions | Alfa Gulf Construction",
  description: "Central chilled water plants, VRF multisplit systems, and SMACNA ductwork in Saudi Arabia.",
}

export default function HvacSolutionsSubPage() {
  const data = SUB_SERVICES_DATA["hvac-solutions"]
  return <SubServiceDetailView data={data} />
}
