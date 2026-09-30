export interface SimpleLearningStep {
  number: string;
  title: string;
  focus: string;
  status: "Active Focus" | "Next" | "Exploring";
}

export const learningStepsData: SimpleLearningStep[] = [
  {
    number: "01",
    title: "Data Analytics & Reporting",
    focus: "SQL queries, Python data analysis (Pandas/NumPy), Excel modeling, and Power BI operational reporting.",
    status: "Active Focus",
  },
  {
    number: "02",
    title: "Deeper Technical Foundations",
    focus: "Applied statistics, relational database design, data cleaning workflows, and REST APIs.",
    status: "Next",
  },
  {
    number: "03",
    title: "Exploring Next",
    focus: "Machine learning fundamentals, systems architecture, and modern full-stack web applications.",
    status: "Exploring",
  },
];
