import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/data/case-studies";
import { profileData } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Database,
  Layers,
  Lightbulb,
  Sparkles,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.projectSlug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.projectSlug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study — ${profileData.name}`,
    description: study.subtitle || study.problem,
    openGraph: {
      title: study.title,
      description: study.subtitle || study.problem,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.projectSlug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground">
      <Container size="narrow">
        {/* Back navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/#case-studies">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Case Studies</span>
            </Link>
          </Button>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default" className="text-xs">
              Analytical Deep Dive
            </Badge>
            <Badge variant="outline" className="text-xs">
              9-Step Framework
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            {study.title}
          </h1>

          {study.subtitle && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.subtitle}
            </p>
          )}

          <div className="pt-4 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs font-normal">
                {tool}
              </Badge>
            ))}
          </div>

          <Separator className="mt-8" />
        </header>

        {/* 9-Step Sequence */}
        <div className="space-y-12">
          {/* Step 1: Problem */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                01
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Business Problem & Objectives
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-base">
              <p>{study.problem}</p>
            </div>
          </section>

          {/* Step 2: Context */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                02
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Operational & Industry Context
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-base">
              <p>{study.context}</p>
            </div>
          </section>

          {/* Step 3: Data */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                03
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Data Architecture & Sources
              </h2>
            </div>
            <div className="pl-10 space-y-2 text-muted-foreground leading-relaxed text-base">
              <p>{study.data}</p>
            </div>
          </section>

          {/* Step 4: Approach */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                04
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Methodology & Analytical Approach
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-base whitespace-pre-line space-y-2">
              <p>{study.approach}</p>
            </div>
          </section>

          {/* Step 5: Tools */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                05
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Tools & Technologies Used
              </h2>
            </div>
            <div className="pl-10">
              <div className="flex flex-wrap gap-2">
                {study.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Step 6: Analysis */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                06
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Exploratory & Quantitative Analysis
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-base">
              <p>{study.analysis}</p>
            </div>
          </section>

          {/* Step 7: Insights */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                07
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Key Extracted Insights
              </h2>
            </div>
            <div className="pl-10 space-y-2.5">
              {study.insights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card/60 p-4 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Step 8: Recommendations */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                08
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Strategic Recommendations
              </h2>
            </div>
            <div className="pl-10 space-y-2.5">
              {study.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"
                >
                  <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Step 9: Outcome */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                09
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Deliverable & Impact Outcome
              </h2>
            </div>
            <div className="pl-10">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-base text-foreground leading-relaxed">
                <p>{study.outcome}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button asChild variant="outline">
            <Link href="/#case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Case Studies</span>
            </Link>
          </Button>

          <Button asChild>
            <Link href="/#contact">
              <span>Discuss This Project</span>
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
