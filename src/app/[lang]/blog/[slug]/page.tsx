import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { Navbar } from "@/components/Navbar";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const seg = publicLocalePathSegment(lang);
  const pathAfterLocale = `blog/${slug}`;
  const canonical = absoluteUrl(`/${seg}/${pathAfterLocale}`);
  const { languages } = hreflangAlternates(pathAfterLocale);
  return { alternates: { canonical, languages } };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang === "de" || rawLang === "ge" ? "ge" : "en";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogPostClient slug={slug} lang={lang} />
    </div>
  );
}
