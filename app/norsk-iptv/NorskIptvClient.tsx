"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Tv,
  ChevronDown,
  ShieldCheck,
  Zap,
  Smartphone,
  HelpCircle,
  ExternalLink,
  Info,
  Layers,
  Award,
  Film,
  Trophy,
  Sliders,
  Monitor,
  ListOrdered,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const EXPLORE_FEATURES = [
  { feature: "Live TV", check: "Available Norwegian and international channels" },
  { feature: "Sports", check: "Authorised football and sports coverage" },
  { feature: "Movies and series", check: "Available on-demand entertainment" },
  { feature: "Streaming quality", check: "Supported HD and 4K content" },
  { feature: "Device support", check: "Compatible TVs, streaming devices and apps" },
  { feature: "Subscription options", check: "Available plan durations" },
  { feature: "Customer support", check: "Assistance with setup and account issues" },
];

const SUBSCRIPTION_PLANS = [
  { plan: "Monthly", duration: "1 Month", popular: false },
  { plan: "Quarterly", duration: "3 Months", popular: false },
  { plan: "Half-Yearly", duration: "6 Months", popular: false },
  { plan: "Yearly", duration: "12 Months", popular: true },
];

const DEVICE_CATEGORIES = [
  { device: "Amazon Fire TV", examples: "Fire TV Stick, Fire TV Stick 4K, Fire TV Cube" },
  { device: "Android TV", examples: "Sony, Philips and compatible Android TV devices" },
  { device: "Google TV", examples: "Chromecast with Google TV and supported televisions" },
  { device: "Samsung Smart TV", examples: "Compatible Samsung television models" },
  { device: "LG Smart TV", examples: "Compatible LG webOS televisions" },
  { device: "Apple Devices", examples: "iPhone, iPad and Apple TV" },
  { device: "Android Devices", examples: "Samsung Galaxy, Google Pixel and other Android phones" },
  { device: "Computers", examples: "Windows PCs, laptops and Mac computers" },
  { device: "Streaming Boxes", examples: "Compatible Android TV boxes and Formuler devices" },
];

const IPTV_PLAYERS = [
  { name: "TiviMate", platforms: "Android TV and compatible Android devices", highlight: "Popular for Android TV" },
  { name: "IPTV Smarters", platforms: "Supported Android, iOS and other platforms", highlight: "Multi-platform" },
  { name: "VLC Media Player", platforms: "Windows, macOS and other supported systems", highlight: "Universal playback" },
  { name: "Kodi", platforms: "Compatible devices with suitable IPTV add-ons", highlight: "Extensible" },
  { name: "IPTVX", platforms: "Supported Apple devices", highlight: "Optimized for Apple TV" },
  { name: "Televizo", platforms: "Compatible Android devices", highlight: "Clean interface" },
];

const SETUP_STEPS = [
  {
    step: "Step 1",
    title: "Choose an IPTV subscription",
    desc: "Compare the available plans and confirm that the service offers the content you want to watch.",
  },
  {
    step: "Step 2",
    title: "Check your device",
    desc: "Make sure your Smart TV, Firestick, Android TV, Apple device or computer is supported.",
  },
  {
    step: "Step 3",
    title: "Install an IPTV player",
    desc: "Download a compatible application through an official app store or the application's verified source.",
  },
  {
    step: "Step 4",
    title: "Enter your subscription details",
    desc: "Follow your provider's instructions to enter the supplied login information or playlist details.",
  },
  {
    step: "Step 5",
    title: "Load your content",
    desc: "Allow the application to load the available channels and content. You can then browse the categories supported by your service.",
  },
];

