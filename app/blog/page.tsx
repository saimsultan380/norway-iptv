import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BlogClient from "./BlogClient";

export const metadata = pageMetadata({
  title: "Blog – British IPTV UK Guides, News & Updates",
  description:
    "Explore the latest British IPTV blogs posts, tutorials, streaming guides, and news updates.",
  path: "/blog/",
  index: false,
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
