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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const PROVIDERS = [
  {
    name: "IPTV Norwegian",
    bestFor: "Flexible IPTV subscription and device options",
    consideration: "Check available channels and subscription terms",
    featured: true,
  },
  {
    name: "Telenor T-We",
    bestFor: "Traditional TV and streaming packages",
    consideration: "Package and broadband requirements",
  },
  {
    name: "Altibox",
    bestFor: "Home TV and broadband services",
    consideration: "Availability depends on location",
  },
  {
    name: "Telia Play",
    bestFor: "TV and streaming in one service",
    consideration: "Check package and content options",
  },
  {
    name: "Allente",
    bestFor: "Television and entertainment packages",
    consideration: "Compare available channels and plans",
  },
  {
    name: "Strim",
    bestFor: "App-based TV and streaming",
    consideration: "Check included channels and services",
  },
  {
    name: "RiksTV",
    bestFor: "Norwegian television packages",
    consideration: "Check equipment and package availability",
  },
];

const SUBSCRIPTION_DURATIONS = [
  { name: "Monthly", duration: "1 Month", popular: false },
  { name: "Quarterly", duration: "3 Months", popular: false },
  { name: "Half-Yearly", duration: "6 Months", popular: false },
  { name: "Yearly", duration: "12 Months", popular: true },
];

const COMPATIBLE_DEVICES = [
  "Amazon Fire TV Stick",
  "Samsung and LG Smart TVs",
  "Android TV and Google TV",
  "Apple TV",
  "Android phones and tablets",
  "iPhone and iPad",
  "Windows and macOS computers",
];

const FAQS = [
  {
    q: "1. What is the best IPTV provider in Norway?",
    a: "The best provider depends on your preferred channels, budget, device and content requirements. IPTV Norwegian is worth considering for users looking for a standalone subscription with flexible plan durations and compatible device options.",
  },
  {
    q: "2. What is the best norsk IPTV service?",
    a: "Look for a service with the Norwegian channels you want, suitable streaming quality, clear subscription terms and verified content rights. Always check the current channel list before subscribing.",
  },
  {
    q: "3. How much does IPTV cost in Norway?",
    a: "IPTV pris varies by provider, package and subscription duration. Compare the full cost, renewal terms and included features before choosing a plan.",
  },
  {
    q: "4. Can I watch Premier League through IPTV in Norway?",
    a: "Sports availability depends on broadcasting rights and the provider's authorised content. Check which matches are legally available in Norway before purchasing a subscription.",
  },
  {
    q: "5. Which devices support IPTV in Norway?",
    a: "Depending on the application and service, IPTV can work on Firestick, Android TV, Smart TVs, Apple TV, smartphones, tablets and computers.",
  },
  {
    q: "6. Is IPTV legal in Norway?",
    a: "IPTV technology is legal, but distributing copyrighted content requires the appropriate rights. Choose providers that can demonstrate their authorisation to distribute the content they offer.",
  },
];

