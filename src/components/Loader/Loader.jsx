import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ size = 'md', className = '', ...props }) => {
  return (
    <div className={`${styles.loader} ${styles[size]} ${className}`} {...props}>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
    </div>
  );
};

export default Loader;
