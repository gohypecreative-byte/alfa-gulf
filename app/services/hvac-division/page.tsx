import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "HVAC Systems | Alfa Gulf Construction & Technologies",
  description:
    "Central chilled water plants, VRF multisplit systems, duct fabrication, and industrial climate control engineered for extreme Saudi climates.",
}

export default function HvacDivisionPage() {
  const data = SERVICES_DATA["hvac-division"]
  return <ServiceDetailView data={data} />
}
