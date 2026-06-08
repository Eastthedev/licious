"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const collectionsData = [
  { id: 1, name: "Ìjọba Royale", img: "c1.avif" },
  { id: 2, name: "Olùwadàra", img: "c2.avif" },
  { id: 3, name: "Adérónké", img: "c3.avif" },
  { id: 4, name: "Bámidélé", img: "c4.avif" },
  { id: 5, name: "Ọláyínká", img: "c5.avif" },
  { id: 6, name: "Ọbáfẹ́mi", img: "c6.avif" },
  { id: 7, name: "Adérèmí", img: "c7.avif" },
  { id: 8, name: "Babátúndé", img: "c8.avif" },
  { id: 9, name: "Olúsẹ́gun", img: "c9.avif" },
  { id: 10, name: "Akínwándé", img: "c10.avif" },
  { id: 11, name: "Adébísí", img: "c11.avif" },
  { id: 12, name: "Olúyẹmí", img: "c12.avif" },
  { id: 13, name: "Ifáyẹmí", img: "c13.avif" },
  { id: 14, name: "Adéwálé", img: "c14.avif" },
  { id: 15, name: "Olúdáre", img: "c15.avif" },
  { id: 16, name: "Bámitálẹ̀", img: "c16.avif" },
  { id: 17, name: "Olúwasèyí", img: "c17.avif" },
  { id: 18, name: "Akínkúnlé", img: "c18.avif" },
  { id: 19, name: "Adéyẹmí", img: "c19.avif" },
  { id: 20, name: "Olúwaṣẹ́gun", img: "c20.avif" },
];

export default function Collections() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="collections" id="collections">
      <Reveal className="section-header">
        <p className="section-label">The Collection</p>
        <h2 className="section-title">Pieces from the atelier.</h2>
        <div className="gold-line center"></div>
      </Reveal>

      {/* Marquee ticker */}
      <div className="marquee-wrap">
        <div className="marquee-inner" id="marqueeInner">
          <span>Bespoke Tailoring</span><span className="dot">◆</span>
          <span>Yoruba Heritage</span><span class="dot">◆</span>
          <span>Lagos Atelier</span><span class="dot">◆</span>
          <span>Ceremonial Wear</span><span class="dot">◆</span>
          <span>Aṣọ-Ẹbí Coordination</span><span class="dot">◆</span>
          <span>Owambe to Throne</span><span class="dot">◆</span>
          <span>Agbada Couture</span><span class="dot">◆</span>
          <span>West African Luxury</span><span class="dot">◆</span>
          {/* duplicate for seamless loop */}
          <span>Bespoke Tailoring</span><span className="dot">◆</span>
          <span>Yoruba Heritage</span><span class="dot">◆</span>
          <span>Lagos Atelier</span><span class="dot">◆</span>
          <span>Ceremonial Wear</span><span class="dot">◆</span>
          <span>Aṣọ-Ẹbí Coordination</span><span class="dot">◆</span>
          <span>Owambe to Throne</span><span class="dot">◆</span>
          <span>Agbada Couture</span><span class="dot">◆</span>
          <span>West African Luxury</span><span className="dot">◆</span>
        </div>
      </div>

      {/* Scrolling gallery */}
      <div className="gallery-outer">
        <div 
          className="gallery-track" 
          id="galleryTrack" 
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* first set */}
          {collectionsData.map((item) => (
            <div className="gallery-item" key={item.id}>
              <Image
                src={`https://asobi-agbada.vercel.app/collections/${item.img}`}
                alt={item.name}
                width={280}
                height={373}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div className="gallery-item-label">{item.name}</div>
            </div>
          ))}
          {/* duplicate set for seamless loop */}
          {collectionsData.map((item) => (
            <div className="gallery-item" key={`dup-${item.id}`}>
              <Image
                src={`https://asobi-agbada.vercel.app/collections/${item.img}`}
                alt={item.name}
                width={280}
                height={373}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div className="gallery-item-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <Reveal className="collections-cta">
        <a 
          href="https://asobi-agbada.vercel.app/collections" 
          className="btn-outline" 
          target="_blank"
          rel="noopener noreferrer"
        >
          See All Collections
        </a>
      </Reveal>
    </section>
  );
}
