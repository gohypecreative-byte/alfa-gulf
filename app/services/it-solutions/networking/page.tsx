import { Metadata } from "next"
import { ITNetworkView } from "@/components/services/it/it-network-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Network Infrastructure | Alfa Gulf IT Solutions",
  description: "Core routing, managed PoE switches, and high-density enterprise Wi-Fi 6 in Saudi Arabia.",
}

export default function NetworkingSubPage() {
  const data = SUB_SERVICES_DATA["networking"]
  return <ITNetworkView data={data} />
}
