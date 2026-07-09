"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Server, Database, Wrench, Brain, Globe } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SectionTitle } from "./SectionWrapper";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  "Tools & Platforms": Wrench,
  "Soft Skills": Brain,
};

const skillColors: Record<string, string> = {
  React: "#61DAFB", "Next.js": "#fff", TypeScript: "#3178C6",
  HTML5: "#E34F26", CSS3: "#1572B6", "Tailwind CSS": "#06B6D4",
  JavaScript: "#F7DF1E", Java: "#F89820", "Spring Boot": "#6DB33F",
  "Spring Security": "#6DB33F", "REST API": "#10B981", PostgreSQL: "#336791",
  Git: "#F05032", GitHub: "#fff", "IntelliJ IDEA": "#FE315D",
  "VS Code": "#007ACC", Postman: "#FF6C37", Docker: "#2496ED",
  Figma: "#F24E1E",
};

function SkillBadge({ label }: { label: string }) {
  const color = skillColors[label] || "#10B981";
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 cursor-default">
      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
    </div>
  );
}

function SkillCard({
  group,
  Icon,
  index,
}: {
  group: (typeof skills)[number];
  Icon: React.ElementType;
  index: number;
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
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""} group p-6 rounded-2xl bg-gradient-to-br ${group.color} border ${group.borderColor} hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/60 dark:bg-slate-900/60 ${group.iconColor}`}>
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 dark:text-slate-200">{group.category}</h3>
          <p className="text-xs text-slate-500">{group.items.length} skills</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => <SkillBadge key={skill} label={skill} />)}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Skills"
          title="Technologies & Expertise"
          description="A curated set of tools and technologies I use to build modern, scalable applications."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, i) => (
            <SkillCard
              key={group.category}
              group={group}
              Icon={categoryIcons[group.category] || Code2}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
