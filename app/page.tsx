import Education from "@/src/components/sections/Education";
import Experience from "@/src/components/sections/Experience";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/projects/Projects";
import RepositoryEvidence from "@/src/components/sections/RepositoryEvidence";
import Skills from "@/src/components/sections/Skills";
import TechnicalShowcase from "@/src/components/sections/TechnicalShowcase";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import PageShell from "@/src/components/layout/PageShell";

export default function Home() {
  return (
    <PageShell>
      <Header />
      <main>
        <Hero />
        <TechnicalShowcase />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <RepositoryEvidence />
      </main>
      <Footer />
    </PageShell>
  );
}
