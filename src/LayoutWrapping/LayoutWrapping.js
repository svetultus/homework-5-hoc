import React, { Component } from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = WrappedComponent => {
  class wrapWithAbsolutePosition extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div style={{ position: 'absolute' }}>
          <WrappedComponent />
        </div>
      );
    }
  }
  return wrapWithAbsolutePosition;
};
