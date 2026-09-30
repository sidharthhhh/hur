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
  CheckCircle2,
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
    <Section id="about" className="border-t border-border/60 bg-card/20">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Background & Identity"
          title="Engineering Precision Meets Business Execution"
          description="A multidisciplinary background spanning engineering foundations, interactive web development, e-commerce account management, program advisory, and active project coordination."
        />
      </AnimatedContainer>

      {/* Narrative overview with glassmorphism card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
        <AnimatedContainer
          delay={0.1}
          className="lg:col-span-7 space-y-4 text-base text-muted-foreground leading-relaxed"
        >
          <p>
            With a <strong className="text-foreground">Bachelor of Technology (B.Tech)</strong> from{" "}
            <strong className="text-foreground">Oriental Institute of Science and Technology</strong>, I approach systems through structured analytical thinking, technical problem solving, and process discipline.
          </p>
          <p>
            My professional journey bridges technical development and operational leadership—from building interactive web applications at <strong className="text-foreground">TenSketch</strong>, to managing high-stakes client deliverables at <strong className="text-foreground">TP</strong>, delivering program advisory at <strong className="text-foreground">Splash India</strong>, and currently driving timeline execution as <strong className="text-foreground">Assistant Project Coordinator</strong> at <strong className="text-foreground">Innosecure Technologies</strong>.
          </p>
          <p>
            I am passionate about combining data analytics, process automation, and technology solutions to keep complex multi-stakeholder projects delivered on schedule and with high operational clarity.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2} className="lg:col-span-5">
          <div className="rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-md p-6 sm:p-8 space-y-4 shadow-sm shadow-primary/5 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span>Core Strengths & Focus</span>
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  <strong className="text-foreground">Project Coordination:</strong> Tracking schedules, milestone baselines, task assignment, and proactive risk triage.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  <strong className="text-foreground">Data Analytics:</strong> Building actionable Excel models, SQL queries, and Power BI operational reporting.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  <strong className="text-foreground">Technical Foundation:</strong> Web development proficiency (JavaScript, HTML, CSS) and engineering discipline.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>

      {/* What I Bring Cards */}
      <AnimatedContainer delay={0.3}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              What I Bring to Teams & Projects
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Cross-functional capabilities honed through technical training and direct project execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.what_i_bring.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Lightbulb;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border/80 bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
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
