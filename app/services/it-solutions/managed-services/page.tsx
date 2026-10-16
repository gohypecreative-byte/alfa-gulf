import { Metadata } from "next"
import { ITWorkplaceView } from "@/components/services/it/it-workplace-view"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "Managed IT Services | Alfa Gulf IT Solutions",
  description: "24/7 IT helpdesk, network monitoring, and preventative maintenance SLAs in Saudi Arabia.",
}

export default function ManagedServicesSubPage() {
  const data = SUB_SERVICES_DATA["managed-services"]
  return <ITWorkplaceView data={data} />
}
