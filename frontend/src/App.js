import Seo from "@/components/Seo";
import CustomCursor from "@/components/portfolio/CustomCursor";
import CursorSpotlight from "@/components/portfolio/CursorSpotlight";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import AiWorkflow from "@/components/portfolio/AiWorkflow";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Publications from "@/components/portfolio/Publications";
import Contact from "@/components/portfolio/Contact";
import Inc from "@/components/portfolio/Inc";

export default function App() {
  return (
    <div className="App" style={{ background: "var(--page)" }}>
      <Seo
        title="Sravan — Full-Stack Developer"
        siteName="Sravan"
        description="Koripella Venkat Sravan — full-stack developer building dependable software with React, Node.js and AI."
        image="/assets/headshot.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Koripella Venkat Sravan",
          jobTitle: "Full-Stack Developer",
          email: "mailto:venkatsravan2003@gmail.com",
          sameAs: [
            "https://github.com/koripellavenkatsravan",
            "https://www.linkedin.com/in/koripellavenkatsravan/",
            "https://leetcode.com/u/NeRe1CTaCi/",
          ],
        }}
      />
      <CustomCursor />
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AiWorkflow />
        <Projects />
        <Education />
        <Certifications />
        <Publications />
        <Contact />
      </main>
      <Inc />
    </div>
  );
}
