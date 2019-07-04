import React from 'react';
import PropTypes from 'prop-types';

import { PageContainer } from './styles';

function Page({ children, ...props }) {
  return <PageContainer {...props}>{children}</PageContainer>;
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};

export default Page;
