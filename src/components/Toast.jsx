import { useEffect } from 'react';
import { useToast } from '../context/ToastContext';

const variantStyles = {
  success: {
    container: 'bg-primary p-md flex flex-col justify-between min-h-[160px] relative overflow-hidden',
    icon: 'material-symbols-outlined text-background',
    id: 'font-label-sm text-[10px] text-background opacity-50 tabular-nums',
    title: 'text-background font-bold uppercase text-sm tracking-tight leading-tight',
    message: 'text-background opacity-70 text-xs mt-1'
  },
  error: {
    container: 'bg-surface hairline-border border-l-4 border-l-error p-md flex flex-col justify-between min-h-[160px]',
    icon: 'material-symbols-outlined text-error',
    id: 'font-label-sm text-[10px] bg-error text-background px-1',
    title: 'text-on-surface font-bold uppercase text-sm tracking-tight leading-tight',
    message: 'text-secondary text-xs mt-1 tabular-nums'
  },
  warning: {
    container: 'bg-surface hairline-border p-md flex flex-col justify-between min-h-[160px] relative',
    icon: 'material-symbols-outlined text-secondary',
    id: 'font-label-sm text-[10px] text-outline tabular-nums',
    title: 'text-on-surface font-bold uppercase text-sm tracking-tight leading-tight',
    message: 'text-secondary text-xs mt-1'
  },
  info: {
    container: 'bg-surface hairline-border p-md flex flex-col justify-between min-h-[160px]',
    icon: 'material-symbols-outlined text-secondary',
    id: 'font-label-sm text-[10px] border border-border text-outline px-1',
    title: 'text-on-surface font-bold uppercase text-sm tracking-tight leading-tight',
    message: 'text-secondary text-xs mt-1'
  }
};

export default function Toast() {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), 5000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div key={toast.id} className={variantStyles[toast.variant].container}>
          <div className="flex justify-between items-start">
            <span className={variantStyles[toast.variant].icon}>
              {toast.icon}
            </span>
            <span className={variantStyles[toast.variant].id}>
              {toast.idText}
            </span>
          </div>
          <div className="mt-lg">
            <p className={variantStyles[toast.variant].title}>
              {toast.title}
            </p>
            <p className={variantStyles[toast.variant].message}>
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="absolute top-2 right-2 text-background hover:text-opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      ))}
    </div>
  );
}
