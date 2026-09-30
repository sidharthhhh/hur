import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    projectSlug: "ecommerce-analytics",
    title: "E-Commerce Sales & Customer Retention Analysis",
    subtitle: "Personal analytics project analyzing transactional patterns, category performance, and repeat buying cohorts.",
    problem:
      "I wanted to understand how sales revenue is distributed across product lines and how customer repeat purchasing varies over time using an e-commerce transactional dataset.",
    context:
      "In e-commerce, tracking customer repeat purchase intervals and product profitability gives businesses a much clearer picture than looking at gross revenue numbers alone.",
    data:
      "A relational transactional dataset containing orders, order items, customer records, and product categories over a multi-month period.",
    approach:
      "1. Cleaned and prepared the raw records in Python, handling missing values and date formatting.\n2. Wrote SQL queries to calculate monthly order volumes, average order value (AOV), and customer order counts.\n3. Segmented customer orders by purchase cohort month to track repeat order retention.\n4. Visualized category distributions and cohort heatmaps in Power BI.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "Excel"],
    analysis:
      "Analyzing the order distribution showed that revenue was heavily concentrated in a small fraction of key product categories. When breaking down buyers by cohort, the largest drop-off in repeat purchases occurred immediately after the first order, while customers who returned for a third order had a noticeably higher ongoing frequency.",
    insights: [
      "Revenue was concentrated in top product categories, highlighting where inventory and marketing focus matters most.",
      "Customer repeat purchasing dropped most sharply between the first and second purchase, indicating where re-engagement matters most.",
      "Repeat buyers ordered with higher average basket sizes compared to first-time promotional buyers.",
    ],
    recommendations: [
      "Focus post-purchase communication on the initial 30-day window after a first order to encourage repeat buying.",
      "Highlight top-performing complementary products during checkout rather than broad blanket discounts.",
      "Maintain recurring monthly cohort reporting to monitor retention trends.",
    ],
    outcome:
      "Built a clear, interactive Power BI dashboard and documented SQL queries for cohort retention and sales breakdown.",
  },
  {
    projectSlug: "customer-support-analytics",
    title: "Support Operations & SLA Resolution Analysis",
    subtitle: "Connecting customer support operations experience with data analysis to understand ticket resolution patterns.",
    problem:
      "Drawing from my frontline experience in customer support and operations, I wanted to analyze what operational factors contribute to SLA breaches and resolution delays during high-volume periods.",
    context:
      "Support operations directly influence customer satisfaction. Understanding when tickets arrive and which issue categories require multi-team handoffs helps operational teams allocate resources more effectively.",
    data:
      "Support operational log dataset containing ticket timestamps for creation, first response, escalation flags, resolution times, and issue categories.",
    approach:
      "1. Cleaned timestamp records and calculated first response times (FRT) and total resolution durations.\n2. Mapped ticket arrival frequency by hour of the day and day of the week.\n3. Identified categories with the highest rate of reassignment handoffs between support tiers.\n4. Built an operational summary dashboard in Power BI.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "Excel"],
    analysis:
      "Analyzing ticket arrival patterns revealed distinct peak volume hours around midday where ticket intake temporarily outpaced available agent capacity. Additionally, tickets that required inter-department handoffs took significantly longer to resolve than those handled directly at the first tier.",
    insights: [
      "Ticket arrival peaked during specific midday hours, causing queue accumulation before peak shift coverage kicked in.",
      "Inter-team handoffs were the primary factor behind extended resolution times across technical and billing queries.",
      "First-contact resolution rates were highest for standardized inquiries with documented internal checklists.",
    ],
    recommendations: [
      "Align agent shift schedules more closely with historical ticket arrival peak windows.",
      "Standardize intake checklists for complex billing queries to reduce unnecessary back-and-forth handoffs.",
      "Use daily queue monitoring views so team leads can reassign aging tickets before SLA thresholds are reached.",
    ],
    outcome:
      "Developed a functional operational analysis model and dashboard providing clear visibility into ticket resolution bottlenecks.",
  },
];
