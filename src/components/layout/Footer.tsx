"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Container } from "./Container";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/80 bg-surface-elevated/70 dark:bg-[#0B0B0B] text-foreground py-10 sm:py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-black/6 dark:border-white/6">
          {/* Brand & Positioning */}
          <div className="space-y-1">
            <Link
              href="/#hero"
              className="text-base font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {profileData.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              {profileData.positioning.title} &bull; {profileData.positioning.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4 text-muted-foreground">
            {profileData.linkedin && (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {profileData.github && (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {profileData.email && (
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors group cursor-pointer ml-2 pl-3 border-l border-black/10 dark:border-white/10"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-primary" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/70">
          <p>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Engineered with Next.js, React 19, TypeScript & GSAP
          </p>
        </div>
      </Container>
    </footer>
  );
}
