"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import ParticleBackground from "./ParticleBackground";

function useCounter(end: number, duration = 1400, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, end, duration]);
  return count;
}

type Phase = "typing" | "pausing" | "deleting" | "waiting";

function useTypewriter(texts: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("waiting");
  const key = texts.join("|");

  // reset when language switches
  useEffect(() => {
    setDisplayed("");
    setIdx(0);
    setPhase("waiting");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    const current = texts[idx] ?? "";
    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("typing"), 350);
      return () => clearTimeout(t);
    }
    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 2400);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (displayed.length === 0) {
        setIdx((i) => (i + 1) % texts.length);
        setPhase("waiting");
        return;
      }
      const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 32);
      return () => clearTimeout(t);
    }
    // typing
    if (displayed.length >= current.length) {
      setPhase("pausing");
      return;
    }
    const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    return () => clearTimeout(t);
  }, [displayed, idx, phase, texts]);

  return displayed;
}

export default function Hero() {
  const { t } = useLanguage();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const projects  = useCounter(5, 1200, ready);
  const languages = useCounter(4, 1000, ready);
  const roles = t.hero.roles as string[];
  const typedRole = useTypewriter(roles);

  return (
    <section className="hero-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-6 py-28 w-full relative z-10">

        {/* Greeting */}
        <div className="animate-fade-in-up delay-100 flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#7c3aed]" />
          <p className="text-[#7c3aed] text-xs font-semibold tracking-[0.2em] uppercase">
            {t.hero.greeting}
          </p>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-200 glow-name text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6">
          {t.hero.name}
          <span className="cursor-blink" />
        </h1>

        {/* Typewriter role */}
        <div className="animate-fade-in-up delay-300 mb-8">
          <p
            className="text-xl md:text-2xl font-semibold mb-1"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <span className="gradient-text">{typedRole}</span>
            <span
              className="inline-block w-0.5 h-5 bg-[#a855f7] ml-0.5 align-middle"
              style={{ animation: "blink 1.1s ease-in-out infinite" }}
            />
          </p>
          <p className="text-[#9ca3af] text-base md:text-lg">{t.hero.subtitle}</p>
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-400 text-[#9ca3af] text-base md:text-lg max-w-lg mb-12 leading-relaxed border-l-2 border-[#7c3aed]/40 pl-4">
          {t.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 flex flex-wrap gap-3 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold transition-colors duration-200 text-sm"
          >
            {t.hero.cta_projects}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#2e2e2e] hover:border-[#7c3aed] text-[#9ca3af] hover:text-white font-semibold transition-all duration-200 text-sm"
          >
            {t.hero.cta_cv}
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-600 flex flex-wrap items-center gap-0">
          {[
            { value: projects,  suffix: "+", label: t.hero.stat_projects },
            { value: languages, suffix: "",  label: t.hero.stat_languages },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className={i > 0 ? "px-6" : "pr-6"}>
                <p className="text-white font-bold text-2xl leading-none tabular-nums">
                  {s.value}{s.suffix}
                </p>
                <p className="text-[#9ca3af] text-xs mt-1">{s.label}</p>
              </div>
              {i < 1 && <span className="w-px h-8 bg-[#2e2e2e]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity duration-200 pointer-events-none">
        <span className="text-[#9ca3af] text-[10px] tracking-[0.2em] uppercase font-medium">scroll</span>
        <svg className="animate-bounce" width="16" height="16" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
