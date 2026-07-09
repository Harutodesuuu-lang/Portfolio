"use client";

import { useEffect, useRef, useState } from "react";
import { User, GraduationCap, Zap, Users, Target, Lightbulb } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { SectionWrapper, SectionTitle } from "./SectionWrapper";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let n = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            n += step;
            if (n >= target) { setCount(target); clearInterval(timer); }
            else setCount(n);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

const traits = [
  { icon: Zap,       label: "Fast Learner",    desc: "Rapidly absorbing new technologies" },
  { icon: Users,     label: "Team Player",      desc: "Thriving in collaborative environments" },
  { icon: Target,    label: "Problem Solver",   desc: "Breaking down complex challenges" },
  { icon: Lightbulb, label: "Creative Thinker", desc: "Finding elegant solutions" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="About Me"
          title="Passionate Developer & Lifelong Learner"
          description="Here's a little bit about who I am and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <User size={20} className="text-emerald-500" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                  Personal Summary
                </p>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Name",        value: personalInfo.name },
                  { label: "Location",    value: "Phnom Penh, Cambodia" },
                  { label: "Email",       value: personalInfo.email },
                  { label: "Phone",       value: personalInfo.phone },
                  { label: "Languages",   value: "Khmer (Native), English (Advanced)" },
                  { label: "Availability",value: "Open to Opportunities" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Education Highlights
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Bachelor's in Computer Science – Royal University of Phnom Penh",
                    "Bachelor's in English Language – Institute of Foreign Languages",
                    "Full Stack Generation 2 – ISTAD",
                  ].map((edu) => (
                    <li key={edu} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionWrapper>

          <div className="space-y-8">
            <SectionWrapper delay={0.1}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 shadow-sm"
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                    <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {traits.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-emerald-500" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">{label}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
