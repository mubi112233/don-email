/**
 * Next-safe copy/translation constants (no react-i18next runtime)
 * Mirrors frontend/src/lib/client-i18n.ts for badge/heading/subheading text.
 * Use URL-based language detection (en/ge) to select strings.
 */

export const copy = {
  en: {
    // How It Works
    howItWorks: {
      badge: "Our Process",
      heading: "From Concept to <span class=\"text-gold\">Creation</span>",
      description: "Our streamlined 4-step process ensures every design project exceeds your expectations.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Discovery & Strategy",
          description: "We dive deep into your brand, goals, and target audience to develop a winning creative strategy."
        },
        step2: {
          step: "Step 2",
          title: "Concept Development",
          description: "Our designers create multiple creative concepts for you to choose from and refine."
        },
        step3: {
          step: "Step 3",
          title: "Design & Refinement",
          description: "We bring your chosen concept to life with meticulous attention to detail and iterative feedback."
        },
        step4: {
          step: "Step 4",
          title: "Delivery & Support",
          description: "You receive all final files in multiple formats with ongoing support for future needs."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      description: "Award-winning creativity, strategic thinking, and pixel-perfect execution for every project.",
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">Leading Brands</span>",
      subheading: "Creative transformations that drive business growth.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">Brand Transformation</span>",
        description: "See how we rebranded a tech startup, increasing their brand recognition by 200% and customer engagement by 85%.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Design Journal",
      heading: "Latest <span class=\"text-gold\">Insights</span>",
      description: "Design trends, branding tips, and creative inspiration for forward-thinking brands.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Portfolio",
      heading: "Creative <span class=\"text-gold\">Success Stories</span>",
      description: "Transformative design projects that elevated brands and drove measurable business results.",
      labels: {
        saved: "Brand Growth",
        teamSize: "Deliverables",
        timeline: "Timeline",
        viewFull: "View Full Case Study",
        viewStudy: "View Project",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      description: "Answers to common questions about our design process, timelines, and deliverables.",
      qualityCardTitle: "Design Quality Assurance",
      qualityCardText: "Every design goes through rigorous quality checks and refinements to ensure excellence.",
      toolsCardTitle: "Flexible File Formats",
      toolsCardText: "We deliver files in all formats you need - from print-ready PDFs to web-optimized assets.",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "Our design team is ready to discuss your project needs.",
      contactSupport: "Contact Our Team",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Pricing",
      sectionTitle: "Design Packages",
      sectionDescription: "Choose a design package that fits your needs. Flexible options for every project.",
      vaCountLabel: "How many design projects?",
      vaCountHelper: "Select the number of concurrent projects you need",
      startingFrom: "Starting from €{price}/project",
      bulkDiscount: "{percent}% multi-project discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more project{suffix} to unlock {percent}% discount",
      bannerBadge: "Free Consultation",
      bannerTitle: "Book Your Free Design Consultation",
      bannerSubtitle: "Discuss your vision with our creative team and get a custom quote",
      bannerPoints: {
        noCommitment: "No obligation",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Full creative brief"
      },
      plans: {
        starter: {
          name: "Logo & Branding",
          hours: "Starter Package",
          features: [
            "3 Logo Concepts",
            "Color Palette & Typography",
            "Brand Style Guide",
            "Business Card Design",
            "3 Revision Rounds"
          ]
        },
        professional: {
          name: "Complete Brand Identity",
          hours: "Full Brand Package",
          features: [
            "Everything in Logo Package",
            "Brand Strategy Session",
            "Social Media Kit",
            "Stationery Design Suite",
            "Unlimited Revisions"
          ]
        },
        enterprise: {
          name: "Full Design Suite",
          hours: "Enterprise Package",
          badge: "Best Value",
          features: [
            "Complete Brand Identity",
            "Website Design (5 pages)",
            "Marketing Collateral",
            "Packaging Design",
            "Priority Support & Updates"
          ]
        }
      },
      button: "Get Started",
      perMonth: "",
      hoursUnit: "deliverables",
      planSetupFee: "+€{fee} consultation fee",
      planNoSetupFee: "Free consultation included",
      disclaimer: "All packages include source files. Additional revisions available at €75/hour."
    },

    // Final CTA
    finalCTA: {
      badge: "Ready to Transform Your Brand?",
      title: "Let's Create Something <span class=\"text-gold\">Amazing</span> Together",
      description: "Book your free design consultation and discover how we can elevate your brand.",
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Why <span class=\"text-gold\">Choose Us</span>",
      description: "Award-winning creativity, strategic thinking, and pixel-perfect execution for every project.",
    },
  },

  ge: {
    // How It Works
    howItWorks: {
      badge: "Unser Prozess",
      heading: "Von der Konzept <span class=\"text-gold\">zur Kreation</span>",
      description: "Unser optimierter 4-Schritte-Prozess sorgt dafür, dass jedes Design-Projekt Ihre Erwartungen übertrifft.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Entdeckung & Strategie",
          description: "Wir tauchen tief in Ihre Marke, Ziele und Zielgruppe ein, um eine erfolgreiche Kreativstrategie zu entwickeln."
        },
        step2: {
          step: "Schritt 2",
          title: "Konzeptentwicklung",
          description: "Unsere Designer erstellen mehrere kreative Konzepte zur Auswahl und Verfeinerung."
        },
        step3: {
          step: "Schritt 3",
          title: "Design & Verfeinerung",
          description: "Wir bringen Ihr gewähltes Konzept mit Liebe zum Detail und iterativem Feedback zum Leben."
        },
        step4: {
          step: "Schritt 4",
          title: "Lieferung & Support",
          description: "Sie erhalten alle Enddateien in mehreren Formaten mit kontinuierlichem Support für zukünftige Bedürfnisse."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      description: "Preisgekrönte Kreativität, strategisches Denken und pixelgenaue Ausführung für jedes Projekt.",
    },

    // Testimonials
    testimonials: {
      heading: "Vertrauen von <span class=\"text-gold\">führenden Marken</span>",
      subheading: "Kreative Transformationen, die Geschäftswachstum fördern.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">Markentransformation</span>",
        description: "Erfahren Sie, wie wir ein Tech-Startup neu positionierten und die Markenbekanntheit um 200% sowie die Kundenbindung um 85% steigerten.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "Design Journal",
      heading: "Aktuelle <span class=\"text-gold\">Einblicke</span>",
      description: "Design-Trends, Branding-Tipps und kreative Inspiration für zukunftsorientierte Marken.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Portfolio",
      heading: "Kreative <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Transformative Design-Projekte, die Marken aufgewertet und messbare Geschäftsergebnisse erzielt haben.",
      labels: {
        saved: "Markenwachstum",
        teamSize: "Deliverables",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Projekt ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf häufige Fragen zu unserem Design-Prozess, Zeitplänen und Deliverables.",
      qualityCardTitle: "Design-Qualitätssicherung",
      qualityCardText: "Jedes Design durchläuft strenge Qualitätskontrollen und Verfeinerungen, um Exzellenz zu gewährleisten.",
      toolsCardTitle: "Flexible Dateiformate",
      toolsCardText: "Wir liefern Dateien in allen Formaten, die Sie brauchen – von druckfertigen PDFs bis zu web-optimierten Assets.",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Unser Design-Team steht bereit, um Ihre Projektwünsche zu besprechen.",
      contactSupport: "Team kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Preise",
      sectionTitle: "Design-Pakete",
      sectionDescription: "Wählen Sie das Design-Paket, das zu Ihren Bedürfnissen passt. Flexible Optionen für jedes Projekt.",
      vaCountLabel: "Wie viele Design-Projekte?",
      vaCountHelper: "Wählen Sie die Anzahl der gleichzeitigen Projekte, die Sie benötigen",
      startingFrom: "Ab €{price}/Projekt",
      bulkDiscount: "{percent}% Rabatt bei mehreren Projekten!",
      bulkSavings: "Gesamtersparnis: €{amount}",
      bulkHint: "Fügen Sie {count} weitere Projekt{suffix} hinzu, um {percent}% Rabatt zu erhalten",
      bannerBadge: "Kostenlose Beratung",
      bannerTitle: "Kostenloses Design-Gespräch vereinbaren",
      bannerSubtitle: "Besprechen Sie Ihre Vision mit unserem Kreativteam und erhalten Sie ein individuelles Angebot",
      bannerPoints: {
        noCommitment: "Keine Verpflichtung",
        cancelAnytime: "Jederzeit kündbar", 
        fullAccess: "Volles Kreativ-Briefing"
      },
      plans: {
        starter: {
          name: "Logo & Branding",
          hours: "Starter-Paket",
          features: [
            "3 Logo-Konzepte",
            "Farbschema & Typografie",
            "Marken-Styleguide",
            "Visitenkarten-Design",
            "3 Überarbeitungsrunden"
          ]
        },
        professional: {
          name: "Komplette Markenidentität", 
          hours: "Full Brand-Paket",
          features: [
            "Alles aus Logo-Paket",
            "Markenstrategie-Session",
            "Social Media Kit",
            "Briefpapier-Design Suite",
            "Unbegrenzte Überarbeitungen"
          ]
        },
        enterprise: {
          name: "Full Design Suite",
          hours: "Enterprise-Paket", 
          badge: "Bester Wert",
          features: [
            "Komplette Markenidentität",
            "Website-Design (5 Seiten)",
            "Marketing-Kollateral",
            "Verpackungsdesign",
            "Prioritätsupport & Updates"
          ]
        }
      },
      button: "Jetzt starten",
      perMonth: "",
      hoursUnit: "Deliverables",
      planSetupFee: "+€{fee} Beratungsgebühr",
      planNoSetupFee: "Kostenlose Beratung inklusive",
      disclaimer: "Alle Pakete beinhalten Quelldateien. Zusätzliche Überarbeitungen verfügbar ab €75/Stunde."
    },

    // Final CTA
    finalCTA: {
      badge: "Bereit, Ihre Marke zu transformieren?",
      title: "Lassen Sie uns etwas <span class=\"text-gold\">Großartiges</span> zusammen schaffen",
      description: "Buchen Sie Ihr kostenloses Design-Gespräch und entdecken Sie, wie wir Ihre Marke aufwerten können."
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Warum <span class=\"text-gold\">wir</span>?",
      description: "Preisgekrönte Kreativität, strategisches Denken und pixelgenaue Ausführung für jedes Projekt.",
    },
  },
} as const;

/**
 * Helper to get copy for a language (en/ge)
 */
export const getCopy = <K extends keyof typeof copy.en>(lang: string, key: K) => {
  const normalizedLang = lang.toLowerCase().startsWith('ge') || lang.toLowerCase().startsWith('de') ? 'ge' : 'en';
  return copy[normalizedLang as 'en' | 'ge'][key];
};


