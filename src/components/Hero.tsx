import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* fallback gradient bg in case video doesn't load */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg,#1a0e00 0%,#000 60%)",
          zIndex: 0
        }}
      ></div>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://asobi-agbada.vercel.app/hero.webm" type="video/webm" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Bespoke Agbada · Lagos</p>
        <h1 className="hero-title">
          Royalty,<br /><em>in every stitch.</em>
        </h1>
        <p className="hero-sub">
          Hand-tailored Agbada for grooms, chiefs, and gentlemen of culture — from owambe to the throne.
        </p>
        <a href="#collections" className="hero-cta">Explore Collection</a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-arrow">↓</div>
      </div>
    </section>
  );
}
