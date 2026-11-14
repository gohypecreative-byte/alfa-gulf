import { Metadata } from "next"
import { ITSecurityView } from "@/components/services/it/it-security-view"
import { AccessControlScrollHero } from "@/components/services/it/access-control-scroll-hero"
import { SUB_SERVICES_DATA } from "@/data/services/sub-services"

export const metadata: Metadata = {
  title: "Access Control & Biometrics | Alfa Gulf IT Solutions",
  description: "Touchless facial recognition, biometric readers, and automated gate barriers in Saudi Arabia.",
}

export default function AccessControlSubPage() {
  const data = SUB_SERVICES_DATA["access-control"]
  return <ITSecurityView data={data} hero={<AccessControlScrollHero />} />
}
