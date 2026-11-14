"use client"

import * as React from "react"
import NextImage from "next/image"
import { ChevronDown } from "lucide-react"

export interface ScrollFrameSequenceProps {
  /** Total number of frames in the sequence. */
  frameCount: number
  /** Returns the public URL for a zero-based frame index. */
  getFramePath: (index: number) => string
  /** Scroll distance driving the sequence, in viewport heights. */
  scrollHeightVh?: number
  /** Height of the fixed navbar, so the sticky stage sits under it. */
  topOffsetClassName?: string
  stageHeightClassName?: string
  /** Contain preserves the full frame; cover fills the stage with cropping. */
  fit?: "contain" | "cover"
  className?: string
  /** Optional overlay rendered above the canvas; receives 0..1 scroll progress. */
  children?: (progress: number) => React.ReactNode
  showScrollHint?: boolean
}

/**
 * Apple-style scroll-scrubbed image sequence. A sticky canvas is pinned while
 * the wrapper scrolls, and the frame index follows scroll progress with a light
 * easing so scrubbing feels smooth even at low frame counts.
 */
export function ScrollFrameSequence({
  frameCount,
  getFramePath,
  scrollHeightVh = 400,
  topOffsetClassName = "top-0",
  stageHeightClassName = "h-dvh",
  fit = "cover",
  className = "",
  children,
  showScrollHint = true,
}: ScrollFrameSequenceProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const stageRef = React.useRef<HTMLDivElement | null>(null)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const imagesRef = React.useRef<(HTMLImageElement | null)[]>([])
  const targetFrameRef = React.useRef(0)
  const currentFrameRef = React.useRef(0)
  const lastDrawnRef = React.useRef(-1)

  const [progress, setProgress] = React.useState(0)
  const [firstFrameReady, setFirstFrameReady] = React.useState(false)

  // Show the server-rendered poster first, then load near the scroll target.
  React.useEffect(() => {
    imagesRef.current = new Array(frameCount).fill(null)
    let cancelled = false

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.decoding = "async"
        img.fetchPriority = i === 0 ? "high" : "low"
        img.onload = () => {
          if (!cancelled) imagesRef.current[i] = img
          resolve()
        }
        img.onerror = () => resolve()
        img.src = getFramePath(i)
      })

    load(0).then(() => {
      if (cancelled) return
      lastDrawnRef.current = -1
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const pending = new Set(Array.from({ length: frameCount - 1 }, (_, i) => i + 1))
      const pump = async () => {
        while (pending.size && !cancelled) {
          const target = Math.round(targetFrameRef.current)
          const batch = [...pending]
            .sort((a, b) => Math.abs(a - target) - Math.abs(b - target))
            .slice(0, 4)
          batch.forEach((index) => pending.delete(index))
          await Promise.all(batch.map(load))
          lastDrawnRef.current = -1 // allow redraw if a better frame arrived
        }
      }
      pump()
    })

    return () => {
      cancelled = true
    }
  }, [frameCount, getFramePath])

  // Fit the frame to the stage, falling back to the closest loaded frame.
  const draw = React.useCallback(
    (index: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      let img: HTMLImageElement | null = null
      for (let distance = 0; distance < imagesRef.current.length; distance++) {
        for (const i of distance === 0 ? [index] : [index - distance, index + distance]) {
          const candidate = imagesRef.current[i]
          if (candidate && candidate.complete && candidate.naturalWidth > 0) {
            img = candidate
            break
          }
        }
        if (img) break
      }
      if (!img) return

      const cw = canvas.width
      const ch = canvas.height
      const scale = (fit === "contain" ? Math.min : Math.max)(cw / img.naturalWidth, ch / img.naturalHeight)
      const nw = img.naturalWidth * scale
      const nh = img.naturalHeight * scale
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - nw) / 2, (ch - nh) / 2, nw, nh)
      setFirstFrameReady(true)
    },
    [fit]
  )

  // Size the canvas backing store to the stage at device pixel ratio.
  React.useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = stage.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      lastDrawnRef.current = -1
      draw(Math.round(currentFrameRef.current))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(stage)
    return () => ro.disconnect()
  }, [draw])

  React.useEffect(() => {
    if (firstFrameReady) draw(0)
  }, [firstFrameReady, draw])

  // Scroll -> target frame.
  React.useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      const stage = stageRef.current
      if (!el || !stage) return
      const rect = el.getBoundingClientRect()
      const stageTop = stage.getBoundingClientRect().top
      const scrollable = el.offsetHeight - stage.offsetHeight
      if (scrollable <= 0) return
      const p = Math.min(1, Math.max(0, (stageTop - rect.top) / scrollable))
      setProgress(p)
      targetFrameRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0 : p * (frameCount - 1)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [frameCount])

  // rAF loop eases the current frame toward the target and redraws on change.
  React.useEffect(() => {
    let active = true
    let id = 0
    const loop = () => {
      if (!active) return
      const diff = targetFrameRef.current - currentFrameRef.current
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.18
      } else {
        currentFrameRef.current = targetFrameRef.current
      }
      const idx = Math.min(frameCount - 1, Math.max(0, Math.round(currentFrameRef.current)))
      if (idx !== lastDrawnRef.current) {
        lastDrawnRef.current = idx
        draw(idx)
      }
      id = requestAnimationFrame(loop)
    }
    id = requestAnimationFrame(loop)
    return () => {
      active = false
      cancelAnimationFrame(id)
    }
  }, [draw, frameCount])

  return (
    <div
      ref={containerRef}
      data-video-hero
      className={`relative w-full select-none motion-reduce:!h-auto ${className}`}
      style={{ height: `${scrollHeightVh}vh` }}
    >
      <div
        ref={stageRef}
        className={`sticky ${topOffsetClassName} ${stageHeightClassName} w-full overflow-hidden bg-zinc-100`}
      >
        <NextImage
          src={getFramePath(0)}
          alt=""
          fill
          preload
          unoptimized
          sizes="100vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          aria-hidden
        />
        <canvas
          ref={canvasRef}
          className="relative block w-full h-full"
          style={{ opacity: firstFrameReady ? 1 : 0 }}
          aria-hidden
        />

        {children?.(progress)}

        {showScrollHint && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/80 text-[11px] font-semibold tracking-widest uppercase pointer-events-none transition-opacity duration-300 motion-reduce:hidden"
            style={{ opacity: progress < 0.04 && firstFrameReady ? 1 : 0 }}
          >
            <span className="drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">Scroll</span>
            <ChevronDown className="w-4 h-4 text-brand animate-bounce" />
          </div>
        )}
      </div>
    </div>
  )
}
