import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

import DashboardPage from '../components/DashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import Page404 from '../components/Page404.js';

export const history = createHistory();

const AppRouter = (props) => (
  // BrowserRouter has history build in
  // we pass history to Router to use history outside a component
  // more precisely, in App.js
  <Router history={ history }>
    <div>
      <Switch>
        <PublicRoute path="/" component={ LoginPage } exact/>
        <PrivateRoute path="/dashboard" component={ DashboardPage } exact/>
        <Route component={ Page404 }/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
