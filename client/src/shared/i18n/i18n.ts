import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import { toggleLanguage } from "./lib/toggleLanguage";

i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
        useSuspense: true,
    }
  });

  toggleLanguage('he');

export default i18next;