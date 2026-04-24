import type { Metadata } from "next";
import { CaseStudies } from "./CaseStudiesListingClient";
import { Navbar } from "@/components/Navbar";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const { languages } = hreflangAlternates("case-studies");
  const canonical = absoluteUrl(`/${seg}/case-studies`);

  const isDe = seg === "de";
  const title = isDe
    ? "Fallstudien — E-Mail-Management Erfolge | don-email"
    : "Case Studies — Email Management Success Stories | don-email";
  const description = isDe
    ? "Entdecken Sie, wie wir Unternehmen halfen, E-Mail-Chaos in organisierte Effizienz zu verwandeln."
    : "Discover how we helped businesses transform email chaos into organized efficiency.";

  return {
    title,
    description,
    keywords: isDe
      ? [
          "Fallstudien",
          "E-Mail-Management Erfolge",
          "Inbox Zero",
          "E-Mail-Automatisierung",
          "don-email",
        ]
      : [
          "case studies",
          "email management success",
          "inbox zero results",
          "email automation ROI",
          "don-email",
        ],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDe ? "de_DE" : "en_US",
      alternateLocale: isDe ? "en_US" : "de_DE",
      siteName: "don-email",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "don-email Case Studies" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = raw === 'de' || raw === 'ge' ? 'ge' : 'en';
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: lang === 'ge' ? 'Startseite' : 'Home', href: `/${lang}` },
    { label: lang === 'ge' ? 'Fallstudien' : 'Case Studies', href: `/${lang}/case-studies` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <CaseStudies lang={lang} />
      </div>
    </>
  );
}
