"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, FileText, Linkedin, Github, Mail } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { track } from "@/lib/analytics";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-none"
        aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 left-4 right-4 z-50 rounded-2xl border border-black/10 dark:border-white/10 bg-card text-card-foreground p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-black/8 dark:border-white/8">
                <div>
                  <p className="text-sm font-bold text-foreground">{profileData.name}</p>
                  <p className="text-[11px] text-muted-foreground">{profileData.positioning.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-md text-muted-foreground hover:text-foreground"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Navigation items */}
              <nav className="flex flex-col space-y-1 py-1">
                {NAV_ITEMS.map((item, idx) => {
                  const targetId = item.href.replace("/#", "").replace("#", "");
                  const isActive = activeSection === targetId;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * idx, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/15 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="mt-4 pt-3 border-t border-black/8 dark:border-white/8 space-y-3">
                <a
                  href={profileData.resume}
                  download
                  onClick={() => {
                    track("resume_download", { source: "mobile_nav" });
                    setOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-white font-semibold text-xs shadow-xs transition-opacity hover:opacity-95"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Download Résumé</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-muted-foreground pt-1">
                  {profileData.linkedin && (
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {profileData.github && (
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {profileData.email && (
                    <a
                      href={`mailto:${profileData.email}`}
                      aria-label="Email"
                      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
