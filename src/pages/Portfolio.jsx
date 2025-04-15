import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ScrollHint from "../components/dividers/ScrollHint";
import Projects from "../components/projects/Projects";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Line from "../components/dividers/Line";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text font-mono">
      <Navbar />
      <Hero />
      <ScrollHint />
      <Timeline />
      <Projects />
      <Line />
      <Skills />
      <Footer />
    </div>
  );
}
