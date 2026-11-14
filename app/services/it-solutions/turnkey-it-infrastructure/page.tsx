import type { Metadata } from "next"
import { ITWorkplaceView } from "@/components/services/it/it-workplace-view"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "Complete Office IT Setup & Turnkey IT Infrastructure | Alfa Gulf",
  description: "Complete office IT design, cabling, networking, Wi-Fi, devices, security, and commissioning in Saudi Arabia.",
}

export default function TurnkeyITInfrastructurePage() {
  return <ITWorkplaceView data={SUB_SERVICES_DATA["turnkey-it-infrastructure"]} />
}
