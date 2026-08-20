import PropTypes from 'prop-types';
import styles from './InputSelect.module.css';

export default function InputSelect({ options, value, onChange, placeholder }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onChange}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

InputSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputSelect.defaultProps = {
  value: '',
  placeholder: 'Select an option',
};
