import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BLOG_POSTS } from "@/data/blog"
import { BlogArticles } from "@/components/blog/blog-articles"

export const metadata: Metadata = { title: "Blog | Alfa Gulf", description: "Notes on construction, building services, technology and materials from Alfa Gulf." }

export default function BlogPage() {
  const featured = BLOG_POSTS[0]
  return (
    <div className="bg-white pt-24 text-slate-900">
      <header className="mx-auto max-w-[1440px] px-6 pb-10 pt-12 sm:px-10 lg:px-16 lg:pt-16">
        <p className="mb-4 text-sm font-medium text-brand">Alfa Gulf journal</p>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">Ideas from the work.<br />Insights for what comes next.</h1><p className="max-w-sm text-base leading-7 text-slate-600">A closer look at construction, technology and the details that bring a project together.</p></div>
      </header>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <Link href={"/news/" + featured.slug} className="group grid overflow-hidden rounded-md bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:grid-cols-[1.3fr_1fr]">
          <div className="relative min-h-64 aspect-[3/2] lg:aspect-auto"><Image src={featured.image} alt={featured.alt} fill preload sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><p className="text-sm font-medium text-brand">Featured article / {featured.category}</p><h2 className="mt-5 text-2xl font-medium leading-tight tracking-tight group-hover:text-brand sm:text-3xl">{featured.title}</h2><p className="mt-5 text-sm leading-7 text-slate-600">{featured.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand">Read the story <ArrowUpRight className="size-4" /></span></div>
        </Link>
      </div>
      <BlogArticles />
    </div>
  )
}
