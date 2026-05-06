"use client";
import { useState } from "react";
import { Bot, Mic, Calculator, BarChart2, Car, Ticket } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";

type ProjectIcon = typeof Bot;

export default function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const projects = [
    {
      title: t.projects.linkedin_bot_title,
      description: t.projects.linkedin_bot_desc as string[],
      stack: ["Python", "Flask", "Supabase"],
      integrations: ["Unipile API", "OpenRouter API", "GPT-4o"],
      icon: Bot as ProjectIcon,
      github: null as string | null,
      private: true,
    },
    {
      title: t.projects.deepmeet_title,
      description: t.projects.deepmeet_desc as string[],
      stack: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Edge Functions"],
      integrations: ["MS Graph API", "Deepgram API", "OpenRouter API", "Supabase Auth"],
      icon: Mic as ProjectIcon,
      github: null as string | null,
      private: true,
    },
    {
      title: t.projects.calculadora_title,
      description: t.projects.calculadora_desc as string[],
      stack: ["React 19", "TanStack Router", "Tailwind", "Supabase", "Framer Motion", "Zod"],
      integrations: ["HubSpot API", "Supabase Auth", "Email OTP"],
      icon: Calculator as ProjectIcon,
      github: null as string | null,
      private: true,
    },
    {
      title: t.projects.oportunidades_title,
      description: t.projects.oportunidades_desc as string[],
      stack: ["Python", "pandas"],
      integrations: ["OpenRouter API", "GPT-4", "HubSpot API", "Supabase", "Deepgram"],
      icon: BarChart2 as ProjectIcon,
      github: null as string | null,
      private: true,
    },
    {
      title: t.projects.depinho_title,
      description: t.projects.depinho_desc as string[],
      stack: ["Java", "Spring Boot", "MySQL", "Maven"],
      integrations: ["REST API", "JDBC", "Vercel Deploy"],
      icon: Car as ProjectIcon,
      github: "https://github.com/renatoctti/DePinhoMultimidias",
      private: false,
    },
    {
      title: t.projects.tickettrade_title,
      description: t.projects.tickettrade_desc as string[],
      stack: ["Java", "Spring Boot", "SQL", "JavaScript", "HTML", "CSS"],
      integrations: ["REST API", "Git"],
      icon: Ticket as ProjectIcon,
      github: null as string | null,
      private: false,
    },
  ];

  const total = projects.length;
  const project = projects[active];

  const go = (next: number) => {
    if (animating || next === active) return;
    setDir(next > active ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setActive(next);
      setAnimating(false);
    }, 220);
  };

  const prev = () => go(Math.max(0, active - 1));
  const next = () => go(Math.min(total - 1, active + 1));

  return (
    <section id="projects" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <AnimateIn className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-[#7c3aed]">/</span> {t.projects.section_title}
          </h2>
          <span
            className="text-[#9ca3af] text-sm tabular-nums hidden sm:block"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </AnimateIn>

        {/* Carousel */}
        <AnimateIn>
          <div className="relative flex items-stretch gap-3">

            {/* Left arrow */}
            <button
              onClick={prev}
              disabled={active === 0}
              className="flex-shrink-0 w-11 flex items-center justify-center rounded-xl border border-[#2e2e2e] text-[#9ca3af] hover:border-[#7c3aed] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 self-stretch"
              aria-label="Previous project"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="11 2 5 8 11 14" />
              </svg>
            </button>

            {/* Outer: carousel fade/slide */}
            <div
              className="flex-1"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? `translateX(${dir === "right" ? "-16px" : "16px"})` : "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
            >
              {/* Inner: spotlight */}
              <div
                className="rounded-xl bg-[#242424] border border-[#7c3aed]/40 p-7 md:p-8 card-spotlight"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mx", `${x}px`);
                  e.currentTarget.style.setProperty("--my", `${y}px`);
                }}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a855f7] flex-shrink-0">
                      <project.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl leading-tight">{project.title}</h3>
                      {project.private && (
                        <span className="inline-flex items-center gap-1.5 text-xs mt-1 text-[#9ca3af]">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          {t.projects.private_badge}
                        </span>
                      )}
                    </div>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-xs px-4 py-2 border border-[#2e2e2e] rounded-lg text-[#9ca3af] hover:border-[#7c3aed] hover:text-white transition-all"
                    >
                      {t.projects.view_code}
                    </a>
                  )}
                </div>

                {/* Two-column body */}
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Left: bullets */}
                  <div className="md:col-span-3">
                    <ul className="space-y-2.5">
                      {project.description.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[#9ca3af] text-sm leading-relaxed">
                          <span className="text-[#7c3aed] mt-0.5 flex-shrink-0 text-base">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: stack + integrations */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <p className="text-[#9ca3af]/50 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                        {t.projects.label_stack}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1.5 bg-[#7c3aed]/10 text-[#a855f7] rounded-lg border border-[#7c3aed]/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[#9ca3af]/50 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                        {t.projects.label_integrations}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.integrations.map((api) => (
                          <span key={api} className="text-xs px-3 py-1.5 bg-[#0ea5e9]/10 text-[#38bdf8] rounded-lg border border-[#0ea5e9]/20">
                            {api}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              disabled={active === total - 1}
              className="flex-shrink-0 w-11 flex items-center justify-center rounded-xl border border-[#2e2e2e] text-[#9ca3af] hover:border-[#7c3aed] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 self-stretch"
              aria-label="Next project"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="5 2 11 8 5 14" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Project ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  background: i === active ? "#7c3aed" : "#2e2e2e",
                }}
              />
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
