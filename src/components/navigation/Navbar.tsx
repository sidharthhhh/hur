"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border py-3.5"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Minimal Brand Name */}
            <Link
              href="/#hero"
              className="text-base font-semibold tracking-tight text-foreground hover:opacity-75 transition-opacity"
            >
              {profileData.name}
            </Link>

            {/* Editorial Nav Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
              {NAV_ITEMS.map((item) => {
                const targetId = item.href.replace("/#", "").replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-150 ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Resume & Theme */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.resume}
                download
                onClick={() => track("resume_download", { source: "navbar" })}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary transition-colors border border-border rounded-full px-3.5 py-1.5 hover:border-primary/50"
              >
                <span>Resume</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <ThemeToggle />

              <MobileNav activeSection={activeSection} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
