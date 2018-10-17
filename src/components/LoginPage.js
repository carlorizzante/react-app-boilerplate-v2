import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

export const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">React App Boilerplate v2</h1>
      <p>Get started with your new shiny React App!</p>
      <button
        className="btn btn-primary"
        onClick={ props.startLogin }
      >Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
