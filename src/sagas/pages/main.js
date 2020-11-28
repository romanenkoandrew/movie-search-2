import { takeEvery, all, put, race, take, select } from 'redux-saga/effects';
import ActionTypes from 'actionTypes';
import { getAllTitlesRequest, showAlert } from 'actions';
import { errorMessage } from 'helpers/errorMessage';
import { currentPageSelector } from 'selectors';

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
    if (success) {
      yield put(showAlert({ error: false, alert: 'Test alert' }));
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

export default function* mainSaga() {
  yield all([getAllTitlesWatcher()]);
}
