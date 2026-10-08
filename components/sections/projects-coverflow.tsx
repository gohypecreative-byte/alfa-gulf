"use client";

import React from "react";
import Image from "next/image";
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel";

interface Photo {
  src: string;
  alt: string;
}

export interface ProjectStage {
  id: string;
  title: string;
  summary: string;
  scope: string[];
  photos: Photo[];
}

/**
 * Real site photos from ongoing and recently completed works, ordered by the
 * project execution sequence. Photos live in /public/service-img.
 */
export const PROJECT_STAGES: ProjectStage[] = [
  {
    id: "floor",
    title: "Floor works",
    summary: "Industrial epoxy flooring with colour-zoned machine bays.",
    scope: [
      "Surface preparation",
      "Epoxy floor coating / finishing",
      "Industrial floor protection",
      "Work-zone colour segregation",
      "Floor marking / demarcation",
    ],
    photos: [
      { src: "/service-img/floor-epoxy-01.jpg", alt: "Blue epoxy floor with colour-zoned machine bays in an industrial workshop" },
      { src: "/service-img/floor-epoxy-02.jpg", alt: "Finished epoxy floor coating around CNC machinery with zone segregation" },
    ],
  },
  {
    id: "ceiling",
    title: "Ceiling works",
    summary: "Ceiling-level ductwork, fan coil units and service routing in open shell spaces.",
    scope: [
      "Ceiling-level ductwork and fan coil unit installation",
      "Overhead service routing above the ceiling line",
      "Support framing and hangers",
      "Ceiling services coordination",
    ],
    photos: [
      { src: "/service-img/ceiling-01.jpg", alt: "Ductwork, fan coil units and fire piping installed at ceiling level in a shell building" },
      { src: "/service-img/ceiling-02.jpg", alt: "Ceiling-level mechanical services across an open floor plate" },
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    summary: "Containment, conduit routing and ceiling-level power distribution.",
    scope: [
      "Electrical conduit routing",
      "Cable tray and containment installation",
      "Ceiling-level electrical distribution",
      "Power supply to lighting and equipment",
    ],
    photos: [
      { src: "/service-img/electrical-01.jpg", alt: "Cable tray and electrical containment running beside mechanical services" },
      { src: "/service-img/electrical-02.jpg", alt: "Surface conduit routing and distribution on a workshop ceiling" },
    ],
  },
  {
    id: "mep",
    title: "MEP",
    summary: "Mechanical and electrical services installed and coordinated overhead.",
    scope: [
      "Mechanical and electrical service coordination",
      "Overhead service routing",
      "Pipe / conduit supports",
      "MEP installation in industrial facilities",
      "Ceiling services coordination",
    ],
    photos: [
      { src: "/service-img/mep-01.jpg", alt: "Coordinated overhead MEP services above an industrial machine hall" },
      { src: "/service-img/mep-02.jpg", alt: "MEP services installed across the ceiling of a commercial shell space" },
    ],
  },
  {
    id: "fire",
    title: "Fire systems",
    summary: "Firefighting piping networks installed and supported to standard.",
    scope: [
      "Firefighting / sprinkler piping installation",
      "Pipe supports and hangers",
      "Branch piping distribution",
      "Fire protection network installation",
    ],
    photos: [
      { src: "/service-img/fire-01.jpg", alt: "Red fire protection piping with branch distribution across a workshop ceiling" },
      { src: "/service-img/fire-02.jpg", alt: "Fire protection riser with pipe supports and hangers at ceiling level" },
    ],
  },
  {
    id: "lighting",
    title: "Lighting",
    summary: "High-bay LED lighting laid out and commissioned in working facilities.",
    scope: [
      "LED industrial lighting installation",
      "Lighting fixture installation",
      "Lighting layout and final installation",
    ],
    photos: [
      { src: "/service-img/lighting-01.jpg", alt: "Completed LED high-bay lighting over a workshop with floor markings" },
      { src: "/service-img/lighting-02.jpg", alt: "Industrial lighting layout commissioned above a machine hall" },
    ],
  },
  {
    id: "finishes",
    title: "Finishes",
    summary: "Natural stone wall cladding set, aligned and finished on site.",
    scope: [
      "Natural stone wall cladding",
      "Stone panel setting and alignment",
      "Jointing, pointing and cleaning",
      "External wall finishes",
    ],
    photos: [
      { src: "/service-img/finishes-01.jpg", alt: "Completed natural stone cladding on an external wall" },
      { src: "/service-img/finishes-02.jpg", alt: "Finished stone cladding across a block wall" },
      { src: "/service-img/finishes-03.jpg", alt: "Stone cladding panel being set within a timber frame on scaffolding" },
      { src: "/service-img/finishes-04.jpg", alt: "Stone pieces being levelled and aligned during cladding works" },
    ],
  },
];

interface SiteClip {
  src: string;
  poster: string;
  title: string;
}

const SITE_CLIPS: SiteClip[] = [
  { src: "/site-clips/site-piling.mp4", poster: "/site-clips/site-piling.jpg", title: "Piling and site works" },
  { src: "/site-clips/electrical-trenching.mp4", poster: "/site-clips/electrical-trenching.jpg", title: "Cable trenching" },
  { src: "/site-clips/mep-interior.mp4", poster: "/site-clips/mep-interior.jpg", title: "MEP shell walkthrough" },
  { src: "/site-clips/stone-finishes.mp4", poster: "/site-clips/stone-finishes.jpg", title: "Stone cladding works" },
];

export const ALFA_GULF_PROJECTS: CoverflowSlide[] = PROJECT_STAGES.flatMap((stage, idx) =>
  stage.photos.slice(0, 2).map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    title: `${String(idx + 1).padStart(2, "0")} · ${stage.title}`,
    subtitle: stage.summary,
  })),
);

