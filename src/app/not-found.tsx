import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-24 pb-16">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary font-mono text-2xl font-bold">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              The page or case study you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button asChild variant="default" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Return to Homepage</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4" />
                <span>Browse Projects</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
