"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MainMenu: React.FC<Props> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo_h" href="/">
            <Image src="/images/logo.png.webp" alt="" width={80} height={80} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            className={`collapse navbar-collapse offset ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li
                className={`nav-item submenu dropdown ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  Blog
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/single-blog">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-button">
            <ul>
              <li className="shop-icon">
                <a href="#">
                  <i className="ti-shopping-cart-full"></i>
                  <span>0</span>
                </a>
              </li>
              <li>
                <a id="search" href="#">
                  <i className="ti-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;