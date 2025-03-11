import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png"; 
import { FiMenu, FiX } from "react-icons/fi"; //  Import menu icons

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  //  Function to change language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <NavContainer>
      {/*  Logo */}
      <Link to="/">
        <Logo src={logo} alt="RoyalCrown Logo" />
      </Link>

      {/* Mobile Menu Icon */}
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </MenuIcon>

      {/* Navigation Links */}
      <NavLinks className={menuOpen ? "open" : ""}>
        <NavItem to="/" onClick={() => setMenuOpen(false)}>{t("navbar.home")}</NavItem>
        <NavItem to="/services" onClick={() => setMenuOpen(false)}>{t("navbar.services")}</NavItem>
        <NavItem to="/projects" onClick={() => setMenuOpen(false)}>{t("navbar.projects")}</NavItem>
        <NavItem to="/contact" onClick={() => setMenuOpen(false)}>{t("navbar.contact")}</NavItem>
        <QuoteButton to="/quote" onClick={() => setMenuOpen(false)}>{t("navbar.getQuote")}</QuoteButton>

        {/* Language Selector (Mobile) */}
        <MobileLanguageSelector 
          value={i18n.language} 
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">🇺🇸 Eng</option>
          <option value="es">🇪🇸 Esp</option>
        </MobileLanguageSelector>
      </NavLinks>

      {/* Language Selector (Desktop) */}
      <DesktopLanguageSelector 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">🇺🇸 Eng</option>
        <option value="es">🇪🇸 Esp</option>
      </DesktopLanguageSelector>
    </NavContainer>
  );
};

// ** Styled Components **
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index:50

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

/*  Hide NavLinks on mobile and show when open */
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;

    // background: rgba(255, 255, 255, 0.95);
    background: white;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    display: none;

    z-index: 100;
  }

  &.open {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  text-align: center;

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

/* Menu Icon for Mobile */
const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/*  Desktop Language Selector */
const DesktopLanguageSelector = styled.select`
  width: 80px;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

/*  Mobile Language Selector (Inside Menu) */
const MobileLanguageSelector = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  margin-top: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navbar;
