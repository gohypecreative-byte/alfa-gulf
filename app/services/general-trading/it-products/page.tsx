import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "IT Products & Supplies | Alfa Gulf General Trading",
  description: "Bulk procurement of enterprise networking gear, laptops, and peripheral hardware in Saudi Arabia.",
}

export default function ItProductsSubPage() {
  const data = SUB_SERVICES_DATA["it-products"]
  return <SubServiceDetailView data={data} />
}
