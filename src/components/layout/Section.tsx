import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerSize?: "default" | "narrow" | "wide";
  noContainer?: boolean;
}

export function Section({
  id,
  className,
  containerSize = "default",
  noContainer = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 sm:py-24 lg:py-28 scroll-mt-16", className)}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}
