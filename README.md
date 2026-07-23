# Muraqabah Initiative Website

The complete rebuilt website for muraqabah.ca. React, TypeScript, Vite, Tailwind CSS, React Router, GSAP, and one lazy-loaded React Three Fiber hero element, deployed as a static site to GitHub Pages behind the custom domain www.muraqabah.ca.

## Quick start

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

Node 20 or newer is recommended.

## Deploying to GitHub Pages

The site can be served from two places, and the build handles both.

| Where | Command | Notes |
| --- | --- | --- |
| https://officialrevmedia.github.io/miwebsite/ | `npm run build` | Current setup. Assets and routes are built for the `/miwebsite/` subfolder. |
| https://www.muraqabah.ca/ | `npm run build:domain` | Builds for the domain root and writes the CNAME file. |

### First deploy

1. Push this folder to the `main` branch of `officialrevmedia/miwebsite`.
2. Repository settings, Pages, set Source to "GitHub Actions".
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

### Switching to www.muraqabah.ca

No code changes are needed. In the repository, go to Settings, then Secrets and variables, then Actions, then the Variables tab, and add:

```
Name:  VITE_BASE
Value: /
```

Push anything (or run the workflow manually) and the next deploy will be built for the domain root, including the CNAME file. Then set the custom domain in Settings, Pages, point the DNS `www` record at GitHub Pages, and turn on Enforce HTTPS.

To go back to the project URL, delete the `VITE_BASE` variable.

### Why the base path matters

GitHub project sites live in a subfolder, so a build made for a domain root loads its JavaScript from the wrong address and the page stays blank. The `base` option in `vite.config.ts` (driven by `VITE_BASE`) sets the asset paths, the React Router basename, and the generated `404.html` together, so all three always agree.

### How deep links work on Pages

GitHub Pages does not know about client-side routes. `dist/404.html` is generated at build time with the correct base path, catches every unknown URL, and hands the path back to the app, which restores the address before rendering. Old URLs from the previous site (`/blog/...`, `/scholars/...`, `/academics`, `/donations`, `/campaigns/ramadan-2026`) redirect to their new homes.

## Where everything lives

| What | Where |
| --- | --- |
| All external links (Zeffy, WhatsApp, socials, email) | `src/data/links.ts` |
| Teachers (bios, portraits, formation) | `src/data/teachers.ts` |
| Programs (status, schedules, CTAs, Gardens themes) | `src/data/programs.ts` |
| Impact figures (Ramadan 2026, Year One, Qurbani 2026) | `src/data/impact.ts` |
| Articles (Research & Reflections) | `src/data/articles.ts` |
| Videos (featured and supporting) | `src/data/videos.ts` |
| Curated social posts | `src/data/social.ts` |
| Design tokens (colours, fonts, spacing) | `tailwind.config.js` and `src/styles/index.css` |
| Page components | `src/pages/` |
| Impact report PDF | `public/reports/2026-ramadan-impact-report.pdf` |
| Deploy base path switch | `vite.config.ts` and the `VITE_BASE` repository variable |

## Common edits

**Change a Zeffy or social link.** Edit `src/data/links.ts`. Nothing else needs to change.

**Update a program's status or schedule.** Edit the program's `status` and `schedule` fields in `src/data/programs.ts`. For example, when Gardens of Paradise has a confirmed first-session date, replace "Launching September 2026" and the schedule line.

**Add a new article.** Add an object to `src/data/articles.ts` following the existing shape (`slug`, `title`, `category`, `excerpt`, `date`, `body` blocks of `p`, `h2`, and `quote`). Then add its URL to `public/sitemap.xml` and an item to `public/rss.xml`.

**Add supporting videos.** In `src/data/videos.ts`, add confirmed YouTube IDs to the `supportingVideos` entries. Cards without an ID link to the channel automatically.

**Add curated social posts.** Fill the array in `src/data/social.ts`; the Media page renders them automatically when the array is not empty.

**Publish the charitable receipt wording.** When legal wording is confirmed, set `charityWording` in `src/data/links.ts` to the approved sentence. It will appear on the Donate page and in the footer. Until then no receipt claims appear anywhere.

**Swap a photo.** Drop the optimized image into `public/images/...` and update the path where it is used. Keep photos as WebP around 100 to 300 KB.

## Design system in brief

Palette (from the printed brand materials): cream `#F8ECD4`, paper `#FBF3E2`, sand `#EFDDBC`, rust `#A8431F`, copper `#BE6B33`, ember `#8C3115`, deep brown `#461B07`, gold `#B98A2E`. Type: Cormorant Garamond for display, Manrope for body and UI, Amiri for Arabic, all self-hosted through Fontsource. The recurring visual motif is the arch from the Muraqabah emblem, used as the hero threshold and as the mask for portrait photography.

Motion: one site-wide scroll-reveal system (GSAP ScrollTrigger), Lenis smooth scrolling on fine-pointer devices, and a single lazy-loaded 3D hero element with an SVG fallback. Everything respects `prefers-reduced-motion`, and the 3D element never loads on mobile, on reduced-motion systems, or on low-memory devices.

## Accessibility and performance

Built to WCAG 2.2 AA: semantic landmarks and heading order, skip link, visible focus, alt text on meaningful images, colour pairs tested for contrast, 44px minimum touch targets, and click-to-load video embeds (youtube-nocookie, never autoplay). Images are responsive WebP with lazy loading; the impact report is served as an optimized 2.1 MB PDF; three.js ships in its own chunk loaded only when the 3D hero is enabled.

See `QA-CHECKLIST.md` for the launch checklist and `CONTENT-VERIFICATION.md` for the sourcing of every fact on the site.
