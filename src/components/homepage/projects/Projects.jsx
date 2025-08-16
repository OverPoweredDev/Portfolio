import { useState } from "react";
import TerminalWindow from "./TerminalWindow";
import TerminalEntry from "./TerminalEntry";
import { projectList } from "../../../data/Projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");
  const visibleProjects = projectList.filter((project) => project.visible);
  const hiddenProjects = projectList.filter(
    (project) => project.visible === false
  );

  const [revealedCount, setRevealedCount] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleShowMore = () => {
    if (revealedCount >= hiddenProjects.length) return;
    setShowAllProjects(true);
    setRevealedCount(revealedCount + 1);
  };

  return (
    <section id="projects" className="py-12 px-4">
      <TerminalWindow>
        {visibleProjects.map((proj, idx) => (
          <article key={idx}>
            <TerminalEntry
              title={t(proj.title)}
              description={t(proj.description)}
              tech={t(proj.tech)}
              link={t(proj.link)}
              typing={false}
            />
          </article>
        ))}

        {hiddenProjects.slice(0, revealedCount).map((proj, idx) => (
          <article key={`hidden-${idx}`}>
            <TerminalEntry
              title={t(proj.title)}
              description={t(proj.description)}
              tech={t(proj.tech)}
              link={t(proj.link)}
              typing={idx === revealedCount - 1}
              onDone={() => handleShowMore()}
            />
          </article>
        ))}

        <pre className="whitespace-pre-wrap text-sm font-mono">
          <span className="animate-blink">&gt; </span>
          {revealedCount < hiddenProjects.length && !showAllProjects && (
            <button className="hover:underline" onClick={handleShowMore}>
              {t("see-all-projects")}
            </button>
          )}
        </pre>
      </TerminalWindow>
    </section>
  );
}
