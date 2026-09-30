"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, Linkedin, Github } from "lucide-react";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { track } from "@/lib/analytics";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("hero");
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(scrolledPercent);
      setScrolled(winScroll > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Floating Capsule Header Container */}
      <header
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full border transition-all duration-300 ${
            scrolled
              ? "py-1.5 px-3 sm:px-4 bg-white/95 dark:bg-[#111111]/90 border-black/10 dark:border-white/12 shadow-2xl backdrop-blur-xl scale-[0.98]"
              : "py-2 px-3.5 sm:px-5 bg-white/90 dark:bg-[#141414]/85 border-black/8 dark:border-white/8 shadow-xl backdrop-blur-lg scale-100"
          }`}
        >
          {/* Logo / Brand Name */}
          <Link
            href="/#hero"
            className="group flex items-center gap-2 focus-visible:outline-none"
            aria-label="Sakshi Home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-[#FF9E40] text-white text-xs font-bold shadow-xs transition-transform duration-200 group-hover:scale-105">
              <span>{profileData.name.charAt(0)}</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary flex items-center gap-1.5">
              {profileData.name}
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-muted-foreground">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("/#", "").replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1 rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-primary/12 border border-primary/25 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? "text-primary" : ""}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden sm:flex items-center gap-0.5 pr-1 border-r border-border/60">
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  onClick={() =>
                    track("external_profile_click", { platform: "linkedin" })
                  }
                  className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}

              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onClick={() =>
                    track("external_profile_click", { platform: "github" })
                  }
                  className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}

              <ThemeToggle />
            </div>

            {/* Resume CTA */}
            <a
              href={profileData.resume}
              download
              onClick={() => track("resume_download", { source: "navbar" })}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-foreground hover:border-primary/60 px-3 py-1 text-xs font-semibold transition-all duration-200"
            >
              <FileText className="h-3 w-3 text-primary" />
              <span>Resume</span>
            </a>

            {/* Mobile Nav trigger */}
            <MobileNav activeSection={activeSection} />
          </div>
        </motion.div>
      </header>
    </>
  );
}
