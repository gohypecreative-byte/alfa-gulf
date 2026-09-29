import { Metadata } from "next"
import { ITWorkplaceView } from "@/components/services/it/it-workplace-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Smart Meeting Rooms | Alfa Gulf IT Solutions",
  description: "Video conferencing systems, interactive touch displays, and room scheduling in Saudi Arabia.",
}

export default function MeetingRoomsSubPage() {
  const data = SUB_SERVICES_DATA["meeting-rooms"]
  return <ITWorkplaceView data={data} />
}
