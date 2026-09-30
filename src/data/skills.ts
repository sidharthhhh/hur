export interface SimpleSkillGroup {
  category: string;
  skills: { name: string; note?: string }[];
}

export const skillsData: SimpleSkillGroup[] = [
  {
    category: "Data & Analytics",
    skills: [
      { name: "SQL", note: "Data queries & aggregation" },
      { name: "Python", note: "Data analysis & scripting" },
      { name: "Pandas", note: "Data manipulation" },
      { name: "NumPy", note: "Numerical operations" },
      { name: "Microsoft Excel", note: "Formulas, modeling & pivots" },
      { name: "Power BI", note: "Dashboards & reporting" },
    ],
  },
  {
    category: "Web & Frontend",
    skills: [
      { name: "JavaScript", note: "Interactive web applications" },
      { name: "HTML5", note: "Semantic structure" },
      { name: "CSS3", note: "Responsive styling & layouts" },
      { name: "REST APIs", note: "Data fetching & integration" },
      { name: "Git & GitHub", note: "Version control" },
    ],
  },
  {
    category: "Operations & Coordination",
    skills: [
      { name: "Project Coordination", note: "Tracking milestones & tasks" },
      { name: "Account Management", note: "Client communication & delivery" },
      { name: "Customer Operations", note: "Escalations & support" },
      { name: "Process Documentation", note: "Clear SOPs & reports" },
      { name: "SLA Management", note: "Timeliness & quality" },
    ],
  },
  {
    category: "Exploring & Expanding",
    skills: [
      { name: "Statistics", note: "Exploratory & inferential analysis" },
      { name: "Tableau", note: "Visual analytics" },
      { name: "Machine Learning Basics", note: "Classification & regression" },
      { name: "TypeScript", note: "Typed frontend development" },
      { name: "React & Next.js", note: "Modern web architecture" },
    ],
  },
];
