import { Metadata } from "next"
import { ITDataCenterView } from "@/components/services/it/it-datacenter-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Structured Cabling | Alfa Gulf IT Solutions",
  description: "Category 6A copper cabling and OM4/OS2 optical fiber backbones in Saudi Arabia.",
}

export default function StructuredCablingSubPage() {
  const data = SUB_SERVICES_DATA["structured-cabling"]
  return <ITDataCenterView data={data} />
}
