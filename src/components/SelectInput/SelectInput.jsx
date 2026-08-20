import React from 'react';
import styles from './SelectInput.module.css';

const SelectInput = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.selectContainer} ${className}`}>
      <select
        className={styles.select}
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
      <span className={styles.arrow}>▼</span>
    </div>
  );
};

export default SelectInput;
