"use client";

import Image from "next/image";
import { Check, ChevronDown, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  benefits,
  comparisonRows,
  faqs,
  footballChecks,
  nordicQuestions,
  plans,
  playerRows,
  priceChecks,
  resellerItems,
  setupSteps,
  whatsappHref,
  whyConsider,
} from "@/lib/homepage-content";
import CompatibleSetupSection from "@/components/home/CompatibleSetupSection";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const sectionClass =
  "mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white scroll-mt-28";
const h2Class =
  "text-[26px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.12]";
const bodyClass = "text-[#343341] text-[13px] sm:text-[15px] leading-relaxed";

function PrimaryButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-12 h-auto items-center justify-center rounded-xl px-5 sm:px-7 py-3 text-[13px] sm:text-sm font-bold text-white text-center leading-tight shadow-[0_10px_28px_rgba(215,44,44,0.22)]"
      style={{ backgroundColor: RED }}
    >
      {children}
    </motion.a>
  );
}

function SecondaryButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-12 h-auto items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 sm:px-7 py-3 text-[13px] sm:text-sm font-bold text-center leading-tight"
      style={{ color: NAVY }}
    >
      {children}
    </motion.a>
  );
}

function CtaRow({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
      {children}
    </div>
  );
}

export default function NorwayHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-10 sm:py-14">
          <h2 className={`${h2Class} mb-6 sm:mb-8 max-w-3xl`} style={{ color: NAVY }}>
            Norway IPTV Benefits and Features{" "}
            <span style={{ color: RED }}>at a Glance</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-4 min-h-[72px]"
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Check className="h-4 w-4 text-white" />
                </span>
                <span className="text-[13px] sm:text-[14px] font-bold leading-snug" style={{ color: NAVY }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-center">
          <h2 className={`${h2Class} mx-auto`} style={{ color: NAVY }}>
            Norsk IPTV for TV, Football and Entertainment in{" "}
            <span style={{ color: RED }}>Norway</span>
          </h2>
          <div className={`mt-5 sm:mt-6 space-y-4 ${bodyClass} mx-auto max-w-3xl`}>
            <p>
              Looking for a flexible way to watch television over the internet? Norsk IPTV is a popular search term among viewers exploring internet-based television, Nordic entertainment, live sports, and on-demand content.
            </p>
            <p>
              Whether you are researching IPTV Norge, comparing an IPTV abonnement, or looking for the beste IPTV for your viewing needs, choosing the right service involves more than comparing channel counts. You should also consider streaming quality, device compatibility, subscription costs, customer support, and access to properly licensed content.
            </p>
            <p>
              With a suitable IPTV setup, you can watch television on a compatible Smart TV, Amazon Fire TV Stick, Android TV device, Apple TV, smartphone, tablet, or computer.
            </p>
            <p>
              Explore our IPTV options that match your devices, viewing preferences, and budget.
            </p>
          </div>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
            <PrimaryButton href="/#plans">Check Subscription Plans</PrimaryButton>
            <SecondaryButton href="/#devices">Check Device Compatibility</SecondaryButton>
          </div>
        </div>
      </section>

      <section id="plans" className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Choose Your IPTV Abonnement in <span style={{ color: RED }}>Norway</span>
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            Compare our IPTV abonnement options for Norway and choose a subscription period that suits your viewing needs. Explore features for compatible devices, TV streaming, and entertainment.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(11,30,92,0.04)]"
            >
              <h3 className="text-[22px] sm:text-[24px] font-extrabold" style={{ color: NAVY }}>
                {plan.name}
              </h3>
              <ul className="mt-5 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-[#343341] leading-snug">
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref(`Hi, I want to activate the ${plan.name} Norway IPTV plan`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: RED }}
              >
                Activate Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <CompatibleSetupSection />

      <section className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Why Consider <span style={{ color: RED }}>IPTV Norwegian?</span>
          </h2>
          <div className={`mt-4 sm:mt-5 space-y-4 ${bodyClass}`}>
            <p>Choosing a television service depends on what you watch, which devices you own, and how much flexibility you need.</p>
            <p>When comparing IPTV Norge options, consider the following factors before choosing a subscription.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {whyConsider.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 p-5 sm:p-6">
              <h3 className="text-[16px] sm:text-[18px] font-bold" style={{ color: NAVY }}>
                {item.title}
              </h3>
              <p className={`mt-2 ${bodyClass}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Beste IPTV Norge: How to Choose the Right{" "}
            <span style={{ color: RED }}>Norway IPTV</span> Service
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            Searching for beste IPTV, beste IPTV Norge, bra IPTV or IPTV premium can produce many competing offers. Instead of relying on promotional claims, compare providers using practical criteria.
          </p>
        </div>
        <div className="mt-8 hidden md:block overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-5 py-4 text-[14px] font-bold" style={{ color: NAVY }}>Comparison factor</th>
                <th className="px-5 py-4 text-[14px] font-bold" style={{ color: NAVY }}>What to check</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([factor, check]) => (
                <tr key={factor} className="border-t border-zinc-200">
                  <td className="px-5 py-4 text-[14px] font-bold align-top w-[34%]" style={{ color: NAVY }}>{factor}</td>
                  <td className="px-5 py-4 text-[14px] text-[#343341] leading-relaxed">{check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 md:hidden space-y-3">
          {comparisonRows.map(([factor, check]) => (
            <article key={factor} className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-[14px] font-bold" style={{ color: NAVY }}>{factor}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#343341]">{check}</p>
            </article>
          ))}
        </div>
        <p className={`mt-6 ${bodyClass}`}>
          Do not assume that a service labelled nordic IPTV, nordisk IPTV or IPTV premium automatically offers better quality or more reliable access.
        </p>
        <CtaRow>
          <PrimaryButton href="/#contact">Contact Us for the Best IPTV Service in Norway</PrimaryButton>
        </CtaRow>
      </section>

      <section className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            IPTV Abonnement and <span style={{ color: RED }}>IPTV Pris</span>
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            Before selecting an IPTV abonnement, understand the price, subscription period and included features.
          </p>
          <h3 className="mt-6 text-[18px] sm:text-[20px] font-bold" style={{ color: NAVY }}>
            What to Compare Before Paying
          </h3>
          <ul className="mt-4 space-y-3">
            {priceChecks.map((item) => (
              <li key={item} className={`flex items-start gap-2.5 ${bodyClass}`}>
                <Check className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: RED }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={`mt-5 space-y-4 ${bodyClass}`}>
            <p>
              A longer subscription may offer a lower average monthly cost, but it also involves a larger upfront payment. Consider the provider&apos;s reliability and terms before making that commitment.
            </p>
            <p>
              If you are comparing IPTV subscription, paid IPTV, and IPTV abonnement offers, focus on the total cost and verified service features rather than price alone.
            </p>
          </div>
          <CtaRow>
            <PrimaryButton href="/#plans">Compare Available IPTV Plans</PrimaryButton>
          </CtaRow>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-6 xl:col-span-6">
            <h2 className={h2Class} style={{ color: NAVY }}>
              IPTV Fotball and <span style={{ color: RED }}>IPTV Premier League</span>
            </h2>
            <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
              Football is an important consideration for viewers researching IPTV services in Norway.
            </p>
            <p className={`mt-4 font-bold ${bodyClass}`} style={{ color: NAVY }}>
              Before purchasing a service for football, check:
            </p>
            <ul className="mt-4 space-y-3">
              {footballChecks.map((item) => (
                <li key={item} className={`flex items-start gap-2.5 ${bodyClass}`}>
                  <Check className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: RED }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CtaRow>
              <PrimaryButton href="/#plans">Choose IPTV Norwegians</PrimaryButton>
              <SecondaryButton href="/#contact">Contact Us</SecondaryButton>
            </CtaRow>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square">
              <Image
                src="/Norsk iptv for tv.jpg"
                alt="Norwegian flag football for IPTV Fotball and Premier League"
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Nordic IPTV and <span style={{ color: RED }}>IPTV Norden</span>
          </h2>
          <div className={`mt-4 sm:mt-5 space-y-4 ${bodyClass}`}>
            <p>
              Viewers searching for Nordic IPTV, nordisk IPTV, IPTV Norden or IPTV Scandinavia may be interested in television content from Norway, Sweden, Denmark and other Nordic countries.
            </p>
            <p>
              When evaluating a Nordic television service, review its actual channel list, language options, subtitles, regional availability, and subscription conditions.
            </p>
            <p className="font-bold" style={{ color: NAVY }}>Consider these questions:</p>
          </div>
          <ul className="mt-4 space-y-3">
            {nordicQuestions.map((item) => (
              <li key={item} className={`flex items-start gap-2.5 ${bodyClass}`}>
                <Check className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: RED }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={`mt-5 ${bodyClass}`}>
            Terms such as Nordic IPTV and Norwegian IPTV describe a broad area of interest, not a guarantee of any particular channel selection.
          </p>
        </div>
      </section>

      <section id="players" className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Best IPTV Players for <span style={{ color: RED }}>Different Devices</span>
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            The following options are worth considering, subject to current platform availability:
          </p>
        </div>
        <div className="mt-8 hidden md:block overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-5 py-4 text-[14px] font-bold" style={{ color: NAVY }}>Device or platform</th>
                <th className="px-5 py-4 text-[14px] font-bold" style={{ color: NAVY }}>IPTV players to investigate</th>
              </tr>
            </thead>
            <tbody>
              {playerRows.map(([device, players]) => (
                <tr key={device} className="border-t border-zinc-200">
                  <td className="px-5 py-4 text-[14px] font-bold align-top w-[34%]" style={{ color: NAVY }}>{device}</td>
                  <td className="px-5 py-4 text-[14px] text-[#343341] leading-relaxed">{players}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 md:hidden space-y-3">
          {playerRows.map(([device, players]) => (
            <article key={device} className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-[14px] font-bold" style={{ color: NAVY }}>{device}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#343341]">{players}</p>
            </article>
          ))}
        </div>
        <div className={`mt-6 space-y-4 max-w-3xl ${bodyClass}`}>
          <p>
            The names above are examples rather than a guarantee that every app is currently available for every model. Availability, licensing, and features may change.
          </p>
          <h3 className="text-[18px] font-bold" style={{ color: NAVY }}>What About M3U and Xtream Codes?</h3>
          <p>
            An IPTV player may support an M3U playlist, an Xtream Codes-compatible login or another format. Not every player supports every format, so check your service&apos;s instructions before choosing an application.
          </p>
          <p>
            Use only playlist links and account details you are authorised to access. Keep private login information secure and avoid sharing subscription credentials with untrusted websites.
          </p>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            How to Get IPTV: <span style={{ color: RED }}>A Simple Setup Guide</span>
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            If you are searching for hvordan få IPTV, the setup process normally involves choosing a legitimate service, selecting a compatible player, and configuring access.
          </p>
          <ol className="mt-6 space-y-4">
            {setupSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold" style={{ color: NAVY }}>{step.title}</h3>
                  <p className={`mt-1 ${bodyClass}`}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={`mt-5 ${bodyClass}`}>
            If you experience problems, check the application&apos;s documentation and the service&apos;s support resources before changing advanced settings.
          </p>
          <CtaRow>
            <PrimaryButton href="/#plans">View Discounted Prices</PrimaryButton>
            <SecondaryButton href={whatsappHref("Hi, I need help with Norway IPTV setup")} external>
              WhatsApp Us
            </SecondaryButton>
          </CtaRow>
        </div>
      </section>

      <section id="reseller" className={sectionClass}>
        <div className="max-w-3xl">
          <h2 className={h2Class} style={{ color: NAVY }}>
            Become an IPTV Reseller in <span style={{ color: RED }}>Norway</span>
          </h2>
          <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
            Interested in offering IPTV-related services to customers in Norway? Explore our reseller opportunities to learn about account management, subscription options, activation procedures and available support.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resellerItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="text-[16px] font-bold" style={{ color: NAVY }}>{item.title}</h3>
              <p className={`mt-2 ${bodyClass}`}>{item.text}</p>
            </article>
          ))}
        </div>
        <CtaRow>
          <PrimaryButton href={whatsappHref("Hi, I want to explore the IPTV reseller program in Norway")} external>
            Explore the IPTV Reseller Program
          </PrimaryButton>
        </CtaRow>
      </section>

      <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 scroll-mt-28">
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[#D72C2C] text-xs font-bold tracking-widest uppercase mb-3 block">
            FAQs
          </span>
          <h2 className={`${h2Class} text-center`} style={{ color: NAVY }}>
            Frequently Asked Questions About{" "}
            <span style={{ color: RED }}>Norsk IPTV</span>
          </h2>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                openFaq === index
                  ? "border-[#D72C2C] shadow-[0_4px_20px_rgba(215,44,44,0.08)]"
                  : "border-zinc-200"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 text-left gap-3 sm:gap-4"
              >
                <span className={`text-[13px] sm:text-[15px] font-bold leading-snug ${openFaq === index ? "text-[#D72C2C]" : "text-[#0B1E5C]"}`}>
                  {index + 1}. {faq.question}
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 ${openFaq === index ? "text-[#D72C2C]" : "text-zinc-400"} ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100">
                      <p className="text-[#343341] text-[12px] sm:text-[14px] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28 bg-white">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:px-14 sm:py-16 text-center shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
          <h2 className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 max-w-3xl mx-auto" style={{ color: NAVY }}>
            Ready to Choose Your <span style={{ color: RED }}>Norsk IPTV</span> Subscription?
          </h2>
          <div className={`space-y-3 max-w-2xl mx-auto ${bodyClass}`}>
            <p>
              Enjoy a more flexible way to watch TV with an IPTV abonnement tailored to your devices and viewing preferences. Explore our IPTV Norge plans, check compatible players, and choose the subscription that works for you.
            </p>
            <p>Find your plan and get started today.</p>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
            <PrimaryButton href="/#plans">Explore IPTV Plans</PrimaryButton>
            <SecondaryButton href="/#contact">Contact Us</SecondaryButton>
            <a
              href={whatsappHref("Hi, I want to choose a Norsk IPTV subscription")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 h-auto items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 sm:px-7 py-3 text-[13px] sm:text-sm font-bold text-center leading-tight"
              style={{ color: NAVY }}
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
