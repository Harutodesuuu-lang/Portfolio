"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const TYPING_ROLES = personalInfo.roles;

const FLOATING_TECH = [
  { label: "Java", color: "#f89820", cls: "left-[8%]  top-[16%]", delay: 0 },
  {
    label: "Spring",
    color: "#6db33f",
    cls: "right-[8%] top-[20%]",
    delay: 400,
  },
  { label: "React", color: "#61dafb", cls: "left-[4%]  top-[55%]", delay: 800 },
  {
    label: "Next.js",
    color: "#ffffff",
    cls: "right-[5%] top-[55%]",
    delay: 200,
  },
  { label: "TS", color: "#3178c6", cls: "left-[12%] top-[78%]", delay: 600 },
  { label: "PG", color: "#336791", cls: "right-[10%] top-[78%]", delay: 1000 },
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40,
        );
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % TYPING_ROLES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="animate-blink ml-0.5 text-emerald-500">|</span>
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-scale" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-scale"
          style={{ animationDelay: "3000ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl animate-pulse-scale"
          style={{ animationDelay: "6000ms" }}
        />
      </div>

      {/* Floating tech badges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {FLOATING_TECH.map((tech) => (
          <div
            key={tech.label}
            className={`absolute ${tech.cls} animate-float-slow`}
            style={{ animationDelay: `${tech.delay}ms` }}
          >
            <div className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-lg">
              <span className="text-xs font-bold" style={{ color: tech.color }}>
                {tech.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up delay-200">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
                Hello, I&apos;m
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              Nhim <span className="text-gradient">Puthyseth</span>
            </h1>

            <div className="animate-fade-in-up delay-400 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-10">
              <TypingText />
            </div>

            <p className="animate-fade-in-up delay-500 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 mb-10">
              <a
                href="/Nhim-Puthyseth-CV_.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all"
              >
                <ExternalLink size={16} />
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Socials */}
            <div className="animate-fade-in-up delay-700 flex items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 animate-scale-in delay-300">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-15 blur-xl animate-pulse-scale" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-60 animate-spin-slow" />
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-950">
                <Image
                  src={personalInfo.profileImage}
                  alt="Nhim Puthyseth"
                  fill
                  className="object-cover object-[50%_20%]"
                  priority
                  sizes="(max-width:640px) 192px,(max-width:1024px) 240px,288px"
                />
              </div>
              {/* Open to work badge */}
              <div className="animate-fade-in delay-1000 absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-1200 flex justify-center mt-16 pb-8">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-emerald-500 transition-colors animate-float"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
