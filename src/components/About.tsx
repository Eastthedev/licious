import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal className="about-image">
        <Image
          src="https://asobi-agbada.vercel.app/_next/image?url=%2Fabout1.avif&w=3840&q=75"
          alt="Inside the ÀṢỌBI atelier — tailors at work"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={false}
          style={{ objectFit: "cover" }}
        />
      </Reveal>
      <Reveal className="about-text">
        <p className="section-label">The Atelier Story</p>
        <h2 className="section-title">
          Where heritage<br />meets couture.
        </h2>
        <div className="gold-line"></div>
        <blockquote className="about-quote">
          &ldquo;An agbada is not merely draped; it is a canvas of identity.&rdquo;
        </blockquote>
        <p className="about-body">
          Rooted in West African textile mastery, ÀṢỌBI brings architectural precision to ceremonial attire. Our master artisans spend upwards of eighty hours on a single piece, embedding custom Yoruba iconography.
        </p>
      </Reveal>
    </section>
  );
}