function SiteClipCard({ clip }: { clip: SiteClip }) {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="flex flex-col">
      <div className="relative aspect-9/16 w-full rounded-xl overflow-hidden bg-zinc-100">
        <video
          ref={ref}
          src={clip.src}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm font-medium text-zinc-800">{clip.title}</figcaption>
    </figure>
  );
}

export function ProjectsCoverflowSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const stage = PROJECT_STAGES[activeIdx];

  return (
    <section className="relative w-full bg-white text-zinc-900 pt-8 sm:pt-10 md:pt-12 pb-20 sm:pb-28 md:pb-36 overflow-hidden border-t border-zinc-100/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-zinc-900">
            Projects
          </span>
          <span className="w-14 sm:w-20 md:w-24 h-[1.5px] bg-orange-600"></span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Ongoing and recently completed works
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
            Real photos and footage from our sites, in the order we deliver a
            project: floor, ceiling, electrical, MEP, fire systems, lighting and
            finishes.
          </p>
        </div>
      </div>

      {/* Photo carousel */}
      <div className="w-full">
        <CoverflowCarousel
          slides={ALFA_GULF_PROJECTS}
          label="Project photos"
          cardWidth="clamp(220px, 25vw, 360px)"
          rotate={40}
          depth={0.65}
          perspective={2.8}
          gap={0.08}
          showCaption={true}
          showNavigation={true}
          showPagination={true}
          cardClassName="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 hover:ring-orange-500/40 transition-shadow duration-300"
        />
      </div>

      {/* Stage selector */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 sm:mt-20">
        <div
          role="tablist"
          aria-label="Project stages"
          className="flex flex-wrap gap-2 border-b border-zinc-200 pb-4"
        >
          {PROJECT_STAGES.map((s, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                }`}
              >
                <span className={`text-[11px] tabular-nums ${isActive ? "text-orange-400" : "text-zinc-400"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Stage detail */}
        <div key={stage.id} className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-in fade-in duration-300">
          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            {stage.photos.map((photo) => (
              <div key={photo.src} className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-zinc-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-600">
              Stage {String(activeIdx + 1).padStart(2, "0")} of {PROJECT_STAGES.length}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">{stage.title}</h3>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">{stage.summary}</p>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Scope of works
            </p>
            <ul className="mt-3 space-y-2.5">
              {stage.scope.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-zinc-800 leading-snug">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Site footage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 sm:mt-24">
        <div className="max-w-3xl mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">From the site</h3>
          <p className="mt-2 text-zinc-600 leading-relaxed">
            Short clips recorded by our teams during execution.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SITE_CLIPS.map((clip) => (
            <SiteClipCard key={clip.src} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCoverflowSection;
