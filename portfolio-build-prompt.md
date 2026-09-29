# Build a Professional Personal Portfolio (Next.js + shadcn/ui)

## Role and goal

You are a senior frontend engineer, UI/UX designer, and technical architect. Build a production-ready personal portfolio website for an engineering graduate with cross-functional experience across technology, business operations, customer support, outsourcing, and data analytics, plus some HR exposure.

She is currently building expertise in data analytics while keeping long-term paths open toward data science, production engineering/SRE, technology consulting, product/technology leadership, and eventually her own software/technology solutions agency.

## North star

Without ever saying it outright, the site should leave visitors with this impression: *an engineering-trained professional who understands people, business operations, and technology, is developing strong analytical capabilities, and can grow into increasingly complex technology and leadership roles.*

- Her identity is **Technology • Data • Business • Problem Solving**, not a single job title. Don't lock her into "Data Analyst". She is keeping several paths open, so the site should open doors rather than narrow them.
- The site should communicate professionalism, intelligence, technical capability, business understanding, a growth mindset, and ambition.
- It should feel like a serious professional's personal brand, not a template, a generic developer portfolio, or a design experiment.

**When requirements conflict, prioritize:** Professionalism > Clarity > Credibility > UX > Performance > Animation.
Use animation only where it improves the experience, and technology only where it adds real value.

## Non-negotiables

1. **Never invent facts.** Use only the information in *Profile data*. You may polish provided text into better prose, but never add new facts: no invented companies, job titles, dates, years of experience, metrics, outcomes, clients, revenue, certifications, achievements, technologies, or testimonials. Recruiters verify claims, and one fabricated detail undermines the whole site.
2. **Missing information becomes a visible placeholder**, such as `[Add graduation year]`, with a `// TODO` comment on the data entry. Two exceptions: omit any link button whose URL is missing (no dead links), and use a neutral, non-photographic fallback for missing images.
3. **Represent skills honestly.** Show only skills listed as `current` or `learning`, labeled that way. No percentages, bars, stars, or other self-ratings, because they aren't credible.
4. **Never present future work as done.** Projects with status `exploring` show planned scope only: no outcomes and no case study.
5. **Keep secrets out of code.** Use environment variables, and never expose sensitive values to the client.
6. **Accessible by default:** WCAG AA contrast, full keyboard support, semantic HTML, and reduced-motion support.

## Profile data

This is the single source of truth for all site content. Fill it in before running; anything left as `TODO` becomes a visible placeholder. Mirror it into typed files in `src/data/`.

