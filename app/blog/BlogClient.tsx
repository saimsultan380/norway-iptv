"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, Tv, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BLOG_POSTS: BlogPostItem[] = [
  {
    slug: "/chromecast-iptv/",
    title: "Chromecast IPTV: How to Watch IPTV on Chromecast in Norway",
    excerpt:
      "Learn how to use Chromecast IPTV in Norway. Discover compatible apps, setup steps, M3U playlists, streaming tips and common fixes.",
    date: "2026 Edition",
    readTime: "8 min read",
    category: "Device Setup",
    image: "/chromecast-iptv-norway.jpg",
    featured: true,
  },
  {
    slug: "/norsk-iptv/",
    title: "Norsk IPTV: A Guide to IPTV Streaming in Norway",
    excerpt:
      "Discover norsk IPTV for Norwegian channels, Nordic entertainment, football and HD streaming. Explore IPTV Norge plans, devices and setup options.",
    date: "2026 Edition",
    readTime: "9 min read",
    category: "Streaming Guide",
    image: "/norsk-iptv-guide.jpg",
    featured: false,
  },
  {
    slug: "/best-iptv-providers-norway/",
    title: "Best IPTV Providers in Norway: Top Choices for 2026",
    excerpt:
      "Compare the best IPTV providers in Norway for channels, sports, streaming quality and devices. Explore IPTV Norwegian alongside Telenor, Altibox, Telia, Allente, Strim and RiksTV.",
    date: "2026 Edition",
    readTime: "8 min read",
    category: "Provider Comparison",
    image: "/best-iptv-providers-norway.jpg",
    featured: false,
  },
];

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-[#FDFDFE] text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Simple Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-44 sm:pb-18 lg:pt-48 lg:pb-20 border-b border-zinc-100 bg-gradient-to-b from-zinc-50/70 via-white to-transparent">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3.5 py-1.5 text-xs font-bold shadow-sm mb-5"
              style={{ color: NAVY }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#D72C2C]" />
              <span>Norway IPTV Insights & Guides</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4"
              style={{ color: NAVY }}
            >
              Our <span style={{ color: RED }}>Blog</span>
            </motion.h1>

            {/* Bottom line short */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#343341] text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Expert tips, streaming tutorials, setup advice, and news about IPTV services across Norway.
            </motion.p>
          </div>
        </section>

        {/* Blog Posts Card Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <a
                    href={post.slug}
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-zinc-100"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-sm backdrop-blur-sm" style={{ color: NAVY }}>
                        <Tv className="h-3 w-3 text-[#D72C2C]" />
                        {post.category}
                      </span>
                    </div>
                  </a>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-zinc-400" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-snug group-hover:text-[#D72C2C] transition-colors" style={{ color: NAVY }}>
                      <a href={post.slug}>
                        {post.title}
                      </a>
                    </h2>

                    {/* Card Excerpt */}
                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A4956] line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Card Footer / CTA */}
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <a
                        href={post.slug}
                        className="inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-2.5"
                        style={{ color: RED }}
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      <span className="text-xs font-semibold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                        Top Rated
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Newsletter / Notice Box */}
            <div className="mt-16 rounded-2xl border border-zinc-200/70 bg-gradient-to-br from-zinc-50/70 via-white to-zinc-50/40 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: NAVY }}>
                  Looking for the best IPTV subscription for Norway?
                </h3>
                <p className="text-sm text-zinc-600 max-w-xl">
                  Compare flexible plans with HD and 4K channels, Nordic sports, anti-freeze streaming, and friendly support.
                </p>
              </div>
              <a
                href="/#plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all whitespace-nowrap"
              >
                <span>View IPTV Plans</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
