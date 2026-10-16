import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "IT & CCTV Services | Alfa Gulf Construction & Technologies",
  description:
    "Enterprise AI IP CCTV surveillance, biometric access control, optical fiber structured cabling, and data center infrastructure in Saudi Arabia.",
}

export default function CctvItSalesPage() {
  const data = SERVICES_DATA["cctv-it-sales"]
  return <ServiceDetailView data={data} />
}
