import { Metadata } from "next"
import { ITDataCenterView } from "@/components/services/it/it-datacenter-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Uninterruptible Power Supply (UPS) | Alfa Gulf IT Solutions",
  description: "Industrial online double-conversion UPS systems and battery banks in Saudi Arabia.",
}

export default function UpsSubPage() {
  const data = SUB_SERVICES_DATA["ups"]
  return <ITDataCenterView data={data} />
}
