export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Skills", href: "/#skills" },
  { label: "Learning", href: "/#learning" },
  { label: "Contact", href: "/#contact" },
];

export const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "case-studies",
  "skills",
  "learning",
  "education",
  "certifications",
  "solutions",
  "philosophy",
  "contact",
];
