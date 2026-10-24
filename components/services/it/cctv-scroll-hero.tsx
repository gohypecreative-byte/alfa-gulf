"use client"

import { useSyncExternalStore } from "react"
import Image from "next/image"
import { ScrollFrameSequence } from "@/components/ui/scroll-frame-sequence"

// Sample the entire clip at 240 steps to limit image memory and downloads.
// Include both endpoints of the original 720-frame sequence.
const FRAME_COUNT = 240
const getFramePath = (index: number) =>
  `/CCTV_Parallax_Frames/frame_${String(Math.round(index * 719 / (FRAME_COUNT - 1)) + 1).padStart(4, "0")}.jpg`

const motionQuery = "(prefers-reduced-motion: reduce)"
function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery)
  query.addEventListener("change", callback)
  return () => query.removeEventListener("change", callback)
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches
const getServerSnapshot = () => true

export function CctvScrollHero() {
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, getServerSnapshot)

  return (
    <section aria-label="CCTV surveillance camera showcase">
      {reducedMotion ? (
        <div className="relative h-[calc(100svh-80px)] md:h-[calc(100svh-84px)] border-b border-zinc-200/80">
          <Image src={getFramePath(0)} alt="CCTV surveillance camera" fill priority sizes="100vw" className="object-cover" />
        </div>
      ) : (
        <ScrollFrameSequence
          frameCount={FRAME_COUNT}
          getFramePath={getFramePath}
          scrollHeightVh={500}
          stageHeightClassName="h-[calc(100svh-80px)] md:h-[calc(100svh-84px)]"
          className="border-b border-zinc-200/80"
        />
      )}
    </section>
  )
}
