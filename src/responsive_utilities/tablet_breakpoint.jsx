import React from 'react';
import Breakpoint from './breakpoint';
import propTypes from 'prop-types';

const { object } = propTypes;

export default function TabletBreakpoint(props) {
  return (
    <Breakpoint name="tablet">
      {props.children}
    </Breakpoint>
  );
}

TabletBreakpoint.propTypes = {
  children: object,
};