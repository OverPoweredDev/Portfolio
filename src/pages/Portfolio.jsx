import Hero from "../components/homepage/Hero";
import ScrollHint from "../components/homepage/dividers/ScrollHint";
import Timeline from "../components/homepage/Timeline";
import Skills from "../components/homepage/Skills";
import Line from "../components/homepage/dividers/Line";
import HomepageContact from "../components/homepage/Contact";
import Projects from "../components/homepage/projects/Projects";

export default function Portfolio() {
  return (
    <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text font-mono">
      <Hero />
      <ScrollHint />
      <Timeline />
      <Projects />
      <Line />
      <Skills />
      <HomepageContact />
    </div>
  );
}
