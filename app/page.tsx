import SideRule from "@/components/SideRule";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SideRule />
      <Nav />
      <Hero />
      <ProjectsSection />
      <div className="bottom" id="about">
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
