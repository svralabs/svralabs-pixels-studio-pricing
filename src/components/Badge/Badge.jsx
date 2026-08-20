import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ children, color = 'primary', className = '', ...props }) => {
  const badgeClass = `${styles.badge} ${styles[color]} ${className}`;

  return (
    <span className={badgeClass} {...props}>
      {children}
    </span>
  );
};

export default Badge;
