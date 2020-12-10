import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import main from './main';
import modalWindow from './modalWindow';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    main,
    modalWindow,
  });
