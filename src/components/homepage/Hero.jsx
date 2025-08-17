import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import heroSVG from "../../assets/hero-bg.svg";

export default function Hero() {
  const [typedText, setTypedText] = useState("H");
  const { t } = useTranslation();

  useEffect(() => {
    let i = 1;

    const fullText = `${t("homepage.hero.greeting")}`;

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
    <main className=" w-full">
      <section
        id="about"
        className="hero-section flex flex-col md:flex-row md:h-[90vh] items-center w-full max-w-[100vw] px-3 sm:px-4 md:px-12 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text pt-16 md:pt-20"
      >
        <article className="flex flex-col justify-center w-full lg:w-2/3 max-w-full">
          <h2 className="text-2xl md:text-5xl font-bold md:font-normal font-mono my-14 break-words">
            {typedText}
          </h2>
          <p className="text-sm md:text-xl font-mono border-l-4 pl-4 border-light-text dark:border-dark-text max-w-full break-words">
            {t("homepage.hero.tagline")}
          </p>
          <a
            href="/resume.pdf"
            download
            className="my-10 inline-block w-fit border border-light-text dark:border-dark-text px-3 py-1 md:px-4 md:py-2 hover:bg-black hover:text-white transition text-sm md:text-base"
          >
            {t("homepage.hero.resume")}
          </a>
        </article>
        <div className="hidden lg:flex w-1/3 justify-center items-center">
          <img
            src={heroSVG}
            alt="Avatar"
            className="h-[450px] lg:h-[650px] w-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
