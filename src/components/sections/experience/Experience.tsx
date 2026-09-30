import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { careerMilestones, experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { Calendar, MapPin, Briefcase, ChevronRight, Sparkles, Building2 } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Career Journey & Roles"
          title="Professional Experience & Trajectory"
          description="A documented track record across project coordination, program advisory, e-commerce account management, and web development."
        />
      </AnimatedContainer>

      {/* Part 1: Detailed Professional Experience Cards */}
      <div className="mb-20">
        <AnimatedContainer delay={0.1}>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Work Experience & Roles</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Key accomplishments, responsibilities, and operational scope across past and current roles.
              </p>
            </div>
          </div>
        </AnimatedContainer>

        <div className="space-y-6">
          {experienceData.map((item, idx) => (
            <AnimatedContainer key={item.id} delay={0.08 * idx}>
              <Card className="hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle top gradient accent on card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-sky-400 opacity-80 transition-opacity group-hover:opacity-100" />

                <CardHeader className="pb-4 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                          {item.role}
                        </CardTitle>
                        {idx === 0 && (
                          <Badge variant="default" className="text-[10px] py-0 px-2 animate-pulse">
                            Active Role
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1.5">
                        <span className="flex items-center gap-1.5 font-semibold text-foreground">
                          <Building2 className="h-4 w-4 text-primary" />
                          {item.company}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-foreground font-mono bg-secondary/80 border border-border px-3 py-1.5 rounded-lg self-start sm:self-auto shadow-2xs">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span>
                        {item.start} — {item.end}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      Key Responsibilities & Scope
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                        Key Impact & Outcomes
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            <span className="leading-relaxed font-medium text-foreground/90">
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs text-secondary-foreground font-normal hover:border-primary/40 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Part 2: Career Progression Arc Timeline */}
      <div>
        <AnimatedContainer delay={0.2}>
          <div className="mb-8">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Career Progression Arc</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Strategic arc connecting academic engineering training to active project execution and analytics.
            </p>
          </div>
        </AnimatedContainer>

        <div className="relative border-l-2 border-primary/20 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {careerMilestones.map((milestone, idx) => (
            <AnimatedContainer
              key={milestone.id}
              delay={0.05 * idx}
              className="relative group"
            >
              {/* Timeline marker */}
              <span
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border-2 bg-background transition-all duration-300 ${
                  milestone.isCurrent
                    ? "border-primary bg-primary text-primary-foreground ring-4 ring-primary/20 scale-110 shadow-sm shadow-primary/40"
                    : milestone.isFuture
                    ? "border-dashed border-muted-foreground/50"
                    : "border-primary/60 bg-card group-hover:border-primary group-hover:scale-105"
                }`}
              >
                {milestone.isCurrent && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-ping" />
                )}
              </span>

              <div
                className={`rounded-xl border p-5 sm:p-6 transition-all duration-300 ${
                  milestone.isCurrent
                    ? "border-primary/50 bg-card shadow-md shadow-primary/5 ring-1 ring-primary/20"
                    : milestone.isFuture
                    ? "border-dashed border-border/80 bg-card/40 opacity-80"
                    : "border-border/80 bg-card hover:border-primary/40 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {milestone.stage}
                    </span>
                    {milestone.isCurrent && (
                      <Badge variant="default" className="text-[10px] py-0 px-2">
                        Active Focus
                      </Badge>
                    )}
                    {milestone.isFuture && (
                      <Badge variant="secondary" className="text-[10px] py-0 px-2">
                        Direction
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {milestone.timeframe}
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground">
                  {milestone.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>

                {milestone.highlight && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                    <span>{milestone.highlight}</span>
                  </div>
                )}

                {milestone.skills && milestone.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                    {milestone.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-[11px] font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </Section>
  );
}
