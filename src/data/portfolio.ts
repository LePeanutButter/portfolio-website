import type {
  AuxiliaryRepository,
  Education,
  Experience,
  Profile,
  Project,
  ProjectCase,
  SkillGroup,
} from "@/src/types";
import { contactLinks } from "@/src/config/site";
import { CompanyTable } from "./companyTable";
import { ProjectTable } from "./projectTable";

export const profile: Profile = {
  name: "Santiago Botero Garcia",
  location: "Bogota, Colombia",
  headline: "I build scalable systems with refined digital interfaces.",
  summary:
    "Systems Engineering student and full-stack technologist focused on backend architecture, database modeling, cloud delivery, automation, AI-enabled workflows, and user-centered front-end implementation.",
  contacts: contactLinks,
};

export const experiences: Experience[] = [
  {
    company: CompanyTable.eci.name,
    role: "Teaching Assistant - Object-Oriented Development",
    location: "Bogota, Colombia",
    mode: "onsite",
    startDate: "September 2025",
    endDate: "December 2025",
    logoUrl: CompanyTable.eci.logo,
    summary:
      "Provided academic support for the Object-Oriented Development course through grading, feedback, and student support.",
    highlights: [
      "Evaluated 23 students across pair-based laboratory assignments.",
      "Assessed code quality, UML diagrams, documentation, and OOP principles.",
      "Reviewed all third-term pair projects with structured feedback.",
    ],
    source: ["santiago-botero-resume.md", "LinkedIn Positions.csv"],
  },
  {
    company: CompanyTable.orbidi.name,
    role: "Ad Hoc Front-End Web Developer",
    location: "Remote",
    mode: "remote",
    startDate: "February 2025",
    endDate: "March 2025",
    logoUrl: CompanyTable.orbidi.logo,
    summary:
      "Implemented WordPress and Elementor pages from Figma designs for Kit Digital program client projects.",
    highlights: [
      "Contributed to 6 web projects.",
      "Collaborated with design and QA stakeholders.",
      "Delivered 1,937 minutes of scoped freelance development work.",
    ],
    source: ["santiago-botero-resume.md", "LinkedIn Positions.csv"],
  },
];

export const education: Education[] = [
  {
    institution: CompanyTable.eci.name,
    degree: "Bachelor of Systems Engineering",
    location: "Bogota, Colombia",
    startDate: "August 2022",
    endDate: "December 2026 expected",
    logoUrl: CompanyTable.eci.logo,
    focusAreas: [
      "Software engineering",
      "Data analysis",
      "Systems design",
      "Database management",
      "Software architecture",
      "Agile development",
    ],
  },
];

