# SiratLink LLC Website

Production-ready marketing website for SiratLink LLC, built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Project Overview

This website is designed for SiratLink LLC, a Columbus, Ohio based dispatching and business support company. The site positions dispatching as the primary service while also presenting virtual assistance, web development, and digital marketing as secondary growth services.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- App Router

## Features

- Responsive multi-page marketing website
- Shared layout with sticky header and footer
- Conversion-focused homepage and service pages
- Dispatching-specific landing page with consultation flow
- Contact form UI prepared for CRM or API integration
- Carrier setup page with grouped onboarding fields and document upload UI
- SEO metadata, `robots.txt`, and `sitemap.xml`
- Structured data for a professional service business

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Typecheck

```bash
pnpm typecheck
```

### 4. Build for production

```bash
pnpm build
```

### 5. Start the production build

```bash
pnpm start
```

## Environment Variables

Carrier document delivery should be connected before the carrier setup form is used for live onboarding files.

Create a local `.env.local` from `.env.example` and configure one of these:

### Option A: SMTP delivery to your business inbox

```bash
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CARRIER_SETUP_TO=support@siratlink.com
CARRIER_SETUP_CC=
```

This sends carrier setup details and uploaded documents directly from the server to your inbox without exposing files publicly.

### Option B: Protected webhook / CRM intake

```bash
CARRIER_SETUP_WEBHOOK_URL=
```

If SMTP is not configured, the carrier setup route can forward the onboarding package to a protected backend endpoint instead.

## Carrier Setup Notes

- Uploaded files are validated for file type and size before secure delivery.
- Files are handled in memory on the server and are not stored publicly in the frontend.
- The current API route enforces required document categories before submission.
- For live production use, make sure the destination inbox or webhook is protected and access-controlled.

## Project Structure

```text
app/          Route pages, layout, metadata routes, global styles
components/   Reusable UI components
lib/          Site configuration and metadata helpers
public/       Static assets
```

## Notes

- The contact form currently provides polished front-end behavior and is ready to be connected to email, CRM, or API handling.
- The carrier setup form now supports secure server-side delivery through SMTP or a protected webhook, but environment variables must be configured before accepting real onboarding documents.
- Business contact details and legal copy should be reviewed before a public launch if final production details change.
