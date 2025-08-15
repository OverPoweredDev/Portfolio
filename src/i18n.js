// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: "en",
    debug: true,

    ns: ["common", "projects"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
