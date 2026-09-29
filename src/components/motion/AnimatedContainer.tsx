"use client";

import React, { useEffect, useState } from "react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-95 translate-y-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  );
}
