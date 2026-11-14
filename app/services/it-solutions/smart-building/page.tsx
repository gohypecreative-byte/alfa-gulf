import type { Metadata } from "next"
import { ITWorkplaceView } from "@/components/services/it/it-workplace-view"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "Smart Building & Technology Integration | Alfa Gulf IT Solutions",
  description: "Integrated building controls, lighting, security, IoT networks, and facility monitoring in Saudi Arabia.",
}

export default function SmartBuildingPage() {
  return <ITWorkplaceView data={SUB_SERVICES_DATA["smart-building"]} />
}
