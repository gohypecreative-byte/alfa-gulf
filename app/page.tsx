import { VideoScrollHero } from "@/components/sections/hero"
import { CategoriesSection } from "@/components/sections/categories"
import HeroScrollVideoReveal from "@/components/ui/hero-scroll-video-pin-reveal"
import { BuildingForTheBest } from "@/components/sections/building-for-the-best/building-for-the-best"
import { HomeServices } from "@/components/sections/home-services"
import { ProjectsCoverflowSection } from "@/components/sections/projects-coverflow"
import { ImageTextReveal } from "@/components/ui/image-text-reveal"

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Autoplaying Hero */}
      <VideoScrollHero />

      <section id="vision2030" aria-labelledby="vision2030-heading" className="section-space scroll-mt-24 bg-brand-soft px-6 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1312px] gap-6 md:grid-cols-2 md:items-center md:gap-12">
          <h1 id="vision2030-heading" className="text-3xl font-medium tracking-tight text-brand sm:text-4xl">
            Building towards Saudi Vision 2030
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-700">
            From Al Khobar, Alfa Gulf aims to support Saudi Arabia&apos;s future
            through sustainable construction, reliable technology infrastructure,
            and the supply of materials that help businesses and communities grow.
          </p>
        </div>
      </section>

      {/* 2. Core Categories: Construction, IT & Technology, Trading */}
      <CategoriesSection />

      {/* 3. Company Overview, Sectors & Video */}
      <HeroScrollVideoReveal videoSrc="/Aerial_view_of_industrial_complex_202609071617_gwr_video_mvp.mp4" />

      {/* Services across construction, IT, and general trading */}
      <HomeServices />

      {/* 4. Building for the Best Section (Stats & Architectural Facade) */}
      <BuildingForTheBest />

      {/* 5. Scroll Image Text Reveal with Mouse Follower */}
      <ImageTextReveal />

      {/* 6. Projects Section with 3D Coverflow Carousel (at the bottom) */}
      <ProjectsCoverflowSection />
    </div>
  )
}
