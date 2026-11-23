const certifications = [
  {
    standard: "ISO 9001",
    title: "Quality management",
    file: "IAS170391601- 9001.pdf",
  },
  {
    standard: "ISO 14001",
    title: "Environmental management",
    file: "IAS1703141602- 14001.pdf",
  },
  {
    standard: "ISO 45001",
    title: "Occupational health & safety",
    file: "IAS1703451603 - 45001.pdf",
  },
]

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="bg-white px-6 py-14 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-[1312px]">
        <div className="mb-8">
          <h2
            id="certifications-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Our certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map(({ standard, title, file }) => (
            <article
              key={standard}
              className="flex flex-col rounded-lg border border-slate-200 p-6"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-brand">
                {standard}
              </h3>
              <p className="mb-4 mt-2 text-base leading-relaxed text-slate-600">
                {title}
              </p>
              <a
                href={`/${encodeURIComponent(file)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${standard} certificate (PDF, opens in a new tab)`}
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-brand underline underline-offset-4 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                View certificate
                <span className="font-normal text-slate-500">(PDF)</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
