import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="w-full px-4 py-3 border-b border-light-text dark:border-dark-text bg-light-bg dark:bg-dark-bg flex items-center justify-between fixed top-0 left-0 z-50">
      <h1 className="text-lg md:text-xl font-mono font-bold tracking-wide">
        omkar.prabhune
      </h1>

      <ul className="flex items-center gap-6 text-sm">
        <li>
          <ThemeToggle />
        </li>
        <li>
          <LanguageToggle />
        </li>
        <li className="hidden md:block">
          <a href="#about" className="hover:underline">
            {t("navbar.about")}
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#projects" className="hover:underline">
            {t("navbar.projects")}
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#skills" className="hover:underline">
            {t("navbar.skills")}
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#contact" className="hover:underline">
            {t("navbar.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
