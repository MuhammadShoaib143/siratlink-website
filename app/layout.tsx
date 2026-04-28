import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Dispatching & Business Support`,
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "dispatching services",
    "truck dispatch service",
    "truck dispatch company",
    "dispatch company USA",
    "dispatch company in Columbus Ohio",
    "owner operator dispatch",
    "virtual assistance services",
    "web development services",
    "digital marketing services",
    "business support services",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} | Premium Dispatching & Business Support`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Dispatching & Business Support`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.physicalAddress.street1,
      addressLocality: siteConfig.physicalAddress.city,
      addressRegion: siteConfig.physicalAddress.region,
      postalCode: siteConfig.physicalAddress.postalCode,
      addressCountry: siteConfig.physicalAddress.country,
    },
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pb-24 xl:pb-0">{children}</main>
          <SiteFooter />
        </div>
        <StickyMobileCta />
      </body>
    </html>
  );
}
