import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal className="about-image">
        <Image
          src="/about2.png"
          alt="Suzilicious Collection Atelier"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={false}
          style={{ objectFit: "cover" }}
        />
      </Reveal>
      <Reveal className="about-text">
        <p className="section-label">The Atelier Story</p>
        <h2 className="section-title">
          Where modern vision<br />meets couture.
        </h2>
        <div className="gold-line"></div>
        <blockquote className="about-quote">
          &ldquo;Bespoke tailoring is not merely sewing; it is the art of sculpting confidence.&rdquo;
        </blockquote>
        <p className="about-body">
          Rooted in exceptional textile mastery, SUZILICIOUS COLLECTION brings architectural precision to bespoke classy wears. Our master artisans spend upwards of eighty hours on a single piece, tailoring perfect silhouettes for gentlemen and ladies of class.
        </p>
      </Reveal>
    </section>
  );
}
