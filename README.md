# Subhiksha Paulraj — Portfolio

A single-page portfolio built with React + TypeScript + Tailwind CSS + Framer Motion + lucide-react — personalized from an original "3D Creator" template into a Data Science / AI-ML Engineer portfolio.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Sections

- **Hero** — intro with a magnetic-hover portrait (your real photo, masked into a soft radial fade) and a bottom bar with tagline + contact CTA.
- **Marquee** — two rows of real tool/skill tiles (Python, FastAPI, React, Docker, n8n, Claude API, Scikit-learn, Tableau, etc.) that drift based on scroll position.
- **About** — your real bio (Tamil Nadu → physics → the pivot to data science → soccer), revealed character-by-character as you scroll, with four corner accents (Atom, Rocket, BrainCircuit, Trophy) tying back to physics/AI/athletics.
- **Skills** — five real skill clusters: Machine Learning, AI & Agent Engineering, Full-Stack Development, Data Analytics, Physics & Research.
- **Experience** *(new section, not in the original template)* — all six roles from your resume: Wayfair X Extern, Cloudaspirers, Flyersoft, Resident Assistant, Women's Soccer Club, and your Physics Dept research role, each with status badge, date, and top achievement.
- **Projects** — your real four: GrubLens, Im4imagine! (linked to im4imagine.com — the only project with a confirmed live URL), Defect Classification, and Particle Classification. Same sticky-stacking scroll effect as the original template.
- **Contact** *(new section)* — real email, LinkedIn, GitHub, and phone, plus a working `#contact` anchor (the nav link pointed nowhere in the original template — fixed here).

## About the imagery

Your hero portrait is your real photo (`src/assets/portrait.png`), masked with a soft radial fade instead of a hard rectangular crop. Every other visual — the 21 marquee tiles, the 4 about-section accents, and the 8 project images — is the same original `PlaceholderTile` component from the base template: a gradient (drawn from the site's palette) with a relevant Lucide icon, now labeled/chosen to match each real skill or project's actual domain (e.g. a telescope icon for the physics project, a bug icon for the defect-classification project) rather than being decorative.

To swap in real project screenshots, replace the relevant `<PlaceholderTile ... />` in `src/sections/ProjectsSection.tsx` with an `<img>` tag.

## Structure

```
src/
  assets/
    portrait.png              your real photo
  components/
    FadeIn.tsx                 scroll/mount fade-in wrapper
    Magnet.tsx                  cursor-following magnetic hover (window-level tracking)
    AnimatedText.tsx              character-by-character scroll reveal
    ContactButton.tsx               gradient pill CTA
    LiveProjectButton.tsx            outline pill CTA
    PlaceholderTile.tsx               gradient+icon(+label) tile
  sections/
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx        → "Skills"
    ExperienceSection.tsx      → new
    ProjectsSection.tsx
    ContactSection.tsx         → new
  App.tsx
  main.tsx
  index.css
```

## Notes

- Every number, date, and fact (90% accuracy, 91% ROC-AUC, 40+ residents, 10,000+ data points, etc.) is pulled directly from your resume — nothing invented.
- `npm run lint` (oxlint) and `npm run build` both pass clean with zero warnings.
- Font is **Kanit**; background `#0C0C0C`; text/border accent `#D7E2EA`; gradient family shared by both CTA buttons.
