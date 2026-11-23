"use client"

import * as React from "react"
export function VideoScrollHero() {
  const [isFirstFrameReady, setIsFirstFrameReady] = React.useState(false)

  return (
    <div
      id="video-hero-section"
      className="relative w-full h-svh bg-slate-950 select-none"
    >
      {/* Fullscreen playback viewport */}
      <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-slate-950">
        <video
          src="/alfa_enhanced_4K.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={() => setIsFirstFrameReady(true)}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isFirstFrameReady ? 1 : 0 }}
        />

      </div>
    </div>
  )
}