export const academicProjects: Project[] = [
  {
    title: "AI Grading Automation Workflows Backup",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/ai-grading-automation-workflows-backup",
    dateRange: "October 2025 - December 2025",
    summary:
      "Version-controlled n8n workflow backup for a multi-agent, human-in-the-loop grading automation system used to generate rubrics, evaluate submissions, request instructor approval, and deliver feedback.",
    technologies: [
      "n8n",
      "Google Workspace",
      "Gemini/GPT",
      "Supabase",
      "HITL",
      "TLS",
    ],
    highlights: [
      "Modeled rubric, evaluation, document, memory, compliance, feedback, and approval agents.",
      "Integrated Google Drive, Google Sheets, email, LLM endpoints, and Supabase memory.",
      "Added anonymization, audit logging, instructor approval gates, and HAL governance concepts.",
    ],
    featured: true,
  },
  {
    title: "Elysium Back - Laboratory Reservation API",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/elysium-back",
    dateRange: "February 2025 - April 2025",
    summary:
      "Spring Boot REST API for university laboratory reservations, availability, users, permissions, audit activity, and secure cloud deployment.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "MongoDB Atlas",
      "Maven",
      "JUnit",
      "Azure",
    ],
    highlights: [
      "Implemented layered controllers, services, repositories, DTOs, models, configuration, and custom exceptions.",
      "Used JWT, role-based authorization, BCrypt, CORS, SSL, Swagger/OpenAPI, JaCoCo, and SonarQube.",
      "Delivered CI/CD through GitHub Actions and Azure App Service across staged environments.",
    ],
    featured: true,
  },
  {
    title: "Elysium Front React - Laboratory Reservation UI",
    category: "academic",
    status: "completed",
    path: "https://github.com/AnderssonProgramming/Elysium-Front-React",
    dateRange: "February 2025 - April 2025",
    summary:
      "React interface for the Elysium laboratory reservation system, enabling users to view availability, manage bookings, administer resources, and analyze usage data.",
    technologies: [
      "React",
      "Axios",
      "React Router",
      "D3.js",
      "Framer Motion",
      "JWT Decode",
      "Azure Static Web Apps",
    ],
    highlights: [
      "Built reservation, resource management, date selection, and user-management screens.",
      "Connected to the Spring Boot backend through Axios and decoded JWT state client-side.",
      "Added interactive D3.js usage visualizations and CI/CD deployment to Azure Static Web Apps.",
    ],
    featured: true,
  },
  {
    title: "EZFlix - Relational Database System",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/ezflix-relational-db",
    dateRange: "February 2024 - May 2024",
    summary:
      "Oracle SQL relational database for a movie and series distribution platform supporting purchases, rentals, content rights, user libraries, revenue tracking, and auditing.",
    technologies: [
      "Oracle SQL",
      "Oracle SQL Developer",
      "Astah",
      "PL/SQL",
      "Triggers",
      "Views",
    ],
    highlights: [
      "Modeled users, accounts, roles, libraries, movies, series, episodes, distributors, transactions, and revenue.",
      "Implemented constraints, indexes, views, CRUD scripts, data population tests, and cleanup scripts.",
      "Added triggers and audit structures for automated income registration and operational traceability.",
    ],
  },
  {
    title: "POOB vs. Zombies",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/poob-vs-zombies",
    dateRange: "November 2024 - December 2024",
    summary:
      "Java game inspired by Plants vs. Zombies, built for the Object-Oriented Programming course with multiple modes, domain/presentation separation, assets, persistence, and JUnit tests.",
    technologies: ["Java", "OOP", "MVC", "JUnit", "Astah", "Swing"],
    highlights: [
      "Implemented Versus, Survival, and Trials modes with strategic and autonomous machine behavior.",
      "Separated domain logic, presentation code, resources, and tests into maintainable packages.",
      "Documented the architecture with Astah package, class, and sequence diagrams.",
    ],
  },
  {
    title: "Anquilosaurios Infrastructure",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/anquilosarios-infrastructure",
    dateRange: "August 2025 - December 2025",
    summary:
      "Terraform-driven Azure infrastructure for the Power Garden: Juicy Brawl platform, including reproducible cloud resources, security scanning, and automated delivery gates.",
    technologies: [
      "Terraform",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Terrascan",
      "IaC",
    ],
    highlights: [
      "Defined cloud infrastructure for distributed WebGL, web, and backend services.",
      "Used Infrastructure as Code to keep deployment reproducible across environments.",
      "Added CI/CD checks, Terraform validation, and Terrascan security compliance evidence.",
    ],
    featured: true,
  },
  {
    title: "Anquilosaurios Backend Core",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/anquilosaurios-backend-core",
    dateRange: "August 2025 - December 2025",
    summary:
      "ASP.NET Core backend service for Power Garden: Juicy Brawl, handling REST APIs, player/session persistence, role-based access, and game platform orchestration.",
    technologies: [
      "C#",
      "ASP.NET Core 8",
      "MongoDB",
      "Docker",
      "REST APIs",
      "JWT",
    ],
    highlights: [
      "Implemented backend boundaries for sessions, platform state, authorization, and administrative data.",
      "Containerized the service for integration with the Azure infrastructure stack.",
      "Supported secure communication with the SvelteKit web client and WebGL game host.",
    ],
    featured: true,
  },
  {
    title: "Anquilosaurios Game WebGL",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/anquilosaurios-game-webgl",
    dateRange: "August 2025 - December 2025",
    summary:
      "Unity WebGL client for a lightweight browser-accessible multiplayer game experience, designed for low-end devices and integration with web-host orchestration.",
    technologies: ["Unity", "WebGL", "JavaScript", "Docker", "Unity Relay"],
    highlights: [
      "Packaged Unity gameplay for browser delivery without installation barriers.",
      "Integrated postMessage and REST communication patterns with the web host.",
      "Focused on accessible real-time multiplayer behavior under constrained networks and devices.",
    ],
  },
  {
    title: "Anquilosaurios Web Client",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/anquilosaurios-web-client",
    dateRange: "August 2025 - December 2025",
    summary:
      "SvelteKit web client for Power Garden: Juicy Brawl, providing authentication, lobby orchestration, game embedding, and administrative player analytics.",
    technologies: ["SvelteKit", "TypeScript", "Vite", "Docker", "JWT", "REST APIs"],
    highlights: [
      "Built the browser shell around the Unity WebGL client and backend services.",
      "Managed authentication, lobby flows, and secure cross-context communication.",
      "Prepared the client for Dockerized deployment in the Azure infrastructure stack.",
    ],
    featured: true,
  },
  {
    title: "Olympus - Prometeo Frontend",
    category: "academic",
    status: "completed",
    path: "https://github.com/DASarria/Olympus",
    dateRange: "April 2025 - May 2025",
    summary:
      "Next.js frontend for the Prometeo smart gym platform, supporting booking flows, progress dashboards, AI routine experiences, and interactive exercise exploration.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Three.js"],
    highlights: [
      "Delivered user-facing gym scheduling and progress-tracking interfaces.",
      "Integrated chart-driven analytics and 3D exercise exploration concepts.",
      "Worked with the Prometeo backend through secure API boundaries.",
    ],
  },
  {
    title: "Prometeo Back",
    category: "academic",
    status: "completed",
    path: "https://github.com/AnderssonProgramming/Prometeo-Back",
    dateRange: "April 2025 - May 2025",
    summary:
      "Spring Boot backend for the Prometeo smart gym management platform, supporting authentication, gym sessions, progress tracking, reporting, and AI-assisted routines.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Swagger",
      "OpenAI",
    ],
    highlights: [
      "Implemented REST APIs, role-based security, DTOs, repositories, and service-layer business logic.",
      "Integrated PostgreSQL persistence, BCrypt authentication, report generation, and API documentation.",
      "Connected AI routine capabilities through OpenAI and HuggingFace-oriented integrations.",
    ],
    featured: true,
  },
  {
    title: "Over The Air Docs",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/overtheair-docs",
    dateRange: "January 2026 - May 2026",
    summary:
      "Documentation repository for the SmarTrip/Voyager ecosystem, consolidating architecture, product, DevSecOps, and enterprise-design evidence across the platform.",
    technologies: ["Markdown", "Architecture Docs", "C4", "UML", "DevSecOps"],
    highlights: [
      "Centralized cross-repository documentation for web, Android, backend, AI, and infrastructure components.",
      "Captured architecture decisions, diagrams, contracts, and delivery evidence.",
      "Supported multi-team coordination through shared documentation artifacts.",
    ],
  },
  {
    title: "Voyager AI Service",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/voyager-ai-service",
    dateRange: "January 2026 - May 2026",
    summary:
      "FastAPI AI microservice for SmarTrip travel recommendations, activity discovery, conversational chat, traveler matching, seasonality, trends, adaptive UI signals, and preferences.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "PostgreSQL",
      "Docker",
      "Ollama",
    ],
    highlights: [
      "Exposed recommendation, chat, matching, seasonality, trends, and preference APIs.",
      "Loaded ML artifacts at startup and supported offline/local AI fallback flows.",
      "Prepared database and deployment configuration for local SQLite and PostgreSQL/RDS-style use.",
    ],
    featured: true,
  },
  {
    title: "Voyager Android",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/voyager-android",
    dateRange: "January 2026 - May 2026",
    summary:
      "Kotlin Android client for the SmarTrip ecosystem, built with Clean Architecture, MVVM, Jetpack Compose, Hilt, Retrofit, Room, and Coroutines.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Hilt",
      "Retrofit",
      "Room",
      "Coroutines",
    ],
    highlights: [
      "Separated presentation, domain, and data layers for a maintainable mobile architecture.",
      "Injected backend and AI service base URLs through Gradle build configuration.",
      "Aligned mobile flows with the web client and shared SmarTrip backend contracts.",
    ],
  },
  {
    title: "Voyager Backend Core",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/voyager-backend-core",
    dateRange: "January 2026 - May 2026",
    summary:
      "Spring Boot core API for SmarTrip, covering users, travel plans, social features, traveler matching, compatibility scoring, Google OAuth, and PostgreSQL persistence.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "JWT",
    ],
    highlights: [
      "Exposed REST APIs under /api/v1 with users, profiles, travel plans, sharing, social, and matching flows.",
      "Implemented JPA persistence, Flyway migrations, JWT authentication, and Google OAuth endpoints.",
      "Prepared Docker and local/RDS-style database configuration for cloud deployment.",
    ],
    featured: true,
  },
  {
    title: "Voyager Infrastructure",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/voyager-infrastructure",
    dateRange: "January 2026 - May 2026",
    summary:
      "AWS CLI infrastructure for the SmarTrip platform, designed around AWS Academy Learner Lab constraints while supporting web, backend, AI, database, and object storage resources.",
    technologies: ["AWS CLI", "Bash", "ALB", "EC2", "RDS", "S3", "jq"],
    highlights: [
      "Created scripted infrastructure setup with dependency-ordered resource provisioning.",
      "Supported React web, Spring Boot backend, FastAPI AI service, PostgreSQL, and object storage.",
      "Generated validation and deployment reports for reproducible lab operation.",
    ],
    featured: true,
  },
  {
    title: "Voyager Web Client",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/voyager-web-client",
    dateRange: "January 2026 - May 2026",
    summary:
      "React 18 and Vite web application for the SmarTrip tourism platform, including AI planning, dashboards, trip management, social features, business views, and authentication.",
    technologies: [
      "React 18",
      "Vite",
      "React Router",
      "Context API",
      "CSS",
      "Jest",
      "Docker",
    ],
    highlights: [
      "Built responsive traveler dashboards, AI assistant flows, itinerary planning, and business management surfaces.",
      "Organized state through Context API, custom hooks, and API service modules.",
      "Added tests for services, utilities, and user-facing flows with production build support.",
    ],
    featured: true,
  },
  {
    title: "TalentMap AI",
    category: "academic",
    status: "completed",
    path: "https://github.com/LePeanutButter/talent-map-ai",
    dateRange: "August 2025 - December 2025",
    summary:
      "Ethical AI recruitment MVP using DistilBERT embeddings and Django to match resumes with vacancies through semantic similarity rather than keyword-only filters.",
    technologies: ["Python", "Django", "Transformers", "DistilBERT", "jQuery", "NLP"],
    highlights: [
      "Implemented resume and job-description processing with semantic compatibility scoring.",
      "Added privacy-aware anonymization, bias-aware normalization, and explainability mechanisms.",
      "Validated model behavior with training configuration, saved model reload tests, and batch prediction checks.",
    ],
    featured: true,
  },
];

