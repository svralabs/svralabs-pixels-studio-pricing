import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ variant, size, children, onClick, disabled }) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
};
