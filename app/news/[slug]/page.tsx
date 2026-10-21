import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { BLOG_POSTS } from "@/data/blog"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return BLOG_POSTS.map(post => ({ slug: post.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(item => item.slug === slug)
  return { title: post ? post.title + " | Alfa Gulf" : "Article not found", description: post?.excerpt }
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(item => item.slug === slug)
  if (!post) notFound()
  return <div className="bg-white px-6 pb-20 pt-36 text-slate-900 sm:px-10 sm:pt-40">
    <article className="mx-auto max-w-5xl">
      <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"><ArrowLeft className="size-4" />Back to the journal</Link>
      <header className="mb-9 mt-9 max-w-3xl"><p className="text-sm font-medium text-brand">{post.category}</p><h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p></header>
      <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-slate-100"><Image src={post.image} alt={post.alt} fill preload sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div>
      <div className="mx-auto mt-12 max-w-2xl space-y-9">{post.sections.map(section => <section key={section.title}><h2 className="text-2xl font-medium tracking-tight">{section.title}</h2><p className="mt-4 text-base leading-8 text-slate-600">{section.text}</p></section>)}<div className="rounded-md bg-brand-soft p-6"><h2 className="text-xl font-medium">Planning your next project?</h2><p className="mt-3 text-sm leading-7 text-slate-600">Explore how Alfa Gulf brings construction and technology services together.</p><Link href="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">Explore our services <ArrowUpRight className="size-4" /></Link></div></div>
    </article>
  </div>
}
