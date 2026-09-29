import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { educationData } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Engineering Education"
          description="Rigorous academic training cultivating computational thinking, quantitative analysis, and disciplined problem solving."
        />
      </AnimatedContainer>

      <div className="space-y-6 max-w-4xl">
        {educationData.map((item, idx) => (
          <AnimatedContainer key={item.id} delay={0.08 * idx}>
            <Card className="hover:border-primary/30 transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">
                        {item.degree}
                      </CardTitle>
                      <p className="text-sm font-medium text-foreground/80 mt-0.5">
                        {item.branch} &bull; {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-secondary/60 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.graduation_year}</span>
                  </div>
                </div>
              </CardHeader>

              {item.coursework && item.coursework.length > 0 && (
                <CardContent className="pt-2 border-t border-border/60">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    <span>Relevant Coursework & Fundamentals</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
