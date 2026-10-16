import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Landscaping Works | Alfa Gulf Construction & Technologies",
  description:
    "Architectural hardscaping, automated smart irrigation, pergolas, and sustainable desert flora landscapes in Riyadh, Saudi Arabia.",
}

export default function LandscapingWorksPage() {
  const data = SERVICES_DATA["landscaping-works"]
  return <ServiceDetailView data={data} />
}
