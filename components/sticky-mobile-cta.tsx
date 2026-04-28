"use client";

import { usePathname } from "next/navigation";

import { LinkButton } from "@/components/link-button";
import { siteConfig } from "@/lib/site";

const hiddenRoutes = ["/privacy-policy", "/terms-and-conditions"];

export function StickyMobileCta() {
  const pathname = usePathname();

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="mobile-sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/88 px-4 py-3 backdrop-blur-xl xl:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold text-ink shadow-[0_14px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
        >
          Call Now
        </a>
        <LinkButton href="/contact" className="flex-1 px-4 py-3">
          Book Consultation
        </LinkButton>
      </div>
    </div>
  );
}