```yaml
# ── Identity and links ─────────────────────────────────────
name: TODO
location: TODO                # City, Country
email: TODO
linkedin: TODO                # full URL
github: TODO                  # full URL
site_url: TODO                # production URL, used for canonical URLs, sitemap, Open Graph
resume: /resume.pdf           # put the PDF at public/resume.pdf

# ── Positioning and copy (wording may be polished; no new claims) ──
positioning:
  title: Technology & Business Professional
  tagline: Data Analytics • Operations • Technology Solutions
  intro: >-
    Engineering graduate with cross-functional experience across customer operations,
    outsourcing and business functions, currently building expertise in data analytics
    and technology-driven problem solving.

what_i_bring: [Technical Foundation, Business Understanding, Customer Perspective,
  Analytical Thinking, Communication, Problem Solving, Adaptability, Continuous Learning]

solutions:                    # keep only areas she can genuinely help with today
  heading: Technology & Business Solutions
  intro: Exploring how technology, analytics and automation can solve practical business problems.
  areas: [Business Analytics, Data Dashboards, Reporting Automation, Process Analysis,
    Data-driven Decision Making, Business Process Improvement, Technology Solutions]

philosophy:
  heading: Built for Continuous Growth
  body: >-
    My career is driven by curiosity, continuous learning and the desire to solve
    increasingly complex problems. I believe strong technology solutions require both
    technical understanding and a clear understanding of the people and businesses they serve.

contact:
  heading: Let's Connect
  body: >-
    Whether you're looking to discuss a project, technology, analytics, collaboration
    or an opportunity, I'd be happy to connect.

seo:
  title: "{name} — Technology & Business Professional"
  description: >-
    Engineering graduate focused on data analytics, technology and business problem
    solving, with cross-functional experience across operations and customer-facing functions.

# ── Education ──────────────────────────────────────────────
education:
  - degree: TODO              # e.g., B.Tech / B.E.
    branch: TODO
    institution: TODO
    graduation_year: TODO
    coursework: []            # optional; keep it short

# ── Experience (most recent first; copy the block for each role) ──
experience:
  - role: TODO
    company: TODO
    location: TODO
    start: TODO               # e.g., Jan 2023
    end: TODO                 # or Present
    responsibilities: []
    achievements: []          # real results only; numbers only if accurate
    skills: []

# ── Skills ─────────────────────────────────────────────────
# Move each skill she genuinely has into `current` or `learning`.
# Anything left in `unverified` is never shown on the site.
skills:
  data_analytics:
    current: []
    learning: []
    unverified: [Excel, SQL, Python, Pandas, NumPy, Data Cleaning, Exploratory Data Analysis,
      Data Visualization, Statistics, Data Storytelling, Power BI, Tableau]
  data_science:
    current: []
    learning: []
    unverified: [Python, Pandas, NumPy, Statistics, Machine Learning, scikit-learn,
      Feature Engineering, Model Evaluation, Predictive Analytics]
  programming_software:
    current: []
    learning: []
    unverified: [Python, JavaScript, TypeScript, HTML, CSS, REST APIs, Git, GitHub]
  databases:
    current: []
    learning: []
    unverified: [SQL, MySQL, PostgreSQL, MongoDB]
  cloud_infrastructure:       # no production-expertise claims without real experience
    current: []
    learning: []
    unverified: [AWS, Azure, Google Cloud, Linux, Docker, CI/CD, Kubernetes, Monitoring]
  business_operations:        # delete any that don't apply
    [Customer Operations, Outsourcing, Process Management, Client Communication,
     Stakeholder Coordination, Documentation, Problem Solving, Process Improvement]
  professional:               # delete any that don't apply
    [Communication, Leadership, Analytical Thinking, Team Collaboration, Ownership,
     Adaptability, Continuous Learning, Strategic Thinking]

# ── Learning roadmap (no progress percentages) ─────────────
learning_roadmap:
  - track: Now — Data Analytics
    steps: [SQL, Python, Statistics, Power BI]
  - track: Next
    steps: [Machine Learning, Data Science]
  - track: Technology
    steps: [APIs, Databases, Cloud, Software Systems]
  - track: Long term
    steps: [Production Engineering, Technology Consulting, Technology Solutions]

# ── Projects ───────────────────────────────────────────────
# status: completed | in-progress | exploring
# Optional per project: summary, problem, solution, outcomes, github, demo, image, case_study
# case_study fields: problem, context, data, approach, tools, analysis, insights, recommendations, outcome
projects:
  - title: E-Commerce Analytics
    category: analytics
    status: TODO
    stack: [Python, Pandas, SQL, Power BI]
    focus: [Revenue, Orders, Customer behavior, Product performance, Customer segmentation,
      Monthly trends, Retention]
  - title: Customer Support Analytics      # ties analytics to her customer-support background
    category: analytics
    status: TODO
    stack: [Python, SQL, Power BI]
    focus: [Ticket volume, Response time, Resolution time, SLA, Customer satisfaction,
      Agent performance]
  - title: HR Analytics
    category: analytics
    status: TODO
    stack: TODO
    focus: [Attrition, Hiring, Employee demographics, Tenure, Salary, Recruitment funnel,
      Department trends]
  - title: Business Operations Dashboard
    category: business
    status: TODO
    stack: TODO
    focus: [Productivity, Cost, Revenue, SLA, Customer satisfaction, Operational efficiency]
  - title: Customer Churn Prediction       # future data-science direction; not built yet
    category: data-science
    status: exploring
    stack: [Python, Pandas, NumPy, scikit-learn, Matplotlib / Seaborn, SQL]

# ── Certifications and achievements (genuine only) ─────────
certifications: []            # each: name, provider, year, credential_id, url
achievements: []              # each: title, context, year (hackathons, awards, leadership, ...)
```

## Tech stack

- Next.js (latest stable, App Router), React, TypeScript (strict)
- Tailwind CSS, shadcn/ui, Lucide icons
- Motion for animation (the `motion` package, formerly Framer Motion; import from `motion/react`)
- next-themes for Light / Dark / System
- ESLint and Prettier
- Contact form: one shared validation schema (e.g., Zod) and a Server Action that sends through an email provider configured with environment variables (e.g., Resend)

