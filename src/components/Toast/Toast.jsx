import React, { useContext, useEffect } from 'react';
import { ToastContext } from './ToastContext';
import styles from './Toast.module.css';

const Toast = () => {
  const { toast, hideToast } = useContext(ToastContext);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, hideToast]);

  if (!toast.visible) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${styles[toast.type]}`}>
        <span className={styles.message}>{toast.message}</span>
        <button className={styles.closeButton} onClick={hideToast}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default Toast;
