import ActionTypes from 'actionTypes';
import get from 'lodash/get';

export const initialState = {
  open: false,
  sideMenuIsOpen: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_TO_STORE: {
      const open = get(payload, 'open');
      return { ...state, open };
    }
    case ActionTypes.CHANGE_TITLE: {
      const title = get(payload, 'title');
      return { ...state, title };
    }

    default: {
      return state;
    }
  }
}
