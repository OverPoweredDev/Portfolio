import TerminalWindow from "./TerminalWindow";
import TerminalEntry from "./TerminalEntry";
import { projectList } from "../../../data/Projects";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
          <Link to="/projects" className="hover:underline">
            {t("see-all-projects")}
          </Link>
          <br />
          <br />
          <span className="animate-blink">&gt; </span>
        </pre>
      </TerminalWindow>
    </section>
  );
}