const FAQS = [
  {
    q: "1. What is norsk IPTV?",
    a: "Norsk IPTV refers to internet-based television services used in Norway. It allows viewers to stream available live TV and on-demand content through compatible devices and applications.",
  },
  {
    q: "2. Which is the best norsk IPTV provider?",
    a: "The best provider depends on channel availability, streaming quality, device compatibility, price and content rights. IPTV Norwegian is worth considering if you want a standalone subscription with different plan durations.",
  },
  {
    q: "3. Can I watch Norwegian channels through IPTV?",
    a: "Yes, some IPTV services offer Norwegian channels. Check the provider's current channel list to confirm which Norwegian stations are available.",
  },
  {
    q: "4. Can I watch IPTV Premier League in Norway?",
    a: "Availability depends on broadcasting rights and the provider's authorised sports content. Check which Premier League matches are legally available in Norway before subscribing.",
  },
  {
    q: "5. Does norsk IPTV work on Firestick?",
    a: "Many IPTV players are available for compatible Amazon Fire TV devices. You need a supported player and valid subscription details to configure the service.",
  },
  {
    q: "6. What internet speed do I need for IPTV?",
    a: "The required speed depends on the streaming resolution, number of connected devices and service requirements. A stable broadband connection is important, particularly for HD and 4K playback.",
  },
  {
    q: "7. What is the difference between IPTV and Nordic IPTV?",
    a: "Norsk IPTV generally refers to IPTV used for Norwegian audiences, while Nordic IPTV usually describes services or content covering multiple Nordic countries, such as Norway, Sweden, Denmark and Finland.",
  },
  {
    q: "8. Can I use an IPTV subscription on multiple devices?",
    a: "This depends on the provider's subscription conditions. Check how many simultaneous connections are included before purchasing a plan.",
  },
];

