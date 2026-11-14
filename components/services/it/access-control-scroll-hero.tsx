"use client"

import { ScrollFrameSequence } from "@/components/ui/scroll-frame-sequence"

// Sample the full clip, including both endpoints, to limit image memory.
const PLAYBACK_COUNT = 180
const getFramePath = (index: number) =>
  `/access-control/frame_${String(Math.round(index * 460 / (PLAYBACK_COUNT - 1)) + 1).padStart(4, "0")}.webp`

export function AccessControlScrollHero() {
  return (
    <section aria-label="Access control and biometric security showcase">
      <ScrollFrameSequence
        frameCount={PLAYBACK_COUNT}
        getFramePath={getFramePath}
        scrollHeightVh={420}
        fit="cover"
        className="border-b border-zinc-200/80"
      />
    </section>
  )
}
