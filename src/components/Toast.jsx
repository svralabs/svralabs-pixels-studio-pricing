import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ type, message, description, id, onDismiss }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <span className="material-symbols-outlined text-background">check_circle</span>;
      case 'error':
        return <span className="material-symbols-outlined text-error">error</span>;
      case 'warning':
        return <span className="material-symbols-outlined text-secondary">warning</span>;
      case 'info':
        return <span className="material-symbols-outlined text-secondary">info</span>;
      default:
        return null;
    }
  };

  const getBackgroundClass = () => {
    switch (type) {
      case 'success':
        return 'bg-primary';
      case 'error':
        return 'bg-surface hairline-border border-l-4 border-l-error';
      case 'warning':
        return 'bg-surface hairline-border';
      case 'info':
        return 'bg-surface hairline-border';
      default:
        return 'bg-surface hairline-border';
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'success':
        return <span className="font-label-sm text-[10px] text-background opacity-50 tabular-nums">ID: {id}</span>;
      case 'error':
        return <span className="font-label-sm text-[10px] bg-error text-background px-1">CRITICAL_FAILURE</span>;
      case 'warning':
        return <span className="font-label-sm text-[10px] text-outline tabular-nums">LIMIT_REACHED</span>;
      case 'info':
        return <span className="font-label-sm text-[10px] border border-border text-outline px-1">SYS_NOTICE</span>;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        className={`p-md flex flex-col justify-between min-h-[160px] relative overflow-hidden ${getBackgroundClass()}`}
      >
        <div className="flex justify-between items-start">
          {getIcon()}
          {getLabel()}
        </div>
        <div className="mt-lg">
          <p className="text-background font-bold uppercase text-sm tracking-tight leading-tight">{message}</p>
          <p className="text-background opacity-70 text-xs mt-1">{description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
