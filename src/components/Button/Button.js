import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button
    type="button"
    onClick={ onClick }
  >
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