Scaffold with the official CLIs (`create-next-app@latest`, `shadcn@latest init`) and follow the conventions of the versions they install. If your training data conflicts with the installed versions, trust the installed versions and their docs. Add other dependencies only when they clearly earn their place, and list each one with its reason in the final report.

## Design system

### Visual direction

Minimal, elegant, premium, and content-first. Quality should come from typography, spacing, layout, visual hierarchy, micro-interactions, and strong project presentation, not decoration. Let one element carry the visual identity (for example, the hero typography or the Career Journey timeline) and keep everything around it quiet. Use whitespace generously. Every element needs a reason to exist, and structure should encode information, so use numbering only for real sequences such as the timeline and case-study steps. Allowed accents: thin borders, soft shadows, small badges, fine dividers, small accent lines, minimal data-viz touches, Lucide icons, and at most one very subtle background pattern.

**Avoid** these, because they read as template developer portfolios and pull attention from the content: neon or saturated colors (neon green or pink, heavy purple, red-heavy UI, cartoonish palettes), decorative or random gradients, glassmorphism, glows, 3D objects, particle backgrounds, hacker/terminal themes, dashboard clutter, oversized typography, and template tells such as an all-caps label above every heading, one highlighted word in every headline, or the same card treatment for every kind of content.

### Color

- Implement semantic tokens with shadcn's CSS variables (`--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border`, `--ring`, …). Components use tokens only, never hard-coded colors, so backgrounds, cards, borders, text, and buttons all change together with the theme.
- **Light:** off-white background, near-black text, deep blue/indigo primary, muted slate secondary, restrained blue accent, subtle gray borders.
- **Dark** (designed, not inverted): deep charcoal/slate background, soft white text, refined blue/indigo primary tuned for dark surfaces, muted slate secondary, subtle dark-gray borders.
- Both themes meet WCAG AA: at least 4.5:1 for body text, and 3:1 for large text, icons, and UI boundaries.

### Typography

- Geist Sans (or Inter) via `next/font`; Geist Mono only where appropriate, and sparingly.
- Strong but controlled hierarchy: a hero heading of about `text-4xl` on mobile and at most `text-6xl` on desktop; section headings from `text-2xl` to `text-4xl`; body text at 16–18px with about 1.6 line height and lines of roughly 65–75 characters.

### Layout

- A centered container with a max-width of 1200–1280px, 16–20px horizontal padding on mobile, and more on larger screens.
- One spacing scale and one section rhythm used everywhere, so the site reads as a single cohesive product.

### Theme

- next-themes with the class strategy. Options: Light, Dark, System. Default: Light. The choice persists.
- Prevent hydration mismatches: add `suppressHydrationWarning` to `<html>`, and render the toggle's theme-dependent icon only after mount.
- The toggle is a shadcn DropdownMenu (Light / Dark / System) with an accessible label and a smooth icon transition between sun, moon, and monitor. Disable global CSS transitions during the switch to avoid a color flash.

### Motion

The principle: **alive, not animated.** Motion supports hierarchy, feedback, navigation, and storytelling; it is never the content. Use durations of 150–400ms with ease-out.

- Page entrance: opacity 0 → 1, y 10 → 0.
- Sections reveal once as they enter the viewport; list and timeline items may stagger slightly.
- Cards on hover: lift 2–4px, with a subtle border-color change and a slightly deeper shadow.
- Buttons: scale to at most 1.02, with a small icon nudge (for example, an arrow shifting 2px).
- Nav: an active-section indicator that glides between items.
- Project cards on hover: a subtle image zoom (at most 1.03) or content shift.
- Never use bounces, large scaling, spinning, looping or constant animation, or long dramatic transitions.
- Respect `prefers-reduced-motion` (for example, `<MotionConfig reducedMotion="user">` plus a CSS media query) so content appears without movement.
- Use CSS transitions for simple hovers, and reserve Motion for entrance, reveal, and layout animations.

## Voice and copy

