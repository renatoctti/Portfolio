export const cvContent = {
  en: {
    back: "← Back to Portfolio",
    download: "Download / Print PDF",
    tagline: "Full-Stack Software Engineer · AI / LLM Applications · TypeScript, Python, React, PostgreSQL, AWS",
    summary_title: "Professional Summary",
    summary:
      "Full-Stack Software Engineer with almost 2 years of professional experience shipping production systems end to end (TypeScript, Node.js, React, PostgreSQL, AWS) and LLM applications: agents, RAG and evaluation. Currently at One Investimentos, building financial-planning, due-diligence and billing products for a Brazilian wealth advisory firm; previously at Vennx, delivering AI-powered SaaS and automation. B.S. in Software Engineering student at PUC Minas (graduating Jun 2027). Based in Brazil (UTC-3), available for remote roles. Trilingual (Portuguese, Italian, English).",
    skills_title: "Technical Skills",
    skill_groups: [
      { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
      { title: "LLMs & Retrieval", skills: ["OpenAI models", "Anthropic Claude API", "OpenRouter", "RAG", "Embeddings", "pgvector", "Hybrid search (BM25 + embeddings)", "Prompt engineering"] },
      { title: "Agents & Evaluation", skills: ["Tool-calling agents", "LangGraph", "MCP servers", "Evaluation suites", "A/B model tests", "Deterministic guardrails"] },
      { title: "AI Coding Tools", skills: ["Claude Code (skills, hooks)", "Spec-driven development (SDD)", "ADRs"] },
      { title: "Backend & Frontend", skills: ["Node.js (NestJS)", "FastAPI", "REST API design", "Event-driven jobs", "Celery", "React", "Next.js"] },
      { title: "Data & Cloud", skills: ["PostgreSQL", "Drizzle ORM", "Supabase", "AWS", "Docker", "GitHub Actions (CI/CD)", "Git", "Linux"] },
      { title: "Testing", skills: ["Vitest", "pytest", "Unit / integration / E2E testing", "Code review"] },
    ],
    experience_title: "Professional Experience",
    experience: [
      {
        title: "Full Cycle Developer",
        company: "One Investimentos",
        period: "Sep 2026 – Present",
        location: "Nova Lima, MG · Brazilian wealth advisory firm (R$ 20B+ under advisory), BTG Pactual partner",
        bullets: [
          "Detailed Flight Plan (financial planning): led the discovery with the product owner (20 open questions, prototype, executable specs) and built it across back end and front end: a split-screen editor with a live preview synced in both directions, an 8-section planning document and a presentation mode that records the time spent on each section.",
          "Corporate due-diligence (KYC) platform: onboards and reviews corporate clients and their shareholders through to committee approval, cross-checking two external data providers, with a risk score, versioned dossiers and role-based access. Designed machine-readable JSON Schemas of its 393 fields so the company's AI assistant can read and edit plan and KYC data.",
          "Built an event-driven SharePoint sync (Microsoft Graph, certificate-based auth) behind a feature flag, and reworked managed-client billing: a configurable cut-off rule, consolidated and partial NFS-e issuance, a late-revenue flag and new columns in the data view used by analytics.",
          "Spec-first workflow with AI coding agents, ADRs, code review and browser QA: 31 PRs merged in two months, 1,200+ automated tests, CI/CD on AWS.",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Vennx",
        period: "Feb 2025 – Sep 2026",
        location: "Belo Horizonte, MG · AI-powered software, SaaS & automation",
        bullets: [
          "Developed the Opportunity Detector, which analyzes Microsoft Teams transcripts and syncs qualified deals and contacts into HubSpot CRM, eliminating 10+ hours/week of manual data entry. Rewrote its LLM filter to ignore contract-execution chatter: 8 qualified, 114 filtered and 0 false positives on 32 meetings, with Claude beating an OpenAI model in an A/B test.",
          "Designed DeepMeet (Deepgram, LLMs via OpenRouter, RAG), turning 100+ monthly Teams recordings into summaries, action items and business opportunities.",
          "Added deterministic guardrails around an LLM-driven audit workflow so a join that matches zero rows reports 'indeterminate' instead of a false 'compliant', proven non-regressive against 42 existing recipes.",
          "Built 6 REST API integrations (HubSpot, Teams, Deepgram, OpenRouter, Unipile, Supabase) and a LinkedIn prospecting platform (Python, FastAPI, Celery; 500+ leads/month).",
        ],
      },
      {
        title: "Market Research Intern",
        company: "Italian-Brazilian Chamber of Commerce",
        period: "Jun 2021 – Dec 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Market research and trend analysis for member companies, supporting clients in Portuguese, Italian and English.",
        ],
      },
    ],
    projects_title: "Projects",
    projects: [
      {
        title: "Melô — LLM customer-service agent (open source)",
        subtitle: "Python, Claude via OpenRouter, MCP, pytest · github.com/renatoctti/emporio-da-musica-agent",
        bullets: [
          "Agentic tool-calling support agent: hand-written loop, business rules in code, human handoff, MCP server; also rebuilt in LangGraph.",
          "33-scenario evaluation (incl. prompt injection) of tool calls, replies and price grounding; a weekly CI run fails on regression. 500+ tests.",
        ],
      },
      {
        title: "rag-search-eval — measured RAG search on Postgres + pgvector (open source)",
        subtitle: "TypeScript, pgvector, Docker, GitHub Actions · github.com/renatoctti/rag-search-eval",
        bullets: [
          "Measured BM25, embeddings, hybrid (RRF) and reranked search on BEIR SciFact with bootstrap confidence intervals and a CI gate: the hybrid was not distinguishable from embeddings alone, and the reranker was worse.",
        ],
      },
      {
        title: "brasilapi-mcp — MCP server for Brazilian public data (open source)",
        subtitle: "TypeScript, MCP SDK, Node.js, GitHub Actions · github.com/renatoctti/brasilapi-mcp",
        bullets: [
          "Published to npm and the MCP registry: CNPJ lookup with partners, CEP, offline CNPJ/CPF validation, holidays; 19 tests, CI.",
        ],
      },
      {
        title: "coding-agent-gym — evaluating coding agents (open source, in progress)",
        subtitle: "TypeScript, Node.js 24, node:test · github.com/renatoctti/coding-agent-gym",
        bullets: [
          "RL-style environment and harness for bug-fixing tasks: sandboxed tests under Node's permission model, bootstrap confidence intervals, pass@k and a golden-replay CI gate. No results published yet.",
        ],
      },
    ],
    education_title: "Education",
    education: [
      { degree: "B.S. in Software Engineering", school: "PUC Minas", period: "Jan 2023 – Jun 2027 (expected)" },
      { degree: "Chemical Engineering (coursework)", school: "Politecnico di Milano, Italy", period: "Aug 2022 – Dec 2022" },
      { degree: "International High School Diploma & Technical Diploma in Administration", school: "Fundação Torino", period: "2022" },
    ],
    certs_title: "Training",
    certs: [
      "Red Hat System Administration (certificate of attendance), 2024",
    ],
    langs_title: "Languages",
    langs: [
      { lang: "Portuguese", level: "Native" },
      { lang: "Italian", level: "Native / Fluent" },
      { lang: "English", level: "Professional / Advanced" },
      { lang: "Spanish", level: "Intermediate" },
    ],
  },
  pt: {
    back: "← Voltar ao Portfolio",
    download: "Baixar / Imprimir PDF",
    tagline: "Engenheiro de Software Full-Stack · Aplicações de IA / LLM · TypeScript, Python, React, PostgreSQL, AWS",
    summary_title: "Resumo Profissional",
    summary:
      "Engenheiro de Software Full-Stack com quase 2 anos de experiência profissional entregando sistemas em produção de ponta a ponta (TypeScript, Node.js, React, PostgreSQL, AWS) e aplicações com LLM: agentes, RAG e avaliação. Atualmente na One Investimentos, construindo produtos de planejamento financeiro, due diligence e cobrança para uma assessoria de investimentos brasileira; antes, na Vennx, entregando SaaS com IA e automação. Cursando Engenharia de Software na PUC Minas (conclusão em jun/2027). Moro no Brasil (UTC-3) e estou disponível para vagas remotas. Trilíngue (português, italiano, inglês).",
    skills_title: "Habilidades Técnicas",
    skill_groups: [
      { title: "Linguagens", skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
      { title: "LLMs e Busca", skills: ["Modelos da OpenAI", "API do Claude (Anthropic)", "OpenRouter", "RAG", "Embeddings", "pgvector", "Busca híbrida (BM25 + embeddings)", "Prompt engineering"] },
      { title: "Agentes e Avaliação", skills: ["Agentes com chamada de ferramentas", "LangGraph", "Servidores MCP", "Suítes de avaliação", "Testes A/B de modelos", "Guardas determinísticas"] },
      { title: "Ferramentas de IA para Código", skills: ["Claude Code (skills, hooks)", "Desenvolvimento orientado a especificação (SDD)", "ADRs"] },
      { title: "Backend e Frontend", skills: ["Node.js (NestJS)", "FastAPI", "Design de REST API", "Jobs orientados a eventos", "Celery", "React", "Next.js"] },
      { title: "Dados e Cloud", skills: ["PostgreSQL", "Drizzle ORM", "Supabase", "AWS", "Docker", "GitHub Actions (CI/CD)", "Git", "Linux"] },
      { title: "Testes", skills: ["Vitest", "pytest", "Testes unitários / integração / E2E", "Code review"] },
    ],
    experience_title: "Experiência Profissional",
    experience: [
      {
        title: "Desenvolvedor Full Cycle",
        company: "One Investimentos",
        period: "Set 2026 – Presente",
        location: "Nova Lima, MG · Assessoria de investimentos (R$ 20 bi+ sob assessoria), parceira do BTG Pactual",
        bullets: [
          "Plano de Voo Detalhado (planejamento financeiro): conduziu o levantamento com a PO (20 dúvidas, protótipo, especificações executáveis) e construiu em back end e front end: editor em tela dividida com prévia ao vivo sincronizada nos dois sentidos, documento de planejamento com 8 seções e modo apresentação que registra o tempo gasto em cada seção.",
          "Plataforma de due diligence (KYC) corporativa: faz o onboarding e a revisão de clientes corporativos e seus sócios até a aprovação em comitê, cruzando dois provedores externos, com pontuação de risco, dossiês versionados e acesso por perfil. Projetou JSON Schemas legíveis por máquina dos seus 393 campos para o assistente de IA da empresa ler e editar dados do plano e do KYC.",
          "Construiu uma sincronização com o SharePoint orientada a eventos (Microsoft Graph, autenticação por certificado) atrás de feature flag e reformulou a cobrança de clientes gerenciados: regra de corte configurável, emissão de NFS-e consolidada e parcial, sinalização de receita atrasada e novas colunas na view de dados do analytics.",
          "Fluxo com especificação primeiro, agentes de IA, ADRs, code review e QA no navegador: 31 PRs mesclados em dois meses, mais de 1.200 testes automatizados, CI/CD na AWS.",
        ],
      },
      {
        title: "Desenvolvedor Full-Stack",
        company: "Vennx",
        period: "Fev 2025 – Set 2026",
        location: "Belo Horizonte, MG · Software com IA, SaaS & automação",
        bullets: [
          "Desenvolveu o Detector de Oportunidades, que analisa transcrições do Microsoft Teams e sincroniza negócios e contatos qualificados no HubSpot CRM, eliminando mais de 10 horas semanais de digitação manual. Reescreveu seu filtro com LLM para ignorar conversa de execução de contrato: 8 qualificadas, 114 filtradas e 0 falsos positivos em 32 reuniões, com o Claude superando um modelo da OpenAI num teste A/B.",
          "Projetou o DeepMeet (Deepgram, LLMs via OpenRouter, RAG), que transforma mais de 100 gravações mensais do Teams em resumos, itens de ação e oportunidades de negócio.",
          "Adicionou guardas determinísticas a um fluxo de auditoria movido por LLM: um cruzamento que não casa nenhuma linha informa 'indeterminado' em vez de um falso 'conforme', com prova de não regressão contra 42 receitas existentes.",
          "Construiu 6 integrações via API REST (HubSpot, Teams, Deepgram, OpenRouter, Unipile, Supabase) e uma plataforma de prospecção no LinkedIn (Python, FastAPI, Celery; mais de 500 leads/mês).",
        ],
      },
      {
        title: "Estagiário de Pesquisa de Mercado",
        company: "Câmara Ítalo-Brasileira de Comércio",
        period: "Jun 2021 – Dez 2021",
        location: "Belo Horizonte, MG",
        bullets: [
          "Pesquisa de mercado e análise de tendências para empresas associadas, com atendimento a clientes em português, italiano e inglês.",
        ],
      },
    ],
    projects_title: "Projetos",
    projects: [
      {
        title: "Melô — agente de atendimento com LLM (código aberto)",
        subtitle: "Python, Claude via OpenRouter, MCP, pytest · github.com/renatoctti/emporio-da-musica-agent",
        bullets: [
          "Agente de suporte com chamada de ferramentas: laço escrito à mão, regras de negócio no código, transferência para humano, servidor MCP; também reconstruído em LangGraph.",
          "Avaliação de 33 cenários (incluindo prompt injection) de chamadas de ferramentas, respostas e fundamentação de preços; uma execução semanal no CI falha em caso de regressão. Mais de 500 testes.",
        ],
      },
      {
        title: "rag-search-eval — busca para RAG medida em Postgres + pgvector (código aberto)",
        subtitle: "TypeScript, pgvector, Docker, GitHub Actions · github.com/renatoctti/rag-search-eval",
        bullets: [
          "Mediu BM25, embeddings, busca híbrida (RRF) e busca com reranking no BEIR SciFact, com intervalos de confiança por bootstrap e portão de CI: o híbrido não se distinguiu só dos embeddings, e o reranker foi pior.",
        ],
      },
      {
        title: "brasilapi-mcp — servidor MCP de dados públicos brasileiros (código aberto)",
        subtitle: "TypeScript, MCP SDK, Node.js, GitHub Actions · github.com/renatoctti/brasilapi-mcp",
        bullets: [
          "Publicado no npm e no registro de MCP: consulta de CNPJ com sócios, CEP, validação de CNPJ/CPF offline, feriados; 19 testes, CI.",
        ],
      },
      {
        title: "coding-agent-gym — avaliação de agentes de código (código aberto, em andamento)",
        subtitle: "TypeScript, Node.js 24, node:test · github.com/renatoctti/coding-agent-gym",
        bullets: [
          "Ambiente no estilo RL e harness para tarefas de correção de bug: testes em sandbox sob o modelo de permissões do Node, intervalos de confiança por bootstrap, pass@k e portão de CI de replay dourado. Ainda sem resultados publicados.",
        ],
      },
    ],
    education_title: "Formação Acadêmica",
    education: [
      { degree: "Bacharelado em Engenharia de Software", school: "PUC Minas", period: "Jan 2023 – Jun 2027 (previsão)" },
      { degree: "Engenharia Química (disciplinas cursadas)", school: "Politecnico di Milano, Itália", period: "Ago 2022 – Dez 2022" },
      { degree: "Ensino Médio Internacional & Diploma Técnico em Administração", school: "Fundação Torino", period: "2022" },
    ],
    certs_title: "Formação Complementar",
    certs: [
      "Administração de Sistemas Red Hat (certificado de participação), 2024",
    ],
    langs_title: "Idiomas",
    langs: [
      { lang: "Português", level: "Nativo" },
      { lang: "Italiano", level: "Nativo / Fluente" },
      { lang: "Inglês", level: "Profissional / Avançado" },
      { lang: "Espanhol", level: "Intermediário" },
    ],
  },
};
