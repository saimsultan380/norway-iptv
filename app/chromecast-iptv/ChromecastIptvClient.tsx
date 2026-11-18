"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
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
  Cast,
  Wifi,
  RefreshCw,
  Sliders,
  Monitor,
  AlertCircle,
  ListOrdered,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const CHROMECAST_DEVICES = [
  { device: "Chromecast (1st, 2nd and 3rd Gen)", method: "Cast compatible content from another device", type: "Older Model" },
  { device: "Chromecast Ultra", method: "Cast compatible content from another device", type: "4K Cast Model" },
  { device: "Chromecast with Google TV (HD)", method: "Install compatible Android TV applications directly", type: "Recommended" },
  { device: "Chromecast with Google TV (4K)", method: "Install compatible Android TV applications directly", type: "Best for 4K" },
];

const IPTV_APPS = [
  {
    name: "TiviMate",
    use: "IPTV playlist management and live TV interface",
    compatibility: "Android TV and Google TV",
    recommended: true,
  },
  {
    name: "IPTV Smarters",
    use: "IPTV playback using supported login formats",
    compatibility: "Supported Android and other platforms",
    recommended: true,
  },
  {
    name: "VLC Media Player",
    use: "Playing compatible network streams and playlists",
    compatibility: "Android and other supported platforms",
    recommended: false,
  },
  {
    name: "Kodi",
    use: "Media playback with compatible IPTV add-ons",
    compatibility: "Android TV and other platforms",
    recommended: false,
  },
  {
    name: "Televizo",
    use: "IPTV playlist management",
    compatibility: "Compatible Android devices",
    recommended: false,
  },
];

const SETUP_STEPS_GTV = [
  {
    step: "Step 1",
    title: "Connect Your Chromecast",
    desc: "Connect your Chromecast with Google TV to your television's HDMI port and switch to the correct HDMI input. Complete the initial setup, connect to your Wi-Fi network and sign in with your Google account.",
  },
  {
    step: "Step 2",
    title: "Open Google Play Store",
    desc: "From the Google TV home screen, open the Apps section and access Google Play Store. Search for a compatible IPTV player, such as TiviMate or another supported application.",
  },
  {
    step: "Step 3",
    title: "Install an IPTV Player",
    desc: "Select the application you want to use and install it. Make sure you download the genuine application from its official listing. Avoid unknown downloads or modified application files.",
  },
  {
    step: "Step 4",
    title: "Add Your IPTV Subscription",
    desc: "Open the IPTV player and enter your details: M3U playlist URL, Xtream Codes username, password, and server URL supplied by your IPTV provider.",
  },
  {
    step: "Step 5",
    title: "Load Your Channels",
    desc: "After entering the correct information, allow the application to process your playlist. You will see categories such as live television, sports, movies, series and EPG.",
  },
  {
    step: "Step 6",
    title: "Start Watching",
    desc: "Select an available channel or on-demand title and check playback. If content does not load, verify your login details and connection.",
  },
];

const TROUBLESHOOTING = [
  { problem: "IPTV channels not loading", solution: "Check your playlist and subscription status" },
  { problem: "Buffering during playback", solution: "Improve Wi-Fi stability and reduce network congestion" },
  { problem: "IPTV app not installing", solution: "Check device compatibility and available storage" },
  { problem: "Chromecast not appearing", solution: "Connect both devices to the same Wi-Fi network" },
  { problem: "Black screen", solution: "Restart the application and check stream availability" },
  { problem: "Login failed", solution: "Verify username, password and server address" },
  { problem: "Casting not working", solution: "Confirm that the application supports Google Cast" },
  { problem: "EPG not loading", solution: "Check the EPG source and application settings" },
];

