import React from 'react';

export default function InputSelect({ options, value, onChange, placeholder = 'Select an option' }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <span className="material-symbols-outlined text-gray-400">arrow_drop_down</span>
      </span>
    </div>
  );
}
