import { Metadata } from "next"
import { ITDataCenterView } from "@/components/services/it/it-datacenter-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Servers & Data Storage | Alfa Gulf IT Solutions",
  description: "High-performance rack servers, virtualization clusters, and SAN storage in Saudi Arabia.",
}

export default function ServersStorageSubPage() {
  const data = SUB_SERVICES_DATA["servers-storage"]
  return <ITDataCenterView data={data} />
}
