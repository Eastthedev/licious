import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="services" id="services">
      <Reveal className="section-header">
        <p className="section-label">Services &amp; Process</p>
        <h2 className="section-title">Three ways to order.</h2>
        <div className="gold-line center"></div>
      </Reveal>

      <div className="services-grid">
        {/* Bespoke */}
        <Reveal className="service-card" delay="0s">
          <Image 
            className="service-card-img" 
            src="/collection1.png" 
            alt="Bespoke" 
            width={400}
            height={533}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="service-card-body">
            <div className="service-number">№ 01</div>
            <div className="service-name">Bespoke</div>
            <div className="service-meta">6 weeks · 3 fittings</div>
            <p className="service-desc">
              A unique one of a kind garment drawn from your measurements. Fabric, embroidery, and silhouette, every decision is yours.
            </p>
            <div className="service-price">From ₦850,000</div>
          </div>
        </Reveal>

        {/* Made-to-Measure */}
        <Reveal className="service-card" delay="0.12s">
          <Image 
            className="service-card-img" 
            src="/collection2.png" 
            alt="Made-to-Measure" 
            width={400}
            height={533}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="service-card-body">
            <div className="service-number">№ 02</div>
            <div className="service-name">Made to Measure</div>
            <div className="service-meta">3 weeks · 1 fitting</div>
            <p className="service-desc">
              Choose from existing patterns, adjusted to your body. Refined silhouettes ready in less than a month.
            </p>
            <div className="service-price">From ₦450,000</div>
          </div>
        </Reveal>

        {/* Bridals */}
        <Reveal className="service-card" delay="0.24s">
          <Image 
            className="service-card-img" 
            src="/bridal2.png" 
            alt="Bridals" 
            width={400}
            height={533}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="service-card-body">
            <div className="service-number">№ 03</div>
            <div className="service-name">Bridals</div>
            <div className="service-meta">8 weeks · 3 fittings</div>
            <p className="service-desc">
              Bespoke gowns and bridal attire crafted for the modern bride. Exquisite details, custom silhouettes, and timeless elegance.
            </p>
            <div className="service-price">Quoted by consultation</div>
          </div>
        </Reveal>
      </div>

      {/* Process steps */}
      <Reveal className="process">
        <p className="process-title">How it works</p>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-step-num">01</div>
            <h4 className="process-step-title">Consultation</h4>
            <p className="process-step-desc">In studio or video consultations. Concept, fabric library, and design sketches.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">02</div>
            <h4 className="process-step-title">Fabric</h4>
            <p className="process-step-desc">Luxury silk, velvet, brocade, lace, or damask chosen with you.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">03</div>
            <h4 className="process-step-title">Fittings</h4>
            <p className="process-step-desc">Two to three sessions. Calibration to the body.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">04</div>
            <h4 className="process-step-title">Delivery</h4>
            <p className="process-step-desc">Finely hand finished, beautifully boxed, and ready for your occasion.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="services-cta">
        <a href="https://wa.me/2348168871793" className="btn-gold" target="_blank" rel="noopener noreferrer">Place Your Order</a>
      </Reveal>
    </section>
  );
}
