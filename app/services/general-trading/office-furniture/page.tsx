import { Metadata } from "next"
import { SubServiceDetailView } from "@/components/services/sub-service-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Commercial Office Furniture | Alfa Gulf General Trading",
  description: "Ergonomic workstations, executive desks, boardroom tables, and acoustic seating in Saudi Arabia.",
}

export default function OfficeFurnitureSubPage() {
  const data = SUB_SERVICES_DATA["office-furniture"]
  return <SubServiceDetailView data={data} />
}
