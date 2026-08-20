import React from 'react';

export default function Loader({ size = 'medium', color = 'blue' }) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };
  const colorClasses = {
    blue: 'text-blue-500',
    gray: 'text-gray-500',
    green: 'text-green-500',
    red: 'text-red-500',
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-t-transparent`}></div>
    </div>
  );
}
