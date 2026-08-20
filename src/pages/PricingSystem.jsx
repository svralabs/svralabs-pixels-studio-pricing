import React, { useState } from 'react';
import styles from './PricingSystem.module.css';

const pricingData = [
  {
    id: 1,
    title: '2-week design sprint',
    description: 'One focused build. A landing page, dashboard, brand starter, or up to 8 mobile screens.',
    price: '$2,500',
    priceLabel: '(One-time)',
    features: [
      'Landing page that converts',
      'Dashboard built for daily use',
      'Mobile app (up to 8 screens)',
      'Pitch deck to win the round'
    ]
  },
  {
    id: 2,
    title: 'Ongoing partnership',
    description: 'A dedicated design team. Unlimited output. Design, strategy, and no-code delivery — on retainer.',
    price: '$5,000',
    priceLabel: '(/month)',
    features: [
      'Work directly with the founder (no handoffs)',
      'Unlimited design requests & revisions',
      '48-hour turnarounds (weekdays)',
      'Weekly strategy calls + Slack integration'
    ]
  }
];

export default function PricingSystem() {
  return (
    <div className={styles.container}>
      {/* Top Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          {/* Brand Logo */}
          <div className="font-h2 text-[1.5rem] tracking-tighter text-primary">
            PIXELS STUDIO
          </div>
          {/* Navigation Links */}
          <div className={`${styles.navLinks} md:${styles.navLinks}`}>
            <a className={styles.navLink} href="#">WORK</a>
            <a className={`${styles.navLink} ${styles.active}`} href="#">SERVICES</a>
            <a className={styles.navLink} href="#">INFORMATION</a>
            <a className={styles.navLink} href="#">CONTACT</a>
          </div>
          {/* Trailing Actions */}
          <div className={styles.trailingActions}>
            <a className={`${styles.navLink} hidden sm:block`} href="#">TWITTER</a>
            <a className={styles.navLink} href="#">EMAIL</a>
          </div>
        </div>
      </nav>

      <main className="pt-xl">
        {/* Hero Section & Headline */}
        <section className={styles.heroSection}>
          {/* Animated Shader Background (Subtle Atmospheric Layer) */}
          <div className={styles.shaderBackground}></div>
          {/* Section Label */}
          <div className={styles.sectionLabel}>
            <div className={styles.dottedBorder}>
              SERVICES
            </div>
            {/* Crosshair markers */}
            <div className={`${styles.crosshair} ${styles.tl}`}>
              <div className={`${styles.crosshairLine} ${styles.horizontal}`}></div>
              <div className={`${styles.crosshairLine} ${styles.vertical}`}></div>
            </div>
            <div className={`${styles.crosshair} ${styles.tr}`}>
              <div className={`${styles.crosshairLine} ${styles.horizontal}`}></div>
              <div className={`${styles.crosshairLine} ${styles.vertical}`}></div>
            </div>
            <div className={`${styles.crosshair} ${styles.bl}`}>
              <div className={`${styles.crosshairLine} ${styles.horizontal}`}></div>
              <div className={`${styles.crosshairLine} ${styles.vertical}`}></div>
            </div>
            <div className={`${styles.crosshair} ${styles.br}`}>
              <div className={`${styles.crosshairLine} ${styles.horizontal}`}></div>
              <div className={`${styles.crosshairLine} ${styles.vertical}`}></div>
            </div>
          </div>
          <h1 className="font-h1 text-h1 max-w-4xl leading-tight">
            A sprint to ship one thing well, or a retainer for everything after.
          </h1>
        </section>

        {/* Pricing Grid */}
        <section className="max-w-max-width mx-auto px-lg pb-xl">
          <div className={`${styles.pricingGrid} md:${styles.pricingGrid}`}>
            {pricingData.map((pricing) => (
              <div key={pricing.id} className={styles.pricingCard}>
                {/* Corner Ticks */}
                <div className={`${styles.cornerTick} ${styles.tl}`}></div>
                <div className={`${styles.cornerTick} ${styles.tr}`}></div>
                <div className={`${styles.cornerTick} ${styles.bl}`}></div>
                <div className={`${styles.cornerTick} ${styles.br}`}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{pricing.title}</h3>
                    <p className={styles.cardDescription}>{pricing.description}</p>
                  </div>
                  <div className={styles.priceSection}>
                    <div className="flex items-baseline gap-xs">
                      <span className={styles.price}>{pricing.price}</span>
                      <span className={styles.priceLabel}>{pricing.priceLabel}</span>
                    </div>
                  </div>
                  <div className={styles.featuresList}>
                    <ul className="space-y-md">
                      {pricing.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <span className={styles.featureBullet}></span>
                          <span className={styles.featureText}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-lg">
                    <button className={`${styles.ctaButton} sm:${styles.ctaButton}`}>
                      LET'S TALK
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
