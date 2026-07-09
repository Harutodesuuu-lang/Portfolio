"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, CheckCircle2, BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionTitle } from "./SectionWrapper";

const statusColors: Record<string, string> = {
  "In Progress": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  Completed:     "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
};

function EducationCard({ edu, index }: { edu: (typeof education)[number]; index: number }) {
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
    <div
      ref={ref}
      className={`reveal-left ${visible ? "in-view" : ""} relative flex gap-6`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
      {/* Dot */}
      <div className="flex-shrink-0 hidden sm:flex">
        <div
          className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/10 flex items-center justify-center z-10 mt-1 transition-transform duration-500 ${
            visible ? "scale-100" : "scale-0"
          }`}
          style={{ transitionDelay: visible ? `${index * 120 + 200}ms` : "0ms" }}
        >
          <GraduationCap size={18} className="text-emerald-500" />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
            <div className="flex items-center gap-2 mt-1">
              <BookOpen size={13} className="text-slate-400" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{edu.institution}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{edu.department}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[edu.status] || statusColors["In Progress"]}`}>
              {edu.status}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Calendar size={12} />
              {edu.period}
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{edu.description}</p>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Highlights</p>
          <ul className="space-y-1.5">
            {edu.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="Education"
          title="Academic Background"
          description="My educational journey — from Computer Science to language and full stack development."
        />
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent hidden sm:block" />
          <div className="space-y-8">
            {education.map((edu, i) => (
              <EducationCard key={edu.degree} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
