import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "MEP Services | Alfa Gulf Construction & Technologies",
  description:
    "Integrated mechanical, electrical, plumbing, and low-current engineering services for commercial, healthcare, and industrial facilities in Saudi Arabia.",
}

export default function MepServicesPage() {
  const data = SERVICES_DATA["mep-services"]
  return <ServiceDetailView data={data} />
}