export default function NorskIptvClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 lg:pt-40 pb-20">
        <article className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-500 mb-6"
          >
            <a href="/" className="hover:text-[#D72C2C] transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/blog/" className="hover:text-[#D72C2C] transition-colors">
              Blog
            </a>
            <span>/</span>
            <span className="text-zinc-800 line-clamp-1">Norsk IPTV Guide</span>
          </nav>

          {/* Header Section */}
          <header className="mb-10 sm:mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6"
              style={{ color: NAVY }}
            >
              Norsk IPTV: A Guide to IPTV Streaming in Norway
            </h1>

            {/* Author / Metadata bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-zinc-200/70 py-3.5 text-xs sm:text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Norway IPTV Streaming Insights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-zinc-400" />
                <span>Updated 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-zinc-400" />
                <span>9 min read</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto text-zinc-500">
                <ShieldCheck className="h-4 w-4 text-[#0B1E5C]" />
                <span className="font-semibold text-zinc-700">Verified Guide</span>
              </div>
            </div>
          </header>

          {/* Lead Introduction */}
          <section className="prose prose-zinc max-w-none text-base sm:text-lg leading-relaxed text-[#343341] space-y-5 mb-10">
            <p className="font-medium text-lg sm:text-xl text-zinc-800 leading-relaxed">
              Watching television has changed significantly in Norway. Many viewers now prefer internet-based entertainment because it gives them more flexibility in how and where they watch their favourite programmes. This is where norsk IPTV comes into the picture.
            </p>
            <p>
              Whether you want Norwegian television, Nordic entertainment, international channels, football or movies and series, IPTV gives you another way to access television content through an internet connection.
            </p>
            <p>
              However, choosing the right IPTV service requires more than comparing channel numbers. You should consider content availability, streaming quality, device compatibility, subscription prices and the provider&apos;s distribution rights.
            </p>
            <p>
              In this guide, we explain how norsk IPTV works, what to look for in an IPTV subscription, which devices you can use and why{" "}
              <a
                href="https://iptv-norwegian.com/"
                className="font-bold underline text-[#D72C2C] hover:text-[#b91f1f]"
              >
                IPTV Norwegian
              </a>{" "}
              is worth considering.
            </p>
          </section>

          {/* Single Featured Image inside blog post */}
          <figure className="relative my-10 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-md">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/norsk-iptv-guide.jpg"
                alt="Norsk IPTV streaming on smart TV with Norwegian television guide, sports, and Nordic entertainment"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <figcaption className="bg-white/95 px-5 py-3 text-xs sm:text-sm text-zinc-500 border-t border-zinc-100 italic flex items-center justify-between">
              <span>Norsk IPTV streaming setup in a Norwegian living room with TV channels, live football, and on-demand movies.</span>
              <span className="font-semibold text-zinc-400 not-italic text-xs hidden sm:inline">2026 Guide</span>
            </figcaption>
          </figure>

          {/* Section: What Is Norsk IPTV? */}
          <section className="my-14 scroll-mt-24" id="what-is-norsk-iptv">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Tv className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  What Is Norsk IPTV?
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#343341] leading-relaxed mb-6">
                Norsk IPTV refers to Internet Protocol Television services used to stream television content in Norway through an internet connection.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                Unlike traditional cable or satellite television, IPTV delivers content over an IP network. Depending on the service, you may be able to watch live television, access on-demand movies and series, or use electronic programme guides.
              </p>
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0B1E5C] mb-4">
                  For Norwegian viewers, a suitable IPTV service may provide access to:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Norwegian television channels",
                    "Nordic and Scandinavian entertainment",
                    "International TV channels",
                    "Sports and football coverage",
                    "Movies and television series",
                    "On-demand content",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#D72C2C] shrink-0" />
                      <span className="text-sm font-semibold text-zinc-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-4 italic">
                The actual content depends on the provider&apos;s catalogue and broadcasting rights.
              </p>
            </div>
          </section>

          {/* Section: Why Are More Viewers Interested in Norsk IPTV? */}
          <section className="my-14 scroll-mt-24" id="why-viewers-interested">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: NAVY }}>
                Why Are More Viewers Interested in Norsk IPTV?
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                IPTV offers a different way to organise and watch television. Instead of depending entirely on a traditional television package, viewers can use compatible applications and internet-connected devices. Here are some reasons people explore norsk IPTV.
              </p>
            </div>

            <div className="space-y-5">
              {/* Point 1 */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-[#D72C2C]">
                    <Tv className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: NAVY }}>
                    1. Norwegian and Nordic Entertainment
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-12">
                  Many viewers want access to Norwegian-language programming alongside entertainment from other Nordic countries. Depending on the provider, available content may include Norwegian, Swedish, Danish and other international channels. Always check the channel list to confirm that your preferred stations are included.
                </p>
              </div>

              {/* Point 2 */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0B1E5C]">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: NAVY }}>
                    2. Live Sports and Football
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-12">
                  Football is an important part of television entertainment in Norway. Viewers often look for sports coverage, including domestic competitions and international tournaments. If you are interested in IPTV fotball or IPTV Premier League, check the provider&apos;s authorised sports catalogue and confirm which competitions and matches are available in Norway.
                </p>
              </div>

              {/* Point 3 */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Film className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: NAVY }}>
                    3. Movies and Series
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-12">
                  Some IPTV services include on-demand entertainment alongside live television. This can make it easier to find films and series without switching between multiple applications. Before subscribing, review the available catalogue and check whether the content is licensed for distribution.
                </p>
              </div>

              {/* Point 4 */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: NAVY }}>
                    4. Flexible Device Options
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-12">
                  One advantage of internet-based television is that compatible services can work across different types of devices. Depending on the IPTV player and subscription, you may be able to watch through a television, streaming stick, smartphone or computer.
                </p>
              </div>

              {/* Point 5 */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: NAVY }}>
                    5. Different Subscription Durations
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pl-12">
                  Some services offer monthly, quarterly, six-month and annual subscriptions. This gives viewers different commitment options depending on their preferences and budget.
                </p>
              </div>
            </div>
          </section>

          {/* Section: IPTV Norwegian: A Flexible IPTV Option for Norway */}
          <section className="my-14 scroll-mt-24" id="iptv-norwegian-featured">
            <div className="rounded-3xl border-2 border-[#D72C2C]/30 bg-white p-7 sm:p-9 shadow-lg shadow-red-500/5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D72C2C] px-3.5 py-1 text-xs font-extrabold text-white shadow-sm">
                  <Award className="h-3.5 w-3.5" />
                  Featured Norsk IPTV Service
                </span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Flexible Plans
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
                IPTV Norwegian: A Flexible IPTV Option for Norway
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-[#343341] mb-6">
                <p>
                  If you are searching for norsk IPTV,{" "}
                  <a
                    href="https://iptv-norwegian.com/"
                    className="font-bold underline text-[#D72C2C] hover:text-[#b91f1f]"
                  >
                    IPTV Norwegian
                  </a>{" "}
                  is worth exploring.
                </p>
                <p>
                  The platform offers subscription options for viewers interested in live television and digital entertainment through compatible IPTV devices and applications. Rather than choosing a plan based only on advertised channel numbers, consider whether the service offers the content, device compatibility and support you need.
                </p>
              </div>

              {/* What Can You Explore Table */}
              <div className="mb-8">
                <h3 className="text-base sm:text-lg font-bold mb-3" style={{ color: NAVY }}>
                  What Can You Explore?
                </h3>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                          <th className="py-3.5 px-5 sm:px-6">Feature</th>
                          <th className="py-3.5 px-5 sm:px-6">What to Check</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100">
                        {EXPLORE_FEATURES.map((item) => (
                          <tr key={item.feature} className="hover:bg-zinc-50/60">
                            <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                              {item.feature}
                            </td>
                            <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                              {item.check}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Subscription Plans */}
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: NAVY }}>
                  Norsk IPTV Subscription Plans
                </h3>
                <p className="text-sm text-zinc-600 mb-4">
                  IPTV Norwegian offers different subscription durations, allowing users to choose according to their requirements.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SUBSCRIPTION_PLANS.map((plan) => (
                    <div
                      key={plan.plan}
                      className={`rounded-xl border p-4 text-center transition-all ${
                        plan.popular
                          ? "border-[#D72C2C] bg-red-50/30 shadow-sm"
                          : "border-zinc-200 bg-white"
                      }`}
                    >
                      {plan.popular && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D72C2C] block mb-1">
                          Most Popular
                        </span>
                      )}
                      <div className="text-base font-extrabold text-zinc-900">
                        {plan.plan}
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 mt-0.5">
                        {plan.duration}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-500 mt-3 italic">
                  Check the website for current prices, included features, renewal conditions and availability before purchasing.
                </p>
              </div>

              {/* CTA link */}
              <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-zinc-700">
                  Ready to check plans and pricing?
                </span>
                <a
                  href="https://iptv-norwegian.com/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all whitespace-nowrap"
                >
                  <span>View Available IPTV Plans</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Section: Which Devices Can You Use for Norsk IPTV? */}
          <section className="my-14 scroll-mt-24" id="compatible-devices">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                Which Devices Can You Use for Norsk IPTV?
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                You do not necessarily need a new television to use IPTV. Many services work through compatible applications on devices you may already own.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">Device</th>
                      <th className="py-4 px-5 sm:px-6">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {DEVICE_CATEGORIES.map((item) => (
                      <tr key={item.device} className="hover:bg-zinc-50/60">
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          {item.device}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                          {item.examples}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 italic">
              App availability varies by device, model, operating system and region. Check the official application store and the service&apos;s installation instructions before setting up your subscription.
            </p>
          </section>

          {/* Section: Best IPTV Players for Norwegian Viewers */}
          <section className="my-14 scroll-mt-24" id="best-iptv-players">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                Best IPTV Players for Norwegian Viewers
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                An IPTV player is an application that allows you to configure and play content from a compatible IPTV service. The player itself does not automatically provide television channels or a subscription.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">IPTV Player</th>
                      <th className="py-4 px-5 sm:px-6">Compatible Platforms</th>
                      <th className="py-4 px-5 sm:px-6">Specialty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {IPTV_PLAYERS.map((player) => (
                      <tr key={player.name} className="hover:bg-zinc-50/60">
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          {player.name}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                          {player.platforms}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-600 text-xs font-semibold">
                          <span className="bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200/70">
                            {player.highlight}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-xs sm:text-sm text-zinc-700 flex items-start gap-3">
              <Info className="h-5 w-5 text-[#0B1E5C] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Before choosing an application, check whether it supports your device and the login format provided by your IPTV service, such as an M3U playlist or Xtream Codes credentials.
              </p>
            </div>
          </section>

          {/* Section: How to Set Up Norsk IPTV */}
          <section className="my-14 scroll-mt-24" id="how-to-set-up">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ListOrdered className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  How to Set Up Norsk IPTV
                </h2>
              </div>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Getting started with IPTV is generally straightforward when you have a compatible device, player and valid subscription details. Follow these basic steps:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {SETUP_STEPS.map((s, idx) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-sm flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-extrabold text-[#D72C2C] border border-red-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-1">
                      {s.step}: {s.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-600 mt-6">
              For device-specific guidance, check the installation instructions on{" "}
              <a
                href="https://iptv-norwegian.com/"
                className="font-bold underline text-[#D72C2C] hover:text-[#b91f1f]"
              >
                IPTV Norwegian
              </a>.
            </p>
          </section>

          {/* Section: How Much Does Norsk IPTV Cost in Norway? */}
          <section className="my-14 scroll-mt-24" id="cost-in-norway">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
                How Much Does Norsk IPTV Cost in Norway?
              </h2>
              <div className="space-y-4 text-base text-[#343341] leading-relaxed mb-6">
                <p>
                  The IPTV pris in Norway depends on the provider, subscription duration, included content and available features. Some providers offer monthly subscriptions, while others provide longer plans that may have a lower average monthly cost.
                </p>
                <p className="font-semibold text-zinc-900">
                  Before choosing an IPTV abonnement, compare:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Total subscription price",
                  "Subscription duration",
                  "Renewal and cancellation conditions",
                  "Included channels and on-demand content",
                  "Supported devices",
                  "Customer support availability",
                  "Any additional fees",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#D72C2C] shrink-0" />
                    <span className="text-sm font-semibold text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-zinc-800">
                <strong>Tip:</strong> Do not choose a service based only on a low advertised price. Check what you are actually receiving.
              </div>
            </div>
          </section>

          {/* Section: How to Choose the Beste IPTV in Norway */}
          <section className="my-14 scroll-mt-24" id="how-to-choose-beste">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  How to Choose the Beste IPTV in Norway
                </h2>
              </div>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Searching for beste IPTV or beste IPTV Norge can bring up many different services. A few important checks can help you make a more informed decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Check the channel list",
                  desc: "Make sure your preferred Norwegian, Nordic and international channels are available.",
                },
                {
                  title: "Review streaming quality",
                  desc: "Look for clear information about HD and 4K availability. Your internet connection and device also affect playback quality.",
                },
                {
                  title: "Confirm device compatibility",
                  desc: "Check that the service supports your preferred IPTV player and device.",
                },
                {
                  title: "Compare subscription plans",
                  desc: "Understand the full IPTV pris, renewal conditions and included features.",
                },
                {
                  title: "Verify content rights",
                  desc: "IPTV services must have the necessary rights to distribute copyrighted content. Check the provider's authorisation before subscribing.",
                },
                {
                  title: "Look for support",
                  desc: "A clear support process is useful if you experience activation, login or installation problems.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D72C2C]" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Is Norsk IPTV Legal in Norway? */}
          <section className="my-14 scroll-mt-24" id="legal-in-norway">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5 text-[#0B1E5C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  Is Norsk IPTV Legal in Norway?
                </h2>
              </div>
              <div className="space-y-4 text-base text-[#343341] leading-relaxed">
                <p>
                  IPTV is a technology for delivering television over internet networks. Using IPTV technology is not automatically illegal in Norway.
                </p>
                <p>
                  However, a service must have the appropriate rights to distribute copyrighted television programmes, films, sports and other content.
                </p>
                <p>
                  Before choosing a provider, check whether it is authorised to offer the content in its catalogue. Avoid services that cannot explain their licensing arrangements or make unrealistic promises about copyrighted channels.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts & CTA */}
          <section className="my-14 rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-zinc-50/50 p-7 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
              Final Thoughts: Find the Right Norsk IPTV Subscription
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#343341] mb-6">
              <p>
                Norsk IPTV gives Norwegian viewers another way to explore television and digital entertainment through compatible internet-connected devices. From Norwegian and Nordic programming to sports, movies and international channels, the right service depends on your preferred content, budget and viewing habits.
              </p>
              <p>
                If you are looking for a standalone IPTV subscription with different plan durations and support for compatible streaming devices, IPTV Norwegian is a useful option to explore.
              </p>
              <p>
                Compare the available plans, check the supported devices and review the channel selection before making your decision.
              </p>
            </div>

            <div className="border-t border-zinc-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                  Ready to explore IPTV in Norway?
                </h3>
                <p className="text-sm text-zinc-600">
                  Visit IPTV Norwegian to view the available subscription options and find a plan that suits your entertainment needs.
                </p>
              </div>
              <a
                href="https://iptv-norwegian.com/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all whitespace-nowrap"
              >
                <span>Explore IPTV Plans</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="my-14 scroll-mt-24" id="faq">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-base text-[#4A4956]">
                Frequently asked questions about norsk IPTV subscriptions, devices, speeds and channels.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-900 hover:text-[#D72C2C] transition-colors focus:outline-none"
                    >
                      <span style={{ color: isOpen ? RED : NAVY }}>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#D72C2C]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-[#4A4956] border-t border-zinc-100 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom Back to Blog Link */}
          <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-[#D72C2C] transition-colors"
            >
              <span>← Back to All Guides & Blog</span>
            </a>
            <a
              href="/#plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D72C2C] hover:text-[#b91f1f] transition-colors"
            >
              <span>Compare Norway IPTV Plans</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
