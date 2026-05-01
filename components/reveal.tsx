"use client";

import { useEffect, useRef } from "react";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const markVisible = () => {
      node.dataset.visible = "true";
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    const hashTarget = hash ? document.getElementById(hash) : null;
    const containsHashTarget = hashTarget ? node === hashTarget || node.contains(hashTarget) : false;
    const rect = node.getBoundingClientRect();
    const isAlreadyInView = rect.top < window.innerHeight * 0.96 && rect.bottom > 0;

    if (prefersReducedMotion || containsHashTarget || isAlreadyInView) {
      markVisible();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible="false"
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
