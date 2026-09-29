import { AchievementItem, CertificationItem } from "@/types";

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Data Analytics & SQL Fundamentals",
    provider: "[Add Certification Provider]", // TODO: e.g. Coursera / Google / LinkedIn Learning
    year: "[Add Year]", // TODO: e.g. 2024
    credential_id: "[Add Credential ID]", // TODO: Add credential ID or leave blank
    url: "", // TODO: Add verification URL
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "achieve-1",
    title: "Cross-Functional Operational Streamlining",
    context: "Recognized for improving inter-team issue coordination and process turnaround.",
    year: "Recent",
  },
  {
    id: "achieve-2",
    title: "Analytical Dashboards Initiative",
    context: "Developed custom automated data views for tracking operational SLA performance.",
    year: "Recent",
  },
];
