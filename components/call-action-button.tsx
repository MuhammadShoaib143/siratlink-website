"use client";

import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";

type CallActionButtonProps = {
  href: string;
  phoneLabel: string;
  children: ReactNode;
  className?: string;
};

export function CallActionButton({
  href,
  phoneLabel,
  children,
  className = "",
}: CallActionButtonProps) {
  const [fallbackOpen, setFallbackOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fallbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  function tryDial() {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.rel = "nofollow";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
    }

    fallbackTimerRef.current = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        setFallbackOpen(true);
      }
    }, 900);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setCopied(false);
    tryDial();
  }

  async function handleCopyNumber() {
    try {
      await navigator.clipboard.writeText(phoneLabel);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>

      {fallbackOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close call help"
            className="absolute inset-0 bg-brand-navy/55 backdrop-blur-[3px]"
            onClick={() => setFallbackOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-fallback-title"
            className="soft-card premium-border surface-outline relative z-[121] w-full max-w-md rounded-[2rem] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.26)] sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Call Support</p>
            <h3 id="call-fallback-title" className="mt-3 font-display text-2xl font-semibold text-ink sm:text-[2rem]">
              The dialer didn&apos;t open automatically.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate">
              Some browsers need a phone app configured before they can hand off a call. You can try again or copy the number and dial it manually.
            </p>
            <div className="mt-5 rounded-[1.4rem] border border-line bg-canvas px-4 py-4 text-center text-lg font-semibold text-ink">
              {phoneLabel}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
                onClick={() => {
                  setFallbackOpen(false);
                  tryDial();
                }}
              >
                Try Again
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white"
                onClick={handleCopyNumber}
              >
                {copied ? "Number Copied" : "Copy Number"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
