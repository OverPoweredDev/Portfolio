import TerminalWindow from "./TerminalWindow";
import TerminalEntry from "./TerminalEntry";
import { projectList } from "../../../data/Projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");

  return (
    <section id="projects" className="py-12 px-4">
      <TerminalWindow>
        {projectList.map((proj, idx) => (
          <article key={idx}>
            <TerminalEntry
              title={t(proj.title)}
              description={t(proj.description)}
              tech={t(proj.tech)}
              link={t(proj.link)}
            />
          </article>
        ))}

        <pre className="whitespace-pre-wrap text-sm font-mono">
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            &gt; see all projects
          </a>
          <br />
          <br />
          <span className="animate-blink">&gt; </span>
        </pre>
      </TerminalWindow>
    </section>
  );
}