const FAQS = [
  {
    q: "1. Can you use IPTV on Chromecast?",
    a: "Yes. You can use IPTV on Chromecast by casting supported content from a phone or computer. Chromecast with Google TV also allows you to install compatible IPTV applications directly.",
  },
  {
    q: "2. Which Chromecast is best for IPTV?",
    a: "Chromecast with Google TV HD or 4K is generally more flexible because it supports compatible application installations. Older Chromecast models mainly rely on casting from another device.",
  },
  {
    q: "3. Which IPTV app works best on Chromecast?",
    a: "TiviMate, IPTV Smarters and other compatible Android TV applications are worth exploring on Chromecast with Google TV. The best option depends on your playlist format and device compatibility.",
  },
  {
    q: "4. Can I install TiviMate on Chromecast?",
    a: "TiviMate is designed for Android TV and compatible Android devices. You can check its current availability through Google Play Store on Chromecast with Google TV.",
  },
  {
    q: "5. Can I use an M3U playlist on Chromecast?",
    a: "Yes, if your IPTV player supports M3U playlists. Add the playlist URL supplied by your provider and follow the application's setup instructions.",
  },
  {
    q: "6. Does Chromecast IPTV support 4K?",
    a: "Chromecast with Google TV 4K supports 4K output, but the IPTV stream, application, television and internet connection must also support the required resolution.",
  },
  {
    q: "7. Why is IPTV buffering on Chromecast?",
    a: "Buffering can be caused by an unstable internet connection, network congestion, an overloaded device, application problems or issues with the source stream.",
  },
  {
    q: "8. Can I use Chromecast IPTV in Norway?",
    a: "Yes. You can use compatible Chromecast devices and IPTV applications in Norway. Make sure your service has the necessary rights to distribute the content you want to watch.",
  },
];

