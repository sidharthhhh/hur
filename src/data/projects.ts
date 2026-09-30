import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "ecommerce-analytics",
    title: "E-Commerce Sales & Customer Retention Analysis",
    category: "analytics",
    status: "completed",
    stack: ["Python", "Pandas", "SQL", "Power BI"],
    focus: [
      "Revenue Trends",
      "Order Patterns",
      "Customer Cohorts",
      "Product Category Breakdown",
    ],
    summary:
      "A personal analytics project using a multi-table transactional dataset to explore monthly sales patterns, product category sales concentration, and customer repeat order habits.",
    problem:
      "Understanding what drives repeat orders and how revenue is distributed across seasonal cycles and product tiers.",
    solution:
      "Wrote SQL data cleaning scripts, analyzed cohort order frequency in Pandas, and built interactive Power BI views for category performance.",
    outcomes: [
      "Identified category sales trends and built cohort retention matrices tracking repeat buying intervals.",
    ],
    hasCaseStudy: true,
  },
  {
    id: "proj-2",
    slug: "customer-support-analytics",
    title: "Support Operations & SLA Resolution Analysis",
    category: "analytics",
    status: "completed",
    stack: ["Python", "SQL", "Power BI", "Excel"],
    focus: [
      "Ticket Volumes",
      "First Response Time",
      "Resolution Durations",
      "SLA Tracking",
    ],
    summary:
      "An operational study connecting my background in customer support with data analysis to examine resolution times, escalation paths, and peak volume hours.",
    problem:
      "Identifying operational bottlenecks that cause ticket pileups and SLA breaches during high-volume periods.",
    solution:
      "Analyzed ticket timestamp logs to calculate arrival distributions, turnaround times across issue categories, and escalation frequencies.",
    outcomes: [
      "Mapped peak ticket hours against team scheduling and highlighted categories requiring multi-team handoffs.",
    ],
    hasCaseStudy: true,
  },
  {
    id: "proj-3",
    slug: "music-player-app",
    title: "Interactive Web Music Player",
    category: "technology",
    status: "completed",
    stack: ["JavaScript", "HTML5", "CSS3"],
    focus: [
      "Audio API",
      "Playlist State",
      "Custom Controls",
      "Responsive Layout",
    ],
    summary:
      "A frontend audio player built during my internship at TenSketch, featuring native playback controls, volume slider, track seek bar, and dynamic playlist switching.",
    problem:
      "Creating a smooth, responsive audio player UI with custom controls and playlist management using vanilla web technologies.",
    solution:
      "Utilized HTML5 Audio API event listeners, custom time formatters, and clean state arrays for playlist navigation.",
    outcomes: [
      "Built a lightweight, responsive audio player with zero external UI libraries.",
    ],
    hasCaseStudy: false,
    github: "https://github.com/sakshiii8",
  },
  {
    id: "proj-4",
    slug: "dynamic-quiz-engine",
    title: "Dynamic Quiz & Knowledge Assessment Web App",
    category: "technology",
    status: "completed",
    stack: ["JavaScript", "HTML5", "CSS3"],
    focus: [
      "DOM Manipulation",
      "Real-Time Scoring",
      "Feedback System",
      "Timer Mechanics",
    ],
    summary:
      "Interactive assessment application developed at TenSketch featuring dynamic question loading, real-time score calculation, countdown timers, and end-of-quiz score breakdowns.",
    problem:
      "Designing an engaging quiz interface with instant answer validation and state tracking across question sequences.",
    solution:
      "Structured questions into JSON objects, handled user selection events, and generated dynamic review summaries upon completion.",
    outcomes: [
      "Delivered an interactive, mobile-friendly quiz application with instant feedback.",
    ],
    hasCaseStudy: false,
    github: "https://github.com/sakshiii8",
  },
  {
    id: "proj-5",
    slug: "e-learning-platform",
    title: "E-Learning Course Portal Interface",
    category: "technology",
    status: "completed",
    stack: ["JavaScript", "HTML5", "CSS3"],
    focus: [
      "Course Navigation",
      "Responsive Grid",
      "UI/UX Design",
      "Semantic HTML",
    ],
    summary:
      "A structured educational platform interface built at TenSketch featuring course module catalogs, curriculum sidebars, and clean typography for learning content.",
    problem:
      "Structuring multi-module course content into a clean, legible interface that works smoothly on both mobile and desktop screens.",
    solution:
      "Implemented modular CSS Grid and Flexbox layouts with accessible landmarks and consistent spacing.",
    outcomes: [
      "Engineered an intuitive, distraction-free educational portal interface.",
    ],
    hasCaseStudy: false,
    github: "https://github.com/sakshiii8",
  },
  {
    id: "proj-6",
    slug: "hr-workforce-analytics",
    title: "HR Workforce & Turnover Exploration",
    category: "analytics",
    status: "in-progress",
    stack: ["Python", "Pandas", "Power BI"],
    focus: [
      "Department Distribution",
      "Tenure Analysis",
      "Turnover Patterns",
      "Public Dataset",
    ],
    summary:
      "A practice analytics project exploring department-level employee tenure patterns and early turnover intervals using a public HR dataset.",
    problem:
      "Exploring when and where turnover is most concentrated across different department groups.",
    solution:
      "Segmented employee records by tenure intervals and created exploratory visual summaries in Power BI.",
    outcomes: [
      "Built exploratory charts summarizing turnover patterns across role levels.",
    ],
    hasCaseStudy: false,
  },
];
