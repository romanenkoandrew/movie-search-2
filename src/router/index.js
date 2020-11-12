import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from 'store/history';
import Main from 'pages/Main';

const Routers = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </Router>
);

export default Routers;