export default function ChromecastIptvClient() {
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
            <span className="text-zinc-800 line-clamp-1">Chromecast IPTV Setup</span>
          </nav>

          {/* Header Section */}
          <header className="mb-10 sm:mb-12">


            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-6"
              style={{ color: NAVY }}
            >
              Chromecast IPTV: How to Watch IPTV on Chromecast in Norway
            </h1>

            {/* Author / Metadata bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-zinc-200/70 py-3.5 text-xs sm:text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Device Setup & Streaming Labs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-zinc-400" />
                <span>Updated 2026</span>
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
              Chromecast IPTV is a convenient way to watch internet-based television on your TV using Google&apos;s streaming devices. Instead of watching everything on a phone or computer, you can stream compatible IPTV content to a larger screen and enjoy your favourite entertainment from your living room.
            </p>
            <p>
              For viewers in Norway, Chromecast can be useful for accessing Norwegian television, Nordic entertainment, international channels, sports and on-demand content through compatible IPTV applications and services.
            </p>
            <p>
              However, the setup depends on which Chromecast device you own. Older Chromecast models mainly receive content cast from another device, while Chromecast with Google TV allows you to install compatible applications directly.
            </p>
            <p>
              In this guide, you will learn how Chromecast IPTV works, which applications you can use, how to configure an IPTV subscription and how to fix common streaming problems.
            </p>
          </section>

          {/* Single Featured Image inside blog post */}
          <figure className="relative my-10 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/chromecast-iptv-norway.jpg"
                alt="Chromecast IPTV streaming setup on modern television in Norwegian apartment with live sports and entertainment"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <figcaption className="bg-white/95 px-5 py-3 text-xs sm:text-sm text-zinc-500 border-t border-zinc-100 italic flex items-center justify-between">
              <span>Google Chromecast connected to a smart TV streaming Norwegian channels and sports in HD/4K.</span>
              <span className="font-semibold text-zinc-400 not-italic text-xs hidden sm:inline">2026 Setup</span>
            </figcaption>
          </figure>

          {/* Section: What Is Chromecast IPTV? */}
          <section className="my-14 scroll-mt-24" id="what-is-chromecast-iptv">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Cast className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  What Is Chromecast IPTV?
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#343341] leading-relaxed mb-6">
                Chromecast IPTV refers to watching Internet Protocol Television through a Google Chromecast device. IPTV delivers television content over an internet connection rather than relying exclusively on traditional cable or satellite television.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1E5C] block mb-1">
                    Method 1
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">
                    Casting
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Play IPTV content on your smartphone or computer and send it wirelessly to your Chromecast.
                  </p>
                </div>
                <div className="rounded-2xl border border-red-200 bg-red-50/30 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D72C2C] block mb-1">
                    Method 2 (Recommended)
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">
                    Direct Installation
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Install a compatible IPTV application directly on Chromecast with Google TV from the Play Store.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-xs sm:text-sm text-zinc-700 flex items-start gap-3">
                <Info className="h-5 w-5 text-[#0B1E5C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  You will generally need a stable internet connection, a compatible IPTV player and valid subscription or playlist details from a service that has the necessary content distribution rights.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Which Chromecast Devices Support IPTV? */}
          <section className="my-14 scroll-mt-24" id="devices-supported">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                Which Chromecast Devices Support IPTV?
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Not every Chromecast device works in the same way. Understanding the difference will help you choose the correct installation method.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">Chromecast Device</th>
                      <th className="py-4 px-5 sm:px-6">IPTV Setup Method</th>
                      <th className="py-4 px-5 sm:px-6">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {CHROMECAST_DEVICES.map((d) => (
                      <tr key={d.device} className="hover:bg-zinc-50/60">
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          {d.device}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                          {d.method}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                            d.type === "Recommended" || d.type === "Best for 4K"
                              ? "bg-red-50 text-[#D72C2C] border-red-200"
                              : "bg-zinc-100 text-zinc-600 border-zinc-200"
                          }`}>
                            {d.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Older Chromecast models do not have the same application installation experience as Chromecast with Google TV. You normally need to use a supported casting application on your phone, tablet or computer. For direct IPTV application installation, Chromecast with Google TV is generally the more flexible option.
            </p>
          </section>

          {/* Section: Best IPTV Apps for Chromecast */}
          <section className="my-14 scroll-mt-24" id="best-apps">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                Best IPTV Apps for Chromecast
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Choosing the right IPTV player is an important part of setting up Chromecast IPTV. Different applications support different playlist formats, interfaces and devices.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">IPTV Player</th>
                      <th className="py-4 px-5 sm:px-6">Main Use</th>
                      <th className="py-4 px-5 sm:px-6">Compatibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {IPTV_APPS.map((app) => (
                      <tr key={app.name} className="hover:bg-zinc-50/60">
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span>{app.name}</span>
                            {app.recommended && (
                              <span className="text-[10px] uppercase font-bold bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-700">
                                Popular
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                          {app.use}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-600 text-sm">
                          {app.compatibility}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs sm:text-sm text-zinc-800 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Important:</strong> An IPTV player is not an IPTV subscription. It provides the interface for playing content from a compatible source. You need a valid playlist or subscription separately. Check the Google Play Store on your Chromecast with Google TV to confirm app availability.
              </p>
            </div>
          </section>

          {/* Section: How to Set Up IPTV on Chromecast with Google TV */}
          <section className="my-14 scroll-mt-24" id="setup-google-tv">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ListOrdered className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  How to Set Up IPTV on Chromecast with Google TV
                </h2>
              </div>
              <p className="text-base text-[#4A4956] leading-relaxed">
                If you have Chromecast with Google TV, you can install a compatible IPTV player directly on your device. Follow these steps:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {SETUP_STEPS_GTV.map((s, idx) => (
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
          </section>

          {/* Section: How to Use IPTV on Older Chromecast Devices */}
          <section className="my-14 scroll-mt-24" id="setup-older-chromecast">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                How to Use IPTV on Older Chromecast Devices
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                If you have an older Chromecast without Google TV, you generally cannot install an IPTV application directly on the device. Instead, you cast content from a smartphone, tablet or computer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Android */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <Smartphone className="h-5 w-5 text-[#0B1E5C]" />
                  <h3 className="text-base font-bold text-zinc-900">
                    Using an Android Phone
                  </h3>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-600 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Connect phone and Chromecast to the same Wi-Fi.</li>
                  <li>Install a compatible IPTV player on your phone.</li>
                  <li>Configure using valid subscription details.</li>
                  <li>Open a channel or video and tap the <strong>Cast</strong> icon.</li>
                  <li>Select your Chromecast device.</li>
                </ul>
              </div>

              {/* iPhone / iPad */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <Smartphone className="h-5 w-5 text-[#D72C2C]" />
                  <h3 className="text-base font-bold text-zinc-900">
                    Using an iPhone or iPad
                  </h3>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-600 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Connect iOS device to the same Wi-Fi as Chromecast.</li>
                  <li>Install a compatible IPTV app supporting Cast.</li>
                  <li>Add your playlist or login credentials.</li>
                  <li>Select the <strong>Cast icon</strong> and choose Chromecast.</li>
                  <li>Ensure your player supports Google Cast.</li>
                </ul>
              </div>

              {/* Computer */}
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <Monitor className="h-5 w-5 text-purple-700" />
                  <h3 className="text-base font-bold text-zinc-900">
                    Using Windows or Mac
                  </h3>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-600 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Open Google Chrome on PC or Mac.</li>
                  <li>Connect computer to the same Wi-Fi.</li>
                  <li>Open the web player or streaming stream.</li>
                  <li>Click Chrome menu &gt; <strong>Cast</strong> &gt; select Chromecast.</li>
                  <li>Works for websites supporting web casting.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: M3U Playlist and Xtream Codes on Chromecast */}
          <section className="my-14 scroll-mt-24" id="m3u-vs-xtream">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
                M3U Playlist and Xtream Codes on Chromecast
              </h2>
              <p className="text-base text-[#343341] leading-relaxed mb-6">
                Many IPTV applications support different methods of connecting to an IPTV service. Two common options are M3U playlists and Xtream Codes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    What Is an M3U IPTV Playlist?
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    An M3U playlist is a file or URL containing references to media streams and related information. You paste the URL provided by your service and allow the player to load available channels.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    What Are Xtream Codes?
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Xtream Codes is a login method supported by many IPTV players. Instead of entering a long URL, you input Username, Password, and Server/Portal URL for organized VOD and live categories.
                  </p>
                </div>
              </div>

              {/* Comparison table */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                        <th className="py-3.5 px-5 sm:px-6">Feature</th>
                        <th className="py-3.5 px-5 sm:px-6">M3U Playlist</th>
                        <th className="py-3.5 px-5 sm:px-6">Xtream Codes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {[
                        { f: "Setup", m3u: "Add playlist URL", xtream: "Enter login details" },
                        { f: "Credentials", m3u: "Usually a playlist URL", xtream: "Username, password and server" },
                        { f: "Compatibility", m3u: "Depends on player", xtream: "Depends on player" },
                        { f: "EPG", m3u: "Depends on playlist and player", xtream: "Depends on service and player" },
                      ].map((row) => (
                        <tr key={row.f} className="hover:bg-zinc-50/60">
                          <td className="py-3 px-5 sm:px-6 font-bold text-zinc-900">{row.f}</td>
                          <td className="py-3 px-5 sm:px-6 text-zinc-700">{row.m3u}</td>
                          <td className="py-3 px-5 sm:px-6 text-zinc-700">{row.xtream}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs text-zinc-500 italic">
                Use whichever connection method your provider supports. Both methods require a valid source and a compatible IPTV application.
              </p>
            </div>
          </section>

          {/* Section: How to Improve Chromecast IPTV Streaming Quality */}
          <section className="my-14 scroll-mt-24" id="improve-quality">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-[#D72C2C]" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                  How to Improve Chromecast IPTV Streaming Quality
                </h2>
              </div>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Buffering and playback interruptions can make watching television frustrating. A few adjustments can help improve your experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Use a Stable Internet Connection",
                  desc: "A reliable connection is essential for HD and 4K playback. Place your Wi-Fi router closer to your Chromecast or consider an Ethernet adapter.",
                },
                {
                  title: "Choose the Correct Streaming Quality",
                  desc: "Not every channel is in 4K. Select a resolution supported by the source stream, your television and your network speed.",
                },
                {
                  title: "Restart Chromecast Regularly",
                  desc: "If the IPTV app becomes sluggish, restart Chromecast from Settings to clear cached memory and resolve temporary software issues.",
                },
                {
                  title: "Update Your IPTV Player",
                  desc: "Check Google Play Store for player updates to get the latest bug fixes, video codec support, and performance optimizations.",
                },
                {
                  title: "Avoid Network Congestion",
                  desc: "Pause heavy downloads, cloud backups or torrents on other household devices while streaming live sports or movies.",
                },
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D72C2C]" />
                    {tip.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Common Problems & Fixes */}
          <section className="my-14 scroll-mt-24" id="troubleshooting">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: NAVY }}>
                Common Chromecast IPTV Problems and Their Fixes
              </h2>
              <p className="text-base text-[#4A4956] leading-relaxed">
                Here are common problems users may experience when setting up IPTV on Chromecast and how to resolve them quickly.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <th className="py-4 px-5 sm:px-6">Problem</th>
                      <th className="py-4 px-5 sm:px-6">Possible Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {TROUBLESHOOTING.map((t) => (
                      <tr key={t.problem} className="hover:bg-zinc-50/60">
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-zinc-900 whitespace-nowrap">
                          {t.problem}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-zinc-700">
                          {t.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-zinc-500 italic">
              If the issue continues, contact your IPTV provider or application developer, depending on whether the problem relates to the subscription or the player.
            </p>
          </section>

          {/* Section: Is Chromecast Good for IPTV in Norway? */}
          <section className="my-14 scroll-mt-24" id="chromecast-good-in-norway">
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-9 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
                Is Chromecast Good for IPTV in Norway?
              </h2>
              <div className="space-y-4 text-base text-[#343341] leading-relaxed">
                <p>
                  Chromecast can be a practical option for Norwegian viewers who want to watch compatible IPTV content on a television.
                </p>
                <p>
                  With Chromecast with Google TV, you can install supported applications directly. Older Chromecast devices can also be useful when your IPTV application supports casting from a phone or computer.
                </p>
                <p>
                  For viewers interested in norsk IPTV, Nordic entertainment and international programming, the most important step is selecting a service with the channels you want and the appropriate distribution rights. Before choosing a subscription, check the supported devices, available content, connection requirements and renewal conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Why Consider IPTV Norwegian for Chromecast IPTV? */}
          <section className="my-14 rounded-3xl border-2 border-[#D72C2C]/30 bg-gradient-to-br from-zinc-50 via-white to-zinc-50/50 p-7 sm:p-10 shadow-lg shadow-red-500/5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D72C2C] px-3.5 py-1 text-xs font-extrabold text-white shadow-sm">
                <Award className="h-3.5 w-3.5" />
                Featured IPTV Provider
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Full Chromecast Compatibility
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4" style={{ color: NAVY }}>
              Why Consider IPTV Norwegian for Chromecast IPTV?
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#343341] mb-6">
              <p>
                If you are looking for an IPTV subscription to use with a compatible Chromecast setup,{" "}
                <a
                  href="https://iptv-norwegian.com/"
                  className="font-bold underline text-[#D72C2C] hover:text-[#b91f1f]"
                >
                  IPTV Norwegian
                </a>{" "}
                is worth exploring.
              </p>
              <p>
                The platform offers different subscription durations for viewers interested in live television and digital entertainment through supported IPTV applications and devices. Before subscribing, check the current channel selection, Chromecast compatibility through your chosen IPTV player, subscription features and service terms.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-5 sm:p-6 mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1E5C] mb-3">
                What to Check Before Choosing a Plan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Available Norwegian and international channels",
                  "Sports and entertainment content",
                  "HD and 4K availability",
                  "Compatible IPTV players",
                  "Subscription duration and renewal conditions",
                  "Customer support and setup assistance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#D72C2C] shrink-0" />
                    <span className="text-sm font-semibold text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-zinc-600 mb-6">
              IPTV Norwegian offers monthly, quarterly, six-month and annual subscription options. You can compare the available plans and select one that matches your requirements.
            </p>

            <div className="pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  Ready to explore IPTV in Norway?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Visit IPTV Norwegian to view available plans and check whether they suit your Chromecast setup.
                </p>
              </div>
              <a
                href="https://iptv-norwegian.com/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-all whitespace-nowrap"
              >
                <span>View Available Plans</span>
                <ArrowRight className="h-4 w-4" />
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
                Everything you need to know about setting up and streaming IPTV on Google Chromecast.
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