- Site copy is first person, mature, specific, and confident.
- Frame her path as a deliberate multidisciplinary journey combining engineering, business operations, customer understanding, and technology, never as indecision.
- Use action-oriented bullets. Write "Coordinated customer issues across internal teams to improve resolution efficiency," not "Handled customers." Include numbers only when *Profile data* provides them.
- UI text is plain and specific: buttons say exactly what happens ("Send message"), and error messages say what went wrong and how to fix it.
- Never use labels like "Future Data Scientist," "Aspiring CEO," "10x Engineer," "Tech Ninja," or "Data Science Enthusiast."
- Avoid famous quotes, clichés, and keyword stuffing.

## Site structure

**Routes:** `/` is a single scrolling page with anchored sections. Each case study gets its own statically generated page at `/case-studies/[slug]`. Add a simple custom 404 page.

**Navigation** (sticky and compact, about 56–64px tall)

- Links: Home, About, Experience, Projects, Case Studies, Skills, Learning, Contact. On case-study pages, they point back to the home anchors (for example `/#projects`).
- Right side: a Resume button, LinkedIn and GitHub icon buttons with aria-labels, and the theme toggle.
- On scroll, the bar gains a subtle background, border, or shadow.
- An active-section indicator, driven by IntersectionObserver, with an underline that glides between items.
- Below about 1024px, or wherever the links would crowd, a hamburger opens a shadcn Sheet. It animates smoothly, traps focus, closes on Escape, and closes when a link is clicked.

**Home page sections, in order**

1. **Hero:** A visitor should know who she is within 5 seconds. Show her name, `positioning.title` as the primary line, `positioning.tagline`, and `positioning.intro`. The primary CTAs are "View Projects" (→ `#projects`) and "Download Resume"; secondary links go to LinkedIn and GitHub. Add exactly one extremely subtle visual accent: an animated gradient line, a small data-viz sparkline, a faint grid, or a minimal geometric pattern.
2. **About:** A concise, confident introduction covering her engineering foundation, cross-functional experience, technology exposure, business understanding, data analytics journey, growth mindset, and long-term technology ambitions, framed as one multidisciplinary journey. Follow it with **What I Bring**: the eight items from `what_i_bring`, each with an icon, a title, and one line of text.
3. **Experience:** Two views of the same data.
   - *Career Journey:* a compact vertical timeline following the arc Engineering Education → Customer Operations → Outsourcing / Business Functions → Cross-functional Experience → Data Analytics (current focus) → Technology & Data → Future Technology Leadership. Map her real education and roles onto it, adapting the labels to her actual history. Past stages show role, organization, duration, skills developed, and one highlight. Future stages are styled as direction ("Next") and contain no details.
   - *Experience cards:* position, company, location, duration, responsibilities, achievements, and relevant skills.
4. **Projects:** Reusable ProjectCards showing the title, a short description, a status badge (Completed / In Progress / Exploring), stack badges, and links (GitHub, Live Demo, Case Study) that appear only when they exist. Keep cards scannable: at most one line each for the business problem, solution, and key outcome, with the full story in the case study. If a status is missing, show `[Set status]` and treat the project as `exploring` until it's set. With five or more projects, add filter buttons (All / Analytics / Data Science / Technology / Business) that filter instantly on the client and hide empty categories.
5. **Case Studies:** Summary cards linking to `/case-studies/[slug]` for each `completed` or `in-progress` project. Every case-study page follows this sequence: Problem → Context → Data → Approach → Tools → Analysis → Insights → Recommendations → Outcome. This section exists to prove problem-solving ability, so emphasize reasoning and decisions over tool lists. Missing steps show placeholders.
6. **Skills:** Groups for Data & Analytics, Data Science, Programming & Software, Databases, Cloud & Infrastructure, Business & Operations, and Professional. Distinguish Current from Learning with badge styles and a small legend, and hide empty groups.
7. **Currently Learning:** A visual roadmap built from `learning_roadmap`, with each track shown as a row of connected steps and the current track highlighted. No progress percentages.
8. **Education:** Degree, branch, institution, graduation year, and optional coursework, kept compact.
9. **Certifications:** Cards showing the name, provider, year, and credential ID, plus a "Verify" link when a URL exists.
10. **Achievements:** Concise cards for genuine achievements only.
11. **Technology & Business Solutions:** The heading, intro, and areas from `solutions`. Present these as areas she works in and is growing toward, not as a service menu, so no pricing, guarantees, or client claims. Structure the data so it can later expand into a consulting or agency offering.
12. **Built for Continuous Growth:** The short `philosophy` text, without any famous quotes.
13. **Contact:** The heading and body from `contact`, links for email, LinkedIn, and GitHub, and the contact form described under *Engineering requirements*.
14. **Footer:** Her name, `positioning.title` and `positioning.tagline`, links to LinkedIn, GitHub, and email, and a copyright line with the current year. A theme toggle is optional.

