"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const collectionsData = [
  { id: 1, name: "The Sovereign", img: "/collection1.png", fabric: "100% MERINO WOOL · DOUBLE-BREASTED TUXEDO", info: "MIDNIGHT BLACK · BESPOKE EDITION" },
  { id: 2, name: "The Aurelia", img: "/collection2.png", fabric: "LUXURY SILK SATIN · COLUMN GOWN", info: "GOLDEN CHAMPAGNE · COUTURE LINE" },
  { id: 3, name: "The Obsidian", img: "/collection3.png", fabric: "ITALIAN VELVET · SHAWL COLLAR DINNER JACKET", info: "PITCH BLACK · EXQUISITE TAILORING" },
  { id: 4, name: "The Monarch", img: "/collection4.png", fabric: "PREMIUM BROCADE · STRUCTURED BLAZER", info: "ROYAL NAVY & GOLD · SIGNATURE SERIE" },
  { id: 5, name: "The Florence", img: "/collection5.png", fabric: "SILK JACQUARD · OFF-SHOULDER COUTURE PIECE", info: "EMERALD GREEN · LIMITED EDITION" },
  { id: 6, name: "The Windsor", img: "/collection6.png", fabric: "CASHMERE BLEND · CLASSIC THREE-PIECE SUIT", info: "CHARCOAL HERRINGBONE · MASTER ARTISAN" },
  { id: 7, name: "The Seraphina", img: "/collection7.png", fabric: "FRENCH LACE OVERLAY · EVENING SHEATH", info: "ALABASTER WHITE · BRIDAL ATELIER" },
  { id: 8, name: "The Luminary", img: "/collection8.png", fabric: "SILK DAMASK · DOUBLE-VENTED DINNER JACKET", info: "METALLIC PLATINUM · PRIVATE SALON" },
];

export default function Collections() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>, id: string | number) => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
    setHoveredId(id);
  };

  const handleCardMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
    setHoveredId(null);
  };

  return (
    <section className="collections" id="collections">
      <div className="collections-header mb-10 md:mb-14 px-6 lg:px-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/60 mb-4">The Collection</p>
        <h2 className="collections-title">Pieces from Suzilicious Collection.</h2>
      </div>

      {/* Scrolling gallery */}
      <div className="collections-marquee-wrap">
        <div 
          className={`collections-marquee-track ${hoveredId !== null ? "has-hovered" : ""}`} 
          id="galleryTrack" 
          ref={trackRef}
          onMouseLeave={handleCardMouseLeave}
        >
          {/* first set */}
          {collectionsData.map((item, index) => {
            const isEven = index % 2 === 0;
            const rotation = isEven ? "rotate(-7deg)" : "rotate(7deg)";
            return (
              <div 
                className={`collections-item-wrap ${hoveredId === item.id ? "is-hovered" : ""}`} 
                key={item.id}
                style={{ zIndex: 1, transform: rotation }}
                onMouseEnter={(e) => handleCardMouseEnter(e, item.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div 
                  className="relative collections-sine-card"
                  style={{ animationDelay: `${-(index * 0.4)}s` }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={400}
                    className="collections-img"
                    loading="lazy"
                  />
                  {/* Dark overlay at bottom until hovered */}
                  <div className="collections-card-overlay" />
                </div>
              </div>
            );
          })}
          {/* duplicate set for seamless loop */}
          {collectionsData.map((item, index) => {
            const isEven = index % 2 === 0;
            const rotation = isEven ? "rotate(-7deg)" : "rotate(7deg)";
            return (
              <div 
                className={`collections-item-wrap ${hoveredId === `dup-${item.id}` ? "is-hovered" : ""}`} 
                key={`dup-${item.id}`}
                style={{ zIndex: 1, transform: rotation }}
                onMouseEnter={(e) => handleCardMouseEnter(e, `dup-${item.id}`)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div 
                  className="relative collections-sine-card"
                  style={{ animationDelay: `${-(index * 0.4)}s` }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={400}
                    className="collections-img"
                    loading="lazy"
                  />
                  {/* Dark overlay at bottom until hovered */}
                  <div className="collections-card-overlay" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 md:mt-14 flex justify-center px-6">
        <a 
          href="/collection" 
          className="collections-btn-gradient"
        >
          <span className="collections-btn-inner">See All Collections</span>
        </a>
      </div>
    </section>
  );
}
