# Professional Personal Portfolio Implementation Plan

## 1. Information Architecture

### Routes & Static Pages
- **`/`**: Single scrolling landing page hosting all main anchored sections with sticky navigation and scroll spy.
- **`/case-studies/[slug]`**: Statically generated in-depth case study pages following the structured 9-step problem-solving framework.
- **`not-found.tsx`**: Clean, accessible 404 page styled with site tokens and clear return actions.
- **`robots.ts` & `sitemap.ts`**: Search engine discovery and dynamic XML sitemap generation based on static routes.
- **`opengraph-image.tsx`**: Dynamic Next.js Edge OG image adhering to the refined brand identity.

### Section Order & Navigation Anchors
1. **Hero** (`#hero`): Immediate 5-second value proposition, positioning title, intro, primary CTAs (Projects & Resume), socials, and subtle micro-accent.
2. **About & What I Bring** (`#about`): Multidisciplinary journey narrative + 8 core value pillars with Lucide iconography.
3. **Experience** (`#experience`): Dual-view architecture:
   - *Career Journey*: Vertical timeline mapping the progression (Education → Customer Operations → Outsourcing/Business → Cross-functional → Data Analytics → Future Leadership).
   - *Experience Cards*: Structured cards with roles, timeline, key contributions, and tech/business skills.
4. **Projects** (`#projects`): Filterable responsive cards (All / Analytics / Data Science / Technology / Business) with status badges, stack tags, and case study links.
5. **Case Studies** (`#case-studies`): Highlights and direct entries to `/case-studies/[slug]` proving rigorous analytical thinking.
6. **Skills** (`#skills`): Grouped taxonomies (Data & Analytics, Data Science, Programming, Databases, Cloud, Business Operations, Professional) distinguishing *Current* vs *Learning*.
7. **Currently Learning** (`#learning`): Visual multi-track milestone roadmap highlighting the active learning path.
8. **Education** (`#education`): Academic foundation, degree, branch, and coursework.
9. **Certifications & Achievements** (`#certifications`): Credential badges with verification links and documented recognitions.
10. **Technology & Business Solutions** (`#solutions`): Practical problem-solving capabilities structured for future consulting/agency offerings.
11. **Continuous Growth Philosophy** (`#philosophy`): Mindset, continuous learning, and human-centric technology perspective.
12. **Contact & Connect** (`#contact`): Accessible validated form (Zod + Server Action), honeypot anti-spam, direct email, LinkedIn, and GitHub.
13. **Footer**: Brand summary, quick navigation, social links, and copyright.

---

## 2. Design System & Design Tokens

### Color Tokens (shadcn/ui CSS Variables)
Strict adherence to WCAG AA contrast standards (>4.5:1 for body text, >3:1 for large text and UI components).

- **Light Mode**:
  - `--background`: `hsl(210 20% 98%)` (Clean off-white)
  - `--foreground`: `hsl(222 47% 11%)` (Deep charcoal slate, Contrast 14.2:1)
  - `--card`: `hsl(0 0% 100%)` / `--card-foreground`: `hsl(222 47% 11%)`
  - `--primary`: `hsl(221 83% 53%)` (Refined Royal Indigo) / `--primary-foreground`: `hsl(210 40% 98%)` (Contrast 6.5:1)
  - `--secondary`: `hsl(214 32% 91%)` / `--secondary-foreground`: `hsl(222 47% 11%)`
  - `--muted`: `hsl(210 40% 96%)` / `--muted-foreground`: `hsl(215 16% 47%)` (Contrast 4.8:1)
  - `--accent`: `hsl(210 40% 94%)` / `--accent-foreground`: `hsl(222 47% 11%)`
  - `--border`: `hsl(214 32% 90%)`
  - `--ring`: `hsl(221 83% 53%)`

- **Dark Mode (Designed Charcoal Slate)**:
  - `--background`: `hsl(222 47% 7%)` (Deep midnight slate)
  - `--foreground`: `hsl(210 40% 98%)` (Soft white, Contrast 15.1:1)
  - `--card`: `hsl(222 47% 10%)` / `--card-foreground`: `hsl(210 40% 98%)`
  - `--primary`: `hsl(217 91% 60%)` (Luminous refined azure) / `--primary-foreground`: `hsl(222 47% 7%)` (Contrast 8.2:1)
  - `--secondary`: `hsl(217 33% 17%)` / `--secondary-foreground`: `hsl(210 40% 98%)`
  - `--muted`: `hsl(217 33% 13%)` / `--muted-foreground`: `hsl(215 20% 65%)` (Contrast 5.5:1)
  - `--accent`: `hsl(217 33% 18%)` / `--accent-foreground`: `hsl(210 40% 98%)`
  - `--border`: `hsl(217 33% 18%)`
  - `--ring`: `hsl(217 91% 60%)`

---

## 3. Type Scale & Spacing Rhythm

### Typography
- **Primary Body & Headings**: `Geist Sans` (via `next/font/google` or `geist/font/sans`) with fallback to Inter/system sans.
- **Monospace / Metrics**: `Geist Mono` sparingly for badges, metrics, and code snippets.
- **Scale**:
  - Hero Heading: `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight`
  - Section Headings: `text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight`
  - Subheadings / Card Titles: `text-lg sm:text-xl font-medium`
  - Body Text: `text-base sm:text-lg leading-relaxed text-muted-foreground` (~65–75 characters per line)
  - Small / Badges: `text-xs sm:text-sm font-medium`

### Spacing Scale
- Max Container: `max-w-6xl` (1152px) or `max-w-7xl` (1280px) centered with `px-4 sm:px-6 lg:px-8`.
- Section Spacing: `py-16 sm:py-24 lg:py-28`.
- Grid Gaps: `gap-6 sm:gap-8 lg:gap-10`.

