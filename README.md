# ByteSpace

A production-quality marketing site for ByteSpace, built from a Figma design as
part of a frontend assessment.

**Live:** [https://bytespace-new-jade.vercel.app](https://bytespace-new-jade.vercel.app)

---

## Stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16 (App Router)                            |
| Language   | TypeScript (strict)                                |
| Styling    | Tailwind CSS v4                                    |
| Components | shadcn/ui primitives                               |
| Icons      | lucide-react                                       |
| Fonts      | Poppins (headings), Satoshi (body) via `next/font` |
| Deployment | Vercel                                             |

---

## Pages

| Route             | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| `/`               | Landing page — hero, partners, categories, courses, features, testimonials, CTA |
| `/login`          | Sign in (bonus)                                                                 |
| `/register`       | Create an account (bonus)                                                       |
| `/courses/[slug]` | Course detail with About / Lessons / Reviews tabs                               |
| `not-found`       | 404                                                                             |

---

## Getting started

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build



```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
  app/
    layout.tsx              # HTML shell, font variables
    not-found.tsx           # 404
    (marketing)/
      layout.tsx            # Navbar + Footer + <main>
      page.tsx              # Landing page
      courses/[slug]/       # Course detail
    (auth)/
      login/                # Sign in
      register/             # Sign up
  components/
    ui/                     # Reusable primitives (Button, Card, FormField…)
    layout/                 # Navbar, Footer — shared chrome
    sections/               # One file per landing section
  content/                  # Typed copy and data constants
  lib/                      # Utilities (cn)
  styles/                   # Design token definitions
public/
  images/                   # Exported Figma assets
  icons/                    # SVG icons
```

Three component layers: `ui/` are generic primitives, `layout/` is shared chrome,
`sections/` compose both. A section imports from `ui/` and `layout/`; a `ui/`
component never imports from `sections/`.

---

## Design system

All visual decisions live in `src/app/globals.css` as Tailwind v4 theme tokens.
Components reference tokens, never raw hex values.

**Type scale** — custom `--text-*` namespace matching the Figma style guide:

| Token             | Size | Line height | Weight |
| ----------------- | ---- | ----------- | ------ |
| `text-heading-l`  | 72px | 1.2         | 600    |
| `text-heading-m`  | 48px | 1.2         | 600    |
| `text-heading-s`  | 36px | 1.2         | 600    |
| `text-heading-xs` | 20px | 1.2         | 600    |
| `text-body-l`     | 18px | 1.6         | 400    |
| `text-body-m`     | 16px | 1.6         | 400    |
| `text-body-s`     | 14px | 1.6         | 400    |
| `text-body-xs`    | 12px | 1.6         | 400    |
| `text-label-l`    | 18px | 1.2         | 500    |
| `text-label-m`    | 16px | 1.2         | 500    |
| `text-label-s`    | 14px | 1.2         | 500    |
| `text-label-xs`   | 12px | 1.2         | 500    |

**Colors** — three 11-stop scales plus semantic tokens:

- `neutral` — 50 → 950
- `primary` — Electric Violet scale, 50 → 950
- `secondary` — Crimson scale (actually lime), 50 → 950

Semantic tokens (`bg-primary`, `text-foreground`, `border-border`) sit on top and
are preferred in components. Scale stops (`bg-primary-800`) are for accents and
hover states.

---

## Accessibility

- Semantic HTML throughout — `header`, `nav`, `main`, `section`, `footer`, `article`.
- One `<h1>` per page; heading levels descend in order.
- All interactive elements are keyboard reachable with visible focus rings.
- Disclosure elements (mobile menu) expose `aria-expanded` / `aria-controls`,
  close on Escape, and lock body scroll.
- Tabs follow the WAI-ARIA tabs pattern with arrow-key navigation.
- Form fields have associated labels, `aria-invalid` on error, and errors are
  announced via `aria-describedby`.
- Decorative images use empty `alt`; meaningful images have descriptive `alt`.
- Body text meets 4.5:1 contrast.

---

## Git workflow

- `main` is protected. All work happens on feature branches.
- Branches: `feat/*`, `fix/*`, `refactor/*`, `docs/*`.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/).
- Every branch is merged via a Pull Request with a written description.

```bash
git checkout -b feat/section-name
# ... work ...
git push -u origin feat/section-name
# open PR → merge into main
```

## Assumptions & known limitations

- The Figma file provides a desktop design. Mobile and tablet behaviour is
  inferred; breakpoints follow Tailwind defaults (`sm:640`, `md:768`, `lg:1024`).
- Pagination on the courses section is visual only — no data layer exists.
- Forms validate client-side and prevent submission. No backend integration.
- The course detail route renders a single hardcoded course
  (`build-digital-asset`). Other course cards link to it as a demonstration of
  the pattern; a real implementation would fetch by slug.
- Reviews tab filters are visual only.
- The newsletter submit button reads "Search" in the Figma file. This is a copy
  bug in the design; the text is shipped verbatim pending confirmation.

---

## Author

**Md Rabiul Hasan**
Assessment submission — Jr. Software Engineer (Frontend)
