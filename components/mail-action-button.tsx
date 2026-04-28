"use client";

import { useEffect, useState } from "react";

type MailActionButtonProps = {
  email: string;
  label: string;
  copiedLabel?: string;
  className?: string;
};

export function MailActionButton({
  email,
  label,
  copiedLabel = "Email Copied",
  className = "",
}: MailActionButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleClick() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
      }
    } catch {
      setCopied(false);
    }

    window.location.href = `mailto:${email}`;
  }

  return (
    <button type="button" onClick={handleClick} className={className} aria-live="polite">
      {copied ? copiedLabel : label}
    </button>
  );
}
