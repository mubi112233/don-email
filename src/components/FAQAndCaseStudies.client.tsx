"use client";

import { useEffect, useState } from "react";
import { fetchFAQ, fetchCaseStudies, normalizeLanguage } from "@/lib/api";
import type { FAQItem, CaseStudiesResponse } from "@/lib/api";
import { FAQInteractive } from "@/components/FAQInteractive.client";
import { CaseStudiesClient } from "@/components/CaseStudiesClient.client";

export function FAQAndCaseStudies({ lang }: { lang: string }) {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudiesResponse | null>(null);

  useEffect(() => {
    const normalized = normalizeLanguage(lang);

    fetchFAQ(normalized).then((data) => {
      if (data?.faqs) {
        const sorted = [...data.faqs].sort((a, b) => a.order - b.order);
        setFaqs(sorted);
      }
    });

    fetchCaseStudies(normalized).then((data) => {
      if (data) setCaseStudies(data);
    });
  }, [lang]);

  return (
    <>
      <CaseStudiesClient lang={lang} caseStudies={caseStudies} />
      <FAQInteractive faqs={faqs} lang={lang} />
    </>
  );
}
