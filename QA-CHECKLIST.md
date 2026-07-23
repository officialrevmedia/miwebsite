# QA Checklist

## Verified in this build

- [x] Production build compiles with no TypeScript errors
- [x] All 20 routes render with a single H1 and correct titles
- [x] Legacy redirects work: /blog/*, /scholars/*, /academics, /donations, /campaigns/ramadan-2026, /community
- [x] Unknown paths render the 404 page; public/404.html handles GitHub Pages deep links
- [x] No horizontal overflow at 375px on key pages (home, program, impact, teacher, donate)
- [x] Mobile menu opens, closes, traps scroll, and closes on navigation
- [x] No browser console errors on the homepage
- [x] Colour pairs audited for WCAG 2.2 AA (small text at 4.5:1 or better; large Arabic accents at 3:1 or better)
- [x] Reduced motion: reveals, Lenis, and the 3D hero are all disabled; content shows immediately
- [x] Videos are click-to-load through youtube-nocookie; nothing autoplays
- [x] three.js is in a separate chunk loaded only for the enabled 3D hero (desktop, fine pointer, adequate memory)
- [x] Images are responsive WebP with lazy loading; hero portrait loads eagerly
- [x] Impact report PDF optimized from 19.5 MB to 2.1 MB
- [x] Skip link, visible focus styles, aria labels on icon links, breadcrumbs with aria-current
- [x] robots.txt, sitemap.xml, rss.xml, favicons, and Open Graph image in place
- [x] Verified served from the /miwebsite/ subfolder: assets, images, PDF link, deep links, and legacy redirects all resolve
- [x] Verified the domain build (`npm run build:domain`) emits root paths and the CNAME file
- [x] No em dashes anywhere in site copy or documentation
- [x] No Al-Ihsan references, no receipt claims, no unpublished internal dates

## To verify after deployment

- [ ] Add the VITE_BASE repository variable set to / before connecting www.muraqabah.ca
- [ ] DNS and HTTPS resolve for www.muraqabah.ca after that deploy
- [ ] Zeffy forms open correctly from the live domain on mobile and desktop
- [ ] WhatsApp community link joins the intended group
- [ ] Lighthouse run on the live URL (target 90+ on all four categories; test Performance on a real mobile profile)
- [ ] Share previews on WhatsApp and Instagram show the Open Graph image
- [ ] Search Console: submit sitemap.xml, confirm old URLs 301-resolve through the redirect layer

## Before announcing publicly

- [ ] Confirm Chains of Trust enrolment wording matches reality (see CONTENT-VERIFICATION.md)
- [ ] Confirm the featured YouTube video and add supporting video IDs
- [ ] Decide charitable receipt wording with legal, then set charityWording in src/data/links.ts
