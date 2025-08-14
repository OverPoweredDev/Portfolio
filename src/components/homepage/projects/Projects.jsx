import TerminalWindow from "./TerminalWindow";
import TerminalEntry from "./TerminalEntry";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projectList = [
    {
      title: `${t("homepage.projects.1.title")}`,
      description: `${t("homepage.projects.1.description")}`,
      tech: `${t("homepage.projects.1.tech")}`,
      link: `${t("homepage.projects.1.link")}`,
    },
    {
      title: `${t("homepage.projects.2.title")}`,
      description: `${t("homepage.projects.2.description")}`,
      tech: `${t("homepage.projects.2.tech")}`,
      link: `${t("homepage.projects.2.link")}`,
    },
    {
      title: `${t("homepage.projects.3.title")}`,
      description: `${t("homepage.projects.3.description")}`,
      tech: `${t("homepage.projects.3.tech")}`,
      link: `${t("homepage.projects.3.link")}`,
    },
    {
      title: `${t("homepage.projects.4.title")}`,
      description: `${t("homepage.projects.4.description")}`,
      tech: `${t("homepage.projects.4.tech")}`,
      link: `${t("homepage.projects.4.link")}`,
    },
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <TerminalWindow>
        {projectList.map((proj, idx) => (
          <article key={idx}>
            <TerminalEntry {...proj} />
          </article>
        ))}

        <pre className="whitespace-pre-wrap text-sm font-mono text-light-text dark:text-dark-text">
          <span className="animate-blink">&gt;</span>
        </pre>
      </TerminalWindow>
    </section>
  );
}
