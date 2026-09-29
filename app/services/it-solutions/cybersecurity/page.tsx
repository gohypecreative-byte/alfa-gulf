import { Metadata } from "next"
import { ITNetworkView } from "@/components/services/it/it-network-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | Alfa Gulf IT Solutions",
  description: "Next-generation firewalls, endpoint protection, and zero-trust security in Saudi Arabia.",
}

export default function CybersecuritySubPage() {
  const data = SUB_SERVICES_DATA["cybersecurity"]
  return <ITNetworkView data={data} />
}
