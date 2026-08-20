import React from 'react';

export default function Loader({
  size = 'medium',
  className = '',
  ...props
}) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className={`flex justify-center items-center ${className}`} {...props}>
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-blue-500 ${sizeClasses[size]}`}
      />
    </div>
  );
}
