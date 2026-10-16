import { ArrowRight } from "lucide-react"
import { COMPANY_CERTIFICATES, CERTIFICATION_RECORD } from "@/data/certifications"

export function CertificationsSection() {
  return (
        <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="mb-12 space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0081c6] uppercase">
                Certifications &amp; Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-zinc-950">
                Certified Management Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPANY_CERTIFICATES.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2"
                >
                  <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-zinc-900">{spec.value}</p>
                  {spec.certificateNumber && <p className="text-sm text-zinc-600">Certificate No. {spec.certificateNumber}</p>}
                  {spec.href && (
                    <a href={spec.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#0081c6] hover:underline">
                      View certificate (PDF) <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            {CERTIFICATION_RECORD && (
              <div className="mt-8 space-y-3 text-sm text-zinc-600">
                <p>Issued by Recto Solutions Private Limited on 17 March 2026. Certification cycle expires 16 March 2029, subject to successful annual surveillance audits.</p>
                <a href={CERTIFICATION_RECORD} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#0081c6] hover:underline">
                  View supplied IAF verification record (PDF) <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </section>
  )
}