export const personalProjects: Project[] = [
  {
    title: "Qify - Quality Attribute DSL",
    category: "personal",
    status: "completed",
    path: "https://github.com/LePeanutButter/qify",
    summary:
      "TypeScript domain-specific language for defining, validating, and visualizing ISO 25010 software quality attribute scenarios.",
    technologies: ["TypeScript", "DSL", "ISO 25010", "SVG", "Vite", "ESLint"],
    highlights: [
      "Parses quality scenarios into structured representations with semantic validation.",
      "Supports ISO 25010 categories, required fields, warnings, and multiple output formats.",
      "Includes visualization services, centralized error handling, logging, and clean domain/shared boundaries.",
    ],
    portfolioAngle:
      "Independent evidence of software architecture, requirements engineering, quality attributes, and developer-tooling depth.",
    featured: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    domain: "full-stack",
    title: "Full-Stack Engineering",
    description:
      "Production-style web systems with typed frontends, REST APIs, layered services, and documented contracts.",
    items: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Django",
      "FastAPI",
      "ASP.NET Core",
      "REST APIs",
      "JWT",
    ],
    evidence: [
      "Elysium",
      "SmarTrip/Voyager",
      "Prometeo",
      "TalentMap AI",
      "Power Garden",
    ],
  },
  {
    domain: "cloud-devops",
    title: "Cloud And DevOps",
    description:
      "Cloud deployment, infrastructure automation, CI/CD, quality gates, and security-aware delivery.",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "SonarCloud",
      "Trivy",
      "Terrascan",
    ],
    evidence: [
      "Voyager Infrastructure",
      "Anquilosaurios Infrastructure",
      "Elysium CI/CD",
      "Digital Transformation repos",
    ],
  },
  {
    domain: "ai-automation",
    title: "AI And Automation",
    description:
      "Applied AI systems, semantic matching, workflow orchestration, and human-in-the-loop safeguards.",
    items: [
      "DistilBERT",
      "Transformers",
      "OpenAI API",
      "Gemini",
      "n8n",
      "Supabase",
      "LangChain",
      "RAG",
    ],
    evidence: [
      "TalentMap AI",
      "AI Grading Automation",
      "Voyager AI Service",
      "AquaSense workflows",
      "Intelligent Meeting Automation",
    ],
  },
  {
    domain: "dsa",
    title: "Data Structures And Algorithms",
    description:
      "Algorithmic foundations from Python DSA labs, C base-conversion scripts, and low-level computation projects.",
    items: [
      "Recursion",
      "Binary trees",
      "Graph traversal",
      "Dijkstra",
      "Heaps",
      "Hash tables",
      "Linked lists",
    ],
    evidence: [
      "structured-dsa-python",
      "computer-science-and-architecture/cross-base-scripts",
    ],
  },
  {
    domain: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Security labs, threat modeling, web attack simulations, vulnerability scanning, and secure delivery practices.",
    items: [
      "Threat modeling",
      "STRIDE",
      "OWASP Top 10",
      "DVWA",
      "WebGoat",
      "Kali Linux",
      "Trivy",
    ],
    evidence: [
      "infosec-practice-labs",
      "secure-app-architecture-aws",
      "DevSecOps pipelines",
    ],
  },
  {
    domain: "os-scripts",
    title: "Operating Systems And Scripts",
    description:
      "Cross-platform automation for Unix/Linux, Solaris, Windows, network diagnostics, and system administration.",
    items: [
      "Bash",
      "PowerShell",
      "Solaris shell",
      "Cron",
      "Process management",
      "Network diagnostics",
      "Packet Tracer",
    ],
    evidence: [
      "computer-science-and-architecture",
      "sysadmin-network-architecture",
    ],
  },
  {
    domain: "data",
    title: "Data And Databases",
    description:
      "Relational and document databases with modeling, integrity, migrations, triggers, auditability, and access control.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Oracle SQL",
      "Azure SQL",
      "MariaDB",
      "Flyway",
      "JPA",
    ],
    evidence: [
      "EZFlix",
      "Elysium",
      "Voyager Backend Core",
      "sysadmin-network-architecture/db-sql",
    ],
  },
  {
    domain: "architecture",
    title: "Software And Enterprise Architecture",
    description:
      "Architecture documentation, C4/UML modeling, quality attributes, microframeworks, distributed platforms, and cloud-ready reference designs.",
    items: [
      "C4",
      "UML",
      "Clean Architecture",
      "MVC",
      "IoC",
      "ISO 25010",
      "Enterprise Architecture",
    ],
    evidence: [
      "Qify",
      "Over The Air Docs",
      "digital-transformation-and-enterprise-architectures",
    ],
  },
];

