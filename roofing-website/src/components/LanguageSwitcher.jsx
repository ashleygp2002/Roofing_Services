import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-3 py-2 border rounded-md bg-white cursor-pointer"
      >
        <option value="en">English 🇺🇸</option>
        <option value="es">Español 🇪🇸</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
//This component allows users to switch between English and Spanish languages

