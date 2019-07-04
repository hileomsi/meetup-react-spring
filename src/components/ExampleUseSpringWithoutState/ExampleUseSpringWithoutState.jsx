import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import { useSpring } from 'react-spring';

export default function ExampleUseSpringWithoutState(props) {
  const styles = useSpring({
    from: {
      opacity: 0,
      top: 32
    },
    to: {
      opacity: 1,
      top: 0
    }
  });

  return <Card style={styles} {...props} />;
}

ExampleUseSpringWithoutState.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
