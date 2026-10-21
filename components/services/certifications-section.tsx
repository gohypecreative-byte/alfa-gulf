import { ArrowUpRight, Download, ShieldCheck, Leaf, HardHat } from "lucide-react"
import { COMPANY_CERTIFICATES, CERTIFICATION_RECORD } from "@/data/certifications"

const CERTIFICATE_ICONS = [ShieldCheck, Leaf, HardHat]
const CERTIFICATE_TITLES = ["Quality management", "Environmental management", "Occupational health & safety"]

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-28 bg-gradient-to-br from-white to-brand-soft px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[0.85fr_1.65fr] lg:gap-16">
        <div className="lg:pt-3">
          <p className="mb-4 text-sm font-medium text-brand">Our certifications</p>
          <h2 className="max-w-sm text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl">Built on recognised standards.</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">Our management systems cover quality, environmental responsibility, and the health and safety of our people.</p>
          <a href={CERTIFICATION_RECORD} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">View IAF verification record <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>

        <div>
          <div className="space-y-3">
            {COMPANY_CERTIFICATES.map((certificate, index) => {
              const Icon = CERTIFICATE_ICONS[index]
              return (
                <article key={certificate.value} className="flex flex-col gap-5 rounded-md bg-white p-5 shadow-[0_2px_16px_rgba(35,45,146,0.04)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand"><Icon className="size-5" strokeWidth={1.5} aria-hidden="true" /></span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{certificate.value}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{CERTIFICATE_TITLES[index]}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 pl-[60px] sm:pl-0">
                    <a href={certificate.href} target="_blank" rel="noopener noreferrer" aria-label={"View " + certificate.value + " certificate PDF in a new tab"} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">View PDF <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                    <a href={certificate.href} download aria-label={"Download " + certificate.value + " certificate"} title="Download certificate" className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><Download className="size-4" aria-hidden="true" /></a>
                  </div>
                </article>
              )
            })}
          </div>
          <details className="mt-5 text-xs leading-6 text-slate-500">
            <summary className="w-fit cursor-pointer rounded py-2 text-slate-600 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand">Issuance and certificate details</summary>
            <p className="mt-2">Issued by Recto Solutions Private Limited on 17 March 2026. Certification cycle ends 16 March 2029, subject to successful annual surveillance audits.</p>
            <dl className="mt-3 space-y-1">{COMPANY_CERTIFICATES.map(certificate => <div key={certificate.value} className="flex flex-wrap gap-x-3"><dt className="font-medium">{certificate.value}</dt><dd>{certificate.certificateNumber}</dd></div>)}</dl>
          </details>
        </div>
      </div>
    </section>
  )
}
