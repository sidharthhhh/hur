import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/data/case-studies";
import { profileData } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
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
    <main className="min-h-screen pt-28 pb-20 bg-background text-foreground">
      <Container size="narrow">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 mb-12 pb-8 border-b border-border/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold">
              Analytical Deep Dive
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-muted-foreground border border-black/8 dark:border-white/8">
              9-Step Framework
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.16]">
            {study.title}
          </h1>

          {study.subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {study.subtitle}
            </p>
          )}

          <div className="pt-2 flex flex-wrap gap-1.5">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-black/8 dark:border-white/8 text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* 9-Step Sequence */}
        <div className="space-y-12">
          {/* Step 1: Problem */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
                01
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Business Problem & Objectives
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{study.problem}</p>
            </div>
          </section>

          {/* Step 2: Context */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
                02
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Operational & Industry Context
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{study.context}</p>
            </div>
          </section>

          {/* Step 3: Data */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
                03
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Data Architecture & Sources
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{study.data}</p>
            </div>
          </section>

          {/* Step 4: Approach */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
                04
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Methodology & Analytical Approach
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line space-y-2">
              <p>{study.approach}</p>
            </div>
          </section>

          {/* Step 5: Tools */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated text-foreground text-xs font-medium border border-black/8 dark:border-white/8"
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
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
                06
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Exploratory & Quantitative Analysis
              </h2>
            </div>
            <div className="pl-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{study.analysis}</p>
            </div>
          </section>

          {/* Step 7: Insights */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
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
                  className="flex items-start gap-3 rounded-xl border border-black/8 dark:border-white/8 bg-card text-card-foreground p-4 text-xs sm:text-sm shadow-sm"
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
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-mono border border-primary/25">
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
                  className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm text-foreground/90"
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
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono border border-emerald-500/30">
                09
              </span>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Deliverable & Impact Outcome
              </h2>
            </div>
            <div className="pl-10">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-sm sm:text-base text-foreground/90 leading-relaxed">
                <p>{study.outcome}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-surface hover:bg-surface-elevated text-foreground px-5 py-2.5 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Case Studies</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-[#FF8A1A] text-white px-6 py-2.5 text-xs font-semibold shadow-glow-sm transition-all duration-200"
          >
            <span>Discuss This Project</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