export const auxiliaryRepositories: AuxiliaryRepository[] = [
  {
    title: "Digital Transformation And Enterprise Architectures",
    source:
      "https://github.com/LePeanutButter/digital-transformation-and-enterprise-architectures",
    summary:
      "Curated portfolio of Java microframeworks, IoC and socket web frameworks, Dockerized concurrent servers, serverless AWS APIs, secure app architecture, LangChain/RAG notebooks, ML experiments, and enterprise transformation case studies.",
    domains: ["architecture", "cloud-devops", "ai-automation"],
    technologies: [
      "Java",
      "Maven",
      "Docker",
      "AWS",
      "LangChain",
      "Pinecone",
      "Python",
    ],
  },
  {
    title: "Computer Science And Architecture",
    source: "https://github.com/LePeanutButter/computer-science-and-architecture",
    summary:
      "Collection of ARM and MARIE assembly programs, C cross-base arithmetic scripts, PowerShell and Solaris automation, VM installation logs, triangle classification in assembly, and HDL memory/arithmetic-unit design.",
    domains: ["architecture", "os-scripts", "programming"],
    technologies: [
      "ARM Assembly",
      "MARIE Assembly",
      "C",
      "HDL",
      "PowerShell",
      "Solaris shell",
    ],
  },
  {
    title: "Sysadmin Network Architecture",
    source: "https://github.com/LePeanutButter/sysadmin-network-architecture",
    summary:
      "CCNA-aligned networking, system administration, and cloud labs covering Packet Tracer topologies, OSPF, VLANs, DHCP, Wireshark analysis, DNS services, Unix scripts, Azure SQL, PostgreSQL, SQL Server, and a PHP/MariaDB grades app.",
    domains: ["os-scripts", "data", "cloud-devops"],
    technologies: [
      "Bash",
      "Packet Tracer",
      "Wireshark",
      "PostgreSQL",
      "Azure SQL",
      "PHP",
      "MariaDB",
    ],
  },
  {
    title: "InfoSec Practice Labs",
    source: "https://github.com/LePeanutButter/infosec-practice-labs",
    summary:
      "Academic cybersecurity lab repository covering Linux fundamentals, OSINT, Shostack/STRIDE threat modeling, web pentesting, DVWA, WebGoat, OWASP Top 10, Red Team/Blue Team exercises, and defensive hardening.",
    domains: ["cybersecurity", "os-scripts"],
    technologies: [
      "Kali Linux",
      "OWASP",
      "STRIDE",
      "DVWA",
      "WebGoat",
      "Burp Suite",
      "Wireshark",
    ],
  },
  {
    title: "Structured DSA Python",
    source: "https://github.com/LePeanutButter/structured-dsa-python",
    summary:
      "Python algorithms and data structures collection covering binary tree reconstruction, heap-optimized Dijkstra, double linked lists, BFS/DFS graph search, hash-table collision resolution, and recursive algorithms.",
    domains: ["dsa", "programming"],
    technologies: ["Python", "Graphs", "Trees", "Heaps", "Hash tables", "Recursion"],
  },
  {
    title: "Intro To Quantum Computing",
    source: "https://github.com/LePeanutButter/intro-to-quantum-computing",
    summary:
      "Quantum computing foundations repository with a Python complex-number library, unit tests, classical-to-quantum exercises, quantum observables/measurement notebooks, NumPy matrix work, and weekly Jupyter assignments.",
    domains: ["programming", "data"],
    technologies: ["Python", "NumPy", "Jupyter", "Matplotlib", "Complex numbers"],
  },
  {
    title: "EcoStream Predictive Analytics",
    source: "https://github.com/LePeanutButter/ecostream-predictive-analytics",
    summary:
      "EcoTrack/EcoStream MVP combining a Next.js TypeScript chat-style frontend with a FastAPI backend that interprets natural language activity descriptions and estimates carbon footprint results.",
    domains: ["full-stack", "ai-automation", "data"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Pydantic",
      "NLP",
    ],
  },
  {
    title: "Intelligent Meeting Automation Workflows Backup",
    source:
      "https://github.com/LePeanutButter/intelligent-meeting-automation-workflows-backup",
    summary:
      "n8n workflow backup for an intelligent meeting assistant that receives meeting transcriptions, summarizes discussions, extracts action items, assigns responsible parties, estimates deadlines, and emails structured summaries.",
    domains: ["ai-automation"],
    technologies: ["n8n", "Google Gemini", "Google Docs", "Google Drive", "Gmail"],
  },
  {
    title: "AquaSense n8n Workflows",
    source: "https://github.com/LePeanutButter/n8n-workflows-aquasense",
    summary:
      "Versioned n8n workflows for AquaSense Intelligent Water Management, simulating SCADA, ERP, and CRM data consolidation with Supabase, Azure Free Tier, Grafana refreshes, Gemini anomaly detection, and alerting.",
    domains: ["ai-automation", "data", "cloud-devops"],
    technologies: ["n8n", "Supabase", "Azure", "Grafana", "Gemini", "Docker"],
  },
];

export const projectsByCategory = {
  academic: academicProjects,
  personal: personalProjects,
} satisfies Record<"academic" | "personal", Project[]>;

export const allProjects: Project[] = [...academicProjects, ...personalProjects];

