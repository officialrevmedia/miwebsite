# Content Verification Report

Every fact on the website, traced to its source. Sources are the files supplied on July 23, 2026 (brand book, sponsorship presentation, 2026 Ramadan Impact Report, teacher bios, program materials, launch plan) plus the live Zeffy pages fetched during the audit.

## Verified and published

| Claim on site | Source |
| --- | --- |
| Mission: "knowledge that is not only learned, but embodied" | Brand book; sponsorship presentation |
| Muraqabah definition ("the vigilant awareness that Allah is always watching") | Brand book; previous site |
| Founders: Shaykh Zakaria AbdilAziz, Mirza Veletanlic, Ahmad Mirza | Sponsorship presentation |
| Three pillars (Academics, Khidmah, Community) with Arabic | Brand book; presentation |
| Shaykh Zakaria: Alimiyyah graduate of Dar al-Mustafa, nearly two decades, Habib Umar bin Hafiz, Quran in seven canonical recitations, ijazat including Hadith and Shafi'i fiqh | Supplied biography document |
| Surname spelling "AbdilAziz" | Confirmed by Ahmad, July 23, 2026 |
| Shaykh Nuh Sanders: Philadelphia, Egypt, six-plus years at Dar al-Mustafa, Lamppost, Safina Society, founder of Dar al-Qurra | Supplied biography document |
| Title "Shaykh Nuh Sanders" | Confirmed by Ahmad, July 23, 2026 |
| Gardens of Paradise: weekly online with monthly in-person, Weight of Words opening series, monthly contribution model, Tirmidhi hadith | Program materials; live Zeffy page |
| Gardens launch: "September 2026" | Confirmed by Ahmad, July 23, 2026 |
| Chains of Trust: Al-Bayquniyyah, Sundays 2:00 to 3:00 PM EST on Zoom, first class April 19, 2026, taught by Shaykh Nuh Sanders | Course materials; live Zeffy ticketing page |
| Spheres of Faith: completed flagship, 80+ weekly attendees, text by Habib Abd al-Rahman Balfaqih, Habib Umar's description of the text | Presentation; previous site |
| Ramadan 2026: $14,725.80 raised in two weeks, zero admin fees | 2026 Ramadan Impact Report |
| "300+ family packages" headline figure | Ahmad's direction, July 23, 2026 (safely below both totals that appear in source materials) |
| 648 hot meals (272 SacredHand Mississauga, 228 Good Shepherd Hamilton, 148 Tarim) | Impact report |
| $3,850 direct aid and its six-line breakdown | Impact report |
| Local package distribution lines (40, 20, 40, 30, 25, 25, 20) | Impact report |
| Rice bags to Tarim households (no count published) | Impact report (count differs between pages, so omitted) |
| Eight named partner organizations (no count claimed) | Impact report partner list, minus Al-Ihsan per Ahmad's direction |
| Over 300 households reached in Tarim | Impact report |
| Two women at Hamilton Downtown Mosque moment | Impact report |
| Year One: 600+ students, 10,000+ fed, 2 sold-out intensives, 80+ weekly | Sponsorship presentation (public-facing document) |
| Qurbani 2026: $20,000+ raised, about 100 animals, 300+ households | Presentation and campaign materials |
| Ontario food insecurity statistics in the impact article | Carried over from the previously published article, which cites PROOF (University of Toronto), Public Health Ontario, and Feed Ontario |
| All Zeffy, WhatsApp, social, and email links | Fetched live during the audit; all resolve |

## Resolved conflicts

1. **Rice bag count (180 vs 185) and package total (380 vs 385).** The source materials disagree between pages. Resolution: headline reads "300+ family packages" (Ahmad, July 23, 2026) and no rice-bag count is published anywhere.
2. **Partner count.** The report says nine partners including Al-Ihsan Learning Centre. With Al-Ihsan removed from the site (Ahmad, July 23, 2026), the site names the remaining eight partners and claims no count.
3. **Nuh Sanders title (Ustadh vs Shaykh).** Resolved: Shaykh (Ahmad, July 23, 2026).
4. **Gardens launch timing.** Materials showed September 6 in one place and internal planning elsewhere. Resolution: publish month only, "Launching September 2026" (Ahmad, July 23, 2026).

## Still open (site ships safely without them)

1. **Chains of Trust enrolment status.** The cohort began April 19, 2026. The site says "Weekly, in session" and links the Zeffy ticketing page as "Course details and enrolment". If mid-cohort enrolment is closed, change the status and CTA label in `src/data/programs.ts`.
2. **Supporting video IDs.** Only the previously featured video (wizaPMOFPt4) is embedded. The three supporting cards link to the channel until confirmed IDs are added in `src/data/videos.ts`.
3. **Curated social posts.** `src/data/social.ts` is empty until Ahmad selects posts.
4. **Charitable receipt wording.** Pending legal confirmation. `charityWording` in `src/data/links.ts` is the single switch; until set, the site makes no receipt or registration claims.
5. **Studio photo DSC00004.** Shows Shaykh Zakaria with a second person whose identity is not confirmed (does not match Shaykh Nuh's portrait). Excluded from the build; see ASSET-MANIFEST.md.

## Deliberately unpublished

Internal launch-plan items with unconfirmed public details: Summer Retreat (August 2026), 10-City Tour, 75-student and price targets, Quran Program (January 2027), and Turkey Rihla dates. The Rihla appears only as "Details to be announced".
