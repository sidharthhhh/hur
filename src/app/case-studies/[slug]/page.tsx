import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/data/case-studies";
import { profileData } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
    title: `${study.title} — Sakshi`,
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
        <div className="mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Project Write-up
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
            {study.title}
          </h1>

          {study.subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {study.subtitle}
            </p>
          )}

          {/* Tools bar */}
          <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md border border-border bg-card/60 text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* Conversational Case Study Sections */}
        <div className="space-y-12 sm:space-y-14 text-base leading-relaxed">
          {/* 1. Problem */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              The Problem & Motivation
            </h2>
            <p className="text-muted-foreground">{study.problem}</p>
          </section>

          {/* 2. Context */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Context & Data
            </h2>
            <p className="text-muted-foreground">{study.context}</p>
            <div className="p-4 rounded-xl border border-border bg-card/40 text-xs sm:text-sm text-foreground/90 font-mono">
              {study.data}
            </div>
          </section>

          {/* 3. Approach */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              How I Approached It
            </h2>
            <div className="text-muted-foreground whitespace-pre-line space-y-2">
              <p>{study.approach}</p>
            </div>
          </section>

          {/* 4. Analysis & Insights */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Key Insights & Observations
            </h2>
            <p className="text-muted-foreground mb-3">{study.analysis}</p>
            <div className="space-y-2.5">
              {study.insights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card/60 p-3.5 text-sm text-foreground"
                >
                  <span className="font-mono text-xs text-primary font-bold mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. What I Learned / Outcome */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Takeaways & Deliverables
            </h2>
            <div className="rounded-xl border border-border bg-card/60 p-5 text-sm sm:text-base text-foreground leading-relaxed">
              <p>{study.outcome}</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Selected Work</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4 font-semibold"
          >
            <span>Have a question about this project? Get in touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </main>
  );
}
