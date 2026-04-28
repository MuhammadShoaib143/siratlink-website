"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LinkButton } from "@/components/link-button";
import { primaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.mobileNav = open ? "open" : "closed";
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.documentElement.dataset.mobileNav = "closed";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-brand-navy px-4 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/75 sm:px-6 lg:px-8">
        Columbus, Ohio Based • Serving U.S. Carriers and Growth-Minded Businesses
      </div>
      <div className="border-b border-white/55 bg-[linear-gradient(180deg,rgba(243,246,248,0.88),rgba(255,255,255,0.84))] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-[3.6rem] w-[8.25rem] sm:h-[4rem] sm:w-[9.25rem] lg:h-[4.35rem] lg:w-[10rem]">
              <Image
                src="/siratlink-logo-transparent-clean.png"
                alt="SiratLink LLC logo"
                fill
                priority
                sizes="(max-width: 640px) 132px, (max-width: 1024px) 148px, 160px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.8rem] font-medium transition xl:px-3 2xl:px-4 2xl:text-sm ${
                    active
                      ? "bg-white text-accent shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
                      : "text-slate hover:bg-white/82 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <LinkButton href="/contact" className="px-4 py-3 2xl:px-5 2xl:py-3.5">
              <span className="hidden 2xl:inline">Book a Consultation</span>
              <span className="2xl:hidden">Consultation</span>
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-accent hover:text-accent xl:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[7.45rem] z-[70] h-[calc(100dvh-7.45rem)] border-t border-line bg-canvas transition-[opacity,transform] duration-300 xl:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-7xl flex-col gap-2 overflow-y-auto px-4 py-5 pb-28 sm:px-6 sm:pb-32">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition hover:bg-canvas hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
            >
              Call Now
            </a>
            <LinkButton href="/contact">Book a Consultation</LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
