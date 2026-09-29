import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Fire Life & Safety | Alfa Gulf Construction",
  description: "Automatic fire sprinklers, clean agent gas suppression, and fire pump sets in Saudi Arabia.",
}

export default function FireLifeSafetySubPage() {
  const data = SUB_SERVICES_DATA["fire-life-safety"]
  return <SubServiceDetailView data={data} />
}
