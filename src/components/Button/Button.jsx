import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = props => <ButtonContainer {...props} />;

Button.defaultProps = {
  full: false,
  strong: false
};

Button.propTypes = {
  outline: PropTypes.bool.isRequired,
  full: PropTypes.bool,
  strong: PropTypes.bool
};

export default Button;
