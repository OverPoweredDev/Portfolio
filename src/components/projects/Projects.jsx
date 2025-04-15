import TerminalWindow from "../projects/TerminalWindow";
import TerminalEntry from "../projects/TerminalEntry";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projectList = [
    {
      title: `${t("projects.1.title")}`,
      description: `${t("projects.1.description")}`,
      tech: `${t("projects.1.tech")}`,
      link: `${t("projects.1.link")}`,
    },
    {
      title: `${t("projects.2.title")}`,
      description: `${t("projects.2.description")}`,
      tech: `${t("projects.2.tech")}`,
      link: `${t("projects.2.link")}`,
    },
    {
      title: `${t("projects.3.title")}`,
      description: `${t("projects.3.description")}`,
      tech: `${t("projects.3.tech")}`,
      link: `${t("projects.3.link")}`,
    },
    {
      title: `${t("projects.4.title")}`,
      description: `${t("projects.4.description")}`,
      tech: `${t("projects.4.tech")}`,
      link: `${t("projects.4.link")}`,
    },
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <TerminalWindow>
        {projectList.map((proj, idx) => (
          <TerminalEntry key={idx} {...proj} />
        ))}

        <pre className="whitespace-pre-wrap text-sm font-mono text-light-text dark:text-dark-text">
          <span className="animate-blink">&gt;</span>
        </pre>
      </TerminalWindow>
    </section>
  );
}
