export function VideoScrollHero() {
  return (
    <div
      id="video-hero-section"
      className="relative mt-20 w-full aspect-video max-h-[calc(100svh-5rem)] bg-slate-950 select-none md:mt-[84px] md:max-h-[calc(100svh-84px)]"
    >
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-slate-950">
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
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
