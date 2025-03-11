import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json"; // ✅ Import translations
import esTranslation from "./locales/es.json"; // ✅ Import translations

// ✅ Define language resources
const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation }
};

// ✅ Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
