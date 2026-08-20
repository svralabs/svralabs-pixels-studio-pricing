import React from 'react';
import styles from './ServicesPricing.module.css';

const services = [
  {
    id: 1,
    title: '2-WEEK DESIGN SPRINT',
    price: '$2,500',
    type: 'ONE-TIME',
    icon: 'bolt',
    features: [
      'Landing page that converts',
      'Dashboard built for daily use',
      'Mobile app, up to 8 screens',
      'Pitch deck to win the round'
    ]
  },
  {
    id: 2,
    title: 'ONGOING PARTNERSHIP',
    price: '$5,000',
    type: '/ MONTH',
    icon: 'all_inclusive',
    features: [
      'Work directly with the founder',
      'Unlimited requests',
      'Quarterly strategy sessions',
      'Priority support'
    ]
  }
];

const CheckIcon = () => (
  <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
    <rect height="17" stroke="#333333" width="17" x="0.5" y="0.5" />
    <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export default function ServicesPricing() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.brand}>PIXELS STUDIO</div>
          <div className={styles.navLinks}>
            <a className={styles.navLink} href="#">WORK</a>
            <a className={`${styles.navLink} ${styles.active}`} href="#">SERVICES</a>
            <a className={styles.navLink} href="#">INFORMATION</a>
            <a className={styles.navLink} href="#">CONTACT</a>
          </div>
          <div className={styles.navActions}>
            <a className={styles.navAction} href="#">TWITTER</a>
            <a className={styles.navAction} href="#">EMAIL</a>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.headerLabel}>
          <div className={styles.dottedBorder}></div>
          <div className={`${styles.cornerMarker} ${styles.topLeft}`}></div>
          <div className={`${styles.cornerMarker} ${styles.topRight}`}></div>
          <div className={`${styles.cornerMarker} ${styles.bottomLeft}`}></div>
          <div className={`${styles.cornerMarker} ${styles.bottomRight}`}></div>
          <span className={styles.labelText}>SERVICES</span>
        </div>
        <h1 className={styles.headline}>
          A sprint to ship one thing well, or a retainer for everything after.
        </h1>
        <div className={styles.pricingGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={`${styles.cornerTick} ${styles.tickTl}`}></div>
              <div className={`${styles.cornerTick} ${styles.tickTr}`}></div>
              <div className={`${styles.cornerTick} ${styles.tickBl}`}></div>
              <div className={`${styles.cornerTick} ${styles.tickBr}`}></div>
              <div>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>{service.price}</span>
                      <span className={styles.priceType}>{service.type}</span>
                    </div>
                  </div>
                  <div className={styles.iconContainer}>
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                </div>
                <ul className={styles.featureList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <CheckIcon />
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={styles.ctaButton}>
                LET'S TALK
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
