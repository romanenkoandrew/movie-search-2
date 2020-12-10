import { takeEvery, all, put, race, take, select } from 'redux-saga/effects';
import ActionTypes from 'actionTypes';
import {
  getAllTitlesRequest,
  getTitleByIDRequest,
  showAlert,
  toggleModal,
} from 'actions';
import { errorMessage } from 'helpers/errorMessage';
import { currentPageSelector } from 'selectors';
import { isOpenModalSelector } from 'selectors/modalWindow';

export function* getAllTitlesWorker({ payload }) {
  const { search, type } = payload;
  yield console.log(payload);
  try {
    const page = yield select(currentPageSelector);
    yield put(getAllTitlesRequest(search, type, page));
    const { failure, success } = yield race({
      failure: take(ActionTypes.GET_ALL_TITLES_FAILURE),
      success: take(ActionTypes.GET_ALL_TITLES_SUCCESS),
    });
    if (success.payload.Response === 'False') {
      yield put(showAlert({ error: true, alert: success.payload.Error }));
    }
    if (failure) {
      console.log(failure);
      const message = errorMessage(failure);
      yield put(showAlert({ error: true, alert: message }));
    }
  } catch (e) {
    yield put(showAlert({ error: true, alert: e.message }));
  }
}

export function* getTitleByIDWorker({ payload }) {
  const { id } = payload;
  try {
    const isOpenModal = yield select(isOpenModalSelector);
    yield put(getTitleByIDRequest(id));
    const { failure, success } = yield race({
      failure: take(ActionTypes.GET_TITLE_BY_ID_FAILURE),
      success: take(ActionTypes.GET_TITLE_BY_ID_SUCCESS),
    });
    if (success) {
      yield put(toggleModal({ isOpenModal: !isOpenModal }));
    }
    if (failure) {
      console.log(failure);
      const message = errorMessage(failure);
      yield put(showAlert({ error: true, alert: message }));
    }
  } catch (e) {
    yield put(showAlert({ error: true, alert: e.message }));
  }
}

export function* getAllTitlesWatcher() {
  yield takeEvery(ActionTypes.GET_ALL_TITLES, getAllTitlesWorker);
}

export function* getTitleByIDWatcher() {
  yield takeEvery(ActionTypes.GET_TITLE_BY_ID, getTitleByIDWorker);
}

export default function* mainSaga() {
  yield all([getAllTitlesWatcher(), getTitleByIDWatcher()]);
}
