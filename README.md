# Professional Personal Portfolio

A production-ready personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Lucide Icons**, and **Motion**.

Engineered for an engineering graduate with cross-functional experience across technology, business operations, customer support, and data analytics.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Validation
```bash
npm run build
npm start
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and set your values:

```env
# Canonical public website URL (used for sitemap, robots, and OpenGraph)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Contact Form Email Delivery (Optional - Resend API)
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your_email@example.com
```

*Note: In development or if `RESEND_API_KEY` is not provided, the contact form simulates delivery gracefully.*

---

## 📁 Content Editing Guide

All site content is 100% data-driven and strictly separated from UI logic. Edit the files in `src/data/` to customize your portfolio:

| Data File | Section Controlled | Description |
| :--- | :--- | :--- |
| [`src/data/profile.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/profile.ts) | Hero, About, SEO, Contact, Footer | Name, links, positioning statements, "What I Bring" items, solutions, and philosophy |
| [`src/data/experience.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/experience.ts) | Experience | Career progression timeline milestones and role cards |
| [`src/data/projects.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/projects.ts) | Projects | Projects catalog, tags, problem/solution summaries, and links |
| [`src/data/case-studies.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/case-studies.ts) | Case Studies | Structured 9-step deep-dive case studies (`/case-studies/[slug]`) |
| [`src/data/skills.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/skills.ts) | Skills | Categorized capabilities (Data & Analytics, Programming, Databases, Cloud, Ops) |
| [`src/data/learning.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/learning.ts) | Currently Learning | Multi-track growth roadmap and milestones |
| [`src/data/education.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/education.ts) | Education | Degrees, institutions, graduation dates, and coursework |
| [`src/data/certifications.ts`](file:///c:/Users/Sidharth/Desktop/sakshii/src/data/certifications.ts) | Certifications & Achievements | Professional certificates, verification links, and recognitions |
| `public/resume.pdf` | Resume Download | Place your actual resume PDF here |

---

## 📝 Placeholder Checklist (TODOs)

Per the project specification, unverified items are displayed as clean placeholders (`[Add ...]`). Here is where to update them:

- [ ] `src/data/profile.ts`: Replace `name`, `location`, `email`, `linkedin`, `github`, and `site_url`.
- [ ] `src/data/education.ts`: Replace `degree`, `branch`, `institution`, and `graduation_year`.
- [ ] `src/data/experience.ts`: Replace `role`, `company`, `location`, `start`, and `end` with your actual work details.
- [ ] `src/data/certifications.ts`: Update certificate names, providers, years, and verification URLs.
- [ ] `public/resume.pdf`: Replace the placeholder PDF with your actual resume PDF.

---

## 🛡️ Architecture & Technical Highlights

1. **Information Architecture**:
   - Single scrolling homepage with sticky navigation and active section scroll-spy.
   - Statically generated 9-step case study pages at `/case-studies/[slug]` (`generateStaticParams`).
   - Dynamic OpenGraph image generation via Next.js Edge (`app/opengraph-image.tsx`).
   - Automated XML `sitemap.xml` and `robots.txt`.

2. **Design System & Contrast (WCAG AA)**:
   - Cohesive light and dark modes with curated HSL color tokens.
   - Contrast ratio > 4.5:1 for body copy and > 3:1 for large typography and controls.
   - Smooth theme toggle with next-themes and zero flash of unstyled content (`suppressHydrationWarning`).

3. **Motion & Accessibility**:
   - Micro-animations via `motion/react` with full `prefers-reduced-motion` compliance.
   - Accessible keyboard focus rings, semantic landmark tags, and skip-to-content links.
   - Client and server-side Zod validation with honeypot spam protection and `aria-live` status announcements.

---

## ✅ Verification & Build Results

- **TypeScript Compilation**: `tsc --noEmit` passed with 0 errors.
- **Production Build**: `next build` static export succeeded with 0 errors.
- **Static Routes Generated**: 9 static pages pre-rendered (`/`, `/case-studies/*`, `/robots.txt`, `/sitemap.xml`).
