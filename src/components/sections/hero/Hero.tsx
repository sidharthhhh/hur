import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Linkedin,
  Github,
  Sparkles,
  MapPin,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-sky-400/10 rounded-full blur-3xl -z-10 animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-float-delayed"
      />

      {/* Floating Interactive Pill Badges (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden xl:block absolute top-36 left-12 animate-float pointer-events-none"
      >
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-medium text-foreground shadow-lg shadow-primary/5">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Briefcase className="h-3.5 w-3.5 text-primary" />
          <span>Assistant Project Coordinator</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden xl:block absolute top-48 right-12 animate-float-delayed pointer-events-none"
      >
        <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-medium text-foreground shadow-lg shadow-indigo-500/5">
          <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
          <span>B.Tech Graduate 2024 &bull; OIST</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden xl:block absolute bottom-24 left-20 animate-float-delayed pointer-events-none"
      >
        <div className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-medium text-foreground shadow-lg shadow-sky-500/5">
          <Code2 className="h-3.5 w-3.5 text-sky-500" />
          <span>Interactive Web Apps & Analytics</span>
        </div>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Eyebrow Badge with animated gradient border */}
          <AnimatedContainer delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary shadow-xs transition-transform hover:scale-105">
              <Sparkles className="h-3.5 w-3.5 text-primary animate-spin-slow" />
              <span className="font-semibold tracking-wide">
                {profileData.positioning.tagline}
              </span>
            </div>
          </AnimatedContainer>

          {/* Main Headline */}
          <AnimatedContainer delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-accent underline decoration-primary/30 decoration-wavy decoration-from-font">
                {profileData.name}
              </span>
              <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                {profileData.positioning.title}
              </span>
            </h1>
          </AnimatedContainer>

          {/* Intro copy */}
          <AnimatedContainer delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
              {profileData.positioning.intro}
            </p>
          </AnimatedContainer>

          {/* CTAs with glowing hover and shine */}
          <AnimatedContainer delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 shadow-md shadow-primary/25 font-semibold text-sm h-12 px-6 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-102 transition-all duration-200"
              >
                <Link href="#projects">
                  <span>Explore Portfolio & Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 border-border/80 bg-card/60 backdrop-blur-sm hover:bg-accent font-semibold text-sm h-12 px-6 rounded-xl shadow-xs transition-all duration-200 hover:scale-102"
              >
                <a href={profileData.resume} download>
                  <FileText className="h-4 w-4 text-primary" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </AnimatedContainer>

          {/* Location & Social Pills */}
          <AnimatedContainer delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
              {profileData.location && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3 py-1 text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{profileData.location}</span>
                </span>
              )}

              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3 py-1 hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-primary" />
                  <span>LinkedIn Profile</span>
                </a>
              )}

              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3 py-1 hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5 text-foreground" />
                  <span>GitHub Projects</span>
                </a>
              )}
            </div>
          </AnimatedContainer>

          {/* Quick Metrics Strip */}
          <AnimatedContainer delay={0.5}>
            <div className="pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm p-4 text-center hover:border-primary/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  6+
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Web & Analytics Projects
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm p-4 text-center hover:border-primary/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  4+
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Cross-Functional Roles
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm p-4 text-center hover:border-primary/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  2024
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  B.Tech Engineering
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-card/50 backdrop-blur-sm p-4 text-center hover:border-primary/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-1">
                  100<span className="text-sm font-bold text-emerald-500">%</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  SLA & Schedule Focus
                </p>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </Container>
    </section>
  );
}
