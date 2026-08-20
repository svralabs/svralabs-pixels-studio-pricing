import React, { createContext, useContext } from 'react';
import pricingData from '../../data/pricing.json';
import styles from './ServicesPricing.module.css';

// ponytail: hardcoded English, replace with dynamic loading when i18n needed
const translations = {
  en: {
    'services.pricing.brand': 'Pixels Studio',
    'services.pricing.work': 'Work',
    'services.pricing.services': 'Services',
    'services.pricing.information': 'Information',
    'services.pricing.contact': 'Contact',
    'services.pricing.twitter': 'Twitter',
    'services.pricing.email': 'Email',
    'services.pricing.servicesLabel': 'Services'
  }
};

const I18nContext = createContext(translations.en);

export function I18nProvider({ children }) {
  return (
    <I18nContext.Provider value={translations.en}>
      {children}
    </I18nContext.Provider>
  );
}

function useTranslation() {
  const t = useContext(I18nContext);
  return { t };
}

export default function ServicesPricing() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.brand}>
            {t('services.pricing.brand')}
          </div>
          <div className={styles.navLinks}>
            <a className={styles.navLink} href="#">{t('services.pricing.work')}</a>
            <a className={`${styles.navLink} ${styles.active}`} href="#">{t('services.pricing.services')}</a>
            <a className={styles.navLink} href="#">{t('services.pricing.information')}</a>
            <a className={styles.navLink} href="#">{t('services.pricing.contact')}</a>
          </div>
          <div className={styles.navActions}>
            <a className={styles.navAction} href="#">{t('services.pricing.twitter')}</a>
            <a className={styles.navAction} href="#">{t('services.pricing.email')}</a>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.headerLabel}>
          <div className={styles.dottedBorder}></div>
          <div className={`${styles.crosshair} ${styles.topLeft}`}>
            <div className={styles.crosshairLine}></div>
            <div className={styles.crosshairLineVertical}></div>
          </div>
          <div className={`${styles.crosshair} ${styles.topRight}`}>
            <div className={styles.crosshairLine}></div>
            <div className={styles.crosshairLineVertical}></div>
          </div>
          <div className={`${styles.crosshair} ${styles.bottomLeft}`}>
            <div className={styles.crosshairLine}></div>
            <div className={styles.crosshairLineVertical}></div>
          </div>
          <div className={`${styles.crosshair} ${styles.bottomRight}`}>
            <div className={styles.crosshairLine}></div>
            <div className={styles.crosshairLineVertical}></div>
          </div>
          <span className={styles.labelText}>{t('services.pricing.servicesLabel')}</span>
        </div>

        <h1 className={styles.headline}>
          {t('services.pricing.headline', { defaultValue: 'Choose the right plan for your needs' })}
        </h1>
      </main>
    </div>
  );
}
