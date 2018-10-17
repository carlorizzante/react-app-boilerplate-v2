import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import AppRouter, { history } from './routers/AppRouter.js';
import storeConfig from './store/store.config.js';

import LoadingPage from './components/LoadingPage.js';
import { login, logout } from './actions/auth.js';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase.js';

// Initialize store
const store = storeConfig();

// Track App rendering
let hasRendered = false;

const jsx = (
  <Provider store={ store }>
    <AppRouter/>
  </Provider>
);

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname == '/') history.push('/dashboard');
  }
  else {
    console.log("User not authenticated.");
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
