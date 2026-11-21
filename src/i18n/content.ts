import {
  Server as ServerIcon,
  Layout as LayoutIcon,
  Smartphone as SmartphoneIcon,
  Wrench as WrenchIcon,
  Shield as ShieldIcon,
  Layers as LayersIcon,
  Activity as ActivityIcon,
  Code as CodeIcon,
} from 'lucide-vue-next'
import type { Experience, Education, SkillCategory, Project, ArchitecturePractice } from '@/types'

export type Locale = 'en' | 'es'

export interface Content {
  meta: { title: string; description: string; ogLocale: string }
  nav: { about: string; skills: string; experience: string; projects: string; education: string; talk: string; switchTo: string }
  hero: {
    availability: string
    titleLine1: string
    titleHighlight: string
    titleLine3: string
    intro: string
    introWith: string
    introAnd: string
    introEnd: string
    ctaContact: string
    ctaExperience: string
    stats: { value: string; label: string }[]
  }
  about: {
    roleBadge: string
    titleTop: string
    titleHighlight: string
    expBadge: string
    description: string
    card1Title: string
    card1Text: string
    card2Title: string
    card2Text: string
    closingPre: string
    closingStrong: string
    closingPost: string
  }
  skills: { titleTop: string; titleHighlight: string; subtitle: string; categories: SkillCategory[] }
  experience: {
    titleHighlight: string
    titleBottom: string
    subtitle: string
    philosophyLabel: string
    items: Experience[]
  }
  projects: { titleTop: string; titleHighlight: string; subtitle: string; repoLabel: string; items: Project[] }
  education: { titleTop: string; titleHighlight: string; items: Education[] }
  architecture: { titleTop: string; titleHighlight: string; subtitle: string; practices: ArchitecturePractice[] }
  contact: { titleTop: string; titleHighlight: string; text: string; email: string; github: string; badge: string }
  footer: { tagline: string }
  tagline: string
  philosophy: string
}

const skillIcons = { backend: ServerIcon, frontend: LayoutIcon, mobile: SmartphoneIcon, tools: WrenchIcon }

