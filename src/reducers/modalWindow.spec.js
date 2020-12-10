import reducer, { initialState } from './modalWindow';
import ActionTypes from 'actionTypes';

describe('modalWindow reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '123', payload: '123' })).toEqual(
      initialState
    );
  });
  it('should handle TOGGLE_MODAL', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.TOGGLE_MODAL,
        payload: { isOpenModal: true },
      })
    ).toEqual({ ...initialState, isOpenModal: true });
  });
  it('should handle GET_TITLE_BY_ID_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.GET_TITLE_BY_ID_REQUEST,
        payload: {},
      })
    ).toEqual({ ...initialState, isLoading: true });
  });
  it('should handle GET_TITLE_BY_ID_FAILURE', () => {
    expect(
      reducer(
        { isLoading: true, isOpenModal: false, aboutMovie: {} },
        { type: ActionTypes.GET_TITLE_BY_ID_FAILURE, payload: {} }
      )
    ).toEqual({ ...initialState, isLoading: false });
  });
  it('should handle GET_TITLE_BY_ID_SUCCESS', () => {
    const payload = { data: 'some data' };
    expect(
      reducer(
        { isLoading: true, isOpenModal: false, aboutMovie: {} },
        { type: ActionTypes.GET_TITLE_BY_ID_SUCCESS, payload: payload }
      )
    ).toEqual({
      ...initialState,
      aboutMovie: payload,
    });
  });
});
