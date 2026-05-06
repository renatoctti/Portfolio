"use client";

import { Printer, Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

// ── Helper components ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 print:mb-5">
      <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#7c3aed] print:text-purple-700 mb-3 pb-1.5 border-b border-[#2e2e2e] print:border-gray-200">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-[#9ca3af]/50 print:text-gray-400 uppercase tracking-wider mb-2">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-0.5 bg-[#242424] print:bg-gray-100 border border-[#3a3a3a] print:border-gray-200 rounded text-[#9ca3af] print:text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  location,
  bullets,
  privateProjects,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  privateProjects?: string[];
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          <span className="text-white print:text-gray-900 font-semibold text-sm">{title}</span>
          <span className="text-[#7c3aed] print:text-purple-700 font-semibold text-sm"> · {company}</span>
        </div>
        <span className="text-[#9ca3af] print:text-gray-500 text-xs whitespace-nowrap">{period}</span>
      </div>
      <p className="text-[#9ca3af]/60 print:text-gray-400 text-xs mb-2">{location}</p>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">
            <span className="text-[#7c3aed] print:text-purple-600 mt-0.5 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
      {privateProjects && (
        <p className="mt-2 text-[10px] text-[#9ca3af]/40 print:text-gray-400 italic">
          Projects developed (confidential): {privateProjects.join(", ")}
        </p>
      )}
    </div>
  );
}

