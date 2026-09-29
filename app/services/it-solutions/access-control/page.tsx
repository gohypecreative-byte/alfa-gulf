import { Metadata } from "next"
import { ITSecurityView } from "@/components/services/it/it-security-view"
import { SUB_SERVICES_DATA } from "@/components/services/sub-services-data"

export const metadata: Metadata = {
  title: "Access Control & Biometrics | Alfa Gulf IT Solutions",
  description: "Touchless facial recognition, biometric readers, and automated gate barriers in Saudi Arabia.",
}

export default function AccessControlSubPage() {
  const data = SUB_SERVICES_DATA["access-control"]
  return <ITSecurityView data={data} />
}
