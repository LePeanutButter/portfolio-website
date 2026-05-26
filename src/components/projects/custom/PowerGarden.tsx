import Image from "next/image";
import TechBadge from "@/src/components/projects/shared/TechBadge";
import { projectUi } from "@/src/components/projects/shared/projectUi";
import type { ProjectViewProps, Contributor } from "@/src/types/projectViews";
import { getAccent } from "@/src/components/projects/shared/projectAccents";
import ProjectRepositoriesBlock from "@/src/components/projects/shared/ProjectRepositoriesBlock";
import { mediaUrl } from "@/src/lib/assets";

const collaborators: Contributor[] = [
  { name: "Laura Perilla", role: "Lanapequin — Software Eng.", href: "https://github.com/Lanapequin", avatarSrc: "https://github.com/Lanapequin.png" },
  { name: "Santiago Botero", role: "LePeanutButter — Software Eng.", href: "https://github.com/LePeanutButter", avatarSrc: "https://github.com/LePeanutButter.png" },
  { name: "Jose Castillo", role: "shiro — Software Eng.", href: "https://github.com/JoseDavidCastillo", avatarSrc: "https://github.com/JoseDavidCastillo.png" },
  { name: "Juana Castillo", role: "Graphic & Visual Design", href: "https://www.behance.net/placeholder-juana" },
  { name: "Camila", role: "Sprite Illustration", href: "https://www.behance.net/placeholder-camila" },
];

