"use client"

import { useState } from "react"
import Link from "next/link"
import { ServicesStackInteractor, type MenuItem } from "@/components/ui/connoisseur-stack-interactor"
import { SERVICE_DIVISIONS } from "@/lib/services"

const labels = ["Construction", "IT solutions", "General trading"]
const descriptions = [
  "From foundations to finishing touches, ALFA GULF CONTRACTING delivers construction and building systems for your project.",
  "ALFA GULF CONTRACTING connects your workplace with secure infrastructure, integrated technology, and ongoing IT support.",
  "ALFA GULF CONTRACTING supplies the materials, equipment, and workplace essentials that keep your projects moving.",
]
const divisions: MenuItem[][] = SERVICE_DIVISIONS.map((division) =>
  division.items.map((item) => ({
    num: item.num,
    name: item.title,
    image: item.href === "/services/construction/general-construction" || item.href === "/services/construction/steel-structure"
      ? "/services/construction-overview-generated.webp"
      : item.image,
    pattern: "hexagons",
    slug: item.href.replace("/services/", ""),
    category: division.title,
  }))
)

export function HomeServices() {
  const [selected, setSelected] = useState(0)
  return (
    <ServicesStackInteractor
      items={divisions[selected]}
      description={descriptions[selected]}
      controls={
        <div className="space-y-6">
          <div role="group" aria-label="Service divisions" className="flex flex-col items-start gap-1">
            {labels.map((label, index) => (
              <button
                key={label}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
                className={`min-h-11  py-2 pl-4 text-left text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${selected === index ? "border-brand font-semibold text-brand" : "border-transparent text-slate-500 hover:text-brand"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <Link href="/services" className="inline-flex min-h-11 items-center text-sm font-medium text-brand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">View all services</Link>
        </div>
      }
    />
  )
}
