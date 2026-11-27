export function VideoScrollHero() {
  return (
    <div
      id="video-hero-section"
      className="relative w-full bg-slate-950 select-none"
    >
      <video
        src="/ALF-cleaned.mp4"
        width={1920}
        height={1080}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="block h-auto w-full"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent md:h-36" />
    </div>
  )
}
