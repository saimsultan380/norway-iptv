import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BlogClient from "./BlogClient";

export const metadata = pageMetadata({
  title: "IPTV Norge Blog – Guides, Reviews & Streaming Tips 2026",
  description:
    "Explore the latest Norwegian IPTV guides, provider comparisons, streaming setup tutorials, and sports broadcast insights.",
  path: "/blog/",
  index: true,
});

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />
      <BlogClient />
    </>
  );
}
