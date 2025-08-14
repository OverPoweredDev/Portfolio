import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="mt-32 border-t-2 border-light-text dark:border-dark-text font-mono">
      <div
        id="contact"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 p-8"
      >
        <div>
          <h2 className="text-xl mb-4">
            &gt; {t("homepage.contact.send-me-a-message")}
          </h2>
          {submitted ? (
            <p className="text-mono">&gt; {t("homepage.contact.message-recieved")}</p>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">{t("homepage.contact.name")} :</label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="w-full border border-light-text dark:border-dark-text text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">{t("homepage.contact.email")} :</label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  className="w-full border border-light-text dark:border-dark-text text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">{t("homepage.contact.message")} :</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full border border-light-text dark:border-dark-text text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg p-2 mt-1"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="border border-light-text dark:border-dark-text px-4 py-2 hover:bg-black hover:text-white transition"
              >
                {loading
                  ? t("homepage.contact.sending-message")
                  : t("homepage.contact.send-message")}
              </button>
            </form>
          )}
        </div>

        <address className="not-italic">
          <h2 className="text-xl mb-4">&gt; {t("homepage.contact.find-me-online")}</h2>
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
                <MdEmail /> {t("homepage.contact.email")}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="mt-12 text-center border-t border-light-text dark:border-dark-text py-4 text-xs md:text-sm">
        omkarprabhune.com © 2025 — {t("homepage.footer.built-with")}
      </div>
    </footer>
  );
}
