import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { careerMilestones, experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Career Journey & Experience"
          title="Multidisciplinary Trajectory"
          description="From engineering foundations to customer operations, business functions, and data analytics."
        />
      </AnimatedContainer>

      {/* Part 1: Career Journey Vertical Timeline */}
      <div className="mb-16">
        <AnimatedContainer delay={0.1}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Career Progression Arc
              </h3>
              <p className="text-sm text-muted-foreground">
                Sequential evolution from foundation to active focus and future leadership.
              </p>
            </div>
          </div>
        </AnimatedContainer>

        <div className="relative border-l-2 border-border/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {careerMilestones.map((milestone, idx) => (
            <AnimatedContainer
              key={milestone.id}
              delay={0.05 * idx}
              className="relative group"
            >
              {/* Timeline marker */}
              <span
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border-2 bg-background transition-colors ${
                  milestone.isCurrent
                    ? "border-primary bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : milestone.isFuture
                    ? "border-dashed border-muted-foreground/50"
                    : "border-primary/60 bg-card group-hover:border-primary"
                }`}
              >
                {milestone.isCurrent && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                )}
              </span>

              <div
                className={`rounded-xl border p-5 transition-all duration-200 ${
                  milestone.isCurrent
                    ? "border-primary/40 bg-card shadow-xs"
                    : milestone.isFuture
                    ? "border-dashed border-border/80 bg-card/30 opacity-80"
                    : "border-border/80 bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

                <h4 className="text-base font-semibold text-foreground">
                  {milestone.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>

                {milestone.highlight && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-medium">
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

      {/* Part 2: Detailed Experience Cards */}
      <AnimatedContainer delay={0.2}>
        <div className="mb-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Professional Roles & Experience
          </h3>
          <p className="text-sm text-muted-foreground">
            Direct operational responsibilities and measurable business contributions.
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((item) => (
            <Card key={item.id} className="hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">
                      {item.role}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 font-medium text-foreground">
                        <Briefcase className="h-3.5 w-3.5 text-primary" />
                        {item.company}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-secondary/50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {item.start} — {item.end}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Highlights & Impact
                    </h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span>{ach}</span>
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
                        variant="outline"
                        className="text-xs text-muted-foreground font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedContainer>
    </Section>
  );
}
