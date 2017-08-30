import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';

import App from './containers/App';
import About from './containers/About';

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
      <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
      {/* NOTE: put other app routes here */}
    </Switch>
  </ConnectedRouter>
);
export default routes;
