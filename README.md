# BetaReader — betareader.app

Landing page + static AI demo for BetaReader, built with [Docusaurus](https://docusaurus.io/) (classic preset).

## Features

- Landing page with trust/hero section and a demo editor
- Two-panel layout: text input (left) + mock validation results (right)
- Full **i18n**: English (default) and Russian
- Pages: `/`, `/pricing`, `/privacy`, `/terms`
- Zero backend — all validation results are pre-generated client-side
- Dark mode support
- Responsive (360px → 1440px+)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (English)
npm start

# Start dev server (Russian)
npm start -- --locale ru

# Production build
npm run build

# Serve the built site locally
npm run serve
```

## Project Structure

```
src/
  pages/          # Route pages (index, pricing, privacy, terms)
  components/
    TrustSection/   # Hero / trust bullets
    EditorPanel/    # Left column: textarea + buttons
    ResultsPanel/   # Right column: issue cards + status
    IssueCard/      # Single issue card
    LanguageNotice/ # Demo disclaimer strip
  utils/
    mockIssues.ts   # Pre-generated mock feedback data (EN + RU)
    sampleText.ts   # Sample manuscript texts (EN + RU)
  css/
    custom.css      # Docusaurus theme overrides

i18n/
  ru/
    code.json                          # Component string translations
    docusaurus-theme-classic/
      navbar.json                      # Navbar label translations
      footer.json                      # Footer label translations

static/
  img/
    logo.svg        # Navbar logo
    favicon.svg     # Browser favicon (SVG)
    og-image.svg    # OG/social share image placeholder
                    # ⚠ Replace with a real 1200×630 PNG before going live
```

## i18n

| Command | Description |
|---------|-------------|
| `npm start -- --locale ru` | Dev server in Russian |
| `npm run build` | Builds all locales |
| `npm run write-translations -- --locale ru` | Re-generates i18n key scaffolding |

## Deployment

The build output is a static site in `build/`. Deploy anywhere:

- **Vercel** — connect the repo, set build command `npm run build`, output dir `build`
- **Netlify** — same settings
- **Cloudflare Pages** — same

> The Russian locale is served at `/ru/`. Docusaurus handles routing automatically.

## TODO before launch

- [ ] Replace `static/img/og-image.svg` with a real **1200×630 PNG**
- [ ] Add real favicon.ico for legacy browser support
- [ ] Wire up actual AI backend (replace `getMockIssues` in `src/utils/mockIssues.ts`)
- [ ] Add analytics (Plausible / Fathom / etc.)
- [ ] Set real `contact@betareader.app` email
