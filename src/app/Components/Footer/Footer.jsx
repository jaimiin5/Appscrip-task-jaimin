"use client";
import React, { useState } from "react";
import * as S from "./Footer.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaApplePay, FaGooglePay, FaInstagram } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoMastercard } from "react-icons/bi";

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const footerData1 = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs",
  ];
  const footerData2 = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  return (
    <footer className={S.footer}>
      {/* First Section */}
      <div className={S.footer1}>
        <div className={S.subscribeSection}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className={S.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={S.contactInfo}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customer@care.com</p>
        </div>
      </div>

      {/* Second Section (Links and Socials) */}
      <div className={S.footer2}>
        <div className={S.footerLinks}>
          <h4
            className={S.dropdownTitle}
            onClick={() => toggleDropdown("shoppers")}
          >
            SHOPPERS{" "}
            {openDropdowns.shoppers ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h4>
          <div
            className={`${S.dropdownContent} ${
              openDropdowns.shoppers ? "open" : ""
            }`}
          >
            {footerData1.map((item) => (
              <ul key={item}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className={S.footerLinks}>
          <h4
            className={S.dropdownTitle}
            onClick={() => toggleDropdown("quickLinks")}
          >
            QUICK LINKS{" "}
            {openDropdowns.quickLinks ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h4>
          <div
            className={`${S.dropdownContent} ${
              openDropdowns.quickLinks ? "open" : ""
            }`}
          >
            {footerData2.map((item) => (
              <ul key={item}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className={S.footerLinks}>
          <h4
            className={S.dropdownTitle}
            onClick={() => toggleDropdown("followUs")}
          >
            FOLLOW US{" "}
            {openDropdowns.followUs ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h4>
          <div
            className={`${S.dropdownContent} ${
              openDropdowns.followUs ? "open" : ""
            }`}
          >
            <div className={S.socials}>
              <FaInstagram />
              <CiLinkedin />
            </div>
            <h4>SHOPPERS ACCEPTS</h4>
            <div className={S.paymentOptions}>
              <FaGooglePay />
              <BiLogoMastercard />
              <GrAmex />
              <FaApplePay />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={S.footerBottom}>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
