"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchApiDataClient, API_ENDPOINTS, normalizeLanguage } from "@/lib/api";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";

interface Result {
  metric: string;
  value: string;
  description: string;
}

interface CaseStudyData {
  caseStudyId: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Result[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: { costSaved: string; timeframe: string; vaCount: string };
}

export default function CaseStudyClient({
  slug,
  lang,
}: {
  slug: string;
  lang: string;
}) {
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const copy = getCopy(lang, "caseStudies");
  const isGe = lang === "ge";

  useEffect(() => {
    const caseStudyId = Number(slug.split("-").pop());
    if (isNaN(caseStudyId)) {
      setLoading(false);
      return;
    }

    fetchApiDataClient<{ caseStudies: CaseStudyData[] }>(
      API_ENDPOINTS.CASE_STUDIES,
      normalizeLanguage(lang)
    ).then((data) => {
      const studies = data?.caseStudies ?? [];
      const found = studies.find((cs) => cs.caseStudyId === caseStudyId) ?? null;
      setCaseStudy(found);
      setLoading(false);
    });
  }, [slug, lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          {isGe ? "Fallstudie nicht gefunden." : "Case study not found."}
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background`}>
      <div className={`${SPACING.sideMargin}`}>
        <article className="max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link href={`/${lang}`} className="hover:text-foreground transition-colors">
              {isGe ? "Startseite" : "Home"}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${lang}/#case-studies`} className="hover:text-foreground transition-colors">
              {isGe ? "Fallstudien" : "Case Studies"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground truncate inline-block max-w-[150px] sm:max-w-none align-bottom">
              {caseStudy.company}
            </span>
          </nav>

          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-sm text-muted-foreground hover:text-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">{isGe ? "Zurück zu Fallstudien" : "Back to Case Studies"}</span>
            <span className="sm:hidden">{isGe ? "Zurück" : "Back"}</span>
          </button>

          {/* Header */}
          <header className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/10 text-gold text-xs sm:text-sm font-bold rounded-full">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              {caseStudy.company}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gold font-semibold leading-relaxed">
              {caseStudy.title}
            </p>
          </header>

          {/* Featured image */}
          {caseStudy.image && (
            <figure className="mb-10 sm:mb-12">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={caseStudy.image}
                  alt={`${caseStudy.company} case study`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>
          )}

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {[
              { icon: DollarSign, value: caseStudy.stats?.costSaved, label: copy.labels.saved },
              { icon: Users, value: caseStudy.stats?.vaCount || "1", label: copy.labels.teamSize },
              { icon: Clock, value: caseStudy.stats?.timeframe, label: copy.labels.timeline },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="bg-gradient-to-br from-gold/5 to-gold/10 backdrop-blur-sm border border-gold/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:scale-105 transition-all">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-gold/10 rounded-full">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2">{value || "N/A"}</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
              {isGe ? "Herausforderung" : "Challenge"}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
          </section>

          {/* Solution */}
          {caseStudy.solution && (
            <section className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
                {isGe ? "Lösung" : "Solution"}
              </h2>
              <div
                className="text-base sm:text-lg text-muted-foreground leading-relaxed prose prose-sm sm:prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
              />
            </section>
          )}

          {/* Results */}
          {caseStudy.results?.length > 0 && (
            <section className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1 h-6 sm:h-8 bg-gold rounded-full" />
                {isGe ? "Ergebnisse" : "Results"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-gold/30 transition-all hover:shadow-lg hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 bg-gold/10 rounded-lg flex-shrink-0">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">{result.value}</div>
                        <div className="text-xs sm:text-sm font-semibold text-gold mb-2">{result.metric}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{result.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <aside className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gold/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-base sm:text-lg lg:text-xl italic text-foreground leading-relaxed">
                  {caseStudy.testimonial}
                </blockquote>
              </div>
              <div className="sm:ml-14">
                <div className="font-bold text-foreground text-base sm:text-lg">{caseStudy.testimonialAuthor}</div>
                <div className="text-gold font-medium text-sm sm:text-base">{caseStudy.testimonialRole}</div>
              </div>
            </aside>
          )}

          {/* Footer */}
          <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50 text-center">
            <Link
              href={`/${lang}/#case-studies`}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground text-sm sm:text-base font-semibold rounded-xl hover:bg-gold/90 transition-all hover:shadow-lg hover:scale-105 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{isGe ? "Alle Fallstudien ansehen" : "View All Case Studies"}</span>
              <span className="sm:hidden">{isGe ? "Alle Fallstudien" : "All Studies"}</span>
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
