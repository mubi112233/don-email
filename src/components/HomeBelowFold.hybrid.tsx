"use client";

import { Services } from "@/components/Services.server";
import { Testimonials } from "@/components/Testimonials.server";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { SPACING } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function HomeBelowFold() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ge') || pathname.startsWith('/de') ? 'ge' : 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a simple loading state initially to prevent flash
  if (!mounted) {
    return (
      <div className={SPACING.container}>
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={SPACING.container}>
        <HowItWorks />
        <Services lang={currentLang} />
        <Pricing />
        <ToolsIntegration />
        <Testimonials lang={currentLang} />
        <Blog />
        <CaseStudies />
        <FAQ />
      </div>
      <FinalCTA />
    </>
  );
}
