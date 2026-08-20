import React from 'react';
import { X } from 'lucide-react';

export default function Toast({ message, variant = 'info', onClose }) {
  const variantClasses = {
    info: 'bg-blue-50 text-blue-800',
    success: 'bg-green-50 text-green-800',
    warning: 'bg-yellow-50 text-yellow-800',
    error: 'bg-red-50 text-red-800',
  };

  return (
    <div className={`p-4 rounded-lg shadow-lg flex items-center justify-between ${variantClasses[variant]}`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
        <X size={18} />
      </button>
    </div>
  );
}
