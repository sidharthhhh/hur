"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Linkedin,
  Github,
  Sparkles,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import {
  MotionReveal,
  FloatingElement,
  AnimatedNumber,
} from "@/components/motion/MotionWrapper";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Animated Ambient Light Spheres */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-primary/20 via-indigo-500/15 to-sky-400/15 rounded-full blur-3xl -z-10"
      />

      <FloatingElement
        duration={6}
        yOffset={12}
        className="hidden xl:block absolute top-36 left-10 pointer-events-none"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-semibold text-foreground shadow-lg shadow-primary/5">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <Briefcase className="h-3.5 w-3.5 text-primary" />
          <span>Assistant Project Coordinator</span>
        </div>
      </FloatingElement>

      <FloatingElement
        duration={7}
        yOffset={15}
        delay={1}
        className="hidden xl:block absolute top-48 right-10 pointer-events-none"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-semibold text-foreground shadow-lg shadow-indigo-500/5">
          <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
          <span>B.Tech Graduate 2024 &bull; OIST</span>
        </div>
      </FloatingElement>

      <FloatingElement
        duration={8}
        yOffset={14}
        delay={2}
        className="hidden xl:block absolute bottom-28 left-16 pointer-events-none"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-card/80 backdrop-blur-md px-4 py-2 text-xs font-semibold text-foreground shadow-lg shadow-sky-500/5">
          <Code2 className="h-3.5 w-3.5 text-sky-500" />
          <span>Interactive Web Apps & Analytics</span>
        </div>
      </FloatingElement>

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Eyebrow Badge */}
          <MotionReveal delay={0.05} direction="down">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs cursor-default"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary animate-spin" style={{ animationDuration: "6s" }} />
              <span className="tracking-wide">{profileData.positioning.tagline}</span>
            </motion.div>
          </MotionReveal>

          {/* Main Headline */}
          <MotionReveal delay={0.15} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-accent underline decoration-primary/30 decoration-wavy">
                {profileData.name}
              </span>
              <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                {profileData.positioning.title}
              </span>
            </h1>
          </MotionReveal>

          {/* Intro description */}
          <MotionReveal delay={0.25} direction="up">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
              {profileData.positioning.intro}
            </p>
          </MotionReveal>

          {/* CTAs with Framer Motion hover springs */}
          <MotionReveal delay={0.35} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto gap-2 shadow-lg shadow-primary/25 font-bold text-sm h-12 px-7 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="#projects">
                    <span>Explore Portfolio & Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 border-border/80 bg-card/70 backdrop-blur-md hover:bg-accent font-semibold text-sm h-12 px-7 rounded-xl shadow-xs"
                >
                  <a href={profileData.resume} download>
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Download Resume</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </MotionReveal>

          {/* Social Badges */}
          <MotionReveal delay={0.45} direction="up">
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
              {profileData.location && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3.5 py-1 text-foreground shadow-2xs">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{profileData.location}</span>
                </span>
              )}

              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3.5 py-1 hover:border-primary/40 hover:text-foreground transition-all duration-200 hover:scale-105 shadow-2xs"
                >
                  <Linkedin className="h-3.5 w-3.5 text-primary" />
                  <span>LinkedIn</span>
                </a>
              )}

              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-xs px-3.5 py-1 hover:border-primary/40 hover:text-foreground transition-all duration-200 hover:scale-105 shadow-2xs"
                >
                  <Github className="h-3.5 w-3.5 text-foreground" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </MotionReveal>

          {/* Animated Numeric Counter Strip */}
          <MotionReveal delay={0.55} direction="up">
            <div className="pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
                className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-4 text-center shadow-xs transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <AnimatedNumber value={6} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  Web & Analytics Projects
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
                className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-4 text-center shadow-xs transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <AnimatedNumber value={4} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  Cross-Functional Roles
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
                className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-4 text-center shadow-xs transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  2024
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  B.Tech Engineering
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
                className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-4 text-center shadow-xs transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight text-emerald-600 dark:text-emerald-400">
                  <AnimatedNumber value={100} suffix="%" />
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  SLA & Schedule Focus
                </p>
              </motion.div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
