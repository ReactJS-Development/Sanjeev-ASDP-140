import React from 'react';
import Breakpoint from './breakpoint';
import propTypes from 'prop-types';

const { object } = propTypes;

export default function PhoneBreakPoint(props) {
  return (
    <Breakpoint name="phone">
      {props.children}
    </Breakpoint>
  );
}

PhoneBreakPoint.propTypes = {
  children: object,
};