import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import { useSpring } from 'react-spring';

export default function ExampleUseSpringAsyncAwait(props) {
  const styles = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, top: 0 });
      await next({ opacity: 0, top: -32 });
    },
    from: { opacity: 0, top: 32 }
  });

  return <Card style={styles} {...props} />;
}

ExampleUseSpringAsyncAwait.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