export default function BlogPostClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 lg:pt-40 pb-20">
        {/* Article Container */}
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
            <span className="text-zinc-800 line-clamp-1">
              Best IPTV Providers in Norway
            </span>
          </nav>

          {/* Header Section */}
          <header className="mb-10 sm:mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6"
              style={{ color: NAVY }}
            >
              Best IPTV Providers in Norway: Top Choices for 2026
            </h1>

            {/* Author / Metadata bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-zinc-200/70 py-3.5 text-xs sm:text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Editorial Team, Norway IPTV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-zinc-400" />
                <span>Published 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-zinc-400" />
                <span>8 min read</span>
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
              Finding the best IPTV providers in Norway can be difficult when so many services advertise thousands of channels, HD and 4K streaming, live sports and affordable subscriptions. However, the right choice depends on more than the size of a channel list. You should also consider streaming quality, device compatibility, subscription flexibility, customer support and access to the channels you actually want to watch.
            </p>
            <p>
              Whether you are looking for norsk IPTV, Nordic channels, international entertainment or an IPTV service for your Smart TV or Firestick, comparing your options can help you make a better decision.
            </p>
            <p>
              In this guide, we look at IPTV Norwegian alongside established TV and streaming providers available in Norway. We also explain what to check before purchasing an IPTV abonnement.
            </p>
          </section>

          {/* Single Featured Image inside blog post */}
          <figure className="relative my-10 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/best-iptv-providers-norway.jpg"
                alt="Nordic IPTV streaming on smart TV with Norwegian channels, live sports, and entertainment"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <figcaption className="bg-white/95 px-5 py-3 text-xs sm:text-sm text-zinc-500 border-t border-zinc-100 italic flex items-center justify-between">
              <span>Nordic IPTV streaming on Smart TV: access Norwegian channels, live sports, and top TV apps.</span>
              <span className="font-semibold text-zinc-400 not-italic text-xs hidden sm:inline">2026 IPTV Guide</span>
            </figcaption>
          </figure>

          {/* Section: Best IPTV Providers in Norway at a Glance */}
          <section className="my-14 scroll-mt-24" id="providers-at-a-glance">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  Best IPTV Providers in Norway at a Glance
                </h2>
              </div>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Different providers suit different viewing needs. Some focus on traditional Norwegian television packages, while others offer internet-based subscriptions with different device and content options.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">Provider</th>
                      <th className="py-4 px-5 sm:px-6">Best For</th>
                      <th className="py-4 px-5 sm:px-6">Main Consideration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {PROVIDERS.map((p, idx) => (
                      <tr
                        key={p.name}
                        className={`transition-colors ${
                          p.featured
                            ? "bg-red-50/40 hover:bg-red-50/70 font-semibold"
                            : "hover:bg-zinc-50/60"
                        }`}
                      >
                        <td className="py-4 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span>{p.name}</span>
                            {p.featured && (
                              <span className="inline-flex items-center gap-1 rounded bg-[#D72C2C] px-2 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-zinc-700">
                          {p.bestFor}
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-zinc-600 text-sm">
                          {p.consideration}
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
                These providers are not all identical IPTV products. Traditional TV operators and standalone IPTV subscription services can have different content rights, pricing structures and technical requirements.
              </p>
            </div>
          </section>

          {/* Provider Detail Cards */}
          <section className="my-14 space-y-10" id="detailed-reviews">
            {/* 1. IPTV Norwegian: Featured Card */}
            <div className="relative rounded-3xl border-2 border-[#D72C2C]/30 bg-white p-6 sm:p-9 shadow-lg shadow-red-500/5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D72C2C] px-3.5 py-1 text-xs font-extrabold text-white shadow-sm">
                  <Award className="h-3.5 w-3.5" />
                  #1 Featured Choice for Norway
                </span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Standalone Subscription
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
                1. IPTV Norwegian: Our Featured Choice for IPTV in Norway
              </h3>

              <div className="space-y-4 text-base leading-relaxed text-[#343341] mb-6">
                <p>
                  If you are looking for a flexible IPTV subscription with support for popular streaming devices,{" "}
                  <a
                    href="https://iptv-norwegian.com/"
                    className="font-bold underline text-[#D72C2C] hover:text-[#b91f1f]"
                  >
                    IPTV Norwegian
                  </a>{" "}
                  is our featured choice.
                </p>
                <p>
                  The service is designed for viewers who want access to live television, sports, movies and international entertainment through compatible IPTV applications. Instead of depending on one particular television model, users can check available device options and choose a suitable player for their setup.
                </p>
              </div>

              {/* What Makes It Worth Considering */}
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-5 sm:p-7 mb-6">
                <h4 className="text-base sm:text-lg font-bold mb-4" style={{ color: NAVY }}>
                  What Makes IPTV Norwegian Worth Considering?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Flexible subscription options",
                      desc: "Choose from different subscription durations according to your viewing needs.",
                    },
                    {
                      title: "HD and 4K options",
                      desc: "Streaming quality depends on the available source, device and internet connection.",
                    },
                    {
                      title: "Device compatibility",
                      desc: "Options include Fire TV Stick, Android TV, Smart TVs, smartphones and other supported devices.",
                    },
                    {
                      title: "Live TV and entertainment",
                      desc: "Explore available live channels, sports, movies and television series.",
                    },
                    {
                      title: "Simple installation",
                      desc: "Follow the installation instructions to configure a compatible IPTV player.",
                    },
                    {
                      title: "Subscription support",
                      desc: "Contact the provider for assistance with account activation and setup.",
                    },
                  ].map((feat) => (
                    <div key={feat.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-[#D72C2C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-zinc-900 text-sm block">
                          {feat.title}:
                        </span>
                        <span className="text-xs sm:text-sm text-zinc-600 leading-normal">
                          {feat.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscription Options Grid */}
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-bold mb-3" style={{ color: NAVY }}>
                  IPTV Norwegian Subscription Options
                </h4>
                <p className="text-sm text-zinc-600 mb-4">
                  The website provides different subscription durations, allowing users to compare shorter and longer plans.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SUBSCRIPTION_DURATIONS.map((plan) => (
                    <div
                      key={plan.name}
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
                        {plan.name}
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 mt-0.5">
                        {plan.duration}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-500 mt-3 italic">
                  Before choosing a plan, check the current price, included features, renewal conditions and available content.
                </p>
              </div>

              {/* Who should consider it & CTA */}
              <div className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-[#0B1E5C] mb-1">
                    Who should consider it?
                  </h5>
                  <p className="text-sm text-zinc-700 max-w-xl leading-relaxed">
                    IPTV Norwegian is worth considering if you prefer a standalone IPTV subscription, want to use compatible streaming devices and are looking for different subscription durations in one place.
                  </p>
                </div>
                <a
                  href="https://iptv-norwegian.com/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all whitespace-nowrap"
                >
                  <span>Explore IPTV Norwegian</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Provider 2 to 7 Cards */}
            <div className="space-y-6">
              {/* 2. Telenor T-We */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    2. Telenor T-We: For Traditional TV and Streaming
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    Traditional Operator
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  Telenor T-We is an established option for Norwegian households that want television channels and streaming services together. Its packages allow customers to combine selected channels and entertainment services through a single platform. It can be suitable for families who prefer a more traditional television arrangement with additional streaming options.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> You already use Telenor services or want a combined TV and streaming package.
                </div>
              </div>

              {/* 3. Altibox */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    3. Altibox: For Home TV and Broadband
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    Broadband & Fiber TV
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  Altibox provides television and broadband services in Norway. It is worth comparing if you want your home internet and TV services connected through one provider. Its availability and package options can depend on your address and local network.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> You want a home television package alongside broadband and prefer an established Norwegian provider.
                </div>
              </div>

              {/* 4. Telia Play */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    4. Telia Play: For Flexible TV and Entertainment
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    Hybrid Platform
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  Telia Play brings television and streaming content together through its platform. It is another option for people who want access to entertainment across supported devices. Before subscribing, compare the available channels, streaming services, package conditions and total monthly cost.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> You want a combined television and streaming experience.
                </div>
              </div>

              {/* 5. Allente */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    5. Allente: For Television and Entertainment Packages
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    Satellite & Streaming
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  Allente offers television and streaming packages for Norwegian customers. Its available content and package structure make it another option to compare when choosing a TV service. Check which channels and services are included in the package you select, as availability can vary.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> You prefer an established TV provider with different entertainment options.
                </div>
              </div>

              {/* 6. Strim */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    6. Strim: For App-Based TV Streaming
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    App-Based OTT
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  Strim is an internet-based TV and streaming service that brings different entertainment options together in an app. It is worth considering if you prefer watching through compatible devices without relying on a traditional TV box. Compare its available channels, included streaming services and subscription terms before making a decision.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> You want an app-based television and streaming package.
                </div>
              </div>

              {/* 7. RiksTV */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: NAVY }}>
                    7. RiksTV: For Norwegian Television Packages
                  </h3>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100">
                    Digital Terrestrial & App
                  </span>
                </div>
                <p className="text-base text-[#343341] leading-relaxed mb-4">
                  RiksTV is another established provider in Norway. It offers television packages with Norwegian and other available channels, depending on the selected plan. Check whether your preferred channels, equipment and package are available in your area.
                </p>
                <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-800">
                  <strong className="text-[#0B1E5C]">Consider it if:</strong> Your priority is a conventional Norwegian TV package.
                </div>
              </div>
            </div>
          </section>

          {/* Section: How to Choose the Best IPTV Provider in Norway */}
          <section className="my-14 scroll-mt-24" id="how-to-choose">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: NAVY }}>
                How to Choose the Best IPTV Provider in Norway
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Before purchasing an IPTV abonnement, consider these important factors to ensure you receive the viewing experience you expect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Channel Availability */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#D72C2C]">
                    <Tv className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    1. Channel Availability
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Check whether the provider offers the Norwegian, Nordic and international channels you want. Do not rely only on advertised channel numbers. Ask for an updated channel list.
                </p>
              </div>

              {/* 2. Streaming Quality */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0B1E5C]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    2. Streaming Quality
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Look for HD and 4K options if picture quality matters to you. Remember that actual playback also depends on your internet speed, device and source quality.
                </p>
              </div>

              {/* 3. Device Compatibility */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    3. Device Compatibility
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Make sure the service works with your preferred device. Common options include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {COMPATIBLE_DEVICES.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-800"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#D72C2C]" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Subscription Price */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    4. Subscription Price
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Compare the IPTV pris, subscription duration, renewal conditions and additional charges. A cheaper monthly offer is not always the best value if it lacks the content or support you need.
                </p>
              </div>

              {/* 5. Customer Support */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    5. Customer Support
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Check how you can contact the provider if you experience login problems, installation issues or streaming interruptions.
                </p>
              </div>

              {/* 6. Content Distribution Rights */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-[#D72C2C]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                    6. Content Distribution Rights
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  This is particularly important. IPTV technology itself is not automatically illegal, but providers must have the necessary rights to distribute copyrighted television content. Check the provider&apos;s authorisation before subscribing.
                </p>
              </div>
            </div>
          </section>

          {/* Section: IPTV vs Traditional TV Providers in Norway */}
          <section className="my-14 scroll-mt-24" id="iptv-vs-traditional">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                IPTV vs Traditional TV Providers in Norway
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Both standalone IPTV subscriptions and traditional television packages deliver content through digital platforms, but they may differ in how they operate.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">Feature</th>
                      <th className="py-4 px-5 sm:px-6">Standalone IPTV Subscription</th>
                      <th className="py-4 px-5 sm:px-6">Traditional TV Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      {
                        feature: "Delivery",
                        iptv: "Internet connection",
                        traditional: "Internet or other supported networks",
                      },
                      {
                        feature: "Setup",
                        iptv: "Usually through a compatible IPTV player",
                        traditional: "Provider app or supplied equipment",
                      },
                      {
                        feature: "Devices",
                        iptv: "Depends on service and player compatibility",
                        traditional: "Depends on provider",
                      },
                      {
                        feature: "Subscription",
                        iptv: "Often offered in different durations",
                        traditional: "Depends on package",
                      },
                      {
                        feature: "Content",
                        iptv: "Depends on the provider's authorised catalogue",
                        traditional: "Depends on the selected package and rights",
                      },
                    ].map((row) => (
                      <tr key={row.feature} className="hover:bg-zinc-50/60">
                        <td className="py-4 px-5 sm:px-6 font-bold text-zinc-900">
                          {row.feature}
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-zinc-800 font-medium">
                          {row.iptv}
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-zinc-600">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#4A4956] leading-relaxed">
              The best option depends on your viewing habits, preferred channels, budget and the provider&apos;s content rights.
            </p>
          </section>

          {/* Section: Which IPTV Provider Should You Choose? */}
          <section className="my-14 rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-zinc-50/50 p-7 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
              Which IPTV Provider Should You Choose?
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#343341] mb-6">
              <p>
                There is no single provider that is best for every household in Norway.
              </p>
              <p>
                If you prefer a traditional TV package, Telenor, Altibox, Telia, Allente, Strim and RiksTV are worth comparing. If you want to explore a standalone IPTV abonnement with different subscription durations and compatible device options,{" "}
                <strong className="text-[#0B1E5C]">IPTV Norwegian</strong> is our featured recommendation.
              </p>
              <p>
                Before purchasing, review the available channels, check device compatibility and confirm the service&apos;s distribution rights. These steps can help you choose an IPTV solution that matches your actual viewing needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="/#plans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all"
              >
                <span>View IPTV Norwegian Plans</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-800 hover:bg-zinc-50 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="my-14 scroll-mt-24" id="faq">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-base text-[#4A4956]">
                Common questions about IPTV providers, channel availability, and streaming setups in Norway.
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
