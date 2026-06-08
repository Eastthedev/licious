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
            src="https://asobi-agbada.vercel.app/services/s1.avif" 
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
              A one-of-one garment, drawn from your measurements. Fabric, embroidery, silhouette &mdash; every decision is yours.
            </p>
            <div className="service-price">From ₦850,000</div>
          </div>
        </Reveal>

        {/* Made-to-Measure */}
        <Reveal className="service-card" delay="0.12s">
          <Image 
            className="service-card-img" 
            src="https://asobi-agbada.vercel.app/collections/c2.avif" 
            alt="Made-to-Measure" 
            width={400}
            height={533}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="service-card-body">
            <div className="service-number">№ 02</div>
            <div className="service-name">Made-to-Measure</div>
            <div className="service-meta">3 weeks · 1 fitting</div>
            <p className="service-desc">
              Choose from existing patterns, adjusted to your body. Refined silhouettes ready in less than a month.
            </p>
            <div className="service-price">From ₦450,000</div>
          </div>
        </Reveal>

        {/* Aṣọ-ẹbí */}
        <Reveal className="service-card" delay="0.24s">
          <Image 
            className="service-card-img" 
            src="https://asobi-agbada.vercel.app/about1.avif" 
            alt="Aṣọ-ẹbí" 
            width={400}
            height={533}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="service-card-body">
            <div className="service-number">№ 03</div>
            <div className="service-name">Aṣọ-ẹbí</div>
            <div className="service-meta">8 weeks · 2 fittings</div>
            <p className="service-desc">
              Coordinated orders for grooms and groomsmen, chiefs and entourage. One fabric, unified vision.
            </p>
            <div className="service-price">Quoted by group</div>
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
            <p className="process-step-desc">In-studio or video. Brief, fabric library, sketches.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">02</div>
            <h4 className="process-step-title">Fabric</h4>
            <p className="process-step-desc">Aṣọ-òkè, brocade, lace, damask &mdash; chosen with you.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">03</div>
            <h4 className="process-step-title">Fittings</h4>
            <p className="process-step-desc">Two to three sessions. Calibration to the body.</p>
          </div>
          <div className="process-step">
            <div className="process-step-num">04</div>
            <h4 className="process-step-title">Delivery</h4>
            <p className="process-step-desc">Hand-finished, boxed, ready for the occasion.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="services-cta">
        <a href="#contact" className="btn-gold">Place Your Order</a>
      </Reveal>
    </section>
  );
}
