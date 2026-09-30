import React from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { skillCategoriesData } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";
import { Check, Sparkles, Code2, Database, Briefcase, Cpu } from "lucide-react";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60 bg-card/20">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="Core Competencies"
          title="Technical & Operational Skill Set"
          description="A transparent breakdown of verified capabilities across project coordination, data analytics, web technologies, and systems."
        />
      </AnimatedContainer>

      {/* Legend */}
      <AnimatedContainer delay={0.05}>
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-muted-foreground p-3.5 rounded-xl bg-card border border-border/80 w-fit shadow-xs">
          <span className="font-bold text-foreground">Legend:</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-foreground">Current / Working Proficiency</span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="h-2.5 w-2.5 rounded-full border border-primary/50 bg-primary/20" />
            <span className="italic text-primary">Currently Learning / Expanding</span>
          </span>
        </div>
      </AnimatedContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategoriesData.map((category, idx) => (
          <AnimatedContainer key={category.id} delay={0.06 * idx}>
            <Card className="h-full hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group">
              <CardHeader className="pb-3 pt-5">
                <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{category.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current skills */}
                {category.current.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Current Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.current.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-normal bg-secondary/80 text-secondary-foreground hover:bg-secondary hover:border-primary/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning skills */}
                {category.learning.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3 w-3" />
                      <span>Currently Learning</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.learning.map((skill) => (
                        <Badge
                          key={skill}
                          variant="learning"
                          className="text-xs font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
