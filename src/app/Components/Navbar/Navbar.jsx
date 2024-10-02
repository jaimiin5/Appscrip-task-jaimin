"use client";
import React, { useState } from "react";
import * as S from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={S.navbar}>
      <div className={S.navbarContainer}>
        {/* Hamburger Menu */}
        <div className={S.hamburger} onClick={toggleMobileMenu}>
          ☰
        </div>

        {/* Mobile Slider Menu */}
        <div className={`${S.mobileMenu} ${isMobileMenuOpen ? S.open : ""}`}>
          <div className={S.closeMenu} onClick={toggleMobileMenu}>
            <VscClose />
          </div>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li> 
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={S.logo}>
          <a href="#">LOGO</a>
        </div>

        {/* Nav Links - Visible in Desktop */}
        <ul className={S.navLinks}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        {/* Right-Side Icons */}
        <div className={S.navIcons}>
          <a href="#" className={S.icon}>
            <CiSearch />
          </a>
          <a href="#" className={S.icon}>
            <CiHeart />
          </a>
          <a href="#" className={S.icon}>
            <CiShoppingCart />
          </a>
          <div className={S.languageSwitch}>
            <span>ENG</span>
            <i className={S.arrowDown}>▼</i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
