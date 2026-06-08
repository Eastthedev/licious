"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export default function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const style = delay ? { transitionDelay: delay } : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
