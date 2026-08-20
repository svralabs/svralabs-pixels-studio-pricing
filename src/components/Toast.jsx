import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ id, type, title, message, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <span className="material-symbols-outlined">check_circle</span>;
      case 'error':
        return <span className="material-symbols-outlined">error</span>;
      case 'warning':
        return <span className="material-symbols-outlined">warning</span>;
      case 'info':
        return <span className="material-symbols-outlined">info</span>;
      default:
        return null;
    }
  };

  const getTag = () => {
    switch (type) {
      case 'success':
        return null;
      case 'error':
        return <span className={styles.toastTag}>CRITICAL_FAILURE</span>;
      case 'warning':
        return <span className={styles.toastTag}>LIMIT_REACHED</span>;
      case 'info':
        return <span className={styles.toastTag}>SYS_NOTICE</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.toast} ${styles[`toast${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}>
      <div className={styles.toastHeader}>
        {getTag()}
        <span className={styles.toastId}>ID: {id}</span>
        <span className={styles.toastClose} onClick={() => onClose(id)}>
          <span className="material-symbols-outlined">close</span>
        </span>
      </div>
      <div className={styles.toastContent}>
        <p className={styles.toastTitle}>{title}</p>
        <p className={styles.toastMessage}>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
