# Pending Items

Open questions and gaps from the HTML → React conversion. Nothing here blocks the build; all
items are content/verification gaps that need your input. Link statuses were checked on
**2026-09-26**.

## 1. Dead or unreachable links

These URLs came from the old site but no longer respond. The live link has been **removed from
the case study modal** in each case so visitors don't hit an error — restore it once the site is
back, or confirm it's permanently gone.

| Project | URL | Status | Action needed |
| --- | --- | --- | --- |
| Build AI | `agent.buildaierc.com` | 502 Bad Gateway | Confirm correct app URL. Modal currently links to `buildaierc.com`, which is live. |
| Code Prompt Generator | `codepromptgenerator.com` | DNS does not resolve | Confirm domain is abandoned, or provide new URL |
| Gamebole | `gamebole.vercel.app/services` | 404 (root also unreachable) | Provide current deployment URL |
| Infinity Edge Software | `infinityedge.us` | Connection failed | Confirm whether site is retired |
| Magnetar | `magnetar-solutions.vercel.app` | 404 | Provide current URL for the Magnetar company site |

## 2. Missing project images

Five projects have no screenshot in `public/assets/images/`. Each renders a **styled placeholder
tile showing the project's initials** (theme-matched, not a broken image). Drop a screenshot into
`public/assets/images/` and set the `image` field in `src/data/projects.js` to replace it.

| Project | Placeholder initials | `projects.js` id |
| --- | --- | --- |
| Crop Classification Using Satellite Imagery | `CC` | `crop-classification` |
| Mass SHL2A Land Processor | `ML` | `mass-shl2a` |
| GTNH Sync | `GS` | `gtnh-sync` |
| Restaurant Management Backend | `RM` | `restaurant-management-backend` |
| Bill Split Web Application | `BS` | `bill-split` |

## 3. Case studies needing verification

Eight projects are flagged `pending: true` in `src/data/projects.js`. Their Overview/Challenge/
Solution text is inferred rather than sourced, and affected fields say "Pending" in the UI.

| Project | What's unverified | How to resolve |
| --- | --- | --- |
| **Acre Eye** | Everything. The live site is a client-rendered SPA that exposes no product copy, so the problem domain, tech stack, and impact are all unknown. Tech stack currently reads "Pending verification". | Describe what Acre Eye does. The brief suggested a geospatial angle from the resume — this was **not** confirmed and is deliberately not claimed. |
| **Mass SHL2A Land Processor** | GitHub URL. The resume links a repo but it isn't public under `AnasMansha`. | Provide the repository URL, or confirm it's private |
| **Restaurant Management Backend** | Feature scope. `mrm_backend` ships the unmodified default NestJS starter README. | Confirm actual features; case study is inferred from the resume bullet points |
| **Blood Cancer App Backend** | Your specific contribution and the tech stack. Repo belongs to `MuhammadAffanWahid`. | Confirm which parts you built and the stack used |
| **Code Prompt Generator** | Tech stack and impact. Site is offline, no repo found. | Confirm stack; no usage metrics were ever captured |
| **Gamebole** | Original brief and tech stack (Next.js assumed from the Vercel deployment). | Confirm stack and project scope |
| **Infinity Edge Software** | Tech stack and results. Site unreachable. | Confirm stack |
| **Magnetar** | Results/impact. Deployment is down. | Confirm impact, if any is shareable |

## 4. Factual conflicts to resolve

| Item | Resume says | Source of truth says | Resolution taken |
| --- | --- | --- | --- |
| **Bill Split tech stack** | Next.js, React.js | The `bill-split-webapp` README documents **Flask + SQLite + vanilla HTML/CSS/JS** | Used the README (verifiable). **Your resume may need correcting** — please confirm which is accurate. |
| **Race Against Neccerties** (title) | n/a | README titles it "Terminal Adventure: **Rise** Against Neccerties" | Kept the old site's "Race Against Neccerties" as the card title and noted the README title in the overview. Confirm which you prefer. |

## 5. Profile details to confirm

| Item | Current value | Note |
| --- | --- | --- |
| **Birthday** | April 7, 2001 | Carried over from the old HTML site; **not present in the resume**. Confirm it's correct and that you want it public. |
| **Sidebar location** | Paragon City, Lahore, Pakistan | Kept from the old site as instructed. Contact page and map use the broader "Lahore, Pakistan". |
| **Phone display** | +92 (307) 014-8118 | Formatting kept from the old site; resume writes it as `+92 3070148118`. Cosmetic only — same number. |
| **Education (pre-university)** | Punjab College (2017–2019), Garrison Academy (2015–2017) | Kept from the old site; not in the resume. Confirm dates. |
| **Job title** | Software Engineer | Sidebar now reads "Software Engineer" (was "Web developer") |

## 6. Optional projects not added

Mentioned as "only if easy" and skipped to avoid publishing unverified case studies. Both repos
exist and are public.

| Repo | Why skipped |
| --- | --- |
| `AnasMansha/calories-tracker-app` | No README content to base an accurate case study on |
| `AnasMansha/nest-prisma-template` | A starter template rather than a portfolio project — say if you want it included |

## 7. Content gaps

| Item | Note |
| --- | --- |
| **Results/impact metrics** | Several case studies list "Pending" under Results because no metrics exist. Educative and Blood Cancer in particular may have figures you can't share publicly — confirm what's allowed. |
| **Testimonials & Clients sections** | Were commented out in the old HTML and have **not** been ported. The underlying CSS is retained, so they can be re-added if you have real content. |
| **Blog page** | Was commented out in the old HTML (placeholder lorem ipsum only) and is **not** ported. Nav has four items: About, Resume, Portfolio, Contact. |
| **Interactive dragon SVG** | Restored in React (`Dragon.jsx`). Hidden on viewports ≤768px (same as original). |
