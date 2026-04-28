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

## Project Structure

```text
app/          Route pages, layout, metadata routes, global styles
components/   Reusable UI components
lib/          Site configuration and metadata helpers
public/       Static assets
```

## Notes

- The contact form currently provides polished front-end behavior and is ready to be connected to email, CRM, or API handling.
- Business contact details and legal copy should be reviewed before a public launch if final production details change.
