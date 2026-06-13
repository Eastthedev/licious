import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Gallery — SUZILICIOUS COLLECTION",
  description: "Explore the full atelier gallery of bespoke classy wears by SUZILICIOUS COLLECTION. Craftsmanship, identity, and prestige in every stitch.",
};

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

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main className="collection-page">
        <div className="collection-hero">
          <span className="collection-hero-label">The Atelier Gallery</span>
          <h1 className="collection-hero-title">Suzilicious Collection</h1>
          <p className="collection-hero-desc">
            Explore our signature gallery of bespoke and classy wears. Tailored in Enugu with architectural precision, premium fabrics, and exceptional couture design.
          </p>
        </div>

        <div className="collection-grid">
          {collectionsData.map((item, index) => {
            const delayTime = `${(index % 3) * 0.12}s`;
            return (
              <Reveal 
                className="collection-card" 
                key={item.id} 
                delay={delayTime}
              >
                <div className="collection-card-img-wrap">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="collection-card-img"
                    priority={index < 3}
                  />
                </div>
                <div className="collection-card-details">
                  <h2 className="collection-card-name">{item.name}</h2>
                  <p className="collection-card-fabric">{item.fabric}</p>
                  <p className="collection-card-info">{item.info}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
