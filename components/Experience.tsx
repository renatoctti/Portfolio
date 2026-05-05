"use client";
import { useLanguage } from "@/lib/LanguageContext";
import AnimateIn from "./AnimateIn";
import { useInView } from "@/lib/useInView";

export default function Experience() {
  const { t } = useLanguage();
  const { ref: lineRef, inView: lineInView } = useInView(0.1);

  const jobs = [
    {
      title: t.experience.vennx_title,
      company: t.experience.vennx_company,
      period: t.experience.vennx_period,
      location: t.experience.vennx_location,
      description: t.experience.vennx_desc,
      tags: ["Python", "AI/LLM", "REST API", "Playwright", "Supabase", "React"],
      current: true,
    },
    {
      title: t.experience.camara_title,
      company: t.experience.camara_company,
      period: t.experience.camara_period,
      location: t.experience.camara_location,
      description: t.experience.camara_desc,
      tags: ["Market Research", "Data Analysis", "Client Relations"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="text-[#7c3aed]">/</span> {t.experience.section_title}
          </h2>
        </AnimateIn>

        <div className="relative" ref={lineRef}>
          {/* Animated timeline line */}
          <div className="absolute left-4 top-0 w-px bg-[#2e2e2e] hidden md:block" style={{ height: "100%" }}>
            <div
              className="w-full bg-[#7c3aed] origin-top transition-all duration-[1200ms] ease-out"
              style={{ height: lineInView ? "100%" : "0%" }}
            />
          </div>

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <AnimateIn key={job.company} delay={i * 150} from="left">
                <div className="md:pl-12 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 hidden md:block transition-all duration-500 ${
                      job.current ? "bg-[#7c3aed] border-[#7c3aed]" : "bg-[#242424] border-[#2e2e2e]"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 400}ms` }}
                  />

                  <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl p-6 hover:border-[#7c3aed]/50 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-lg">{job.title}</h3>
                          {job.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#a855f7] font-semibold uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
                              {t.experience.present}
                            </span>
                          )}
                        </div>
                        <p className="text-[#7c3aed] font-semibold">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#9ca3af] text-sm">{job.period}</p>
                        <p className="text-[#9ca3af] text-sm">{job.location}</p>
                      </div>
                    </div>

                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-[#7c3aed]/10 text-[#a855f7] rounded-md border border-[#7c3aed]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
