import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NorwayHome from "@/components/home/NorwayHome";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/homepage-content";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <JsonLd data={faqJsonLd} />
      <Header />
      <Hero />
      <NorwayHome />
      <Footer />
    </div>
  );
}
