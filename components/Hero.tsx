"use client";

import Image from "next/image";
import {
  Play,
  Zap,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SkewedLine } from "@/components/SkewedTextReveal";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const FLAG_SRC = "/norway-flag.svg";

const HERO_ACTION_IMAGES = {
  freeTrial: "/free-trail.PNG",
  viewPlans: "/view-plans.PNG",
} as const;

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      {/* MOBILE ONLY: Background Norway flag — right-aligned, sits behind content */}
      <div
        aria-hidden
        className="lg:hidden pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-[38%] sm:top-[34%] right-[-4%] sm:right-[2%] w-[58%] sm:w-[48%] aspect-[22/16]">
          <Image
            src={FLAG_SRC}
            alt=""
            fill
            priority
            className="object-contain object-right-top drop-shadow-[0_12px_28px_rgba(11,30,92,0.12)]"
            sizes="(max-width: 1024px) 70vw, 0vw"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 18%, #000 48%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 18%, #000 48%)",
            }}
          />
        </div>
        {/* Left-only white fade so paragraph text stays readable — no fade on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[0%] via-white/92 via-[42%] to-transparent to-[68%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 pt-24 pb-9 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* LEFT: Text content */}
          <div className="lg:col-span-7 xl:col-span-6 order-1">
            <h1
              className="text-[22px] sm:text-4xl lg:text-[44px] font-bold sm:font-extrabold tracking-tight leading-[1.12]"
              style={{ color: NAVY }}
            >
              <SkewedLine delay={0}>
                Norway IPTV &amp; <span style={{ color: RED }}>Norsk IPTV</span>
              </SkewedLine>
              <SkewedLine delay={0.08}>for IPTV Nordic and</SkewedLine>
              <SkewedLine delay={0.16}>
                <span style={{ color: RED }}>Norge Entertainment</span>
              </SkewedLine>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mt-3 sm:mt-5 space-y-2 sm:space-y-4 text-[#0B1E5C] text-[11px] sm:text-[15px] leading-relaxed max-w-[88%] sm:max-w-[82%] lg:max-w-none"
            >
              {/* Soft rounded white glow — fades out smoothly at the bottom */}
              <div
                aria-hidden
                className="lg:hidden pointer-events-none absolute -inset-x-5 -top-4 -bottom-10 -z-10 rounded-[3rem]"
                style={{
                  background:
                    "radial-gradient(ellipse 108% 78% at 22% 34%, #ffffff 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.42) 72%, rgba(255,255,255,0.1) 90%, transparent 100%)",
                }}
              />
              <p>
                Enjoy norsk IPTV with the beste IPTV service designed for
                Norwegian viewers. Discover IPTV Norge for TV streaming,
                football, Premier League, movies, and on-demand entertainment,
                with flexible viewing options and discounted prices for
                compatible devices.
              </p>
            </motion.div>

            {/* DESKTOP CTA cards (two) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:flex items-center gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/#plans"
                className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Play className="h-4 w-4 text-white" fill="currentColor" />
                </span>
                <span
                  className="text-left text-[13px] font-bold leading-tight"
                  style={{ color: NAVY }}
                >
                  View Norway IPTV
                  <br />
                  Plans
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  style={{ color: RED }}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Zap className="h-4 w-4 text-white" fill="currentColor" />
                </span>
                <span
                  className="text-left text-[13px] font-bold leading-tight"
                  style={{ color: NAVY }}
                >
                  Contact
                  <br />
                  Us
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  style={{ color: RED }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Norway flag SVG (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 order-2 justify-end relative"
          >
            <div className="relative w-full max-w-[400px] aspect-[22/16] overflow-hidden rounded-[12px] shadow-[0_18px_50px_rgba(11,30,92,0.14)] border border-zinc-200/60">
              <Image
                src={FLAG_SRC}
                alt="Flag of Norway"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 45vw, 0vw"
              />
            </div>
          </motion.div>
        </div>

        {/* MOBILE CTA cards — restricted width, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="lg:hidden mt-6 space-y-3 sm:space-y-3.5 w-[220px] sm:w-[255px]"
        >
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="/#plans"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 min-h-[64px] shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
          >
            <CardIconImage src={HERO_ACTION_IMAGES.viewPlans} alt="View Norway IPTV Plans" />
            <span className="min-w-0 leading-tight flex-1">
              <span className="block text-[12px] sm:text-[13px] font-bold" style={{ color: NAVY }}>
                View Norway IPTV Plans
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#343341] leading-[1.25]">
                Compare IPTV abonnement options
              </span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.98 }}
            href="/#contact"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 min-h-[64px] shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
          >
            <CardIconImage src={HERO_ACTION_IMAGES.freeTrial} alt="Contact Us" />
            <span className="min-w-0 leading-tight flex-1">
              <span className="block text-[12px] sm:text-[13px] font-bold" style={{ color: NAVY }}>
                Contact Us
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#343341] leading-[1.25]">
                Ask about setup and plans
              </span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

function CardIconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 translate-y-0.5">
      <Image src={src} alt={alt} fill className="object-contain" sizes="48px" />
    </span>
  );
}

