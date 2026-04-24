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
    title: "Fortune 500 Executive Inbox Transformation",
    description: "Complete inbox overhaul for a C-suite executive drowning in 500+ daily emails, achieving inbox zero in 5 days.",
    image: "/api/placeholder/600/400",
    category: "Executive Management",
    tags: ["Inbox Zero", "Executive", "Automation"],
    content: "Detailed case study content about executive email transformation...",
    results: [
      { metric: "Time Saved", value: "75%" },
      { metric: "Response Time", value: "-80%" },
      { metric: "Inbox Zero Days", value: "Daily" }
    ]
  },
  {
    id: 2,
    title: "Marketing Team Email Campaign Success",
    description: "Email workflow automation for a Berlin marketing agency, streamlining client communications and campaign management.",
    image: "/api/placeholder/600/400",
    category: "Team Management",
    tags: ["Campaigns", "Automation", "Team"],
    content: "Detailed case study content about marketing team email optimization...",
    results: [
      { metric: "Campaign Efficiency", value: "+200%" },
      { metric: "Client Response", value: "+150%" },
      { metric: "Team Hours Saved", value: "20h/wk" }
    ]
  },
  {
    id: 3,
    title: "Startup Founder Email Productivity",
    description: "Inbox management system for a busy Munich tech founder, organizing investor communications and priority emails.",
    image: "/api/placeholder/600/400",
    category: "Founder Support",
    tags: ["Founder", "Investor Relations", "Prioritization"],
    content: "Detailed case study content about founder email productivity...",
    results: [
      { metric: "Important Emails Missed", value: "0" },
      { metric: "Investor Response", value: "<2h" },
      { metric: "Daily Email Time", value: "-65%" }
    ]
  }
];


