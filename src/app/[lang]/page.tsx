import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { HomeBelowFold } from "@/components/HomeBelowFold.hybrid";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchApiData, API_ENDPOINTS, normalizeLanguage, fetchFAQ } from "@/lib/api";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL, absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export const revalidate = 3600;

const SUPPORTED_LANGS = ['en', 'ge', 'de'];

async function getHeroMeta(lang: string) {
  try {
    const data = await fetchApiData<{ hero: any | any[] }>(API_ENDPOINTS.HERO, normalizeLanguage(lang));
    if (!data?.hero) return null;

    // Handle array response (multiple heroes)
    if (Array.isArray(data.hero)) {
      // Prefer hero with metaTitle/metaDescription for SEO, then fall back to newest
      const withMeta = data.hero.find((h: any) => h.metaTitle || h.metaDescription);
      if (withMeta) {
        console.log(`[getHeroMeta] Found hero with SEO meta:`, withMeta._id);
        return withMeta;
      }
      // Sort by _id (newest first - MongoDB ObjectId contains timestamp)
      const sorted = data.hero.sort((a: any, b: any) => {
        const idA = a._id || '';
        const idB = b._id || '';
        return idB.localeCompare(idA);
      });
      console.log(`[getHeroMeta] Found ${sorted.length} heroes, using newest:`, sorted[0]?._id);
      return sorted[0] || null;
    }

    return data.hero;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === 'de' || rawLang === 'ge' ? 'ge' : 'en';
  const hero = await getHeroMeta(lang);
  console.log("[generateMetadata] hero data:", JSON.stringify({ metaTitle: hero?.metaTitle, metaDescription: hero?.metaDescription, metaKeywords: hero?.metaKeywords, title: hero?.title, _id: hero?._id }));

  const title =
    hero?.metaTitle ||
    (lang === "ge"
      ? "don-email – Professionelles E-Mail-Management | 80% Zeit sparen"
      : "don-email – Professional Email Management | Save 80% Time");
  const description =
    hero?.metaDescription ||
    (lang === "ge"
      ? "Professionelles E-Mail-Management, das Ihr Chaos in organisierte Produktivität verwandelt. Sparen Sie 15+ Stunden pro Woche mit intelligenter Automatisierung."
      : "Professional email management that transforms your chaos into organized productivity. Save 15+ hours per week with intelligent automation.");
  const keywordsFromHero = hero?.metaKeywords
    ? hero.metaKeywords.split(",").map((k: string) => k.trim())
    : null;
  const defaultDeKeywords = [
    "E-Mail-Management",
    "Inbox Zero",
    "E-Mail-Automatisierung",
    "E-Mail-Organisation",
    "E-Mail-Outsourcing",
    "Inbox-Verwaltung",
    "E-Mail-Produktivität",
    "E-Mail-Workflow",
    "E-Mail-Service",
    "E-Mail-Agentur",
  ];
  const defaultEnKeywords = [
    "email management",
    "inbox zero",
    "email automation",
    "email organization",
    "email outsourcing",
    "inbox management",
    "email productivity",
    "email workflow",
    "email service",
    "virtual email assistant",
  ];
  const keywords = keywordsFromHero ?? (lang === "ge" ? defaultDeKeywords : defaultEnKeywords);
  const pathSeg = publicLocalePathSegment(lang);
  const canonical = absoluteUrl(`/${pathSeg}`);
  const { languages } = hreflangAlternates("");

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "don-email",
      locale: lang === "ge" ? "de_DE" : "en_US",
      alternateLocale: lang === "ge" ? "en_US" : "de_DE",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: lang === "ge" ? "don-email — E-Mail-Management-Agentur" : "don-email — Professional Email Management",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

const pageJsonLd = (baseUrl: string) => ({
  en: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "don-email — Professional Email Management",
    provider: { "@type": "Organization", name: "don-email" },
    description:
      "Professional email management that transforms your chaos into organized productivity. Save 15+ hours per week with intelligent automation.",
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableLanguage: ["English", "German"],
    url: `${baseUrl}/en`,
    inLanguage: "en-US",
  },
  ge: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "don-email — Professionelles E-Mail-Management",
    provider: { "@type": "Organization", name: "don-email" },
    description:
      "Professionelles E-Mail-Management, das Ihr Chaos in organisierte Produktivität verwandelt. Sparen Sie 15+ Stunden pro Woche mit intelligenter Automatisierung.",
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableLanguage: ["Deutsch", "Englisch"],
    url: `${baseUrl}/de`,
    inLanguage: "de-DE",
  },
});

export default async function HomeLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLangValue } = await params;
  const rawLang = rawLangValue?.toLowerCase();

  if (!SUPPORTED_LANGS.includes(rawLang)) {
    notFound();
  }

  const lang = rawLang === 'de' || rawLang === 'ge' ? 'ge' : 'en';
  const jsonLd = pageJsonLd(SITE_URL)[lang];

  // Fetch FAQ data for structured data
  const faqData = await fetchFAQ(lang);
  const faqs = faqData?.faqs?.slice(0, 10) || []; // Limit to 10 FAQs for schema

  // Generate FAQ schema
  const faqSchema = faqs.length > 0
    ? generateFAQSchema(faqs.map((f: any) => ({ question: f.question, answer: f.answer })))
    : null;

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: lang === 'ge' ? 'Startseite' : 'Home', href: `/${lang}` },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <HomeBelowFold lang={lang} />
      </main>
    </div>
  );
}
