"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deviceSetups, type DeviceSetup } from "@/lib/device-setup";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

function FirestickIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="8" y="20" width="28" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M36 22h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="24" r="1.5" fill="currentColor" />
      <path d="M20 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SmartTvIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="10" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 34v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="15" y="6" width="18" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="36" r="1.5" fill="currentColor" />
      <path d="M20 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="8" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 40h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 34v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 18h20v8H14z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AppleTvIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="10" y="18" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="26" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 14h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChromecastIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M10 34c4 4 10 6 14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RokuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="8" y="16" width="32" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="24" r="2" fill="currentColor" />
      <path d="M22 24h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TvBoxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="8" y="14" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M14 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="24" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M18 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const ICONS: Record<string, (props: { className?: string }) => ReactNode> = {
  "amazon-firestick": FirestickIcon,
  "samsung-smart-tv": SmartTvIcon,
  "lg-smart-tv": SmartTvIcon,
  "android-tv": SmartTvIcon,
  "android-phones": PhoneIcon,
  "iphone-ipad": PhoneIcon,
  "windows-mac": MonitorIcon,
  "apple-tv": AppleTvIcon,
  chromecast: ChromecastIcon,
  roku: RokuIcon,
  "google-tv": SmartTvIcon,
  "tv-boxes": TvBoxIcon,
};

function GuidePanel({ device }: { device: DeviceSetup }) {
  return (
    <div className="h-full rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 lg:p-8">
      <p className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase" style={{ color: RED }}>
        {device.eyebrow}
      </p>
      <h3
        className="mt-2 text-[20px] sm:text-[24px] lg:text-[26px] font-extrabold tracking-tight leading-tight"
        style={{ color: NAVY }}
      >
        {device.heading}
      </h3>
      <ol className="mt-6 sm:mt-7 space-y-4 sm:space-y-5">
        {device.steps.map((step, index) => (
          <li key={step} className="flex gap-3.5 sm:gap-4">
            <span
              className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] sm:text-sm font-bold text-white"
              style={{ backgroundColor: NAVY }}
            >
              {index + 1}
            </span>
            <p className="pt-1 text-[13px] sm:text-[15px] leading-relaxed text-[#4b4b57]">{step}</p>
          </li>
        ))}
      </ol>
      {device.note ? (
        <p className="mt-5 text-[12px] sm:text-[13px] leading-relaxed text-[#5a5a68] border-t border-zinc-100 pt-4">
          {device.note}
        </p>
      ) : null}
    </div>
  );
}

export default function CompatibleSetupSection() {
  const [activeId, setActiveId] = useState(deviceSetups[0].id);
  const active = deviceSetups.find((d) => d.id === activeId) ?? deviceSetups[0];

  const selectDevice = (id: string) => {
    setActiveId(id);
  };

  return (
    <section id="devices" className="bg-white scroll-mt-28">
      <div id="installation" className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 scroll-mt-28">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase" style={{ color: NAVY }}>
            SETUP
          </p>
          <h2 className="mt-3 text-[26px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.12]" style={{ color: NAVY }}>
            Norway IPTV Compatible Devices and{" "}
            <span style={{ color: RED }}>Installation Guides</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[13px] sm:text-[15px] leading-relaxed text-[#4b4b57]">
            Looking for hvordan få IPTV or how to install IPTV in Norway? Our IPTV service is designed for flexible TV streaming across compatible devices. You will generally need a compatible device, a supported IPTV player, and valid subscription details or an authorised playlist.
          </p>
        </div>

        {/* Desktop: grid left + live panel right */}
        <div className="mt-8 sm:mt-10 hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-6 items-start">
          <div className="lg:col-span-5 xl:col-span-5 rounded-2xl border border-zinc-200 bg-white p-4 xl:p-5">
            <p className="px-1 pb-3 text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: NAVY }}>
              Compatible Devices
            </p>
            <div className="grid grid-cols-3 gap-2.5 xl:gap-3">
              {deviceSetups.map((device) => {
                const Icon = ICONS[device.id];
                const isActive = device.id === activeId;
                return (
                  <button
                    key={device.id}
                    type="button"
                    onClick={() => selectDevice(device.id)}
                    className={`flex min-h-[104px] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center transition-all ${
                      isActive
                        ? "border-[#D72C2C] bg-[#D72C2C]/[0.03] shadow-[0_0_0_1px_rgba(215,44,44,0.15)]"
                        : "border-zinc-200 hover:border-zinc-300 bg-white"
                    }`}
                  >
                    {Icon ? (
                      <Icon className={`h-8 w-8 ${isActive ? "text-[#D72C2C]" : "text-[#0B1E5C]"}`} />
                    ) : null}
                    <span
                      className={`text-[11px] xl:text-[12px] font-semibold leading-tight ${
                        isActive ? "text-[#D72C2C]" : "text-[#0B1E5C]"
                      }`}
                    >
                      {device.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <GuidePanel device={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: 3-up device grid + one guide panel (updates in place) */}
        <div className="mt-8 lg:hidden space-y-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4">
            <p className="px-1 pb-3 text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: NAVY }}>
              Compatible Devices
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              {deviceSetups.map((device) => {
                const Icon = ICONS[device.id];
                const isActive = device.id === activeId;
                return (
                  <button
                    key={device.id}
                    type="button"
                    onClick={() => selectDevice(device.id)}
                    className={`flex min-h-[92px] sm:min-h-[100px] flex-col items-center justify-center gap-1.5 rounded-xl border px-1.5 py-2.5 text-center transition-all ${
                      isActive
                        ? "border-[#D72C2C] bg-[#D72C2C]/[0.03]"
                        : "border-zinc-200 bg-white"
                    }`}
                  >
                    {Icon ? (
                      <Icon className={`h-7 w-7 ${isActive ? "text-[#D72C2C]" : "text-[#0B1E5C]"}`} />
                    ) : null}
                    <span
                      className={`text-[10px] sm:text-[11px] font-semibold leading-tight ${
                        isActive ? "text-[#D72C2C]" : "text-[#0B1E5C]"
                      }`}
                    >
                      {device.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <GuidePanel device={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="/#plans"
            className="inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: RED }}
          >
            Choose Your IPTV Subscription
          </a>
          <a
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-bold"
            style={{ color: NAVY }}
          >
            Contact Us for Setup Assistance
          </a>
        </div>

        <p className="mt-6 text-[12px] sm:text-[13px] leading-relaxed text-[#5a5a68] max-w-3xl">
          Compatibility varies by model, operating system, app availability, and IPTV connection method. Roku devices and some Smart TVs have more limited options for third-party IPTV players. Verify compatibility before purchasing a subscription or app. Downloading an IPTV player does not automatically include TV channels or an IPTV abonnement.
        </p>
      </div>
    </section>
  );
}
