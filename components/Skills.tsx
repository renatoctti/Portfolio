"use client";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";

const techSkills = [
  "Python",
  "AI / LLM",
  "REST API",
  "Web Scraping",
  "Automation",
  "React",
  "TypeScript",
  "Supabase",
  "Supabase Edge Functions",
  "Next.js",
  "Flask",
  "Linux / Red Hat",
  "Low-code / No-code",
  "SaaS",
];

const spokenLanguages = [
  { code: "PT", name: "Português", level: "Native" },
  { code: "IT", name: "Italiano",  level: "Native" },
  { code: "EN", name: "English",   level: "Full Professional" },
  { code: "ES", name: "Español",   level: "Professional Working" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="text-[#7c3aed]">/</span> {t.skills.section_title}
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <AnimateIn>
              <h3 className="text-lg font-semibold text-white mb-6">{t.skills.tech_title}</h3>
            </AnimateIn>
            <AnimateIn>
              <div className="flex flex-wrap gap-2.5">
                {techSkills.map((skill) => (
                  <span key={skill} className="skill-shimmer px-4 py-2 bg-[#242424] border border-[#2e2e2e] rounded-lg text-sm text-[#9ca3af] hover:border-[#7c3aed] hover:text-white transition-colors duration-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div>
            <AnimateIn>
              <h3 className="text-lg font-semibold text-white mb-6">{t.skills.lang_title}</h3>
            </AnimateIn>
            <div className="space-y-4">
              {spokenLanguages.map((lang, i) => (
                <AnimateIn key={lang.name} delay={i * 80} from="right">
                  <div className="flex items-center gap-4 bg-[#242424] border border-[#2e2e2e] rounded-xl p-4 hover:border-[#7c3aed]/40 transition-colors duration-200">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a855f7] text-xs font-bold font-mono flex-shrink-0">
                      {lang.code}
                    </span>
                    <div>
                      <p className="text-white font-semibold">{lang.name}</p>
                      <p className="text-[#9ca3af] text-sm">{lang.level}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
