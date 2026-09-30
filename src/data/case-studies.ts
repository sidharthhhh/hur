import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    projectSlug: "ecommerce-analytics",
    title: "E-Commerce Revenue Drivers & Customer Cohort Retention Analysis",
    subtitle: "Understanding transactional trends, product margin concentration, and repeat buying behavior.",
    problem:
      "The business experienced unpredictable monthly revenue swings and lacked granular insight into whether fluctuations were driven by customer acquisition drops or low repeat customer retention.",
    context:
      "In modern e-commerce, acquiring new customers without understanding customer lifetime behavior creates unsustainable marketing spend. Analyzing longitudinal order history allows businesses to identify profitable segments and improve repeat purchase cadence.",
    data:
      "Multi-table relational transactional dataset containing 50,000+ anonymized order lines, customer records, product taxonomy hierarchies, discount levels, and shipping timestamps over a 24-month period.",
    approach:
      "1. Performed data validation and cleaning in Python to handle missing order values and deduplicate customer records.\n2. Wrote parameterized SQL queries to calculate monthly recurring orders, average order value (AOV), and customer cohort indices.\n3. Conducted exploratory data analysis (EDA) in Jupyter to identify margin distribution across product tiers.\n4. Modeled cohort retention matrices to track percentage of repeat buyers up to 12 months after first purchase.\n5. Built an interactive Power BI dashboard with dynamic filtering by date, product category, and customer segment.",
    tools: ["Python", "Pandas", "NumPy", "SQL (PostgreSQL)", "Power BI", "Matplotlib"],
    analysis:
      "Segmenting orders into first-time vs. repeat buyers revealed that while first-time buyers represented 72% of total order volume, repeat buyers contributed over 48% of gross margin due to higher basket sizes and lower discount usage. Furthermore, month-over-month cohort retention dropped steeply after Month 2, indicating that the post-purchase re-engagement cycle was a key leak in the funnel.",
    insights: [
      "Top 15% of product catalog items generated over 62% of net revenue.",
      "Customer retention showed a sharp drop-off (68% decline) between order 1 and order 2, but customers reaching order 3 showed an 80%+ retention probability.",
      "Promotional discounting above 20% failed to drive long-term retention and attracted one-time bargain seekers with high return rates.",
    ],
    recommendations: [
      "Implement a structured 30-day and 60-day post-purchase automated re-engagement campaign targeting first-time buyers with complementary product recommendations.",
      "Shift promotional spend toward bundling top-margin products rather than applying blanket store-wide discounts.",
      "Establish automated weekly cohort retention monitoring in Power BI to catch retention drops in real time.",
    ],
    outcome:
      "Delivered an automated analytical model and interactive dashboard providing leadership with clear visibility into customer lifetime retention patterns and product profitability levers.",
  },
  {
    projectSlug: "customer-support-analytics",
    title: "Support Operations & SLA Resolution Efficiency Analysis",
    subtitle: "Connecting operational workflows with response times, agent workload distribution, and ticket resolution bottlenecks.",
    problem:
      "Support leadership noticed an increasing rate of SLA breaches and rising customer frustration during seasonal volume spikes, but could not pinpoint whether delays were due to staffing shortages, complex ticket categories, or inefficient escalation handoffs.",
    context:
      "Customer operations efficiency directly impacts user retention and brand trust. With real-world experience in customer operations and issue escalation, this analysis bridges operational realities with data analytics.",
    data:
      "Operational log dataset covering 25,000+ support tickets with timestamps for creation, first response, assignment changes, escalation flags, resolution times, satisfaction ratings (CSAT), and issue categories.",
    approach:
      "1. Cleaned and formatted timestamp logs in Python, calculating first response time (FRT), mean time to resolve (MTTR), and SLA status.\n2. Segmented ticket arrival volumes by hour of day and day of week to map demand peaks against agent scheduling.\n3. Evaluated escalation paths and handoff frequency between Tier 1 support and technical engineering teams.\n4. Built Power BI operational dashboards showing real-time SLA burn-down and team throughput metrics.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "Excel"],
    analysis:
      "Analyzing the distribution of resolution times revealed that 65% of all SLA breaches occurred within two specific issue categories ('Billing Sync' and 'Account Permissions') that required manual approval across multiple teams. Additionally, peak ticket arrival occurred between 11:00 AM and 2:00 PM, while staff coverage was evenly distributed across 8-hour shifts, resulting in queue pileups before noon.",
    insights: [
      "SLA breaches were concentrated in inter-department escalations rather than frontline agent response delays.",
      "The 11:00 AM - 2:00 PM peak arrival window generated 45% of daily tickets but had only 30% of scheduled agent capacity.",
      "Tickets with 2 or more internal reassignment handoffs had a 3.4x higher probability of receiving a low CSAT score.",
    ],
    recommendations: [
      "Stagger agent shifts to increase frontline coverage during the critical 11 AM - 2 PM surge.",
      "Create direct routing rules and standardized checklist templates for 'Billing Sync' tickets to eliminate unnecessary intermediate hops.",
      "Provide team leads with automated daily SLA threshold alerts to dynamically reassign unassigned tickets before breach thresholds.",
    ],
    outcome:
      "Designed a complete support operations analytics framework that identified the exact operational bottlenecks and schedule mismatches driving SLA failures.",
  },
  {
    projectSlug: "hr-workforce-analytics",
    title: "HR Workforce Demographics & Department Attrition Analysis",
    subtitle: "Analyzing workforce retention, onboarding tenure drop-offs, and department attrition patterns.",
    problem:
      "Organization observed elevated turnover among newly hired staff within their first 6 to 12 months, leading to high recruitment costs and lost productivity across critical business teams.",
    context:
      "Talent retention is a vital business efficiency driver. Identifying when and where attrition spikes occur allows HR and team leads to intervene with targeted onboarding and career development initiatives.",
    data:
      "Anonymized HR information system dataset including employee demographics, hire dates, exit dates, department codes, compensation quartiles, performance review ratings, and promotion history.",
    approach:
      "1. Performed data cleansing, date calculations, and tenure classification in Python.\n2. Built Kaplan-Meier-style retention curves across departments and job levels.\n3. Analyzed correlation between time-in-role without promotion/training and attrition likelihood.\n4. Developed an executive dashboard in Power BI summarizing turnover rates, hiring funnel velocity, and tenure benchmarks.",
    tools: ["Python", "Pandas", "NumPy", "SQL", "Power BI"],
    analysis:
      "Cross-analyzing department tenure showed that attrition was disproportionately concentrated in fast-paced operational roles during the 90-180 day window. Staff who did not receive structured check-ins during their initial 90 days had a 2.5x higher exit rate compared to cohorts with formalized mentor pairing.",
    insights: [
      "The first 90-180 days represented the highest risk period for new hire departures.",
      "Teams with structured onboarding checkpoints showed 40% higher 1-year retention.",
      "Compensation band disparity within the same role level correlated with accelerated mid-level attrition.",
    ],
    recommendations: [
      "Establish a structured 30-60-90 day milestone review program for all operational departments.",
      "Implement internal mobility pathways and regular quarterly compensation band reviews.",
      "Equip HR business partners with predictive turnover risk indicators based on tenure and review cycles.",
    ],
    outcome:
      "Delivered an intuitive HR intelligence dashboard enabling leadership to proactively monitor departmental workforce health and address early tenure retention risks.",
  },
];
