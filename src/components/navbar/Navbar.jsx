import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
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
