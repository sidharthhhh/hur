import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { profileData } from "@/data/profile";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import {
  Cpu,
  Briefcase,
  Users,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Layers,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Briefcase,
  Users,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Layers,
  TrendingUp,
};

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Background & Identity"
          title="Bridging Engineering, Operations, and Analytics"
          description="A deliberate multidisciplinary journey combining technical discipline, frontline operational understanding, and data-driven problem solving."
        />
      </AnimatedContainer>

      {/* Narrative overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
        <AnimatedContainer delay={0.1} className="lg:col-span-7 space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            Trained as an engineer, I view systems through the lens of structure, reliability, and continuous optimization. My experience across customer-facing operations and business outsourcing gave me direct exposure to how real users interact with software, where workflows break down, and how operational bottlenecks form.
          </p>
          <p>
            Currently, I am channeling this quantitative foundation and operational grounding into data analytics. By extracting actionable insights from transactional and operational data using SQL, Python, and modern business intelligence tools, I help transform ambiguity into clear decision pathways.
          </p>
          <p>
            Looking forward, I am building toward deep technical capability across data science, production engineering, and technology consulting—aiming to design resilient, human-centered software and business solutions.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2} className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-card/60 p-6 sm:p-8 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Core Identity
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">Cross-Disciplinary:</strong> Engineering rigor combined with business context and user empathy.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">Analytics Focused:</strong> Transforming raw operational data into structured business intelligence.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p>
                  <strong className="text-foreground">Long-Term Ambition:</strong> Building toward systems engineering, technology consulting, and solution leadership.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>

      {/* What I Bring */}
      <AnimatedContainer delay={0.3}>
        <div className="mb-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            What I Bring
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Key capabilities developed through engineering training and cross-functional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.what_i_bring.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Lightbulb;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border/80 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </AnimatedContainer>
    </Section>
  );
}