function ProjectItem({
  title,
  subtitle,
  github,
  bullets,
}: {
  title: string;
  subtitle: string;
  github?: string;
  bullets: string[];
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-0.5">
        <span className="text-white print:text-gray-900 font-semibold text-sm">{title}</span>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7c3aed] print:text-purple-700 text-[10px] hover:underline"
          >
            GitHub ↗
          </a>
        )}
      </div>
      <p className="text-[#9ca3af]/60 print:text-gray-400 text-xs mb-1.5">{subtitle}</p>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">
            <span className="text-[#7c3aed] print:text-purple-600 mt-0.5 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EduItem({
  degree,
  school,
  period,
  note,
}: {
  degree: string;
  school: string;
  period: string;
  note?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-white print:text-gray-900 font-semibold text-sm">{degree}</p>
        <p className="text-[#9ca3af]/70 print:text-gray-500 text-xs">{school}</p>
        {note && <p className="text-[#9ca3af]/50 print:text-gray-400 text-xs italic">{note}</p>}
      </div>
      <span className="text-[#9ca3af] print:text-gray-500 text-xs whitespace-nowrap">{period}</span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] print:bg-white py-10 px-4 print:py-0 print:px-0">

      {/* Toolbar — hidden when printing */}
      <div className="max-w-4xl mx-auto mb-5 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="text-[#9ca3af] text-sm hover:text-white transition-colors flex items-center gap-1.5"
        >
          ← Back to Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg transition-colors text-sm font-medium"
        >
          <Printer size={15} />
          Download / Print PDF
        </button>
      </div>

      {/* CV Paper */}
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] print:bg-white rounded-2xl print:rounded-none shadow-xl print:shadow-none p-10 print:p-8">

        {/* ── Header ── */}
        <div className="border-b border-[#2e2e2e] print:border-gray-200 pb-5 mb-6">
          <h1 className="text-3xl font-bold text-white print:text-gray-900 mb-0.5">
            Renato Cazzoletti
          </h1>
          <p className="text-[#a855f7] print:text-purple-700 font-medium text-base mb-4">
            Software Engineer · AI Automation & Full-Stack · Python, React, Java
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#9ca3af] print:text-gray-600">
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> +55 (31) 99520-4041
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={11} /> renato.cazzoletti7@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> Belo Horizonte, MG — Brazil
            </span>
            <a
              href="https://linkedin.com/in/renatocazzoletti-179862299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors"
            >
              <Linkedin size={11} /> linkedin.com/in/renatocazzoletti
            </a>
            <a
              href="https://github.com/renatoctti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors"
            >
              <Github size={11} /> github.com/renatoctti
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-white print:text-gray-600 transition-colors"
            >
              <Globe size={11} /> Portfolio
            </a>
          </div>
        </div>

        {/* ── Summary ── */}
        <Section title="Summary">
          <p className="text-xs text-[#9ca3af] print:text-gray-700 leading-relaxed">
            Software Engineering student at PUC Minas (graduating Dec 2026) and Technology Intern at Vennx, where I build AI-powered automation systems, REST API integrations, and full-stack SaaS products. Experienced in Python, Java (Spring Boot), and React. International academic background — exchange at Politecnico di Milano — with fluency in 4 languages, enabling effective collaboration in global teams.
          </p>
        </Section>

        {/* ── Skills ── */}
        <Section title="Technical Skills">
          <div className="grid grid-cols-3 gap-5">
            <SkillGroup
              title="Core"
              skills={["Python", "AI / LLM", "RAG Pipelines", "REST API", "Automation", "Web Scraping", "Playwright"]}
            />
            <SkillGroup
              title="Development"
              skills={["Java / Spring Boot", "React", "TypeScript", "Next.js", "SQL", "GOLANG", "Flask", "PHP"]}
            />
            <SkillGroup
              title="Tools & Methods"
              skills={["Git", "Supabase", "Linux / Red Hat", "Agile / Scrum / Kanban", "Low-code / No-code"]}
            />
          </div>
        </Section>

        {/* ── Experience ── */}
        <Section title="Professional Experience">
          <ExperienceItem
            title="Technology Intern"
            company="Vennx"
            period="Feb 2026 – Present"
            location="Belo Horizonte, MG"
            bullets={[
              "Built AI-powered LinkedIn outreach bot with GPT-4o two-stage qualification pipeline across 36 topic × pain-point combinations",
              "Rebuilt DeepMeet platform from scratch: tenant/user permission architecture, MS Graph API integration, 30+ production bugs resolved",
              "Developed Vennx Calculator — multi-step web estimator with HubSpot CRM integration and OTP email lead qualification",
              "Created Opportunity Detector: Teams transcript analysis tool that auto-syncs deals and contacts into HubSpot pipeline",
              "Built REST API integrations, Python automation scripts, and web scraping solutions for data extraction and process optimization",
              "Leveraged Supabase Edge Functions, low-code/no-code platforms, and Generative AI to accelerate delivery",
            ]}
            privateProjects={["LinkedIn Lead Bot", "DeepMeet", "Vennx Calculator", "Opportunity Detector"]}
          />
          <ExperienceItem
            title="Market Research Administrator"
            company="Italian-Brazilian Chamber of Commerce, Industry and Agriculture of MG"
            period="Jun 2021 – Dec 2021"
            location="Belo Horizonte, MG"
            bullets={[
              "Conducted market data analysis and trend research to support strategic decision-making",
              "Built client communication skills in a multilingual environment; contributed to technical diploma in Administration",
            ]}
          />
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects">
          <ProjectItem
            title="DePinho Multimídias"
            subtitle="E-commerce · Java, Spring Boot, MySQL, Maven"
            github="https://github.com/renatoctti/DePinhoMultimidias"
            bullets={[
              "Full e-commerce platform for automotive multimedia with smart car-model compatibility filter and MercadoPago payment integration",
              "Role-based auth with Spring Security; admin panel for catalog management, stock control, and order tracking",
            ]}
          />
          <ProjectItem
            title="TicketTrade"
            subtitle="Marketplace · Java, Spring Boot, SQL, JavaScript"
            bullets={[
              "Marketplace for buying, selling, and trading event tickets with secure auth flow for buyers and sellers",
              "RESTful backend with Java/Spring Boot, SQL database integration, collaborative development with Git",
            ]}
          />
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          <div className="space-y-3">
            <EduItem
              degree="B.S. Software Engineering"
              school="PUC Minas"
              period="2023 – Dec 2026"
            />
            <EduItem
              degree="Chemical Engineering — Exchange Program"
              school="Politecnico di Milano"
              period="Aug – Dec 2022"
              note="International academic experience in Milan, Italy"
            />
            <EduItem
              degree="High School & Technical Diploma in Administration"
              school="Fundação Torino — International School"
              period="2006 – 2022"
            />
          </div>
        </Section>

        {/* ── Certifications + Languages ── */}
        <div className="grid grid-cols-2 gap-8">
          <Section title="Certifications">
            <ul className="space-y-1.5">
              {[
                "Red Hat System Administration (RHCSA)",
                "Technical Diploma — Administration & Public Management",
                "International High School Diploma — Fundação Torino",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs text-[#9ca3af] print:text-gray-700">
                  <span className="text-[#7c3aed] print:text-purple-600 mt-0.5">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Languages">
            <div className="space-y-1.5">
              {[
                { lang: "Portuguese", level: "Native" },
                { lang: "Italian", level: "Native / Fluent" },
                { lang: "English", level: "Advanced / Professional" },
                { lang: "Spanish", level: "Intermediate" },
              ].map((l) => (
                <div key={l.lang} className="flex items-center justify-between text-xs">
                  <span className="text-white print:text-gray-900 font-medium">{l.lang}</span>
                  <span className="text-[#9ca3af] print:text-gray-500">{l.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

      </div>
    </div>
  );
}
