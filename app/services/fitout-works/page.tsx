import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Fit-Out Works | Alfa Gulf Construction & Technologies",
  description:
    "Turnkey corporate interior fit-out, acoustic partitioning, architectural millwork, and luxury retail finishing in Riyadh, Saudi Arabia.",
}

export default function FitoutWorksPage() {
  const data = SERVICES_DATA["fitout-works"]
  return <ServiceDetailView data={data} />
}
