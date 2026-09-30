import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "default" && "max-w-[1240px]",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-[1320px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
