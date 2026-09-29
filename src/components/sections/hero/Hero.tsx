import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import { AnimatedContainer } from "@/components/motion/AnimatedContainer";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl -z-10"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Eyebrow Badge */}
          <AnimatedContainer delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{profileData.positioning.tagline}</span>
            </div>
          </AnimatedContainer>

          {/* Main Headline */}
          <AnimatedContainer delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {profileData.name}
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
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

          {/* CTAs */}
          <AnimatedContainer delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 shadow-sm font-medium">
                <Link href="#projects">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 border-border hover:bg-accent font-medium"
              >
                <a href={profileData.resume} download>
                  <FileText className="h-4 w-4 text-primary" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </AnimatedContainer>

          {/* Social Links & Location */}
          <AnimatedContainer delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
              {profileData.location && (
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{profileData.location}</span>
                </span>
              )}

              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}

              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </AnimatedContainer>
        </div>
      </Container>
    </section>
  );
}