---

## 4. Component Tree (Server vs Client Breakdown)

```text
src/
├── app/
│   ├── layout.tsx                  (Server: Root metadata, JSON-LD, ThemeProvider)
│   ├── page.tsx                    (Server: Assembles all homepage sections)
│   ├── case-studies/[slug]/page.tsx(Server: generateStaticParams, 9-step case study viewer)
│   ├── actions/contact.ts          (Server Action: Zod schema verification & mail sender)
│   ├── opengraph-image.tsx         (Edge: Dynamic branded OG image)
│   ├── not-found.tsx               (Server: 404 handler)
│   ├── sitemap.ts                  (Server: Sitemap generator)
│   └── robots.ts                   (Server: Robots config)
├── components/
│   ├── layout/
│   │   ├── Container.tsx           (Server: Centered layout wrapper)
│   │   ├── Section.tsx             (Server: Semantic section with anchor ID)
│   │   ├── SectionHeading.tsx      (Server: Eyebrow, Title, Description)
│   │   └── Footer.tsx              (Server: Clean footer with brand & links)
│   ├── navigation/
│   │   ├── Navbar.tsx              (Client: Scroll listener, active section spy, glide pill)
│   │   ├── MobileNav.tsx           (Client: Sheet drawer, focus trap, escape key)
│   │   └── ThemeToggle.tsx         (Client: DropdownMenu, mounted state check)
│   ├── motion/
│   │   ├── AnimatedContainer.tsx   (Client: Lightweight Motion wrapper with reducedMotion check)
│   │   └── MotionProvider.tsx      (Client: LazyMotion configuration)
│   ├── sections/
│   │   ├── hero/Hero.tsx           (Server + subtle client accent)
│   │   ├── about/About.tsx         (Server: Narrative + What I Bring cards)
│   │   ├── experience/
│   │   │   ├── Experience.tsx      (Server: Dual tab or stacked timeline & cards)
│   │   │   ├── CareerJourney.tsx   (Server: Vertical progression timeline)
│   │   │   └── ExperienceCard.tsx  (Server: Role details and skills)
│   │   ├── projects/
│   │   │   ├── Projects.tsx        (Server)
│   │   │   └── ProjectList.tsx     (Client: Instant client-side category filter)
│   │   ├── case-studies/
│   │   │   └── CaseStudyList.tsx   (Server: Case study showcase cards)
│   │   ├── skills/
│   │   │   └── Skills.tsx          (Server: Categorized badges with Current/Learning status)
│   │   ├── learning/
│   │   │   └── LearningRoadmap.tsx (Server: Connected tracks visualizer)
│   │   ├── education/
│   │   │   └── Education.tsx       (Server: Academic cards)
│   │   ├── certifications/
│   │   │   └── Certifications.tsx  (Server: Verified credential cards)
│   │   ├── achievements/
│   │   │   └── Achievements.tsx    (Server: Honors and accomplishments)
│   │   ├── solutions/
│   │   │   └── Solutions.tsx       (Server: Business & technology capability matrix)
│   │   ├── philosophy/
│   │   │   └── Philosophy.tsx      (Server: Mindset callout)
│   │   └── contact/
│   │       ├── Contact.tsx         (Server: Contact info & form wrapper)
│   │       └── ContactForm.tsx     (Client: React Hook Form + Zod, pending state, aria-live)
│   └── ui/                         (shadcn/ui primitives: Button, Badge, Card, Sheet, etc.)
├── data/
│   ├── profile.ts                  (Positioning, identity, solutions, philosophy, SEO)
│   ├── experience.ts               (Timeline milestones & detailed experience records)
│   ├── projects.ts                 (Projects catalog)
│   ├── case-studies.ts             (Full 9-step case study records)
│   ├── skills.ts                   (Categorized skills)
│   ├── learning.ts                 (Roadmap data)
│   ├── education.ts                (Education records)
│   └── certifications.ts           (Certificates & achievements)
├── lib/
│   ├── utils.ts                    (Class merge cn helper)
│   ├── validations.ts              (Shared Zod contact schema)
│   ├── analytics.ts                (Privacy-preserving event tracker)
│   └── constants.ts                (Nav items, social keys, site metadata)
└── types/
    └── index.ts                    (Comprehensive TypeScript interfaces)
```

---

## 5. Responsive Strategy

- **Mobile (320px – 640px)**:
  - Sticky header with accessible hamburger drawer (Sheet component).
  - Single-column vertical timeline with continuous left rail.
  - Form inputs and action buttons with 44px+ touch targets and full-width CTA layout.
  - Zero horizontal overflow (`overflow-x-hidden` on wrappers).
- **Tablet (641px – 1024px)**:
  - 2-column grid for What I Bring, Projects, and Skills.
  - Side-by-side or stacked timeline cards with balanced padding.
- **Desktop (1024px+)**:
  - Full desktop navigation with active section glider and quick theme toggle.
  - 3-column project showcase and multi-column structured skill groupings.
  - Extended case study step progression layout.

---

## 6. Content Model & Type Definitions

Typed data architecture in `src/types/index.ts`:
- `ProjectStatus`: `'completed' | 'in-progress' | 'exploring'`
- `ProjectCategory`: `'analytics' | 'data-science' | 'technology' | 'business'`
- `SkillStatus`: `'current' | 'learning'`
- `CaseStudy`: Structured 9-step fields (`problem`, `context`, `data`, `approach`, `tools`, `analysis`, `insights`, `recommendations`, `outcome`).
- Strict adherence to non-negotiables: any unverified profile data remains visible as `[Add ...]` with `// TODO` in `src/data/`.
