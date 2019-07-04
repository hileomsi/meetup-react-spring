import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Card from '../Card';

import { useSpring } from 'react-spring';

export default function ExampleUseSpringCallback(props) {
  const [styles, set, stop] = useSpring(() => ({
    opacity: 0,
    top: 32
  }));

  return (
    <Fragment>
      <Button
        outline
        onClick={() =>
          set({
            opacity: 1,
            top: 0
          })
        }
      >
        Show
      </Button>
      <Card style={styles} {...props} />
    </Fragment>
  );
}

ExampleUseSpringCallback.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
