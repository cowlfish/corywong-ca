# corywong.ca

Personal brand landing page for Cory Wong, Real Estate Broker at Trustwell Realty Inc., Brokerage.

## Features

- First-person intro and email signup CTA
- Email capture integrated with Kit (ConvertKit) — CASL-compliant express opt-in
- Google Analytics 4 with cookie consent banner
- RECO-compliant footer
- WCAG 2.0 AA accessible, semantic HTML
- Lighthouse 90+ target
- Responsive design (mobile-first)

## Setup

### Kit (ConvertKit) Integration

1. Create a form in your [Kit dashboard](https://app.convertkit.com)
2. Replace `YOUR_FORM_ID` in `index.html` with your Kit form ID
3. Add custom fields `casl_consent` and `casl_consent_date` in Kit

### Google Analytics

Replace `G-XXXXXXXXXX` in `index.html` with your GA4 Measurement ID.

### Images

Place your assets in the `assets/` directory:
- `assets/cory-headshot.jpg` — headshot photo
- `assets/trustwell-logo.png` — Trustwell Realty logo

## Deployment

Static site — deploy to any static hosting provider (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## Legal / Compliance

- **CASL**: Express consent checkbox (unchecked by default), consent timestamp recorded, unsubscribe in every email
- **RECO**: Footer includes brokerage name, broker registration status, and link to reco.on.ca
- **PIPEDA**: Privacy policy covers data collection, use, retention, and rights
- **AODA**: WCAG 2.0 Level AA compliance, accessibility statement included
