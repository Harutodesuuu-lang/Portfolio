"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionTitle } from "./SectionWrapper";

const typeColors: Record<string, string> = {
  Internship:
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  "Academic Project":
    "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  Volunteer:
    "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
};

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-left ${visible ? "in-view" : ""} relative flex gap-6`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 hidden sm:flex">
        <div
          className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/10 flex items-center justify-center z-10 mt-1 transition-transform duration-500 ${
            visible ? "scale-100" : "scale-0"
          }`}
          style={{
            transitionDelay: visible ? `${index * 120 + 200}ms` : "0ms",
          }}
        >
          <Briefcase size={18} className="text-emerald-500" />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <MapPin size={13} className="text-slate-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {exp.company}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[exp.type] || typeColors["Part-time"]}`}
            >
              {exp.type}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Calendar size={12} />
              {exp.period} · {exp.duration}
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          {exp.description}
        </p>

        <ul className="space-y-2 mb-4">
          {exp.responsibilities.map((r) => (
            <li
              key={r}
              className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
            >
              <CheckCircle2
                size={14}
                className="text-emerald-500 mt-0.5 flex-shrink-0"
              />
              {r}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech?.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="Experience"
          title="Work & Professional Journey"
          description="My professional experiences and the milestones that shaped my development as a developer."
        />
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent hidden sm:block" />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
