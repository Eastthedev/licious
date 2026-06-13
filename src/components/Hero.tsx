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
        <source src="/replica.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      {/* LEFT POINTER */}
      <div className="hero-left-pointer">
        <div className="hero-pointer-text-wrap">
          <p className="hero-pointer-text">Crafted in Enugu.</p>
        </div>
        <svg width="400" height="55" viewBox="0 0 400 55" fill="none" className="hero-pointer-svg" aria-hidden="true">
          <defs>
            <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.55" stopColor="white" stopOpacity="0.5"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0.85"></stop>
            </linearGradient>
          </defs>
          <path 
            d="M 395,50 L 348,3 L 0,3" 
            stroke="url(#hero-line-gradient)" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          ></path>
          <circle cx="395" cy="50" fill="white" r="2"></circle>
        </svg>
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-right-content">
        <div className="hero-right-content-inner">
          <p className="hero-eyebrow">Bespoke Classy Wears · Enugu</p>
          <h1 className="hero-title">
            Royalty,<br /><em>in every stitch.</em>
          </h1>
          <p className="hero-sub">
            Exquisitely tailored premium garments for gentlemen and ladies of class, custom designed for every landmark occasion.
          </p>
          <div className="hero-cta-wrap">
            <a href="/collection" className="hero-cta">Explore Collection</a>
          </div>
        </div>
      </div>

      {/* CENTERED SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span>↓ Scroll</span>
      </div>
    </section>
  );
}
