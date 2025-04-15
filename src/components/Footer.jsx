import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle form submission (e.g., API call)
  };

  return (
    <footer className="mt-32 border-t-2 border-light-text dark:border-dark-text font-mono">
      <div
        id="contact"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 p-8"
      >
        <div>
          <h2 className="text-xl mb-4">
            &gt; {t("contact.send-me-a-message")}
          </h2>
          {submitted ? (
            <p className="text-mono">&gt; {t("contact.message-recieved")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">{t("contact.name")} :</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-light-text dark:border-dark-text p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">{t("contact.email")} :</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-light-text dark:border-dark-text p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">{t("contact.message")} :</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-light-text dark:border-dark-text p-2 mt-1"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-light-text dark:border-dark-text px-4 py-2 hover:bg-black hover:text-white transition"
              >
                {t("contact.send-message")}
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-xl mb-4">&gt; {t("contact.find-me-online")}</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/OverPoweredDev"
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/omkarprabhune"
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:omkar@prabhune.com"
                className="flex items-center gap-2 hover:underline"
              >
                <MdEmail /> {t("contact.email")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-light-text dark:border-dark-text py-4 text-xs md:text-sm">
        omkarprabhune.com © 2025 — {t("footer.built-with")}
      </div>
    </footer>
  );
}
