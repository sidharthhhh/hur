"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { track } from "@/lib/analytics";

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
      const scrolledPercent = (winScroll / height) * 100;

      setScrollProgress(scrolledPercent);
      setScrolled(winScroll > 20);
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
      rootMargin: "-20% 0px -60% 0px",
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
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/80 shadow-sm py-2.5"
            : "bg-transparent py-4"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name with subtle glow badge */}
            <Link
              href="/#hero"
              className="group flex items-center gap-2.5 focus-visible:outline-none"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-indigo-500 text-primary-foreground shadow-sm shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
                <span className="font-extrabold text-sm tracking-wider">
                  {profileData.name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {profileData.name}
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
                <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline-block">
                  {profileData.positioning.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/80 bg-card/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-muted-foreground shadow-xs">
              {NAV_ITEMS.map((item) => {
                const targetId = item.href.replace("/#", "").replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-primary font-semibold shadow-xs"
                        : "hover:text-foreground hover:bg-accent/60"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 -z-10 animate-fade-in" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Resume */}
            <div className="flex items-center gap-2">
              {profileData.linkedin ? (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() =>
                    track("external_profile_click", { platform: "linkedin" })
                  }
                  className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : null}

              {profileData.github ? (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={() =>
                    track("external_profile_click", { platform: "github" })
                  }
                  className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200 hover:scale-105"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : null}

              <ThemeToggle />

              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex gap-1.5 rounded-full text-xs font-medium border-border hover:border-primary/50 shadow-xs hover:shadow-primary/20 transition-all duration-200 hover:scale-102"
                onClick={() => track("resume_download", { source: "navbar" })}
              >
                <a href={profileData.resume} download>
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  <span>Resume</span>
                </a>
              </Button>

              {/* Mobile Nav trigger */}
              <MobileNav activeSection={activeSection} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
