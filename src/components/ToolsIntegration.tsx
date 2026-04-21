"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SPACING } from "@/lib/constants";

const tools = [
  { name: "Adobe Creative Suite", category: "Design Software" },
  { name: "Figma", category: "UI/UX Design" },
  { name: "Sketch", category: "UI/UX Design" },
  { name: "Adobe Illustrator", category: "Vector Graphics" },
  { name: "Adobe Photoshop", category: "Photo Editing" },
  { name: "Adobe InDesign", category: "Print Design" },
  { name: "Canva", category: "Design Platform" },
  { name: "Blender", category: "3D Design" },
  { name: "After Effects", category: "Motion Graphics" },
  { name: "Premiere Pro", category: "Video Editing" },
  { name: "Webflow", category: "Web Design" },
  { name: "Framer", category: "Prototyping" },
];

const categoryLabels: Record<string, { en: string; ge: string }> = {
  "Design Software":    { en: "Design Software",     ge: "Design-Software" },
  "UI/UX Design":       { en: "UI/UX Design",       ge: "UI/UX Design" },
  "Vector Graphics":    { en: "Vector Graphics",    ge: "Vektorgrafik" },
  "Photo Editing":      { en: "Photo Editing",      ge: "Bildbearbeitung" },
  "Print Design":       { en: "Print Design",       ge: "Print-Design" },
  "Design Platform":    { en: "Design Platform",    ge: "Design-Plattform" },
  "3D Design":          { en: "3D Design",          ge: "3D-Design" },
  "Motion Graphics":    { en: "Motion Graphics",    ge: "Motion Graphics" },
  "Video Editing":      { en: "Video Editing",      ge: "Video-Bearbeitung" },
  "Web Design":         { en: "Web Design",         ge: "Webdesign" },
  "Prototyping":        { en: "Prototyping",         ge: "Prototyping" },
};

export const ToolsIntegration = () => {
  const pathname = usePathname();
  const isGe = pathname.startsWith("/ge") || pathname.startsWith("/de");

  const getCategory = (category: string) =>
    categoryLabels[category]?.[isGe ? "ge" : "en"] ?? category;

  return (
    <motion.section
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className={`container mx-auto ${SPACING.container}`}>
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            {isGe ? (
              <>Expertise in führenden <span className="text-primary">Design-Tools</span></>
            ) : (
              <>Expertise in Leading <span className="text-primary">Design Tools</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
            {isGe
              ? "Unser Team beherrscht alle gängigen Design-Software und liefert in jedem Format, das Sie benötigen."
              : "Our team masters all popular design software and delivers in any format you need."}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tools grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {getCategory(tool.category)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Callout */}
          <motion.div
            className="bg-card border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
              <span className="font-bold text-primary">
                {isGe ? "Benötigen Sie ein spezielles Format?" : "Need a specific file format?"}
              </span>{" "}
              {isGe ? "Einfach fragen." : "Just ask."}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isGe
                ? "Wir liefern in jedem Format – von druckfertigen PDFs bis zu web-optimierten Assets."
                : "We deliver in any format — from print-ready PDFs to web-optimized assets."}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


