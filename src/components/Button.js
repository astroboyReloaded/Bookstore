import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => (
  <button onClick={onClick} type="button">{label}</button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
