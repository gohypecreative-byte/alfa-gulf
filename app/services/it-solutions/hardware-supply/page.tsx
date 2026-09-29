import { Metadata } from "next"
import { ITWorkplaceView } from "@/components/services/it/it-workplace-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "IT Hardware Supply | Alfa Gulf IT Solutions",
  description: "Enterprise servers, workstations, storage SAN, and commercial peripherals in Saudi Arabia.",
}

export default function HardwareSupplySubPage() {
  const data = SUB_SERVICES_DATA["hardware-supply"]
  return <ITWorkplaceView data={data} />
}
