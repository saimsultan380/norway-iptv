import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import ChromecastIptvClient from "./ChromecastIptvClient";
import { SITE_NAME, SITE_URL, canonicalUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Chromecast IPTV: How to Set Up IPTV on Chromecast in 2026",
  description:
    "Learn how to use Chromecast IPTV in Norway. Discover compatible apps, setup steps, M3U playlists, streaming tips and common fixes.",
  path: "/chromecast-iptv/",
  index: true,
});

export default function ChromecastIptvPage() {
  const faqData = [
    {
      question: "Can you use IPTV on Chromecast?",
      answer:
        "Yes. You can use IPTV on Chromecast by casting supported content from a phone or computer. Chromecast with Google TV also allows you to install compatible IPTV applications directly.",
    },
    {
      question: "Which Chromecast is best for IPTV?",
      answer:
        "Chromecast with Google TV HD or 4K is generally more flexible because it supports compatible application installations. Older Chromecast models mainly rely on casting from another device.",
    },
    {
      question: "Which IPTV app works best on Chromecast?",
      answer:
        "TiviMate, IPTV Smarters and other compatible Android TV applications are worth exploring on Chromecast with Google TV. The best option depends on your playlist format and device compatibility.",
    },
    {
      question: "Can I install TiviMate on Chromecast?",
      answer:
        "TiviMate is designed for Android TV and compatible Android devices. You can check its current availability through Google Play Store on Chromecast with Google TV.",
    },
    {
      question: "Can I use an M3U playlist on Chromecast?",
      answer:
        "Yes, if your IPTV player supports M3U playlists. Add the playlist URL supplied by your provider and follow the application's setup instructions.",
    },
    {
      question: "Does Chromecast IPTV support 4K?",
      answer:
        "Chromecast with Google TV 4K supports 4K output, but the IPTV stream, application, television and internet connection must also support the required resolution.",
    },
    {
      question: "Why is IPTV buffering on Chromecast?",
      answer:
        "Buffering can be caused by an unstable internet connection, network congestion, an overloaded device, application problems or issues with the source stream.",
    },
    {
      question: "Can I use Chromecast IPTV in Norway?",
      answer:
        "Yes. You can use compatible Chromecast devices and IPTV applications in Norway. Make sure your service has the necessary rights to distribute the content you want to watch.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Chromecast IPTV: How to Watch IPTV on Chromecast in Norway",
    description:
      "Learn how to use Chromecast IPTV in Norway. Discover compatible apps, setup steps, M3U playlists, streaming tips and common fixes.",
    image: `${SITE_URL}/chromecast-iptv-norway.jpg`,
    datePublished: "2026-01-25T08:00:00+01:00",
    dateModified: "2026-11-02T15:00:00+01:00",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-schema.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl("/chromecast-iptv/"),
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "Chromecast IPTV Setup Guide",
            path: "/chromecast-iptv/",
          },
        ]}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
      <ChromecastIptvClient />
    </>
  );
}
