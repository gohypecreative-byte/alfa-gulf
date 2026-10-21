"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BLOG_POSTS } from "@/data/blog"

export function BlogArticles() {
  const [category, setCategory] = useState("All articles")
  const posts = category === "All articles" ? BLOG_POSTS : BLOG_POSTS.filter(post => post.category === category)
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-16 lg:py-20" aria-labelledby="articles-heading">
      <div className="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <h2 id="articles-heading" className="text-2xl font-medium tracking-tight sm:text-3xl">Explore the journal</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
          {["All articles", "Construction", "Technology", "Materials"].map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={"rounded-md px-4 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " + (category === item ? "bg-brand text-white" : "bg-slate-50 text-slate-600 hover:bg-brand-soft hover:text-brand")}>{item}</button>)}
        </div>
      </div>
      <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => <Link href={"/news/" + post.slug} key={post.slug} className="group rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
          <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-slate-100"><Image src={post.image} alt={post.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" /></div>
          <p className="mt-5 text-xs font-medium text-brand">{post.category}</p>
          <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight group-hover:text-brand">{post.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">Read article <ArrowUpRight className="size-4" /></span>
        </Link>)}
      </div>
    </section>
  )
}
