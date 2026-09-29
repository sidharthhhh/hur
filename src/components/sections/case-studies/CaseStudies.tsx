import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { caseStudiesData } from "@/data/case-studies";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";

export function CaseStudies() {
  return (
    <Section id="case-studies" className="border-t border-border/60">
      <AnimatedContainer>
        <SectionHeading
          eyebrow="In-Depth Case Studies"
          title="Structured Problem Solving & Decisions"
          description="Detailed analytical walk-throughs covering data validation, modeling decisions, business insights, and recommendations."
        />
      </AnimatedContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudiesData.map((study, idx) => (
          <AnimatedContainer key={study.projectSlug} delay={0.1 * idx}>
            <Card className="h-full flex flex-col justify-between hover:border-primary/40 hover:shadow-xs transition-all duration-200">
              <div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                      Case Study #{idx + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug">
                    {study.title}
                  </CardTitle>
                  {study.subtitle && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {study.subtitle}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="space-y-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Business Problem
                    </h4>
                    <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-border/60">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Insights Extracted
                    </h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {study.insights.slice(0, 2).map((insight, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {study.tools.slice(0, 4).map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-[10px] font-normal"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-3 border-t border-border/60">
                <Button asChild variant="outline" size="sm" className="w-full justify-between group">
                  <Link href={`/case-studies/${study.projectSlug}`}>
                    <span>Read Full 9-Step Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedContainer>
        ))}
      </div>
    </Section>
  );
}
