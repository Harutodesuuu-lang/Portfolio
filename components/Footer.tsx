"use client";

import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

const socials = [
  { icon: Github,   label: "GitHub",   href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: Mail,     label: "Email",    href: `mailto:${personalInfo.email}` },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                Puthyseth<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Full Stack Developer building modern, scalable applications with Java, Spring Boot, React, and Next.js.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.getElementById(link.href.replace("#",""))?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:scale-110 hover:-translate-y-0.5 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
          <p className="flex items-center gap-1.5 text-sm text-slate-400">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> by Nhim Puthyseth &copy; {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:-translate-y-0.5 transition-all"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
