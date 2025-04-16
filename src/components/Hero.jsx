import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../components/ThemeContext";

import heroSVG from "../assets/hero.svg";
import heroBgSVG from "../assets/hero-bg.svg";

export default function Hero() {
  const [typedText, setTypedText] = useState("H");
  const { isDark } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    let i = 1;

    const fullText = `${t("hero.greeting")}`;

    const interval = setInterval(() => {
      setTypedText((prev) => fullText.slice(0, i + 1));
      i += 1;

      if (i === fullText.length - 1) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [t]);

  return (
    <main>
      <section
        id="about"
        className="hero-section flex md:h-[90vh] justify-between items-center px-12 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text pt-20"
      >
        <article className="flex flex-col justify-center md:pr-8 w-full md:w-2/3">
          <h2 className="text-2xl font-bold md:text-5xl md:font-normal font-mono my-14">
            {typedText}
          </h2>
          <p className="text-md md:text-xl font-mono border-l-4 pl-4 border-light-text dark:border-dark-text">
            {t("hero.tagline")}
          </p>
          <a
            href="/resume.pdf"
            download
            className="my-10 inline-block w-fit border border-light-text dark:border-dark-text px-4 py-2 hover:bg-black hover:text-white transition"
          >
            {t("hero.resume")}
          </a>
        </article>
        <div className="hidden md:flex w-1/3 justify-center items-center">
          <img
            src={`${isDark ? heroBgSVG : heroSVG}`}
            alt="Avatar"
            className="h-[650px] w-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
