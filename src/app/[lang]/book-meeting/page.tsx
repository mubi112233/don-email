import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookMeetingClient from "./BookMeetingClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

const SUPPORTED_LANGS = ["en", "ge", "de"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const isDE = seg === "de";
  const title = isDE ? "Termin buchen — Kostenlose E-Mail-Beratung | don-email" : "Book a Meeting — Free Email Management Consultation | don-email";
  const description = isDE
    ? "Vereinbaren Sie eine kostenlose E-Mail-Beratung mit don-email und erfahren Sie, wie wir Ihnen helfen, Ihren Posteingang zu optimieren."
    : "Schedule a free email management consultation with don-email and learn how we can help transform your inbox with professional organization.";
  const { languages } = hreflangAlternates("book-meeting");
  const canonical = absoluteUrl(`/${seg}/book-meeting`);

  return {
    title,
    description,
    keywords: isDE
      ? ["E-Mail-Beratung", "E-Mail-Termin", "don-email termin", "Inbox-Beratung"]
      : ["email management consultation", "email audit call", "don-email meeting", "inbox consultation"],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      siteName: "don-email",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "don-email Email Management" }],
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

export default async function BookMeetingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  const lang = rawLang === "ge" || rawLang === "de" ? "ge" : "en";
  const isDE = lang === "ge";
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: isDE ? "Startseite" : "Home", href: `/${lang}` },
    { label: isDE ? "Meeting buchen" : "Book Meeting", href: `/${lang}/book-meeting` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BookMeetingClient />
    </>
  );
}
