import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header.js';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route { ...rest } component={ (props) => (
    isAuthenticated
    ? [
      <Header key="1" />,
      <Component key="2" { ...props } />
    ]
    : <Redirect key="2" to="/" />
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
