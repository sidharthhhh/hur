"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, FileText, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { track } from "@/lib/analytics";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-9 w-9 rounded-md text-foreground"
          aria-label="Open Navigation Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col justify-between p-6">
        <div>
          <SheetHeader className="text-left pb-4 border-b border-border/60">
            <SheetTitle className="text-base font-bold text-foreground">
              {profileData.name}
            </SheetTitle>
            <p className="text-xs text-muted-foreground">{profileData.positioning.title}</p>
          </SheetHeader>

          <nav className="mt-6 flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("/#", "").replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-border/60">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>

          <Button
            asChild
            variant="default"
            className="w-full justify-center gap-2 shadow-sm"
            onClick={() => {
              track("resume_download", { source: "mobile_nav" });
              setOpen(false);
            }}
          >
            <a href={profileData.resume} download>
              <FileText className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 pt-2">
            {profileData.linkedin ? (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
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
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
            {profileData.email ? (
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
