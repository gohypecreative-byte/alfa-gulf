import { Metadata } from "next"
import { ITDataCenterView } from "@/components/services/it/it-datacenter-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Data Centre Build | Alfa Gulf IT Solutions",
  description: "Tier III certified data center buildout, raised flooring, and precision PAC cooling in Saudi Arabia.",
}

export default function DataCentreSubPage() {
  const data = SUB_SERVICES_DATA["data-centre"]
  return <ITDataCenterView data={data} />
}
