import React from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderOverlay} aria-live="polite">
      <div className={styles.loaderSpinner} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
