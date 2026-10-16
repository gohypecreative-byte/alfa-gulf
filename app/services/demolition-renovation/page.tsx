import { Metadata } from "next"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { SERVICES_DATA } from "@/data/services/divisions"

export const metadata: Metadata = {
  title: "Demolition & Renovation | Alfa Gulf Construction & Technologies",
  description:
    "Controlled structural demolition, robotic concrete breaking, diamond wire sawing, structural retrofitting, and Balady municipal permits in Saudi Arabia.",
}

export default function DemolitionRenovationPage() {
  const data = SERVICES_DATA["demolition-renovation"]
  return <ServiceDetailView data={data} />
}
