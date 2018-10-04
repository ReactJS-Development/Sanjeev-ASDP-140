import React from 'react';
import Breakpoint from './breakpoint';
import propTypes from 'prop-types'

const { object } = propTypes;

export default function DesktopBreakpoint(props) {
  return (
    <Breakpoint name="desktop">
      {props.children}
    </Breakpoint>
  );
}

DesktopBreakpoint.propTypes = {
  children: object,
};