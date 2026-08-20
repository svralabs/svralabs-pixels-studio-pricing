import PropTypes from 'prop-types';
import styles from './Badge.module.css';

export default function Badge({ variant, children }) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
  variant: 'info',
};
