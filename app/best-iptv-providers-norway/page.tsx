import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import BlogPostClient from "./BlogPostClient";
import { SITE_NAME, SITE_URL, canonicalUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Best IPTV Providers in Norway: Top Choices for 2026",
  description:
    "Compare the best IPTV providers in Norway for channels, sports, streaming quality and devices. Explore IPTV Norwegian and find your ideal plan.",
  path: "/best-iptv-providers-norway/",
  index: true,
});

export default function BestIptvProvidersNorwayPage() {
  const faqData = [
    {
      question: "What is the best IPTV provider in Norway?",
      answer:
        "The best provider depends on your preferred channels, budget, device and content requirements. IPTV Norwegian is worth considering for users looking for a standalone subscription with flexible plan durations and compatible device options.",
    },
    {
      question: "What is the best norsk IPTV service?",
      answer:
        "Look for a service with the Norwegian channels you want, suitable streaming quality, clear subscription terms and verified content rights. Always check the current channel list before subscribing.",
    },
    {
      question: "How much does IPTV cost in Norway?",
      answer:
        "IPTV pris varies by provider, package and subscription duration. Compare the full cost, renewal terms and included features before choosing a plan.",
    },
    {
      question: "Can I watch Premier League through IPTV in Norway?",
      answer:
        "Sports availability depends on broadcasting rights and the provider's authorised content. Check which matches are legally available in Norway before purchasing a subscription.",
    },
    {
      question: "Which devices support IPTV in Norway?",
      answer:
        "Depending on the application and service, IPTV can work on Firestick, Android TV, Smart TVs, Apple TV, smartphones, tablets and computers.",
    },
    {
      question: "Is IPTV legal in Norway?",
      answer:
        "IPTV technology is legal, but distributing copyrighted content requires the appropriate rights. Choose providers that can demonstrate their authorisation to distribute the content they offer.",
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
    headline: "Best IPTV Providers in Norway: Top Choices for 2026",
    description:
      "Compare the best IPTV providers in Norway for channels, sports, streaming quality and devices. Explore IPTV Norwegian and find your ideal plan.",
    image: `${SITE_URL}/best-iptv-providers-norway.jpg`,
    datePublished: "2026-01-15T08:00:00+01:00",
    dateModified: "2026-11-02T12:00:00+01:00",
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
      "@id": canonicalUrl("/best-iptv-providers-norway/"),
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "Best IPTV Providers in Norway",
            path: "/best-iptv-providers-norway/",
          },
        ]}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
      <BlogPostClient />
    </>
  );
}
