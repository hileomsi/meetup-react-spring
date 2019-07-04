import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Card from '../Card';

import { useSpring } from 'react-spring';

export default function ExampleUseSpringWithState(props) {
  const [enabled, setEnabled] = useState(false);
  const styles = useSpring({
    opacity: enabled ? 1 : 0,
    top: enabled ? 0 : 32
  });

  return (
    <Fragment>
      <Button outline onClick={() => setEnabled(!enabled)}>
        Show/Hide
      </Button>
      <Card style={styles} {...props} />
    </Fragment>
  );
}

ExampleUseSpringWithState.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
