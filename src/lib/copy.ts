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
      heading: "From Chaos to <span class=\"text-gold\">Inbox Zero</span>",
      description: "Our streamlined 4-step process transforms your email chaos into organized productivity.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Inbox Audit & Strategy",
          description: "We analyze your email volume, patterns, and priorities to create a custom management strategy."
        },
        step2: {
          step: "Step 2",
          title: "Setup & Automation",
          description: "We configure smart filters, labels, rules, and automation to organize your incoming emails."
        },
        step3: {
          step: "Step 3",
          title: "Daily Management",
          description: "Our team handles your inbox daily—sorting, responding, and keeping everything organized."
        },
        step4: {
          step: "Step 4",
          title: "Optimization & Reporting",
          description: "Weekly performance reports and continuous optimization to improve your email workflow."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      description: "Professional email management with 80% time savings, complete security, and 24/7 monitoring.",
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">500+ Professionals</span>",
      subheading: "Email transformations that save time and boost productivity.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">75% Time Saved</span>",
        description: "See how we helped a Fortune 500 executive achieve inbox zero and reduce email processing time from 4 hours to 1 hour daily.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Email Insights",
      heading: "Latest <span class=\"text-gold\">Email Guides</span>",
      description: "Expert email management strategies, automation tips, security best practices, and productivity guides.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Email <span class=\"text-gold\">Success Stories</span>",
      description: "See how we transformed email chaos into organized efficiency with smart automation and professional management.",
      labels: {
        saved: "Time Saved",
        teamSize: "Emails/Day",
        timeline: "Timeframe",
        viewFull: "View Full Case Study",
        viewStudy: "View Case Study",
      },
    },

    // FAQ
    faq: {
      badge: "Email Management FAQs",
      title: "Frequently Asked Questions",
      description: "Answers to common questions about our email management services, platforms, security, and timelines.",
      qualityCardTitle: "Security & Compliance",
      qualityCardText: "End-to-end encryption, two-factor authentication, GDPR compliance, and enterprise-grade security.",
      toolsCardTitle: "Complete Email Management",
      toolsCardText: "Inbox Organization • Response Management • Automation • Security • Reporting • Campaigns",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "Our team is here to help. Get in touch and we'll respond within 2 hours.",
      contactSupport: "Contact Support",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Transparent Pricing",
      sectionTitle: "Email Management Packages",
      sectionDescription: "Choose a plan that fits your email volume and needs. Professional management with transparent pricing. No hidden fees.",
      vaCountLabel: "How many emails per day?",
      vaCountHelper: "Select your average daily email volume",
      startingFrom: "Starting from €{price}/month",
      bulkDiscount: "{percent}% volume discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more email{suffix} to unlock {percent}% discount",
      bannerBadge: "Free 15‑Minute Consultation",
      bannerTitle: "Get Expert Advice on Email Management",
      bannerSubtitle: "Discuss your inbox challenges and get a custom workflow optimization plan",
      bannerPoints: {
        noCommitment: "No obligation",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Free inbox audit"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "Up to 100 emails/day",
          features: [
            "Inbox organization & filtering",
            "Priority inbox setup",
            "Basic automation rules",
            "Email response templates",
            "Weekly performance reports"
          ]
        },
        professional: {
          name: "Professional",
          hours: "Up to 300 emails/day",
          badge: "Most Popular",
          features: [
            "Everything in Starter",
            "Advanced automation & workflows",
            "Email campaign management",
            "2-hour response time SLA",
            "Daily summaries + analytics",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "Unlimited emails",
          badge: "Best Value",
          features: [
            "Everything in Professional",
            "Dedicated email manager",
            "Enterprise security protocols",
            "Custom integrations & API",
            "24/7 monitoring & support",
            "Custom SLAs & compliance"
          ]
        }
      },
      button: "Get Started",
      perMonth: "/month",
      hoursUnit: "email volume",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "Free setup included",
      disclaimer: "All plans billed monthly with no long-term contracts. Upgrade or downgrade anytime. Typical turnaround 24–72h."
    },

    // Final CTA
    finalCTA: {
      badge: "Achieve Inbox Zero Today",
      title: "Ready to Master <span class=\"text-gold\">Your Inbox?</span>",
      description: "Transform email chaos into organized productivity with professional inbox management, automation, and daily optimization.",
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Why <span class=\"text-gold\">500+</span> Professionals Trust Us",
      description: "Professional email management with 80% time savings, complete security, and 24/7 monitoring.",
    },
  },

  ge: {
    // How It Works
    howItWorks: {
      badge: "Unser Prozess",
      heading: "Vom Chaos zum <span class=\"text-gold\">Inbox Zero</span>",
      description: "Unser optimierter 4-Schritte-Prozess verwandelt Ihr E-Mail-Chaos in organisierte Produktivität.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Inbox-Audit & Strategie",
          description: "Wir analysieren Ihr E-Mail-Volumen, Muster und Prioritäten, um eine maßgeschneiderte Management-Strategie zu erstellen."
        },
        step2: {
          step: "Schritt 2",
          title: "Setup & Automatisierung",
          description: "Wir konfigurieren intelligente Filter, Labels, Regeln und Automatisierung zur Organisation Ihrer E-Mails."
        },
        step3: {
          step: "Schritt 3",
          title: "Tägliches Management",
          description: "Unser Team verwaltet Ihren Posteingang täglich – sortiert, antwortet und hält alles organisiert."
        },
        step4: {
          step: "Schritt 4",
          title: "Optimierung & Reporting",
          description: "Wöchentliche Performance-Berichte und kontinuierliche Optimierung zur Verbesserung Ihres Workflows."
        }
      }
    },

    // Why Choose Us (fallback, API may provide its own)
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      description: "Professionelles E-Mail-Management mit 80% Zeitersparnis, kompletter Sicherheit und 24/7 Überwachung.",
    },

    // Testimonials
    testimonials: {
      heading: "Vertrauen von <span class=\"text-gold\">500+ Profis</span>",
      subheading: "E-Mail-Transformationen, die Zeit sparen und Produktivität steigern.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">75% Zeit gespart</span>",
        description: "Erfahren Sie, wie wir einem Fortune-500-Executive halfen, Inbox Zero zu erreichen und die E-Mail-Bearbeitungszeit von 4 auf 1 Stunde täglich zu reduzieren.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "E-Mail Insights",
      heading: "Aktuelle <span class=\"text-gold\">E-Mail Guides</span>",
      description: "Experten-Tipps zu E-Mail-Management, Automatisierung, Sicherheit und Produktivität.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "E-Mail <span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "Sehen Sie, wie wir E-Mail-Chaos in organisierte Effizienz mit smarter Automatisierung verwandelt haben.",
      labels: {
        saved: "Zeit gespart",
        teamSize: "E-Mails/Tag",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Fallstudie ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "E-Mail Management FAQs",
      title: "Häufig gestellte Fragen",
      description: "Antworten zu unseren E-Mail-Management-Services, Plattformen, Sicherheit und Zeitplänen.",
      qualityCardTitle: "Sicherheit & Compliance",
      qualityCardText: "End-to-End-Verschlüsselung, Zwei-Faktor-Authentifizierung, DSGVO-Konformität und Enterprise-Sicherheit.",
      toolsCardTitle: "Komplettes E-Mail-Management",
      toolsCardText: "Inbox-Organisation • Response-Management • Automatisierung • Sicherheit • Reporting • Kampagnen",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Unser Team hilft Ihnen gerne. Wir antworten innerhalb von 2 Stunden.",
      contactSupport: "Support kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Transparente Preise",
      sectionTitle: "E-Mail-Management-Pakete",
      sectionDescription: "Wählen Sie einen Plan, der zu Ihrem E-Mail-Volumen passt. Professionelles Management mit transparenten Preisen.",
      vaCountLabel: "Wie viele E-Mails pro Tag?",
      vaCountHelper: "Wählen Sie Ihr durchschnittliches tägliches E-Mail-Volumen",
      startingFrom: "Ab €{price}/Monat",
      bulkDiscount: "{percent}% Volumenrabatt!",
      bulkSavings: "Gesamtersparnis: €{amount}",
      bulkHint: "Fügen Sie {count} weitere E-Mail{suffix} hinzu, um {percent}% Rabatt zu erhalten",
      bannerBadge: "Kostenlose 15-Min-Beratung",
      bannerTitle: "Expertenrat zum E-Mail-Management",
      bannerSubtitle: "Besprechen Sie Ihre Inbox-Herausforderungen und erhalten Sie einen Workflow-Optimierungsplan",
      bannerPoints: {
        noCommitment: "Keine Verpflichtung",
        cancelAnytime: "Jederzeit kündbar",
        fullAccess: "Kostenloser Inbox-Audit"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "Bis zu 100 E-Mails/Tag",
          features: [
            "Inbox-Organisation & Filterung",
            "Priority-Inbox-Setup",
            "Basis-Automatisierungsregeln",
            "E-Mail-Antwort-Vorlagen",
            "Wöchentliche Performance-Berichte"
          ]
        },
        professional: {
          name: "Professional",
          hours: "Bis zu 300 E-Mails/Tag",
          badge: "Beliebteste Wahl",
          features: [
            "Alles aus Starter",
            "Erweiterte Automatisierung & Workflows",
            "E-Mail-Kampagnen-Management",
            "2-Stunden-Antwortzeit SLA",
            "Tägliche Zusammenfassungen + Analytics",
            "Prioritätsupport"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "Unbegrenzte E-Mails",
          badge: "Bester Wert",
          features: [
            "Alles aus Professional",
            "Dedizierter E-Mail-Manager",
            "Enterprise-Sicherheitsprotokolle",
            "Custom-Integrationen & API",
            "24/7 Überwachung & Support",
            "Custom SLAs & Compliance"
          ]
        }
      },
      button: "Jetzt starten",
      perMonth: "/Monat",
      hoursUnit: "E-Mail-Volumen",
      planSetupFee: "+€{fee} Setup-Gebühr",
      planNoSetupFee: "Kostenloses Setup inklusive",
      disclaimer: "Alle Pläne monatlich abrechnbar ohne Langzeitvertrag. Jederzeit upgraden oder downgraden. Typische Einarbeitung 24–72h."
    },

    // Final CTA
    finalCTA: {
      badge: "Erreichen Sie heute Inbox Zero",
      title: "Bereit, Ihren <span class=\"text-gold\">Posteingang zu meistern?</span>",
      description: "Verwandeln Sie E-Mail-Chaos in organisierte Produktivität mit professionellem Inbox-Management, Automatisierung und täglicher Optimierung."
    },

    // Value Proposition (if used)
    valueProposition: {
      heading: "Warum <span class=\"text-gold\">500+</span> Profis uns vertrauen",
      description: "Professionelles E-Mail-Management mit 80% Zeitersparnis, kompletter Sicherheit und 24/7 Überwachung.",
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


