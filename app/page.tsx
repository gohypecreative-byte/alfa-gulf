import { VideoScrollHero } from "@/components/sections/hero"
import { CategoriesSection } from "@/components/sections/categories"
import HeroScrollVideoReveal from "@/components/ui/hero-scroll-video-pin-reveal"
import { BuildingForTheBest } from "@/components/sections/building-for-the-best/building-for-the-best"
import { ServicesStackInteractor } from "@/components/ui/connoisseur-stack-interactor"
import { ProjectsCoverflowSection } from "@/components/sections/projects-coverflow"
import { ImageTextReveal } from "@/components/ui/image-text-reveal"

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Autoplaying Hero */}
      <VideoScrollHero />

      {/* 2. Core Categories: Construction, IT & Technology, Trading */}
      <CategoriesSection />

      {/* 3. Company Overview, Sectors & Video */}
      <HeroScrollVideoReveal videoSrc="/Aerial_view_of_industrial_complex_202609071617_gwr_video_mvp.mp4" />

      {/* 3. Services Section with GSAP SVG Interactive Clip-Path Stack */}
      <ServicesStackInteractor />

      {/* 4. Building for the Best Section (Stats & Architectural Facade) */}
      <BuildingForTheBest />

      {/* 5. Scroll Image Text Reveal with Mouse Follower */}
      <ImageTextReveal />

      {/* 6. Projects Section with 3D Coverflow Carousel (at the bottom) */}
      <ProjectsCoverflowSection />
    </div>
  )
}
