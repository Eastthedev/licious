"use client";

import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  const closeMobile = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ─── MOBILE MENU ─── */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
        <a href="/collection" onClick={closeMobile}>Collections</a>
        <a href="/#about" onClick={closeMobile}>About Us</a>
        <a href="/#services" onClick={closeMobile}>Services</a>
        <a href="/#contact" onClick={closeMobile}>Contact</a>
      </div>

      {/* ─── NAV ─── */}
      <nav id="nav" className={isScrolled ? "scrolled" : ""}>
        <a href="/" className="nav-logo">
          SUZILICIOUS <span>collection</span>
        </a>
        <ul className="nav-links">
          <li><a href="/collection">Collections</a></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#contact">Contact Us</a></li>
          <li><a href="/#services">Our Services</a></li>
        </ul>
        <a href="https://wa.me/2348168871793" className="nav-cta" target="_blank" rel="noopener noreferrer">Order</a>
        <button 
          className={`nav-hamburger ${isOpen ? "open" : ""}`} 
          id="hamburger" 
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  );
}
