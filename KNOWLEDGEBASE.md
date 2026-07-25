# Midwest Storage Solutions — Staff Knowledgebase

**Audience:** MSS staff & contractors · **Owner:** Chris & Mona Whaley · **Last updated:** 2026-07-10

> Internal operating reference. Confirmed facts are pulled from the live sites and company records.
> Anything marked **⬜ TODO** needs to be filled in or confirmed by ownership before staff rely on it.
> Keep this file the single source of truth — update it here, don't keep parallel copies.

---

## 1. Company at a glance

| | |
|---|---|
| **Legal / brand name** | Midwest Storage Solutions (MSS) |
| **What we are** | Technology-driven property management for self-storage & flex space in the Midwest |
| **Website** | https://midweststorage.solutions |
| **Main phone** | (620) 901-8450 |
| **Main email** | info@midweststorage.solutions |
| **LinkedIn** | https://www.linkedin.com/company/midwest-storage-solutions |
| **Leadership** | Chris Whaley — Co-Founder & CEO (finance, acquisitions, technology) · Mona Whaley — Co-Founder & COO (operations, tenant experience, on-the-ground execution) |
| **Model** | 100% remotely managed, 24/7 self-service. No one behind a counter. |
| **Scale (as marketed)** | 1,092 units under management · 4.7★ across 300+ Google reviews · ~95% avg occupancy |

**Three facility types we run:**
1. **Climate-controlled** — year-round climate units in Midwest markets national operators skip.
2. **Drive-up** — single-story, keypad access, same-day move-in.
3. **Flex space** — contractor bays / commercial flex units, leased and built out end to end.

---

## 2. Facilities directory

> These four sites are live. Each is a static site on Netlify (see §5). Phone/address/region below are pulled from the live site markup and are safe to give customers.

### Reno County Storage — `renocountystorage.com`
- **Phone:** (620) 662-7336
- **Location A:** 2511 E 17th Ave, Hutchinson, KS 67501
- **Location B:** 712 N Walnut St, South Hutchinson, KS 67505
- **Discounts advertised:** 10% military
- **Notes:** Two locations under one brand. 24/7 cameras at both, fenced & gated.

### Labette County Storage — `labettecountystorage.com`
- **Phone:** (620) 778-8196
- **Location:** 1830 S US-59, Parsons, KS 67357
- **Discounts advertised:** 10% military

### Bourbon County Storage — `bourboncountystorage.com`
- **Phone:** (620) 644-0735
- **Location:** 2510 Richards Road, Fort Scott, KS 66701
- **Discounts advertised:** 10% military
- **Platform note:** Cubby reservation flow is sandboxed at `/cubby-test/`; production CTAs currently still point to the legacy storage software. Do not send customers to the test path.

### Free State Storage — `freestatestorage.com` *(confirm live domain)*
- **Phone:** (785) 576-6234
- **Location:** 2400 Franklin Rd, Lawrence, KS 66046
- **Discounts advertised:** 10% student (Lawrence / KU market)
- **Brand note:** "Free State" is load-bearing local Lawrence heritage — the 1854 founding / Free-State settler story. Handle it factually; never peacock it.
- **Unit sizes advertised:** 5×10, 10×10, 10×20

**⬜ TODO — for every facility, confirm and add:**
- Office/gate **access hours** (site markup references an HoursSpecification closing at 16:00 for some — verify per site)
- Full **unit size & price list** (current rates by size and climate/drive-up)
- **Gate/keypad access** procedure and who holds the master codes
- On-site or nearest **contact for emergencies / maintenance**
- **Insurance / tenant protection** offering and requirements

---

## 3. Platform & tools (how the business actually runs)

| System | Purpose | Status |
|---|---|---|
| **Cubby** | Storage management platform — live availability, on-domain reservations, tenant portal, open API | Rolling out across all sites; replacing legacy **ESS**. Live sandbox on Bourbon `/cubby-test/`. |
| **Legacy ESS** | Prior storage software (reservations/portal) | Being phased out — do not build new work against it |
| **Netlify** | Hosting for all facility websites | Live |
| **GitHub** | Source of truth for all site code; push triggers auto-deploy | Live |
| **WhatsApp — "Midwest Storage Solutions" group** | Internal team comms; synced to a local knowledge tool | Live |
| **Google Business Profiles** | Reviews & local search (300+ reviews, 4.7★) | Live |

**⬜ TODO — confirm and add:** Cubby login/roles, payment processor, phone/answering system (the June phone-analytics report lives at `reports/june-2026-phone-analytics.html`), CRM, and where tenant PII lives.

---

## 4. Standard operating procedures

> Placeholders — these are the procedures staff will need day to day. Ownership to fill in the actual steps.

- **⬜ New tenant move-in** (online reservation → lease → gate access)
- **⬜ Move-out / unit turnover** (inspection, cleaning, re-listing)
- **⬜ Late payment & collections** timeline
- **⬜ Lien / auction process** (Kansas self-storage lien law timeline & notices)
- **⬜ Maintenance request handling** and vendor list per market
- **⬜ After-hours / emergency escalation** (who to call, in what order)
- **⬜ Customer complaint / refund** policy
- **⬜ Discount policy** (military 10%, student 10% at Free State — confirm rules & stacking)

---

## 5. Website / deploy workflow (for whoever edits the sites)

All facility sites are **static HTML/CSS/JS** — no build step, no dev server.

1. Edit the HTML/CSS/JS files directly in the repo.
2. Commit and push to GitHub.
3. Netlify auto-deploys within ~30 seconds; review live.

Repos live under `C:\Github_folder\` (e.g. `reno-county-storage`, `labette-county-storage`, `bourbon-county-storage`, `free-state-storage`, and this umbrella site `midwest-storage-solutions`).

---

## 6. Brand & voice quick rules

- Positioning: **technology-driven, customer-first**, secondary/tertiary Midwest markets national operators skip.
- Proof over hype: "measured, not claimed." Cite real numbers (occupancy, reviews), don't inflate.
- Tenant-facing tone: easy, secure, no fees, book online, local support.
- Free State: heritage is factual context, never a marketing costume.

---

## 7. Open items / to confirm with ownership

- [ ] Confirm Free State Storage live domain
- [ ] Per-facility access hours, unit sizes, and current pricing
- [ ] Gate code / access-control ownership and rotation policy
- [ ] Kansas lien/auction SOP with real timelines
- [ ] Emergency & maintenance contacts per market
- [ ] Payment processor, CRM, and phone system details
- [ ] Cubby migration status per site (which sites are fully cut over)
