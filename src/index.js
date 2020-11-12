import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'router';
import { Provider } from 'react-redux';

import store from 'store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
