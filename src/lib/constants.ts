export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Selected Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Toolkit", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const SECTION_IDS = [
  "hero",
  "work",
  "experience",
  "about",
  "skills",
  "learning",
  "contact",
];
