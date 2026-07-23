# Content Guide

How to keep muraqabah.ca accurate, on-voice, and easy to maintain.

## Voice and style

- Canadian English (colour, honour, centre, neighbour).
- Confident, warm, reverent. Short sentences. No hype words (unleash, seamless, cutting-edge, transformative journeys).
- Never use em dashes or double hyphens. Use commas, colons, or full stops.
- Islamic terms are written naturally and italicization is not required: muraqabah, khidmah, sanad, ijazah, suhbah. Arabic script uses the Amiri font and `lang="ar" dir="rtl"` attributes.
- Honorifics: use the Unicode ligature ﷺ after the Prophet's name in body copy.
- Titles: Shaykh Zakaria AbdilAziz and Shaykh Nuh Sanders. Consistent everywhere.
- Numbers in impact copy follow the verified figures exactly. Do not round up, embellish, or invent. If a figure is not in `CONTENT-VERIFICATION.md`, it does not go on the website.

## Standing copy decisions

- Headline package figure for Ramadan 2026 is "300+ family packages".
- Gardens of Paradise launch wording is "Launching September 2026" until an exact date is confirmed for publication.
- Chains of Trust is presented as "Weekly, in session" with the Zeffy ticketing page as the enrolment destination.
- Al-Ihsan is not mentioned anywhere on the website.
- No charitable receipt or registration claims appear anywhere until legal wording is confirmed. The single switch for this is `charityWording` in `src/data/links.ts`.
- Internal plans (Summer Retreat, 10-City Tour, Quran Program, Turkey Rihla dates) are not published. The Turkey Rihla appears in the archive strip as "Details to be announced" only.

## Adding content

**Article.** `src/data/articles.ts`. Keep excerpts under 30 words. Every article carries either a "Reviewed for accuracy" note or the pending-scholarly-review note. Update `public/sitemap.xml` and `public/rss.xml` after adding.

**Program.** `src/data/programs.ts`. A program needs: slug, name, status, statusTone (`open`, `running`, or `complete`), teacher, short description, description paragraphs, format, schedule, level, and a CTA. The program page renders automatically at `/programs/slug`, but you must also add the route URL to `public/sitemap.xml` and, if you want it in the footer, `src/components/layout/Footer.tsx`.

**Impact campaign.** Add a data object in `src/data/impact.ts` and build its section on `src/pages/Impact.tsx` following the Ramadan pattern. Publish figures only after they match a written report.

**Photography.** Export WebP, quality about 82. Portraits around 1100px wide, scene photos around 1600px. Write alt text that says what is actually in the frame, and never names a person unless their identity is confirmed.

## SEO defaults

Every page sets its own title, description, canonical URL, and Open Graph tags through the `Seo` component, plus structured data (Organization, Person, Course, Article, Breadcrumb). Default share image is `public/images/og-default.jpg`; replace that file to change link previews site-wide.

## A note on the staging URL

While the site is published at officialrevmedia.github.io/miwebsite, every page still declares www.muraqabah.ca as its canonical address, and the generated 404.html carries a noindex tag. That keeps search engines pointed at the real domain. Once the domain is connected, nothing about the content needs to change.
