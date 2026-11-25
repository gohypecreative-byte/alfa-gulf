export function VideoScrollHero() {
  return (
    <div
      id="video-hero-section"
      className="relative w-full h-svh md:h-auto md:aspect-video bg-slate-950 select-none"
    >
      {/* Keep the complete 16:9 frame visible on desktop. */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-slate-950">
        <video
          src="/alfa-hero-1080p.mp4"
          poster="/alfa-hero-poster.webp"
          width={1920}
          height={1080}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover md:object-contain"
        />

      </div>
    </div>
  )
}
