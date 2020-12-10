import ActionTypes from 'actionTypes';
import get from 'lodash/get';

export const initialState = {
  isLoading: false,
  isOpenModal: false,
  aboutMovie: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.TOGGLE_MODAL: {
      const isOpenModal = get(payload, 'isOpenModal');
      return { ...state, isOpenModal: isOpenModal };
    }
    case ActionTypes.GET_TITLE_BY_ID_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.GET_TITLE_BY_ID_FAILURE: {
      return { ...state, isLoading: false };
    }
    case ActionTypes.GET_TITLE_BY_ID_SUCCESS: {
      return { ...state, aboutMovie: payload, isLoading: false };
    }

    default: {
      return state;
    }
  }
}
