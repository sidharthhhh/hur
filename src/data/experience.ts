import { CareerMilestone, ExperienceItem } from "@/types";

export const careerMilestones: CareerMilestone[] = [
  {
    id: "milestone-1",
    stage: "Foundation",
    title: "Engineering Education (B.Tech)",
    timeframe: "2020 – 2024",
    description:
      "Oriental Institute of Science and Technology. Built strong foundations in computational logic, programming, data structures, and engineering discipline.",
    skills: ["Engineering Fundamentals", "Mathematics", "Problem Solving", "Web Systems"],
    highlight: "Graduated with comprehensive technical and quantitative training.",
  },
  {
    id: "milestone-2",
    stage: "Technical Internship",
    title: "Frontend & Web Development",
    timeframe: "Jan 2023 – Jul 2023",
    description:
      "TenSketch. Built interactive web applications, dynamic quiz engine, music streaming interface, and responsive e-learning portals using JavaScript, HTML, and CSS.",
    skills: ["JavaScript", "HTML5", "CSS3", "UI/UX", "Interactive Web Apps"],
    highlight: "Delivered multiple responsive web interfaces and user-engagement features.",
  },
  {
    id: "milestone-3",
    stage: "Client Operations",
    title: "E-Commerce Account Management",
    timeframe: "Sep 2024 – Mar 2025",
    description:
      "TP. Managed client accounts, resolved escalations, coordinated operational deliverables, and ensured SLA adherence for e-commerce workflows.",
    skills: ["Account Management", "E-Commerce Operations", "Client Relations", "SLA Adherence"],
    highlight: "Maintained consistent operational metrics and cross-functional coordination.",
  },
  {
    id: "milestone-4",
    stage: "Advisory & Operations",
    title: "Program Advisory & Service Delivery",
    timeframe: "May 2025 – Sep 2025",
    description:
      "Splash India Private Limited. Advised program participants, utilized advanced Excel for tracking, and delivered customer-focused operational support.",
    skills: ["Microsoft Excel", "Program Advisory", "Customer Service", "Process Tracking"],
    highlight: "Enhanced program workflows through structured spreadsheet reporting and user support.",
  },
  {
    id: "milestone-5",
    stage: "Current Project Leadership",
    title: "Assistant Project Coordinator",
    timeframe: "Oct 2025 – Apr 2026",
    description:
      "Innosecure Technologies. Driving project planning, monitoring timelines, coordinating cross-functional deliverables, preparing documentation, and keeping project schedules on track.",
    skills: ["Project Coordination", "Timeline Tracking", "Stakeholder Alignment", "Documentation", "Process Monitoring"],
    highlight: "Actively managing multi-stakeholder operational cadence and schedule compliance.",
    isCurrent: true,
  },
  {
    id: "milestone-6",
    stage: "Active Expansion",
    title: "Data Analytics & Applied Intelligence",
    timeframe: "Active Focus",
    description:
      "Deepening practical mastery in SQL data modeling, Python data pipelines, Power BI dashboards, and data-informed business decision making.",
    skills: ["SQL", "Python", "Power BI", "Data Analysis", "Reporting Automation"],
    highlight: "Applying analytics to measure, optimize, and automate project operations.",
  },
  {
    id: "milestone-7",
    stage: "Long Term",
    title: "Technology Leadership & Solutions",
    timeframe: "Future Direction",
    description:
      "Growing into technical project management, technology consulting, and leading comprehensive software/business solutions.",
    skills: ["Technical Leadership", "Technology Consulting", "Solutions Architecture"],
    isFuture: true,
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Assistant Project Coordinator",
    company: "Innosecure Technologies",
    location: "Indore, Madhya Pradesh, India (On-site)",
    start: "Oct 2025",
    end: "Apr 2026",
    responsibilities: [
      "Assist project managers and technical teams by meticulously tracking milestones, schedules, and cross-functional deliverables.",
      "Coordinate day-to-day task assignments across functional departments to ensure on-time execution.",
      "Prepare comprehensive project documentation, progress reports, and status presentations for stakeholders.",
      "Monitor operational progress against defined baselines and facilitate rapid issue resolution to keep workflows unblocked.",
      "Utilize project management methodologies and tools to standardize communication and operational cadence.",
    ],
    achievements: [
      "Maintained high schedule fidelity across concurrent project workstreams through proactive tracking and transparent status reporting.",
      "Streamlined communication channels between project leads and operational team members.",
    ],
    skills: [
      "Project Coordination",
      "Timeline Tracking",
      "Stakeholder Communication",
      "Documentation",
      "Task Management",
      "Cross-Functional Operations",
    ],
  },
  {
    id: "exp-2",
    role: "Program Advisor",
    company: "Splash India Private Limited",
    location: "Indore, Madhya Pradesh, India (Hybrid)",
    start: "May 2025",
    end: "Sep 2025",
    responsibilities: [
      "Advised and guided program stakeholders on service workflows, requirements, and execution steps.",
      "Utilized Microsoft Excel for tracking participant data, analyzing operational trends, and generating periodic reports.",
      "Provided high-touch customer support, resolving inquiries efficiently while maintaining service excellence.",
      "Collaborated with internal teams to enhance program delivery based on participant feedback.",
    ],
    achievements: [
      "Maintained consistent customer satisfaction and resolution quality across hybrid support operations.",
      "Optimized Excel-based data tracking sheets to improve reporting turnaround time.",
    ],
    skills: [
      "Microsoft Excel",
      "Customer Service",
      "Program Advisory",
      "Data Tracking",
      "Communication",
    ],
  },
  {
    id: "exp-3",
    role: "Account Manager",
    company: "TP (Teleperformance)",
    location: "Indore, Madhya Pradesh, India (On-site)",
    start: "Sep 2024",
    end: "Mar 2025",
    responsibilities: [
      "Managed key e-commerce client accounts, serving as the central point of contact for operational queries and escalation resolution.",
      "Monitored key performance metrics and SLAs to ensure high compliance with contractual requirements.",
      "Analyzed customer engagement trends and operational friction points to recommend workflow improvements.",
      "Collaborated closely with cross-functional support teams to resolve complex customer issues promptly.",
    ],
    achievements: [
      "Consistently achieved target SLA compliance benchmarks across fast-paced e-commerce operational queues.",
      "Successfully mitigated client escalation risks through structured communication and prompt root-cause triage.",
    ],
    skills: [
      "Account Management",
      "E-Commerce Operations",
      "SLA Management",
      "Client Relations",
      "Problem Resolution",
    ],
  },
  {
    id: "exp-4",
    role: "Web Development Intern",
    company: "TenSketch",
    location: "Remote",
    start: "Jan 2023",
    end: "Jul 2023",
    responsibilities: [
      "Engineered responsive and engaging product landing pages using semantic HTML5 and modern CSS3.",
      "Designed and developed a dynamic Quiz Application in JavaScript featuring real-time scoring algorithms and user feedback mechanisms.",
      "Built a fully functional Music Player web app featuring playback controls (play, pause, skip, volume) and dynamic playlist management.",
      "Developed an interactive E-Learning website platform featuring user-friendly navigation and structured learning module interfaces.",
    ],
    achievements: [
      "Successfully built and deployed 4 distinct interactive frontend web applications with clean, maintainable code.",
      "Enhanced user experience and interface responsiveness across diverse mobile and desktop screen sizes.",
    ],
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Frontend Development",
      "UI/UX Design",
      "Responsive Web Design",
    ],
  },
];
