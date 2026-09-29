import { Metadata } from "next"
import { ITNetworkView } from "@/components/services/it/it-network-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "IP Telephony Solutions | Alfa Gulf IT Solutions",
  description: "IP PBX communication systems, VoIP phones, and SIP trunking in Saudi Arabia.",
}

export default function IpTelephonySubPage() {
  const data = SUB_SERVICES_DATA["ip-telephony"]
  return <ITNetworkView data={data} />
}
