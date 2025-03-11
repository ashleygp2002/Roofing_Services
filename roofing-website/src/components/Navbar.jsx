// import React from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "./LanguageSwitcher";
// import logo from "../assets/logo.png"; // Adjust path as needed

// const Navbar = () => {
//   const { t } = useTranslation(); // Translation function

//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <Link to="/">
//         <img src={logo} alt="RoofPro Logo" className="w-28 cursor-pointer" />
//       </Link>
//       <div className="flex space-x-4">
//         <Link to="/" className="px-4 py-2 border rounded-md">{t("navbar.home")}</Link>
//         <Link to="/services" className="px-4 py-2 border rounded-md">{t("navbar.services")}</Link>
//         <Link to="/projects" className="px-4 py-2 border rounded-md">{t("navbar.projects")}</Link>
//         <Link to="/contact" className="px-4 py-2 border rounded-md">{t("navbar.contact")}</Link>
//         <Link to="/quote" className="px-4 py-2 bg-black text-white rounded-md">{t("navbar.quote")}</Link>
//         <LanguageSwitcher /> {/* ✅ Language dropdown */}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next"; // ✅ Import i18n hook
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // ✅ Function to change language and refresh UI
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="RoyalCrown Logo" />
      </Link>

      <NavLinks>
        <NavItem to="/">{t("navbar.home")}</NavItem>
        <NavItem to="/services">{t("navbar.services")}</NavItem>
        <NavItem to="/projects">{t("navbar.projects")}</NavItem>
        <NavItem to="/contact">{t("navbar.contact")}</NavItem>
        <QuoteButton to="/quote">{t("navbar.getQuote")}</QuoteButton>
      </NavLinks>

      {/* ✅ Language Selector */}
      <LanguageSelector 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">🇺🇸 Eng</option>
        <option value="es">🇪🇸 Esp</option>
      </LanguageSelector>
    </NavContainer>
  );
};

// ** Styled Components **
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const QuoteButton = styled(Link)`
  background: black;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background: darkgray;
  }
`;

const LanguageSelector = styled.select`
  width: 80px;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

export default Navbar;
