import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="w-full px-4 py-3 border-b border-light-text dark:border-dark-text bg-light-bg dark:bg-dark-bg fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-mono font-bold tracking-wide">
          omkar.prabhune
        </h1>

        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link to="/" className="hover:underline">
              {t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              {t("navbar.projects")}
            </Link>
          </li>
          <li>
            <a className="hover:underline" href="/resume.pdf" download>
              {t("navbar.resume")}
            </a>
          </li>
          <li>
            <div className="w-[0.25px] border-l border-light-text dark:border-dark-text">
              &nbsp;
            </div>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LanguageToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
