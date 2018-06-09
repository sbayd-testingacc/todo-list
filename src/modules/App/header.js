import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TEXTS } from './constants';

export const Header = ({ todoCount }) => (
  <Fragment>
    <h1>{TEXTS.header}</h1>
    <p>{`${todoCount} ${TEXTS.remaining}`}</p>
  </Fragment>
);

Header.propTypes = {
  todoCount: PropTypes.number
};

Header.defaultProps = {
  todoCount: 0
};
