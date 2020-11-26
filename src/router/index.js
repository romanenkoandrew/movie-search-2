import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from 'store/history';
import Main from 'pages/Main';
import {
  MAIN_ROUTE,
  WATCHLIST_ROUTE,
  FAVORITE_ROUTE,
  VIEWED_ROUTE,
  BLACK_LIST_ROUTE,
} from 'constants/routing';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const Routers = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path={[
          MAIN_ROUTE,
          WATCHLIST_ROUTE,
          FAVORITE_ROUTE,
          VIEWED_ROUTE,
          BLACK_LIST_ROUTE,
        ]}
        component={Main}
      />
      <Route exact path='*' component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routers;
