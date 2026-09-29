import { LearningTrack } from "@/types";

export const learningRoadmapData: LearningTrack[] = [
  {
    id: "track-1",
    track: "Now — Data Analytics & Business Intelligence",
    steps: ["SQL & Data Modeling", "Python (Pandas / NumPy)", "Descriptive & Inferential Statistics", "Power BI Dashboards"],
    isCurrent: true,
  },
  {
    id: "track-2",
    track: "Next — Machine Learning & Data Science",
    steps: ["Feature Engineering", "Supervised Learning", "Model Evaluation & Tuning", "scikit-learn & Python ML"],
  },
  {
    id: "track-3",
    track: "Technology & Systems",
    steps: ["REST APIs & Web Architectures", "Relational & NoSQL Databases", "Docker & Container Basics", "Cloud Systems"],
  },
  {
    id: "track-4",
    track: "Long Term — Technology Leadership & Solutions",
    steps: ["Production Engineering Principles", "Technology Consulting Frameworks", "Full-Lifecycle Solution Architecture"],
  },
];
