import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = propsIn => {
  return WrappedComponent => {
    class withGivenProps extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <WrappedComponent {...propsIn} />;
      }
    }
    return withGivenProps;
  };
};
