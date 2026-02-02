# W8CUL Website

Official website for the WVU Amateur Radio Club (W8CUL).

---

## Editing & Building

### Prerequisites

- **Ruby** (3.x recommended; check with `ruby -v`)
- **Bundler** (`gem install bundler`)

### First-Time Setup

```bash
cd /path/to/W8CUL-Website
bundle install
```

### Local Development (Preview)

To run the site locally and auto-reload on file changes:

```bash
bundle exec jekyll serve
```

Then open **http://127.0.0.1:4000/** in your browser. Jekyll will regenerate when you edit files.

### Build for Production

To build static files into `_site/` (e.g. before deploy):

```bash
bundle exec jekyll build
```

### Deployment Notes

- The site can be deployed as **pre-built static HTML**: commit the root HTML files and assets; many hosts serve the repo root directly.
- For **Jekyll-based deployment** (e.g. GitHub Pages, Cloudflare Pages):
  - **Build command:** `bundle exec jekyll build`
  - **Build output directory:** `_site`
  - Push source files; the host runs the build.

### Where to Edit What

| What you want to change | Edit |
|-------------------------|------|
| **Navigation menu** | `_data/navigation.yml` |
| **Officers** | `_data/officers.yml` + officer pages under `officers/` |
| **Events / schedule** | `_data/events.yml` + `events/index.html` |
| **Alumni** | `_data/alumni.yml` + `membership/alumni/index.html` |
| **Sponsors** | `_data/sponsors.yml` + `sponsors/index.html` |
| **Resources / repeater info** | `_data/resources.yml` |
| **Equipment list** | `_data/equipment.yml` + `shack/equipment/index.html` |
| **QSL / logbook stats** | `_data/logbook.yml` + `shack/logbook/index.html` |
| **Projects** | `projects/Balloon_Project/`, `projects/APRS_Tracker/`, etc. |
| **Licensing / exam info** | `licensing/index.html` |
| **Contact / join / donate** | `contact/`, `membership/join/`, `sponsors/donate/` |
| **Global layout (header, footer)** | `_includes/header.html`, `_includes/footer.html` |
| **Styles** | `styles.css` |

### Placeholder Convention (XX)

Some content uses **XX** placeholders until verified:

- `XX-NAME-XX`, `XX-CALLSIGN-XX` – people / callsigns  
- `XX-DATE-XX`, `XX-YEAR-XX` – dates / years  
- `XX-NUMBER-XX` – counts / statistics  
- `XX-COMPANY-XX`, `XX-POSITION-XX` – employers / job titles  
- `XX-LOCATION-XX` – places  
- `XX` – generic (URLs, fees, etc.)

Replace these with real, verified content as you update pages.

---

## Content Update Checklist

Use this list to track which pages and data files still need correct, verified content. Check off items as they are updated.

### Data files (`_data/`)

- [ ] **alumni.yml** – Replace XX placeholders with real alumni (names, callsigns, years, employers, positions) or remove if not used.
- [ ] **logbook.yml** – Replace XX placeholders with real QSO/country/grid stats and recent contacts, or remove fake stats.
- [ ] **events.yml** – Add real TIAD dates (two per semester), Field Day date/location, and any other event dates when set.
- [ ] **sponsors.yml** – Replace XX-YEAR-XX for equipment donors with actual donation years (or remove if unverifiable).
- [ ] **equipment.yml** – Confirm repeater frequency (currently XX); align with `resources.yml` if needed.
- [ ] **officers.yml** – Keep in sync with current officers; ensure bios and titles are correct.
- [ ] **resources.yml** – Repeater info is treated as reference; confirm W8CUL/K8LN/WV8MON freqs if needed.
- [ ] **navigation.yml** – Update if you add/remove top-level or submenu items.

### HTML pages – high priority (placeholders or key info)

- [ ] **membership/alumni/index.html** – Replace XX placeholders (spotlight, career %, alumni cards, registration URL) with real data or simplify.
- [ ] **shack/logbook/index.html** – Replace XX-NUMBER-XX and XX-CALLSIGN-XX/XX-LOCATION-XX with real stats and recent contacts, or remove.
- [ ] **projects/Balloon_Project/Balloon_Project/index.html** – Replace XX placeholders (peak altitude, HAB-1–HAB-5 dates/altitudes/locations) with real launch data or remove.
- [ ] **projects/APRS_Tracker/APRS_Tracker/index.html** – Replace XX GitHub URL if repo exists; replace XX build/part costs with current prices or “contact club.”
- [ ] **licensing/index.html** – Replace XX exam fee and XX FCC fee with current amounts; add/update next VE exam date when set.

### HTML pages – medium priority (accuracy / freshness)

- [ ] **events/index.html** – When TIAD/Field Day/VE dates are set, add them to the “Other Events” section (or pull from `_data/events.yml` if wired up).
- [ ] **sponsors/index.html** – If you list equipment donors with years, ensure years match `sponsors.yml` and are accurate.
- [ ] **contact/index.html** – Verify contact info, form link, and address.
- [ ] **membership/join/index.html** – Verify join instructions and any form links.
- [ ] **sponsors/donate/index.html** – Verify donate instructions and links.
- [ ] **index.html** – Update hero text, meeting time/location (Thursday 7 PM, AERB 135), and any “next event” teasers.

### HTML pages – lower priority (review when convenient)

- [ ] **membership/index.html** – Confirm meeting time (Thursday 7 PM), TIAD wording, and benefits list.
- [ ] **membership/resources/index.html** – Confirm resource links and descriptions.
- [ ] **shack/index.html** – Confirm shack description and location (e.g. ESB 1011 if different from meeting room).
- [ ] **shack/equipment/index.html** – Ensure equipment list matches `_data/equipment.yml` and reality.
- [ ] **officers/index.html** – Matches `_data/officers.yml`; update officer bios in individual `officers/*/index.html` as needed.
- [ ] **projects/index.html** – Brief project descriptions and links to Balloon/APRS pages.

### One-off / as-needed

- [ ] **Google Calendar** – If using embed, ensure `_data/events.yml` `google_calendar_id` and any event links are correct.
- [ ] **External links** – Periodically check ARRL, HamStudy, FCC, repeater info, and any XX or placeholder URLs.

---

## File Structure

```
/
├── _config.yml          # Jekyll configuration
├── _data/               # Data files (navigation, officers, events, etc.)
├── _includes/           # Reusable HTML components (header, footer, cards)
├── _layouts/             # Page templates
├── assets/               # Images and media (officers, promo, etc.)
├── javascripts/          # Scripts (navigation, Bootstrap, etc.)
├── styles.css            # Main stylesheet
├── index.html            # Home page
├── contact/              # Contact page
├── events/               # Events / schedule
├── licensing/            # Licensing and exam info
├── membership/           # Join, resources, alumni
├── officers/             # Officer listing and individual bios
├── projects/             # Balloon Project, APRS Tracker
├── shack/                # The Shack, equipment, QSL logbook
├── sponsors/             # Sponsors and donate
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

---

## WVU Branding

This site follows WVU web standards. Key colors:

- **WVU Blue:** `#002855`
- **WVU Gold:** `#EAAA00`
- **Accent Blue Dark:** `#1C2B39`

For more information, see [WVU Web Standards](https://webstandards.wvu.edu).

---

## Current Schedule (Reference)

- **Thursday 7:00 PM** – Weekly Club Meeting, **AERB 135**
- **Thursday 9:00 PM** – W8CUL Net, **145.450 MHz Repeater**
- **Two per semester** – Tech in A Day (TIAD), **AERB 135** (contact club for dates)
