export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  content: string;
  results: {
    metric: string;
    value: string;
  }[];
  link?: string;
  company?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  stats?: Array<{ metric: string; value: string; description: string }>;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Tech Startup Brand Transformation",
    description: "Complete rebrand for a Berlin-based fintech startup, including logo, visual identity, and marketing collateral.",
    image: "/api/placeholder/600/400",
    category: "Branding",
    tags: ["Branding", "Visual Identity", "Startup"],
    content: "Detailed case study content about brand transformation...",
    results: [
      { metric: "Brand Recognition", value: "+200%" },
      { metric: "Customer Engagement", value: "+85%" },
      { metric: "Investor Interest", value: "3x" }
    ]
  },
  {
    id: 2,
    title: "E-commerce Packaging Redesign",
    description: "Eye-catching packaging design for a sustainable fashion brand that increased shelf appeal and customer retention.",
    image: "/api/placeholder/600/400",
    category: "Packaging",
    tags: ["Packaging", "Sustainability", "Retail"],
    content: "Detailed case study content about packaging redesign...",
    results: [
      { metric: "Sales Increase", value: "+45%" },
      { metric: "Social Shares", value: "+120%" },
      { metric: "Customer Retention", value: "+30%" }
    ]
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    description: "Modern web design for a Munich consulting firm, improving user experience and lead generation.",
    image: "/api/placeholder/600/400",
    category: "Web Design",
    tags: ["Web Design", "UX/UI", "B2B"],
    content: "Detailed case study content about website redesign...",
    results: [
      { metric: "Lead Generation", value: "+60%" },
      { metric: "Page Views", value: "+150%" },
      { metric: "Client Inquiries", value: "+90%" }
    ]
  }
];


