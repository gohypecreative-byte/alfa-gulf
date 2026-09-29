import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Fit-Out & Renovation | Alfa Gulf Construction",
  description: "Bespoke corporate interior fit-out, acoustic partitioning, and luxury finishing in Saudi Arabia.",
}

export default function FitOutRenovationSubPage() {
  const data = SUB_SERVICES_DATA["fit-out-renovation"]
  return <SubServiceDetailView data={data} />
}
