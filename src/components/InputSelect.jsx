import React from 'react';

export default function InputSelect({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  ...props
}) {
  return (
    <select
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
