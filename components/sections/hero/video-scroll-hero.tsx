"use client"

import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

const TOTAL_FRAMES = 192
const FRAMES_PER_SECOND = 24

const getFramePath = (index: number) => {
  const frameNum = String(index + 1).padStart(4, "0")
  return `/video_frames_smooth_1080p_webp/frames/frame_${frameNum}.webp`
}

// Headlines stay readable between transitions and follow the video chapters.
const CHAPTERS = [
  {
    id: "chapter-industrial",
    start: 0.0,
    lines: [
      "Pioneering the future of",
      "heavy industrial construction",
    ],
  },
  {
    id: "chapter-mep",
    start: 0.36,
    lines: [
      "Engineering smart infrastructure &",
      "mission-critical datacenter systems",
    ],
  },
  {
    id: "chapter-architecture",
    start: 0.68,
    lines: [
      "Delivering landmark commercial complexes",
      "across Saudi Arabia",
    ],
  },
]

export function VideoScrollHero() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const imagesRef = React.useRef<(HTMLImageElement | null)[]>([])
  const currentFrameRef = React.useRef(0)
  const animFrameIdRef = React.useRef<number | null>(null)

  const [chapterIndex, setChapterIndex] = React.useState(0)
  const reduceMotion = useReducedMotion()
  const chapter = CHAPTERS[chapterIndex]
  const [isFirstFrameReady, setIsFirstFrameReady] = React.useState(false)

  // Preload frames progressively
  React.useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null)
    let isCancelled = false

    const firstImg = new Image()
    firstImg.src = getFramePath(0)
    firstImg.onload = () => {
      if (isCancelled) return
      imagesRef.current[0] = firstImg
      setIsFirstFrameReady(true)
    }

    const loadRemaining = () => {
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image()
        img.src = getFramePath(i)
        img.onload = () => {
          if (isCancelled) return
          imagesRef.current[i] = img
        }
      }
    }

    const timer = setTimeout(loadRemaining, 40)

    return () => {
      isCancelled = true
      clearTimeout(timer)
    }
  }, [])

  // Draw frame on canvas with cover-fit aspect ratio
  const renderFrameToCanvas = React.useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let img = imagesRef.current[frameIndex]
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIndex; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i]!.naturalWidth > 0) {
          img = imagesRef.current[i]
          break
        }
      }
    }
    if (!img || !img.complete) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight

    const scale = Math.max(cw / iw, ch / ih)
    const nw = iw * scale
    const nh = ih * scale
    const ox = (cw - nw) / 2
    const oy = (ch - nh) / 2

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, ox, oy, nw, nh)
  }, [])

  // Resize canvas backing store to match high-DPI display
  React.useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      const currentIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      )
      renderFrameToCanvas(currentIdx)
    }

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [renderFrameToCanvas])

  // Draw initial frame when ready
  React.useEffect(() => {
    if (isFirstFrameReady) {
      renderFrameToCanvas(0)
    }
  }, [isFirstFrameReady, renderFrameToCanvas])

  // Play the original eight-second sequence independently of page scrolling.
  React.useEffect(() => {
    if (!isFirstFrameReady) return

    let lastTime: number | null = null
    let elapsed = 0
    let lastFrame = -1

    const loop = (time: number) => {
      if (lastTime !== null && !document.hidden) {
        elapsed += Math.min(time - lastTime, 100)
      }
      lastTime = time
      const frame = Math.floor((elapsed / 1000) * FRAMES_PER_SECOND) % TOTAL_FRAMES

      if (frame !== lastFrame) {
        currentFrameRef.current = frame
        renderFrameToCanvas(frame)
        const progress = frame / TOTAL_FRAMES
        setChapterIndex(progress >= CHAPTERS[2].start ? 2 : progress >= CHAPTERS[1].start ? 1 : 0)
        lastFrame = frame
      }

      animFrameIdRef.current = requestAnimationFrame(loop)
    }

    animFrameIdRef.current = requestAnimationFrame(loop)
    return () => {
      if (animFrameIdRef.current !== null) cancelAnimationFrame(animFrameIdRef.current)
    }
  }, [isFirstFrameReady, renderFrameToCanvas])

  return (
    <div
      id="video-hero-section"
      className="relative w-full h-svh bg-slate-950 select-none"
    >
      {/* Fullscreen playback viewport */}
      <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-slate-950">
        {/* Canvas rendering 1080p WebP frame sequence */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isFirstFrameReady ? 1 : 0 }}
        />

        {/* Ambient Dark Scrims for contrast */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

        {/* Center Text Container - Visible from initial load without being blank */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 sm:px-8 z-20 overflow-hidden transition-opacity duration-500"
          style={{ opacity: isFirstFrameReady ? 1 : 0 }}
        >
          <div className="relative grid w-full max-w-4xl items-center">
            <AnimatePresence initial={false}>
              <motion.h1
                key={chapter.id}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 0.98 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: reduceMotion ? 0.2 : 0.5, delay: reduceMotion ? 0 : 0.26, ease: [0.2, 0, 0, 1] },
                }}
                exit={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -20,
                  scale: reduceMotion ? 1 : 0.98,
                  transition: { duration: reduceMotion ? 0.2 : 0.36, ease: [0.4, 0, 1, 1] },
                }}
                className="col-start-1 row-start-1 space-y-1 sm:space-y-2 text-center text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.18] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]"
              >
                {chapter.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
