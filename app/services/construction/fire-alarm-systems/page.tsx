import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Fire Alarm & Detection | Alfa Gulf Construction",
  description: "Addressable fire detection, optical smoke sensors, and Civil Defense integration in Saudi Arabia.",
}

export default function FireAlarmSystemsSubPage() {
  const data = SUB_SERVICES_DATA["fire-alarm-systems"]
  return <SubServiceDetailView data={data} />
}
