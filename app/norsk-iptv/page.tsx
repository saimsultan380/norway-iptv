import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import NorskIptvClient from "./NorskIptvClient";
import { SITE_NAME, SITE_URL, canonicalUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Norsk IPTV: Best IPTV Subscription for Norway in 2026",
  description:
    "Discover norsk IPTV for Norwegian channels, Nordic entertainment, football and HD streaming. Explore IPTV Norge plans, devices and setup options.",
  path: "/norsk-iptv/",
  index: true,
});

export default function NorskIptvPage() {
  const faqData = [
    {
      question: "What is norsk IPTV?",
      answer:
        "Norsk IPTV refers to internet-based television services used in Norway. It allows viewers to stream available live TV and on-demand content through compatible devices and applications.",
    },
    {
      question: "Which is the best norsk IPTV provider?",
      answer:
        "The best provider depends on channel availability, streaming quality, device compatibility, price and content rights. IPTV Norwegian is worth considering if you want a standalone subscription with different plan durations.",
    },
    {
      question: "Can I watch Norwegian channels through IPTV?",
      answer:
        "Yes, some IPTV services offer Norwegian channels. Check the provider's current channel list to confirm which Norwegian stations are available.",
    },
    {
      question: "Can I watch IPTV Premier League in Norway?",
      answer:
        "Availability depends on broadcasting rights and the provider's authorised sports content. Check which Premier League matches are legally available in Norway before subscribing.",
    },
    {
      question: "Does norsk IPTV work on Firestick?",
      answer:
        "Many IPTV players are available for compatible Amazon Fire TV devices. You need a supported player and valid subscription details to configure the service.",
    },
    {
      question: "What internet speed do I need for IPTV?",
      answer:
        "The required speed depends on the streaming resolution, number of connected devices and service requirements. A stable broadband connection is important, particularly for HD and 4K playback.",
    },
    {
      question: "What is the difference between IPTV and Nordic IPTV?",
      answer:
        "Norsk IPTV generally refers to IPTV used for Norwegian audiences, while Nordic IPTV usually describes services or content covering multiple Nordic countries, such as Norway, Sweden, Denmark and Finland.",
    },
    {
      question: "Can I use an IPTV subscription on multiple devices?",
      answer:
        "This depends on the provider's subscription conditions. Check how many simultaneous connections are included before purchasing a plan.",
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
    headline: "Norsk IPTV: A Guide to IPTV Streaming in Norway",
    description:
      "Discover norsk IPTV for Norwegian channels, Nordic entertainment, football and HD streaming. Explore IPTV Norge plans, devices and setup options.",
    image: `${SITE_URL}/norsk-iptv-guide.jpg`,
    datePublished: "2026-01-20T08:00:00+01:00",
    dateModified: "2026-11-02T14:00:00+01:00",
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
      "@id": canonicalUrl("/norsk-iptv/"),
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "Norsk IPTV Guide",
            path: "/norsk-iptv/",
          },
        ]}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
      <NorskIptvClient />
    </>
  );
}