## Architecture

Aim for clean, maintainable, scalable code that a developer can update without friction.

```text
src/
├── app/
│   ├── layout.tsx                  # fonts, ThemeProvider, root metadata, JSON-LD
│   ├── page.tsx                    # home: every section, in order
│   ├── case-studies/[slug]/page.tsx
│   ├── actions/contact.ts          # contact-form Server Action
│   ├── opengraph-image.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css                 # design tokens for light and dark
├── components/
│   ├── layout/                     # Container, Section, SectionHeading, Footer
│   ├── navigation/                 # Navbar, MobileNav, ThemeToggle
│   ├── motion/                     # AnimatedContainer (entrance/reveal wrapper)
│   ├── <one folder per section>/   # hero/, about/, experience/, projects/, case-studies/, skills/, …
│   └── ui/                         # shadcn/ui primitives
├── data/                           # all content, typed; mirrors Profile data
│   ├── profile.ts                  # identity, links, positioning, section copy, SEO
│   ├── experience.ts  education.ts  projects.ts  case-studies.ts
│   └── skills.ts  learning.ts  certifications.ts  achievements.ts
├── lib/                            # utils.ts, constants.ts (nav, site config), analytics.ts, validations.ts
└── types/index.ts
```

- Content lives only in `src/data`. Components receive data through props and never hard-code copy (UI labels excepted), so updating projects, experience, skills, certifications, education, or links never requires editing component code. Use typed data files only, with no CMS.
- Build reusable components: Container, Section, SectionHeading, AnimatedContainer, ProjectCard, CaseStudyCard, ExperienceCard, TimelineItem, SkillGroup, CertificationCard, SocialLink, and ThemeToggle. Use shadcn/ui primitives (Button, Badge, Card, Sheet, DropdownMenu, Input, Textarea, Label, Separator) where they improve consistency, and avoid duplicated markup.
- Start from these core types:

```ts
type ProjectStatus = "completed" | "in-progress" | "exploring";
type ProjectCategory = "analytics" | "data-science" | "technology" | "business";
type SkillStatus = "current" | "learning";

interface CaseStudy {
  projectSlug: string;
  problem: string;
  context: string;
  data: string;
  approach: string;
  tools: string[];
  analysis: string;
  insights: string[];
  recommendations: string[];
  outcome: string;
}
```

## Engineering requirements

**Rendering and performance**

- Use Server Components by default. Add `"use client"` only to small interactive pieces: the theme toggle, navbar scroll state and scroll spy, mobile menu, motion wrappers, project filter, and contact form.
- Statically generate every page, using `generateStaticParams` for case studies.
- Load fonts with `next/font` and images with `next/image` (with explicit dimensions and `sizes`), lazy-load non-critical content, and prevent layout shift.
- Keep client JavaScript minimal, and consider `LazyMotion` to shrink the animation bundle.
- Target 95+ in Lighthouse Performance, Accessibility, Best Practices, and SEO on both mobile and desktop.

**Contact form**

- Fields: Name, Email, Subject, and Message. Validate on both client and server with one shared schema covering required fields, email format, and sensible length limits.
- Submit through a Server Action that sends email via a provider configured with environment variables (for example `RESEND_API_KEY` and `CONTACT_TO_EMAIL`). If the provider isn't configured, fail gracefully and show the error state.
- Handle three states: submitting (button disabled, with a spinner), success (a confirmation message and a reset form), and error (a clear message, preserved input, and a way to retry). Announce status changes with `aria-live`.
- For anti-spam, add a honeypot field. Treat all input as untrusted: validate and sanitize it on the server, and send it as plain text.
- The same principle applies to every interactive feature: always show clear loading, success, and error states so no one wonders whether an action worked.

**SEO**

- Root metadata: a title template whose default comes from `seo.title`, a description from `seo.description`, `metadataBase` from `NEXT_PUBLIC_SITE_URL`, canonical URLs, Open Graph and Twitter/X cards, and an OG image generated in the site's style with `app/opengraph-image.tsx`.
- Give case-study pages their own metadata via `generateMetadata`.
- Add `app/sitemap.ts`, `app/robots.ts`, and JSON-LD `Person` structured data (name, jobTitle, url, sameAs for LinkedIn and GitHub, alumniOf).
- Write naturally, with no keyword stuffing.

