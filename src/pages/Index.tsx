import Hero from "@/components/Hero";
import DataDNA from "@/components/DataDNA";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DataDNA/>
      <Skills/>
      <Projects />
      <Experience />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
