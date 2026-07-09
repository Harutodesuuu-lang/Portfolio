"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { SectionTitle } from "./SectionWrapper";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isFeatured = project.featured;

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
      className={`reveal ${visible ? "in-view" : ""} group relative rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 ${
        isFeatured
          ? "border-emerald-500/30 dark:border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-white to-cyan-500/5 dark:from-emerald-500/5 dark:via-slate-900 dark:to-cyan-500/5"
          : "border-slate-200/60 dark:border-slate-700/40 bg-white dark:bg-slate-800/60"
      }`}
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
    >
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
          <Star size={12} fill="currentColor" />
          Featured Project
        </div>
      )}

      <div className={`flex flex-col ${isFeatured ? "lg:flex-row" : "md:flex-row"} gap-0`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${isFeatured ? "lg:w-1/2 h-64 lg:h-auto" : "md:w-80 h-56 md:h-auto"} flex-shrink-0`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,640px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              project.status === "In Progress"
                ? "bg-amber-500/90 text-white"
                : "bg-emerald-500/90 text-white"
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-600/40">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 mb-3 transition-colors"
            >
              <span>{expanded ? "Hide" : "View"} Features</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-1.5 pb-4">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:opacity-80 hover:scale-105 active:scale-95 transition-all"
            >
              <Github size={15} />
              GitHub
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/25"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills in full stack development, system design, and problem solving."
        />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