export const projectCases: ProjectCase[] = [
  {
    slug: "smartrip",
    title: "SmarTrip - AI-Powered Multi-Platform Tourism Ecosystem",
    category: "academic",
    kind: "case-study",
    actionLabel: "View Ecosystem Case Study",
    dateRange: "January 2026 - May 2026",
    thumbnail: null,
    summary:
      "A multi-platform tourism system that unifies trip planning, AI recommendations, social collaboration, Android delivery, Spring Boot APIs, FastAPI intelligence, and AWS-oriented infrastructure.",
    narrative: [
      "SmarTrip is a distributed product rather than a single repository. The local workspace shows a React/Vite client with protected routes for dashboards, AI assistant, social chat, travel planning, calendar, behavior analysis, and provider dashboards.",
      "The backend core is a Spring Boot service with controller/service layers for users, travel plans, social features, matching, compatibility, and Google OAuth, while the Python AI service exposes routers for recommendations, chat, local AI, preferences, behavior analysis, adaptive UI, seasonality, trends, and traveler matching.",
      "The Android and infrastructure repositories complete the ecosystem with Kotlin Clean Architecture/MVVM and AWS CLI deployment scripts for ALB, EC2, RDS, S3, and academy-lab compliant provisioning.",
    ],
    technologies: [
      "React 18",
      "Vite",
      "Spring Boot",
      "FastAPI",
      "Kotlin",
      "Jetpack Compose",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
    highlights: [
      "Route-rich React client with auth providers, adaptive UI context, dashboards, AI assistant, travel plans, and social collaboration.",
      "Spring Boot API with JWT, Google OAuth, JPA, Flyway, PostgreSQL, matching, travel planning, sharing, and social endpoints.",
      "FastAPI AI service with modular routers for chat, local AI, recommendations, preferences, behavior, adaptive UI, seasonality, trends, and users.",
      "Android app follows Clean Architecture, MVVM, Hilt, Retrofit, Room, Coroutines, and Jetpack Compose.",
      "AWS infrastructure scripts provision learner-lab compatible web, API, AI, database, and object storage resources.",
    ],
    modules: [
      {
        name: "Voyager Web Client",
        role: "Frontend",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-web-client",
        localPath: "projects/academic/smartrip/voyager-web-client",
        summary:
          "React 18 + Vite application with protected routes for dashboard, AI assistant, social chat, travel planning, business views, calendar, settings, and legal pages.",
        technologies: ["React", "Vite", "React Router", "Context API", "Jest"],
        evidence: [
          "App.jsx wires AuthProvider, AdaptiveUIProvider, ThemeProvider, protected routes, and private JWT routes.",
          "Source tree contains service modules, custom hooks, tests, and travel/social/business page groups.",
        ],
      },
      {
        name: "Voyager Backend Core",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-backend-core",
        localPath: "projects/academic/smartrip/voyager-backend-core",
        summary:
          "Spring Boot REST API for user management, travel plans, social features, traveler matching, compatibility, sharing, and Google OAuth.",
        technologies: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway"],
        evidence: [
          "Source tree includes controller and service layers under com.tourism.platform.",
          "README documents /api/v1, JPA persistence, PostgreSQL, Docker, JWT, and OAuth flows.",
        ],
      },
      {
        name: "Voyager AI Service",
        role: "AI Microservice",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-ai-service",
        localPath: "projects/academic/smartrip/voyager-ai-service",
        summary:
          "FastAPI service for recommendations, chat, local AI memory, traveler matching, preferences, behavior analysis, adaptive UI, seasonality, and trends.",
        technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "PostgreSQL", "Ollama"],
        evidence: [
          "app/api/v1/router.py mounts users, matching, trends, seasonality, chat, local-ai, preferences, behavior, and adaptive-ui routers.",
          "Modules include chatbot, embeddings, memory, local Ollama client, prompts, ML loading, and test coverage.",
        ],
      },
      {
        name: "Voyager Android",
        role: "Mobile",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-android",
        localPath: "projects/academic/smartrip/voyager-android",
        summary:
          "Kotlin Android client aligned with the web experience and backend contracts.",
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "Room"],
        evidence: [
          "Gradle configuration injects backend and AI service URLs as BuildConfig values.",
          "README and app tree indicate Presentation, Domain, Data layering and modern Android dependencies.",
        ],
      },
      {
        name: "Voyager Infrastructure",
        role: "Infrastructure",
        repositoryUrl: "https://github.com/LePeanutButter/voyager-infrastructure",
        localPath: "projects/academic/smartrip/voyager-infrastructure",
        summary:
          "AWS CLI infrastructure for academy-lab compatible deployment of the web client, backend API, AI service, database, and object storage.",
        technologies: ["AWS CLI", "Bash", "ALB", "EC2", "RDS", "S3"],
        evidence: [
          "Repository includes setup scripts, config-driven deployment, validation, and reporting.",
          "Designed around Learner Lab constraints while preserving complete system functionality.",
        ],
      },
      {
        name: "Over The Air Docs",
        role: "Documentation",
        repositoryUrl: "https://github.com/LePeanutButter/overtheair-docs",
        localPath: "projects/academic/smartrip/overtheair-docs",
        summary:
          "Shared documentation, architecture, product, paper, project-management, and artifact repository for the ecosystem.",
        technologies: ["Markdown", "C4", "UML", "Architecture Docs"],
        evidence: [
          "Workspace contains artifacts, assets, documentation, papers, and project-management folders.",
          "Used as a cross-repo reference point for the SmarTrip architecture.",
        ],
      },
    ],
    sourceSignals: [
      "React Router protected/private route graph in voyager-web-client/src/App.jsx.",
      "FastAPI router aggregation in voyager-ai-service/app/api/v1/router.py.",
      "Spring Boot controller/service source layout in voyager-backend-core/src/main/java.",
      "Android Gradle and app structure in voyager-android.",
      "AWS CLI deployment scripts and config in voyager-infrastructure.",
    ],
    featured: true,
  },
  {
    slug: "ai-grading-automation-workflows-backup",
    title: "AI Grading Automation Workflows Backup",
    category: "academic",
    kind: "case-study",
    actionLabel: "Review Workflow Architecture",
    dateRange: "October 2025 - December 2025",
    thumbnail: null,
    summary:
      "A version-controlled n8n workflow system for multi-agent, human-in-the-loop grading automation across rubrics, submission processing, LLM evaluation, approval, feedback, and audit logging.",
    narrative: [
      "This academic automation repository is not a conventional app; it is the operational backup for an n8n-based grading platform. The local workspace contains credential scaffolding, documentation, and eight exported workflow JSON files that can be imported into n8n to recreate the automation pipeline.",
      "The system uses agent roles for rubric generation, document preprocessing, evaluation, memory, compliance, instructor approval, and feedback delivery, with Google Workspace, Supabase, and Gemini/GPT integrations coordinated through a governed hyperautomation lifecycle.",
    ],
    technologies: ["n8n", "Google Workspace", "Gemini/GPT", "Supabase", "HITL", "HAL"],
    highlights: [
      "Eight workflow exports preserve the grading automation pipeline as source-controlled infrastructure.",
      "Human-in-the-loop checkpoints keep instructor approval between AI evaluation and student feedback delivery.",
      "Security model includes credential isolation, anonymization, TLS-based integrations, and auditable grading decisions.",
    ],
    modules: [
      {
        name: "AI Grading Automation Workflows",
        role: "Automation",
        repositoryUrl:
          "https://github.com/LePeanutButter/ai-grading-automation-workflows-backup",
        localPath: "projects/academic/ai-grading-automation-workflows-backup",
        summary:
          "n8n workflow backup for rubric generation, assignment detection, document preprocessing, LLM evaluation, instructor approval, feedback delivery, and grade logging.",
        technologies: ["n8n", "Google Drive", "Google Sheets", "Email", "Supabase", "LLMs"],
        evidence: [
          "workflows contains eight exported JSON automation definitions for the grading system.",
          "README documents rubric, evaluation, document, memory, compliance, feedback, and approval agents.",
          "docs and credentials folders support workflow import, credential boundaries, and operational setup.",
        ],
      },
    ],
    sourceSignals: [
      "Eight workflow JSON exports under ai-grading-automation-workflows-backup/workflows.",
      "README describes HITL approval, Supabase memory, Google Workspace integrations, and HAL governance.",
      "Credential and docs folders indicate import-oriented operational packaging rather than a local-only demo.",
    ],
    featured: true,
  },
  {
    slug: "elysium",
    title: "Elysium - Laboratory Reservation System",
    category: "academic",
    kind: "case-study",
    actionLabel: "Explore Reservation Platform",
    dateRange: "February 2025 - April 2025",
    thumbnail: null,
    summary:
      "A full-stack university laboratory reservation platform with Spring Boot APIs, MongoDB Atlas, React dashboards, D3 analytics, JWT security, and Azure deployment.",
    narrative: [
      "Elysium is split into a Spring Boot backend and React frontend, but the product is one reservation workflow: users authenticate, land in role-specific areas, manage reservations, and administrators control users, labs, resources, and analytics.",
      "The backend source tree exposes controllers, services, repositories, DTOs, models, config, JWT utilities, and tests, while the frontend App.js shows role-based route groups for administrators and professors.",
    ],
    technologies: ["Spring Boot", "React", "MongoDB Atlas", "JWT", "D3.js", "Azure", "JUnit"],
    highlights: [
      "Backend implements layered architecture, JWT authentication, BCrypt, SSL/CORS, Swagger, JaCoCo, and SonarQube.",
      "Frontend uses React Router, decoded JWT user state, admin/professor route groups, API modules, dashboard charts, and reservation modals.",
      "CI/CD uses GitHub Actions and Azure App Service / Azure Static Web Apps deployments.",
    ],
    modules: [
      {
        name: "Elysium Back",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/elysium-back",
        localPath: "projects/academic/elysium/elysium-back",
        summary:
          "Spring Boot API for laboratories, reservations, users, authorization, audit activity, and role-aware service logic.",
        technologies: ["Java 17", "Spring Boot", "Spring Security", "MongoDB", "Maven"],
        evidence: [
          "Source contains controller, service, repository, DTO, model, config, exception, and JWT utility packages.",
          "Tests mirror controller, service, repository, DTO, and model layers.",
        ],
      },
      {
        name: "Elysium Front React",
        role: "Frontend",
        repositoryUrl: "https://github.com/AnderssonProgramming/Elysium-Front-React",
        localPath: "projects/academic/elysium/Elysium-Front-React",
        summary:
          "React interface for login, professor reservations, admin dashboards, room management, user management, D3 charts, and modal workflows.",
        technologies: ["React", "React Router", "Axios", "D3.js", "Framer Motion"],
        evidence: [
          "App.js defines admin and professor route groups, JWT decoding, and role-based navigation.",
          "Source tree includes API modules for auth, reservas, salones, usuarios, and admin chart components.",
        ],
      },
    ],
    sourceSignals: [
      "Role-based route config and JWT decoding in Elysium-Front-React/src/App.js.",
      "Layered backend packages and tests in elysium-back/src/main/java and src/test/java.",
    ],
    featured: true,
  },
  {
    slug: "ezflix-relational-db",
    title: "EZFlix - Relational Database System",
    category: "academic",
    kind: "repository",
    actionLabel: "Inspect Database Design",
    dateRange: "February 2024 - May 2024",
    thumbnail: null,
    summary:
      "An Oracle SQL database system for a streaming-style movie and series distribution platform, with normalized schemas, CRUD components, triggers, indexes, views, security roles, and validation tests.",
    narrative: [
      "EZFlix models the data backbone of a commercial digital distribution platform. It covers users, accounts, roles, libraries, movies, series, episodes, distributors, content rights, purchases, rentals, payment methods, operations, revenue, and audit behavior.",
      "The local source is organized as a database engineering project rather than an application: persistence scripts, declarative constraints, automation triggers, views, indexes, role security, and positive/negative test scripts live in separate folders to support repeatable Oracle SQL validation.",
    ],
    technologies: ["Oracle SQL", "PL/SQL", "Triggers", "Views", "Indexes", "RBAC", "Astah"],
    highlights: [
      "Modular folders separate schema structure, CRUD components, constraints, automation, indexes, views, security, and tests.",
      "Trigger and view scripts automate revenue tracking, content access, and reporting-oriented queries.",
      "Security scripts define actors, permissions, and access-control tests for administrative database behavior.",
    ],
    modules: [
      {
        name: "EZFlix Relational Database",
        role: "Database",
        repositoryUrl: "https://github.com/LePeanutButter/ezflix-relational-db",
        localPath: "projects/academic/ezflix-relational-db",
        summary:
          "Oracle SQL project for streaming-platform persistence, declarative integrity, automation triggers, reporting views, access control, and database tests.",
        technologies: ["Oracle SQL", "PL/SQL", "SQL Developer", "Astah"],
        evidence: [
          "components/Persistencia contains CRUDE, CRUDI, and XCRUD scripts for database component behavior.",
          "constraints-and-automation contains trigger and tuple validation scripts plus OK/NotOK tests.",
          "security contains actor, permission, grant/revoke, and SecurityOK scripts for role validation.",
        ],
      },
    ],
    sourceSignals: [
      "Folder structure separates components, constraints-and-automation, indexes-and-views, security, structure-and-declarative-constraints, and tests.",
      "README documents purchases, rentals, user libraries, role-based access, financial operations, and legal content management.",
      "Astah and SQL artifacts indicate a full academic database-design lifecycle.",
    ],
  },
  {
    slug: "poob-vs-zombies",
    title: ProjectTable.poob.name,
    category: "academic",
    kind: "repository",
    actionLabel: "Inspect Game Architecture",
    dateRange: "November 2024 - December 2024",
    thumbnail: ProjectTable.poob.thumbnail,
    summary:
      "A Java object-oriented game inspired by Plants vs. Zombies, with versus, survival, and autonomous trials modes implemented through domain/presentation separation, custom assets, persistence, and JUnit tests.",
    narrative: [
      "POOB vs. Zombies was built as an Object-Oriented Programming course project. The local source shows a classic Java desktop-game architecture: domain classes own game rules and entities, presentation classes render GUI behavior, resources hold image/audio assets, and test classes validate domain behavior.",
      "The game extends the original inspiration with three modes: PvP-style versus play, survival waves, and self-playing machine modes with strategic/original behavior for plants and zombies.",
    ],
    technologies: ["Java", "OOP", "MVC", "Swing", "JUnit", "Astah"],
    highlights: [
      "Domain layer includes plants, zombies, projectiles, hitboxes, lawns, levels, day/night environments, and machine strategies.",
      "Presentation layer includes GUI classes for modes, menus, progress bars, entity rendering, sound, and loading flows.",
      "JUnit test suite covers core entities and game modes including PvP, PvM, MvM, plants, zombies, and environments.",
    ],
    modules: [
      {
        name: "POOB vs. Zombies Java Game",
        role: "Desktop Game",
        repositoryUrl: "https://github.com/LePeanutButter/poob-vs-zombies",
        localPath: "projects/academic/poob-vs-zombies",
        summary:
          "Java/Swing game implementation with OOP domain modeling, GUI presentation classes, image/audio resources, compiled output, Astah diagrams, and JUnit tests.",
        technologies: ["Java", "Swing", "JUnit 5", "Astah"],
        evidence: [
          "src/domain contains entity and mode classes such as POOBVsZombies, PvP, PvM, MvM, MachinePlants, MachineZombies, Plant, Zombie, and Projectile.",
          "src/presentation contains GUI classes for menu, levels, modes, progress bars, entity views, and sound.",
          "src/test contains JUnit tests for entities, modes, and environment classes.",
        ],
      },
    ],
    sourceSignals: [
      "README documents Versus, Survival, and Trials modes plus domain, presentation, resources, and tests.",
      "src/domain includes game rules, entities, machine behavior, and persistence-oriented classes.",
      "src/resources includes menu, level, plant, zombie, projectile, sound effect, and soundtrack assets.",
    ],
  },
  {
    slug: "power-garden",
    title: ProjectTable.arsw.name,
    category: "academic",
    kind: "case-study",
    actionLabel: "Inspect Cloud Game Architecture",
    dateRange: "August 2025 - December 2025",
    thumbnail: ProjectTable.arsw.thumbnail,
    summary:
      "A browser-first multiplayer game platform combining Unity WebGL gameplay, SvelteKit orchestration, ASP.NET Core APIs, MongoDB persistence, Docker, Terraform, and Azure infrastructure.",
    narrative: [
      "Power Garden is a cloud game platform split into four repos: Unity WebGL game, SvelteKit web shell, ASP.NET Core backend, and Terraform infrastructure.",
      "The local source confirms the game client is embedded through the web host, the backend is a C# API service, and the infrastructure repo defines Azure modules for container registries, compute, load balancing, networking, and registry resources.",
    ],
    technologies: ["Unity WebGL", "SvelteKit", "ASP.NET Core", "MongoDB", "Docker", "Terraform", "Azure"],
    highlights: [
      "Browser-based Unity WebGL delivery avoids local installation and targets constrained devices.",
      "SvelteKit client owns the product shell, game launch, auth/lobby flow, and analytics-oriented web UX.",
      "Terraform infrastructure separates Azure app, compute, load balancer, network, and registry modules.",
    ],
    modules: [
      {
        name: "Anquilosaurios Web Client",
        role: "Frontend",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-web-client",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-web-client",
        summary:
          "SvelteKit shell for the game platform, including the root route that renders PlayNow and hosts the game experience.",
        technologies: ["SvelteKit", "TypeScript", "Vite", "Docker"],
        evidence: [
          "+page.svelte imports and renders PlayNow as the landing/game embed entry.",
          "Repository includes src routes/components, package.json, Vite config, Dockerfile, and GitHub workflows.",
        ],
      },
      {
        name: "Anquilosaurios Backend Core",
        role: "Backend",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-backend-core",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-backend-core",
        summary:
          "ASP.NET Core backend for REST APIs, player/session data, game platform orchestration, and MongoDB persistence.",
        technologies: ["C#", "ASP.NET Core", "MongoDB", "Docker", "JWT"],
        evidence: [
          "Workspace contains C# controller/program source, project files, Dockerfile, and workflow configuration.",
          "Backend repo supports the web shell and WebGL client through service boundaries.",
        ],
      },
      {
        name: "Anquilosaurios Game WebGL",
        role: "Game Client",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosaurios-game-webgl",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosaurios-game-webgl",
        summary:
          "Unity project packaged for WebGL gameplay and browser-based delivery.",
        technologies: ["Unity", "WebGL", "C#", "JavaScript", "Docker"],
        evidence: [
          "Repository includes Assets/Scripts, Packages, ProjectSettings, Dockerfile, and Unity test assets.",
          "Designed for web-host communication and no-install gameplay.",
        ],
      },
      {
        name: "Anquilosaurios Infrastructure",
        role: "Infrastructure",
        repositoryUrl: "https://github.com/LePeanutButter/anquilosarios-infrastructure",
        localPath: "projects/academic/power-garden!-juicy-brawl/anquilosarios-infrastructure",
        summary:
          "Terraform Azure infrastructure for containerized deployment and security-scanned cloud reproducibility.",
        technologies: ["Terraform", "Azure", "Terrascan", "GitHub Actions"],
        evidence: [
          "main.tf plus modules for app service, compute, load balancer, network, and registry resources.",
          "README and workflows describe CI/CD and Terrascan compliance checks.",
        ],
      },
    ],
    sourceSignals: [
      "SvelteKit root route renders PlayNow in anquilosaurios-web-client/src/routes/+page.svelte.",
      "Terraform modules in anquilosarios-infrastructure/modules.",
      "Unity Assets/Scripts and ProjectSettings in anquilosaurios-game-webgl.",
    ],
    featured: true,
  },
  {
    slug: "prometeo",
    title: "Prometeo - Smart Gym Management System",
    category: "academic",
    kind: "case-study",
    actionLabel: "View Smart Gym Case Study",
    dateRange: "April 2025 - May 2025",
    thumbnail: null,
    summary:
      "A smart gym platform with Next.js experiences, Spring Boot APIs, PostgreSQL, JWT security, progress dashboards, session booking, routines, reporting, and AI-assisted training flows.",
    narrative: [
      "Prometeo has a frontend and backend split. The frontend source is broad: gym-module pages for reservations, routines, measurements, reports, physical progress, plus health and user-management modules.",
      "The backend is a Spring Boot service that supports authentication, scheduling, reports, user management, and AI-enabled routine behavior through secure API boundaries.",
    ],
    technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Chart.js", "Three.js"],
    highlights: [
      "Frontend service layer includes gym reservations, sessions, schedules, physical progress, reports, routines, goals, exercises, and users.",
      "UI layer includes BMI indicators, body canvases, exercise/routine carousels, measurement forms, and admin/user modules.",
      "Backend uses Java/Spring Boot with PostgreSQL, Spring Security, JWT, Swagger, and OpenAI-oriented integrations.",
    ],
    modules: [
      {
        name: "Olympus",
        role: "Frontend",
        repositoryUrl: "https://github.com/DASarria/Olympus",
        localPath: "projects/academic/prometeo/Olympus",
        summary:
          "Next.js frontend with gym reservations, routines, progress, reports, health module, user management, and reusable gym UI components.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Three.js"],
        evidence: [
          "api/gym-module contains services for exercises, goals, reservations, sessions, progress, reports, routines, schedules, and users.",
          "pages/gym-module contains reservations, routines, physical-progress, measurement, and analysis routes.",
        ],
      },
      {
        name: "Prometeo Back",
        role: "Backend",
        repositoryUrl: "https://github.com/AnderssonProgramming/Prometeo-Back",
        localPath: "projects/academic/prometeo/Prometeo-Back",
        summary:
          "Spring Boot backend for smart gym management, secure auth, reports, scheduling, progress, routines, and API documentation.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Swagger", "OpenAI"],
        evidence: [
          "Maven project with Spring Boot source, assets, tests, and GitHub workflow folder.",
          "README and source tree indicate JWT/BCrypt, reporting, gym scheduling, and AI routine support.",
        ],
      },
    ],
    sourceSignals: [
      "Olympus api/gym-module service files map directly to product capabilities.",
      "Olympus pages/gym-module and components/gym-module show the user-facing gym flows.",
      "Prometeo-Back pom.xml and source tree indicate a Spring Boot API service.",
    ],
    featured: true,
  },
  {
    slug: "talent-map-ai",
    title: "TalentMap AI",
    category: "academic",
    kind: "case-study",
    actionLabel: "Explore AI Matching System",
    dateRange: "August 2025 - December 2025",
    thumbnail: null,
    summary:
      "Ethical recruitment MVP using Django, DistilBERT, semantic similarity, anonymization, and explainability to match resumes with vacancies beyond keyword filters.",
    narrative: [
      "TalentMap AI combines a Django web/API layer with mapper services, document processing, tests, and an ML module for DistilBERT-based job matching.",
      "The local code includes text extraction, normalizer presets, privacy-aware anonymization, job matching services, model training/loading, and frontend templates/static scripts for upload and scoring flows.",
    ],
    technologies: ["Python", "Django", "Transformers", "DistilBERT", "NLP", "jQuery"],
    highlights: [
      "Privacy-aware mapper services normalize and anonymize candidate text before matching.",
      "ML module includes DistilBERT model, matching dataset, job matching service, and tests.",
      "Web layer includes templates, static scripts, API/frontend views, and document-processing service tests.",
    ],
    modules: [
      {
        name: "TalentMap AI Monorepo",
        role: "Full-stack AI MVP",
        repositoryUrl: "https://github.com/LePeanutButter/talent-map-ai",
        localPath: "projects/academic/talent-map-ai",
        summary:
          "Django and DistilBERT application for semantic resume/job matching with ethical AI controls.",
        technologies: ["Django", "Python", "Transformers", "DistilBERT", "jQuery"],
        evidence: [
          "app/mapper includes privacy-aware anonymizer, normalizer, text extractor, and tests.",
          "ml/distilbert_model includes model, dataset, and job matching service code.",
        ],
      },
    ],
    sourceSignals: [
      "Mapper and service packages under talent-map-ai/app.",
      "DistilBERT model code under talent-map-ai/ml/distilbert_model.",
    ],
    featured: true,
  },
  {
    slug: "qify",
    title: "Qify - Quality Attribute DSL",
    category: "personal",
    kind: "case-study",
    actionLabel: "Inspect DSL Implementation",
    thumbnail: null,
    summary:
      "A TypeScript DSL IDE for defining, validating, visualizing, importing, and exporting ISO 25010 quality attribute scenarios.",
    narrative: [
      "Qify is a personal architecture-tooling project. Its main entry initializes a DSL visualizer, export service, and editor manager, then exposes import/export/navigation actions for the HTML UI.",
      "The parser source tokenizes a custom DSL, builds an AST, validates required quality-scenario fields, checks ISO 25010 categories, and converts the AST into structured program objects.",
    ],
    technologies: ["TypeScript", "DSL", "ISO 25010", "SVG", "Vite", "ESLint"],
    highlights: [
      "Custom parser handles system and attribute declarations with artifact, category, source, stimulus, environment, response, and measure fields.",
      "Visualization and export services support SVG/PNG/PDF-style outputs around parsed quality attributes.",
      "Architecture separates constants, domain DSL services, visualization services, hooks, shared utils, and UI helpers.",
    ],
    modules: [
      {
        name: "Qify",
        role: "Personal tool",
        repositoryUrl: "https://github.com/LePeanutButter/qify",
        localPath: "projects/personal/qify",
        summary:
          "TypeScript DSL parser and visualization IDE for ISO 25010 quality attribute requirements.",
        technologies: ["TypeScript", "Vite", "DSL Parser", "SVG", "Export APIs"],
        evidence: [
          "src/main.ts orchestrates DSLVisualizer, ExportService, EditorManager, import/export actions, and example loading.",
          "DSLParser.ts tokenizes, parses, validates, and converts the quality DSL into typed program objects.",
        ],
      },
    ],
    sourceSignals: [
      "Application orchestration in qify/src/main.ts.",
      "DSL parsing and validation in qify/src/core/domain/dsl/services/DSLParser.ts.",
    ],
    featured: true,
  },
];

export const academicProjectCases: ProjectCase[] = projectCases.filter(
  (projectCase) => projectCase.category === "academic",
);

export const personalProjectCases: ProjectCase[] = projectCases.filter(
  (projectCase) => projectCase.category === "personal",
);