export default function PowerGarden({ project }: ProjectViewProps) {
  const accent = getAccent("power-garden");
  const primaryColor = accent.primary.replace("text-[", "").replace("]", "");

  return (
    <div className="border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        {/* HEADER */}
        <header className="mb-12 rounded-2xl bg-canvas-subtle/40 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start lg:items-center">
          <div className="w-fill h-fill md:w-fill md:h-36 flex-shrink-0 bg-canvas rounded-xl p-3 flex items-center justify-center">
            <Image
              src={mediaUrl("power-garden", "logo.png")}
              alt="Power Garden: Juicy Brawl"
              width={160}
              height={160}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className={`${projectUi.sectionEyebrow} tracking-wider uppercase text-xs font-semibold px-2 py-0.5 rounded bg-brand/10 text-brand`}>
                Case Study
              </span>
              <span className="text-ink-muted text-xs">•</span>
              <span className="text-ink-muted text-xs font-medium">Multiplayer Platform</span>
            </div>
            
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Power Garden:{" "}
            <span 
                className="text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, #00adff, ${primaryColor})`
                }}
              >
                Juicy Brawl!
              </span>
            </h2>
            
            <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-sm text-ink-muted">
              <span className="font-medium text-ink-neutral">Escuela Colombiana de Ingeniería Julio Garavito</span>
              <span className="hidden sm:inline opacity-40">|</span>
              <span className="bg-canvas border border-border-subtle px-2 py-0.5 rounded text-xs">2025-02</span>
            </div>
          </div>
        </header>

        <div className="mb-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
          
          <main className="min-w-0 h-full">
            <section className={`${projectUi.section} h-full`}>
              <h3 className={projectUi.sectionTitle}>Overview & Vision</h3>
              <p className={`mt-4 ${projectUi.body}`}>
                <strong>Power Garden: Juicy Brawl!</strong> is a cloud-native browser gaming platform decoupled into four repositories to optimize performance on low-end hardware and constrained networks. The frontend pairs a Unity WebGL client, containing the core game scripts and settings, with a SvelteKit web shell. The SvelteKit host uses its root route to render a PlayNow component that embeds the Unity client, compiling the game into lightweight WebAssembly that executes directly in the browser sandbox without requiring local installations.
              </p>
              <p className={`mt-4 ${projectUi.body}`}>
                The backend and delivery pipeline are built for low latency and high scalability. A C#-based ASP.NET Core API service handles real-time matchmaking, game state validation, and player profiles, ensuring minimal data payloads over unstable connections. This ecosystem is deployed via a Terraform infrastructure repository, whose modules programmatically provision Microsoft Azure resources—including container registries, compute instances, load balancers, and optimized networking—to allow for automated scaling.
              </p>
            </section>
          </main>

          <aside className="flex flex-col gap-6 min-w-0 h-full justify-between">
            
            <div className="space-y-6 w-full">
              <div className="overflow-hidden rounded-card border border-border-subtle w-full">
                <video
                  src={mediaUrl("power-garden", "gameplay.mp4")}
                  poster={mediaUrl("power-garden", "gameplay.jpeg")}
                  controls
                  preload="metadata"
                  className="w-full h-auto object-cover aspect-video block"
                >
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              
              <a href={mediaUrl("power-garden", "arquitecture.pdf")} target="_blank" rel="noreferrer" className={`flex items-center justify-between ${projectUi.card} w-full`}>
                <div>
                  <p className="font-semibold text-ink">Architecture Specification Paper</p>
                  <p className="text-xs text-ink-muted">System Design Docs · PDF</p>
                </div>
                <span className={projectUi.btnSecondary + " !h-8 !px-3 !text-xs flex-shrink-0"}>Open PDF</span>
              </a>
            </div>
            
            <div className={`${projectUi.section} w-full mt-auto`}>
              <h3 className={projectUi.sectionTitle}>Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["SvelteKit", "TypeScript", "Unity 6.2 WebGL", "C# .NET 8", "MongoDB", "Terraform IaC", "Docker", "Azure Services"].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>

          </aside>
        </div>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>System Architecture</h3>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-stretch">
            <div className="relative w-32 min-h-[200px] sm:h-auto flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-md">
              <Image 
                src={mediaUrl("power-garden", "manzana.png")} 
                alt="Manzana" 
                fill
                className="absolute inset-0 w-full h-full object-contain"
                unoptimized 
              />
            </div>
            <ul className={`${projectUi.list} flex-1`}>
              <li><strong>Cloud Infrastructure (Terraform + Azure):</strong> IaC managing multi-VM sets, load balancers, dynamic NSGs, and containerized Docker deployments.</li>
              <li><strong>Backend Core (ASP.NET Core 8 + MongoDB):</strong> Clean Architecture REST API handling JWT auth, analytics, and scalable NoSQL storage.</li>
              <li><strong>Game Client (Unity WebGL):</strong> Low-memory game layer featuring Unity Relay and automated real-time voice narration.</li>
              <li><strong>Web Client (SvelteKit):</strong> Type-safe TypeScript frontend communicating via secure iframe postMessage architecture.</li>
            </ul>
          </div>
        </section>

        <section className={`mb-10 ${projectUi.section}`}>
          <h3 className={projectUi.sectionTitle}>Technical Innovations</h3>
          <ul className={`mt-4 ${projectUi.list}`}>
            <li><strong>Progressive Resource Scaling:</strong> Custom lazy-loading asset mechanics and intensive compilation optimizations to dramatically limit initial network payload delays.</li>
            <li><strong>Secure Native Sandbox:</strong> Cross-origin authorization abstraction where token transmission occurs exclusively over signed message events between SvelteKit layers and the internal WebGL instance.</li>
            <li><strong>Defensive Pipeline Verification:</strong> Automated Continuous Integration/Deployment (CI/CD) pipelines embedding Terrascan directly to validate static cloud definitions against compliance vulnerability definitions.</li>
          </ul>
        </section>

        <ProjectRepositoriesBlock modules={project.modules} />

        <footer className={`mt-12 ${projectUi.divider} pt-8`}>
          <p className={`text-center ${projectUi.sectionEyebrow}`}>Engineering, Design & Development Team</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {collaborators.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${projectUi.card}`}>
                {c.avatarSrc ? (
                  <Image src={c.avatarSrc} alt={c.name} width={36} height={36} className="rounded-full flex-shrink-0" unoptimized />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-canvas text-xs font-bold flex-shrink-0">◉</span>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink">{c.name}</p>
                  <p className="text-xs text-ink-muted">{c.role}</p>
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}