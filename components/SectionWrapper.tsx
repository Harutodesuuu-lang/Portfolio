"use client";

import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "scale";
}

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass =
    direction === "left" ? "reveal-left" : direction === "scale" ? "reveal-scale" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${visible ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1, rootMargin: "-60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "in-view" : ""} text-center mb-16`}>
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