**Accessibility**

- Use semantic landmarks, one `h1` per page, a logical heading order, and a skip-to-content link.
- Make everything keyboard operable, with visible focus rings based on the `--ring` token.
- Use real `<button>` and `<a>` elements, never clickable `<div>`s. Give icon-only controls an `aria-label`, meaningful images descriptive alt text, and decorative images empty alt text.
- Give every form field a label, and connect error messages to their fields with `aria-describedby`.

**Responsive design**

- Build mobile-first and verify at 320, 375, 390, 414, 768, 1024, 1280, 1440, and 1920px.
- Design the mobile layout instead of compressing the desktop one: a single-column timeline with a left rail, stacked cards, full-width primary buttons where they help, and readable type. Wide content such as tables scrolls inside its own container, and the page itself never scrolls horizontally. Touch targets are at least 44px.

**Analytics-ready**

- `lib/analytics.ts` exports `track(event, props?)`, which does nothing until a privacy-friendly provider (such as Plausible, Umami, or Vercel Analytics) is connected.
- Track only `resume_download`, `project_click`, `contact_submit`, and `external_profile_click`, and never include personal data in event properties.

**Code quality**

- Use strict TypeScript, with no `any` unless a comment justifies it. ESLint and Prettier must be configured and passing, with no console errors or hydration warnings.
- Provide a `.env.example` that documents every environment variable. Never give anything sensitive a `NEXT_PUBLIC_` prefix.

## Workflow

**Step 0: Plan before coding.** Output a concise plan covering:

1. Information architecture: routes, section order, and nav anchors
2. Design tokens for both themes, with contrast ratios checked
3. The type scale and spacing scale
4. The component tree, with each component marked as server or client
5. The responsive approach for each section
6. The content model: types and data files

If you can write files, save the plan as `docs/PLAN.md`. **Then stop and wait for my confirmation before writing code.**

**Then build in this order.** After each phase, if you can run commands, run lint, typecheck, and a production build, and fix every error before moving on. If your environment can take screenshots, review each phase visually at mobile and desktop widths.

1. Scaffold: Next.js, TypeScript, Tailwind, shadcn/ui, Prettier, next-themes, Motion, and Lucide
2. Design system: tokens, fonts, spacing, ThemeProvider, ThemeToggle, Container, Section, and SectionHeading
3. Responsive navigation
4. Hero and About
5. Experience: Career Journey and experience cards
6. Projects (with filter) and Case Studies (the section and its pages)
7. Skills, Education, Certifications, and Achievements
8. Currently Learning, Technology & Business Solutions, and Built for Continuous Growth
9. Contact (form and Server Action) and Footer
10. Motion pass
11. SEO
12. Performance and accessibility pass
13. Responsive QA at every listed width
14. Final UI polish

## Definition of done

Check every item before reporting completion.

**Design**

- [ ] Looks professional and credible to both recruiters and potential clients
- [ ] Clear visual hierarchy, professional colors, balanced whitespace, and one cohesive feel throughout

**UX**

- [ ] A visitor understands who she is within 5 seconds
- [ ] The resume is one click away from both the hero and the nav
- [ ] Projects and contact options are easy to find
- [ ] Mobile navigation works with both touch and keyboard

**Technical**

- [ ] No TypeScript errors or unnecessary `any`, and lint and build pass
- [ ] No console errors, hydration warnings, or broken links
- [ ] No accessibility violations (check with axe or Lighthouse if available)
- [ ] No unnecessary dependencies, duplicated components, or hardcoded secrets
- [ ] Lighthouse targets met, SEO complete, and layouts correct at every listed width
- [ ] No invented content anywhere

**Final report** (also summarized in `README.md`)

1. What was built, and how to run and deploy it
2. Required environment variables
3. A content-editing guide mapping each data file to the section it controls
4. A placeholder checklist listing every remaining `[Add …]` and `TODO` with its file path, including the resume PDF if it's missing
5. Verification results for lint, typecheck, build, Lighthouse, accessibility, and breakpoints
6. Any deviations from this spec and any added dependencies, each with its reason
