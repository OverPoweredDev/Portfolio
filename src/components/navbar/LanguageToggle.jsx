import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
    window.location.reload();
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "DE" : "EN"}
    </button>
  );
}