const en: Content = {
  meta: {
    title: 'Jordan Noblejas — Tech Lead · Backend Engineer (Laravel / PHP)',
    description:
      'Tech Lead and Backend Engineer with 5+ years building logistics, courier, payments and ERP systems. Laravel, Vue 3, legacy migrations, DevOps and applied AI.',
    ogLocale: 'en_US',
  },
  nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', talk: "Let's Talk", switchTo: 'ES' },
  hero: {
    availability: 'Open to Tech Lead and Senior Backend roles · Remote',
    titleLine1: 'Building Resilient',
    titleHighlight: 'Backend Systems',
    titleLine3: '& Teams',
    intro: 'Tech Lead and Backend Engineer building clean, scalable architectures with',
    introWith: 'Laravel',
    introAnd: 'and modern',
    introEnd: 'Vue.js interfaces, and bringing AI into the development workflow.',
    ctaContact: 'Get in touch',
    ctaExperience: 'View experience',
    stats: [
      { value: '5+ yrs', label: 'Experience' },
      { value: '12', label: 'Devs led' },
      { value: '3,000+', label: 'MRs merged' },
    ],
  },
  about: {
    roleBadge: 'Tech Lead • Backend Engineer',
    titleTop: 'About',
    titleHighlight: 'Me',
    expBadge: '5+ YRS EXP',
    description:
      'Systems Engineer with 5+ years building and running production systems for Shalom, one of Peru’s largest courier companies: logistics, courier, bus ticketing, payments and ERP. Since 2025 I have been the technical lead of a 12-developer team, working closely with QA and project managers.',
    card1Title: 'API & Backend Design',
    card1Text:
      'Laravel APIs designed API-first, legacy migrations to Laravel 13 / PHP 8.4 with parity testing, and query tuning on tables with hundreds of millions of rows.',
    card2Title: 'Technical Leadership',
    card2Text:
      'Code reviews, a custom Git flow, GitLab CI and Docker templates, documented standards, and an MCP server that connects our task ERP and GitLab to Claude Code.',
    closingPre: 'I focus on making',
    closingStrong: 'systems understandable',
    closingPost: ', maintainable and resilient, so teams can ship faster without piling up technical debt.',
  },
  skills: {
    titleTop: 'Technical',
    titleHighlight: 'Expertise',
    subtitle: 'Backend architecture at the core, with modern frontend, mobile, DevOps and applied AI around it.',
    categories: [
      {
        name: 'Backend & APIs',
        icon: skillIcons.backend,
        items: [
          { name: 'Laravel 5.8 → 13', desc: 'API-first, DDD / modular monolith, queues and outbox' },
          { name: 'MySQL & Redis', desc: 'Indexing and tuning on 300M+ row tables' },
          { name: 'Python / FastAPI', desc: 'Data APIs and internal tools' },
          { name: 'ERPNext / Frappe', desc: 'Custom business workflows' },
        ],
      },
      {
        name: 'Frontend',
        icon: skillIcons.frontend,
        items: [
          { name: 'Vue 3 + TypeScript', desc: 'Composition API, Pinia, Vue Router' },
          { name: 'Vue 2 legacy', desc: 'Options API, Vuex' },
          { name: 'Tailwind CSS', desc: 'Responsive design systems' },
          { name: 'Testing', desc: 'Vitest, Playwright, OpenAPI-generated types' },
        ],
      },
      {
        name: 'Mobile',
        icon: skillIcons.mobile,
        items: [
          { name: 'Flutter', desc: 'Field-operations apps' },
          { name: 'State management', desc: 'Bloc, Provider' },
          { name: 'Upgrades', desc: 'Legacy SDK migrations' },
          { name: 'CI for apps', desc: 'Environments and signing' },
        ],
      },
      {
        name: 'DevOps & AI',
        icon: skillIcons.tools,
        items: [
          { name: 'GitLab CI & Docker', desc: 'Team-wide templates' },
          { name: 'Linux, Nginx, PHP-FPM', desc: 'Teleport, Zabbix, DigitalOcean' },
          { name: 'Integrations', desc: 'Culqi 3DS, Niubiz, Nubefact, GA4' },
          { name: 'Applied AI', desc: 'Claude Code, MCP servers, agents, local LLMs' },
        ],
      },
    ],
  },
  experience: {
    titleHighlight: 'Experience',
    titleBottom: '& Impact',
    subtitle:
      'From backend developer to technical lead: the systems and decisions that shaped my work on logistics, payments and ERP platforms.',
    philosophyLabel: 'Core Philosophy',
    items: [
      {
        title: 'Technical Lead (Software Engineer)',
        company: 'Larael S.A.C. (Overskull group) · Shalom systems',
        date: 'Mar 2025 – Present',
        description:
          'Technical lead for 12 developers, coordinating with 5 QA engineers and 5 project managers on Shalom’s logistics, courier, ticketing and payment systems.',
        highlights: [
          'Assess the technical and performance impact of every requirement and validate whether QA findings are in scope.',
          'Review and merge the team’s code on a custom Git flow: 3,000+ MRs merged in 2025–2026 across 80+ repositories.',
          'Lead legacy API migrations (PHP 5 / Laravel 5.8) to Laravel 13 and PHP 8.4, with parity tests before each release.',
          'Production performance fixes: endpoints from 32.7 s to 1.2 s; database connections from 1,001 to 31 with APIs at ~0.1 s.',
          'Built the ShalomBus ticket-sales web app from scratch (Vue 3, TypeScript, Pinia, Tailwind v4) with Culqi 3DS payments.',
          'Built an MCP server connecting the task ERP and GitLab to Claude Code, with agents for managers, developers, QA and the tech lead.',
          'Standardized infrastructure: GitLab CI and Docker templates, a Laravel API starter, a standards portal, Teleport and Zabbix.',
        ],
        tags: ['Leadership', 'Laravel 13', 'Vue 3', 'GitLab CI', 'Docker', 'MCP / AI'],
      },
      {
        title: 'Software Engineer',
        company: 'Larael S.A.C. (Overskull group) · Shalom systems',
        date: 'Oct 2022 – Feb 2025',
        description:
          'Full stack and mobile developer on Shalom’s logistics and courier platforms.',
        highlights: [
          'Lead developer of Shalom’s public customer website (Vue): shipping quotes, tracking, complaints book, GA4 and anti-scraping.',
          'API-first REST services in Laravel and Vue 2 / Vue 3 frontends for logistics platforms.',
          'Flutter apps for field operations: cargo control, drivers, tracking and affiliates.',
          'Custom ERPNext / Frappe workflows, QR payments and electronic invoicing.',
          'Drove Git adoption: from manual file deployments to Bitbucket and then GitLab with merge requests.',
        ],
        tags: ['Laravel', 'Vue 2 / 3', 'Flutter', 'ERPNext', 'MySQL'],
      },
      {
        title: 'Software Engineer',
        company: 'Overskull S.A.C.',
        date: 'Jun 2021 – Sep 2022',
        description: 'Backend developer on high-load legacy logistics systems.',
        highlights: [
          'Maintained and optimized legacy logistics systems (PHP MVC, Laravel 5.8, MySQL).',
          'Tuned SQL queries and delivered integrations on monolithic systems.',
        ],
        tags: ['PHP MVC', 'Laravel 5.8', 'MySQL', 'Legacy'],
      },
    ],
  },
  projects: {
    titleTop: 'Open Source',
    titleHighlight: 'Projects',
    subtitle: 'Personal projects where I practice and showcase architecture outside of work.',
    repoLabel: 'View repository',
    items: [
      {
        name: 'Logistics App',
        url: 'https://github.com/orgs/jordantx-logistics/repositories',
        description:
          'A personal logistics system (shipments, payments, branches and customers) built to showcase clean architecture.',
        highlights: [
          'Laravel 13 backend with DDD modules, JWT auth, RBAC, idempotent orders and the outbox pattern.',
          'Vue 3 + TypeScript modular-monolith frontend with OpenAPI-generated types, Vitest and Playwright.',
        ],
        tags: ['Laravel 13', 'DDD', 'Vue 3', 'TypeScript', 'OpenAPI'],
      },
      {
        name: 'llama-scripts',
        url: 'https://github.com/JordanTX21/llama-sripts',
        description:
          'Scripts and presets to run local LLM servers with llama.cpp (CUDA) on Windows and Linux; my daily local coding assistant.',
        highlights: ['Shared presets per model, environment-based configuration and generic launchers.'],
        tags: ['llama.cpp', 'Local LLMs', 'Shell'],
      },
    ],
  },
  education: {
    titleTop: 'Academic',
    titleHighlight: 'Background',
    items: [
      {
        title: 'Systems Engineering (graduate)',
        institution: 'Universidad Nacional Tecnológica de Lima Sur (UNTELS)',
        date: '2018 – 2024',
        description:
          'Bachelor’s degree in progress: only the English language requirement remains, currently enrolled.',
      },
    ],
  },
  architecture: {
    titleTop: 'Software',
    titleHighlight: 'Architecture',
    subtitle: 'The standards I apply and teach so the codebase stays clean, decoupled and fast as the team grows.',
    practices: [
      {
        title: 'Clean API First',
        description:
          'Laravel logic split into FormRequests, Services and Resources. No fat controllers; formatting kept apart from data access.',
        icon: CodeIcon,
        color: 'border-l-blue-500',
        snippet: 'public function store(UserRequest $req, UserService $service)',
      },
      {
        title: 'Data Security',
        description:
          'Masked IDs with Hashids, strict token validation, and middleware pipelines that sanitize headers and payloads.',
        icon: ShieldIcon,
        color: 'border-l-primary-500',
        snippet: '$app->middleware([MaskPayloads::class]);',
      },
      {
        title: 'Parity-tested Migrations',
        description:
          'Legacy endpoints are migrated with tests that compare headers and bodies against the old system before each release.',
        icon: ActivityIcon,
        color: 'border-l-cyan-400',
        snippet: '$this->assertSameResponse($legacy, $modern);',
      },
      {
        title: 'Modular Frontends',
        description:
          'Vue code grouped by domain, not by file type, with shared composables and types generated from the API contract.',
        icon: LayersIcon,
        color: 'border-l-emerald-500',
        snippet: 'import type { Customer } from "@/core/api/generated"',
      },
    ],
  },
  contact: {
    titleTop: "Let's",
    titleHighlight: 'Connect',
    text: 'Looking for a Tech Lead or Senior Backend Engineer who can lead a team and still ship code? I’m open to remote roles and technical challenges.',
    email: 'Send me an email',
    github: 'View GitHub',
    badge: 'Actively building systems in',
  },
  footer: { tagline: 'Built with Vue 3 and Tailwind.' },
  tagline: 'Designing systems that scale, evolve, and don’t break under pressure.',
  philosophy: 'Scalable. Maintainable. Built to last.',
}

