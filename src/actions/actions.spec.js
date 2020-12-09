import * as actions from './index';
import ActionTypes from 'actionTypes';

describe('actions', () => {
  it('should create an action showAlert', () => {
    const payload = { error: true, alert: 'Something went wrong' };
    const expectedAction = {
      type: ActionTypes.SHOW_ALERT,
      payload,
    };
    expect(actions.showAlert(payload)).toEqual(expectedAction);
  });
  it('should create an action hideAlert', () => {
    const expectedAction = {
      type: ActionTypes.HIDE_ALERT,
    };
    expect(actions.hideAlert()).toEqual(expectedAction);
  });
  it('should create an action toggleModal', () => {
    const payload = { isOpenModal: true };
    const expectedAction = {
      type: ActionTypes.TOGGLE_MODAL,
      payload,
    };
    expect(actions.toggleModal(payload)).toEqual(expectedAction);
  });
  it('should create an action toggleSideMenu', () => {
    const payload = { sideMenuIsOpen: true };
    const expectedAction = {
      type: ActionTypes.TOGGLE_SIDE_MENU,
      payload,
    };
    expect(actions.toggleSideMenu(payload)).toEqual(expectedAction);
  });
  it('should create an action currentPageIncrement', () => {
    const payload = { currentPage: 10 };
    const expectedAction = {
      type: ActionTypes.CURRENT_PAGE_INCREMENT,
      payload,
    };
    expect(actions.currentPageIncrement(payload)).toEqual(expectedAction);
  });
  it('should create an action currentPageDecrement', () => {
    const payload = { currentPage: 5 };
    const expectedAction = {
      type: ActionTypes.CURRENT_PAGE_DECREMENT,
      payload,
    };
    expect(actions.currentPageDecrement(payload)).toEqual(expectedAction);
  });
  it('should create an action currentPageReset', () => {
    const expectedAction = {
      type: ActionTypes.CURRENT_PAGE_RESET,
    };
    expect(actions.currentPageReset()).toEqual(expectedAction);
  });
});
