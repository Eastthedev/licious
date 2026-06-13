import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">SUZILICIOUS</div>
          <div className="footer-brand-tagline">Collection · Enugu</div>
        </div>
        <div>
          <p className="footer-col-title">Explore</p>
          <ul className="footer-col-links">
            <li><a href="/collection">Collections</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-studio">
          <p className="footer-col-title">Studio</p>
          <p>
            <a href="https://wa.me/2348168871793" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              shop 67 grand mall, Abakaliki Road GRA Enugu
            </a><br />
            By appointment only<br />
            <a href="https://wa.me/2348168871793" style={{ color: "var(--gold-light)", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              +234 816 887 1793
            </a><br />
            <a href="mailto:suzychiamaka@gmail.com" style={{ color: "var(--gold-light)", textDecoration: "none" }}>
              suzychiamaka@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p className="footer-col-title">Follow</p>
          <ul className="footer-col-links">
            <li>
              <a href="https://www.instagram.com/suzilicious_collections?igsh=aTU4YzJoa2MxaThv" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@amakalicious0?_r=1&_t=ZS-97AT8riXomL" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://wa.me/2348168871793" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} SUZILICIOUS COLLECTION. All garments are one of one.</p>
        <p className="footer-craft">Crafted in Enugu</p>
      </div>
    </footer>
  );
}