const es: Content = {
  meta: {
    title: 'Jordan Noblejas — Tech Lead · Backend Engineer (Laravel / PHP)',
    description:
      'Tech Lead y Backend Engineer con más de 5 años construyendo sistemas de logística, courier, pagos y ERP. Laravel, Vue 3, migración de legacy, DevOps e IA aplicada.',
    ogLocale: 'es_PE',
  },
  nav: { about: 'Sobre mí', skills: 'Habilidades', experience: 'Experiencia', projects: 'Proyectos', education: 'Educación', talk: 'Hablemos', switchTo: 'EN' },
  hero: {
    availability: 'Abierto a roles de Tech Lead y Senior Backend · Remoto',
    titleLine1: 'Construyo',
    titleHighlight: 'sistemas backend',
    titleLine3: 'y equipos sólidos',
    intro: 'Tech Lead y Backend Engineer que diseña arquitecturas limpias y escalables con',
    introWith: 'Laravel',
    introAnd: 'e interfaces modernas en',
    introEnd: 'Vue.js, e integra IA al flujo de desarrollo.',
    ctaContact: 'Contáctame',
    ctaExperience: 'Ver experiencia',
    stats: [
      { value: '5+ años', label: 'Experiencia' },
      { value: '12', label: 'Devs a cargo' },
      { value: '3 000+', label: 'MRs integrados' },
    ],
  },
  about: {
    roleBadge: 'Tech Lead • Backend Engineer',
    titleTop: 'Sobre',
    titleHighlight: 'mí',
    expBadge: '5+ AÑOS EXP',
    description:
      'Ingeniero de Sistemas con más de 5 años construyendo y operando sistemas en producción para Shalom, una de las mayores empresas de courier del Perú: logística, courier, venta de pasajes, pagos y ERP. Desde 2025 lidero técnicamente a un equipo de 12 desarrolladores, coordinando con QA y gestión.',
    card1Title: 'APIs y backend',
    card1Text:
      'APIs en Laravel con enfoque API-first, migraciones de legacy a Laravel 13 / PHP 8.4 con pruebas de paridad y optimización de consultas sobre tablas de cientos de millones de filas.',
    card2Title: 'Liderazgo técnico',
    card2Text:
      'Code reviews, un Git flow propio, plantillas de GitLab CI y Docker, estándares documentados y un servidor MCP que conecta nuestro ERP de tareas y GitLab con Claude Code.',
    closingPre: 'Me enfoco en que los',
    closingStrong: 'sistemas sean entendibles',
    closingPost: ', mantenibles y resistentes, para que el equipo avance rápido sin acumular deuda técnica.',
  },
  skills: {
    titleTop: 'Habilidades',
    titleHighlight: 'técnicas',
    subtitle: 'Arquitectura backend como base, con frontend moderno, móvil, DevOps e IA aplicada alrededor.',
    categories: [
      {
        name: 'Backend y APIs',
        icon: skillIcons.backend,
        items: [
          { name: 'Laravel 5.8 → 13', desc: 'API-first, DDD / monolito modular, colas y outbox' },
          { name: 'MySQL y Redis', desc: 'Índices y tuning en tablas de 300M+ filas' },
          { name: 'Python / FastAPI', desc: 'APIs de datos y herramientas internas' },
          { name: 'ERPNext / Frappe', desc: 'Flujos de negocio a medida' },
        ],
      },
      {
        name: 'Frontend',
        icon: skillIcons.frontend,
        items: [
          { name: 'Vue 3 + TypeScript', desc: 'Composition API, Pinia, Vue Router' },
          { name: 'Vue 2 legacy', desc: 'Options API, Vuex' },
          { name: 'Tailwind CSS', desc: 'Sistemas de diseño responsivos' },
          { name: 'Pruebas', desc: 'Vitest, Playwright, tipos generados desde OpenAPI' },
        ],
      },
      {
        name: 'Móvil',
        icon: skillIcons.mobile,
        items: [
          { name: 'Flutter', desc: 'Apps para operaciones de campo' },
          { name: 'Manejo de estado', desc: 'Bloc, Provider' },
          { name: 'Actualizaciones', desc: 'Migración de SDKs legacy' },
          { name: 'CI para apps', desc: 'Entornos y firma' },
        ],
      },
      {
        name: 'DevOps e IA',
        icon: skillIcons.tools,
        items: [
          { name: 'GitLab CI y Docker', desc: 'Plantillas para todo el equipo' },
          { name: 'Linux, Nginx, PHP-FPM', desc: 'Teleport, Zabbix, DigitalOcean' },
          { name: 'Integraciones', desc: 'Culqi 3DS, Niubiz, Nubefact, GA4' },
          { name: 'IA aplicada', desc: 'Claude Code, servidores MCP, agentes, LLMs locales' },
        ],
      },
    ],
  },
  experience: {
    titleHighlight: 'Experiencia',
    titleBottom: 'e impacto',
    subtitle:
      'De desarrollador backend a líder técnico: los sistemas y decisiones que marcaron mi trabajo en plataformas de logística, pagos y ERP.',
    philosophyLabel: 'Filosofía',
    items: [
      {
        title: 'Líder técnico del equipo (Programador de Sistemas)',
        company: 'Larael S.A.C. (grupo Overskull) · sistemas de Shalom',
        date: 'Mar 2025 – Actualidad',
        description:
          'Lidero técnicamente a 12 desarrolladores y coordino con 5 QA y 5 gestores en los sistemas de logística, courier, pasajes y pagos de Shalom.',
        highlights: [
          'Estimo el impacto técnico y de rendimiento de cada requerimiento y valido si las observaciones de QA están dentro del alcance.',
          'Reviso e integro el código del equipo con un Git flow propio: más de 3 000 MRs integrados en 2025–2026 en más de 80 repositorios.',
          'Lidero la migración de APIs legacy (PHP 5 / Laravel 5.8) a Laravel 13 y PHP 8.4, con pruebas de paridad antes de cada pase.',
          'Optimización en producción: endpoints de 32,7 s a 1,2 s; conexiones de BD de 1 001 a 31 con APIs en ~0,1 s.',
          'Construí desde cero la web de venta de pasajes de ShalomBus (Vue 3, TypeScript, Pinia, Tailwind v4) con pagos Culqi 3DS.',
          'Construí un servidor MCP que conecta el ERP de tareas y GitLab con Claude Code, con agentes para gestores, programadores, QA y Tech Lead.',
          'Estandaricé la infraestructura: plantillas de GitLab CI y Docker, starter de APIs Laravel, portal de estándares, Teleport y Zabbix.',
        ],
        tags: ['Liderazgo', 'Laravel 13', 'Vue 3', 'GitLab CI', 'Docker', 'MCP / IA'],
      },
      {
        title: 'Programador de Sistemas',
        company: 'Larael S.A.C. (grupo Overskull) · sistemas de Shalom',
        date: 'Oct 2022 – Feb 2025',
        description: 'Desarrollador full stack y móvil en las plataformas de logística y courier de Shalom.',
        highlights: [
          'Desarrollador principal de la web pública de clientes de Shalom (Vue): cotización, rastreo, libro de reclamaciones, GA4 y anti-scraping.',
          'APIs REST en Laravel con enfoque API-first y frontends en Vue 2 / Vue 3 para plataformas logísticas.',
          'Apps en Flutter para operaciones de campo: control de carga, choferes, rastreo y afiliados.',
          'Flujos personalizados en ERPNext / Frappe, pagos con QR y facturación electrónica.',
          'Impulsé la adopción de Git: del despliegue manual de archivos a Bitbucket y luego a GitLab con merge requests.',
        ],
        tags: ['Laravel', 'Vue 2 / 3', 'Flutter', 'ERPNext', 'MySQL'],
      },
      {
        title: 'Programador de Sistemas',
        company: 'Overskull S.A.C.',
        date: 'Jun 2021 – Sep 2022',
        description: 'Desarrollador backend en sistemas logísticos legacy de alta carga.',
        highlights: [
          'Mantenimiento y optimización de sistemas logísticos legacy (PHP MVC, Laravel 5.8, MySQL).',
          'Optimización de consultas SQL e integraciones sobre sistemas monolíticos.',
        ],
        tags: ['PHP MVC', 'Laravel 5.8', 'MySQL', 'Legacy'],
      },
    ],
  },
  projects: {
    titleTop: 'Proyectos',
    titleHighlight: 'open source',
    subtitle: 'Proyectos personales donde practico y muestro arquitectura fuera del trabajo.',
    repoLabel: 'Ver repositorio',
    items: [
      {
        name: 'Logistics App',
        url: 'https://github.com/orgs/jordantx-logistics/repositories',
        description:
          'Sistema de logística propio (envíos, pagos, agencias y clientes) para demostrar arquitectura limpia.',
        highlights: [
          'Backend en Laravel 13 con módulos DDD, JWT, RBAC, órdenes idempotentes y patrón outbox.',
          'Frontend Vue 3 + TypeScript como monolito modular, con tipos generados desde OpenAPI, Vitest y Playwright.',
        ],
        tags: ['Laravel 13', 'DDD', 'Vue 3', 'TypeScript', 'OpenAPI'],
      },
      {
        name: 'llama-scripts',
        url: 'https://github.com/JordanTX21/llama-sripts',
        description:
          'Scripts y presets para levantar servidores de LLMs locales con llama.cpp (CUDA) en Windows y Linux; mi asistente de código local del día a día.',
        highlights: ['Presets por modelo, configuración por variables de entorno y lanzadores genéricos.'],
        tags: ['llama.cpp', 'LLMs locales', 'Shell'],
      },
    ],
  },
  education: {
    titleTop: 'Formación',
    titleHighlight: 'académica',
    items: [
      {
        title: 'Ingeniería de Sistemas (egresado)',
        institution: 'Universidad Nacional Tecnológica de Lima Sur (UNTELS)',
        date: '2018 – 2024',
        description: 'Bachiller en trámite: solo falta el requisito de inglés, que estoy cursando.',
      },
    ],
  },
  architecture: {
    titleTop: 'Arquitectura de',
    titleHighlight: 'software',
    subtitle: 'Los estándares que aplico y enseño para que el código siga limpio, desacoplado y rápido mientras el equipo crece.',
    practices: [
      {
        title: 'Clean API First',
        description:
          'Lógica de Laravel separada en FormRequests, Services y Resources. Sin controladores gordos; el formateo va aparte del acceso a datos.',
        icon: CodeIcon,
        color: 'border-l-blue-500',
        snippet: 'public function store(UserRequest $req, UserService $service)',
      },
      {
        title: 'Seguridad de datos',
        description:
          'IDs enmascarados con Hashids, validación estricta de tokens y middlewares que sanitizan headers y payloads.',
        icon: ShieldIcon,
        color: 'border-l-primary-500',
        snippet: '$app->middleware([MaskPayloads::class]);',
      },
      {
        title: 'Migraciones con paridad',
        description:
          'Los endpoints legacy se migran con pruebas que comparan headers y cuerpos contra el sistema anterior antes de cada pase.',
        icon: ActivityIcon,
        color: 'border-l-cyan-400',
        snippet: '$this->assertSameResponse($legacy, $modern);',
      },
      {
        title: 'Frontends modulares',
        description:
          'Código Vue agrupado por dominio y no por tipo de archivo, con composables compartidos y tipos generados desde el contrato de la API.',
        icon: LayersIcon,
        color: 'border-l-emerald-500',
        snippet: 'import type { Customer } from "@/core/api/generated"',
      },
    ],
  },
  contact: {
    titleTop: '¿Hablamos',
    titleHighlight: '?',
    text: '¿Buscas un Tech Lead o Senior Backend Engineer que lidere al equipo sin dejar de programar? Estoy abierto a roles remotos y retos técnicos.',
    email: 'Envíame un correo',
    github: 'Ver GitHub',
    badge: 'Construyendo sistemas en',
  },
  footer: { tagline: 'Hecho con Vue 3 y Tailwind.' },
  tagline: 'Diseño sistemas que escalan, evolucionan y no se rompen bajo presión.',
  philosophy: 'Escalable. Mantenible. Hecho para durar.',
}

export const content: Record<Locale, Content> = { en, es }
