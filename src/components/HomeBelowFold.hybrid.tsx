import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA.server";
import { FAQAndCaseStudies } from "@/components/FAQAndCaseStudies.client";
import { SPACING } from "@/lib/constants";

export async function HomeBelowFold({ lang }: { lang: string }) {

  return (
    <>
      <div className={SPACING.container}>
        <HowItWorks />
        <Services />
        <Pricing />
        <ToolsIntegration />
        <Testimonials />
        <Blog />
        <FAQAndCaseStudies lang={lang} />
      </div>
      <FinalCTA lang={lang} />
    </>
  );
}


