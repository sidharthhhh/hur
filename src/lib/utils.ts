import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPlaceholder(val?: string): boolean {
  if (!val) return true;
  const trimmed = val.trim();
  return (
    trimmed === "" ||
    trimmed.toUpperCase() === "TODO" ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  );
}

export function formatOrPlaceholder(val?: string, placeholderText = "TODO"): string {
  if (isPlaceholder(val)) {
    return `[${placeholderText}]`;
  }
  return val!;
}
