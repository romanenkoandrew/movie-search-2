import { takeEvery, all, put, race, take, select } from 'redux-saga/effects';
import ActionTypes from 'actionTypes';
import { getAllTitlesRequest } from 'actions';

export function* getAllTitlesWorker({ payload }) {
  const { search, type, page } = payload;
  yield console.log(payload);
  try {
    yield put(getAllTitlesRequest(search, type, page));
    // yield put(getAllTitlesRequest(title, type, page));
    // const { failure } = yield race({
    //   failure: take(ActionTypes.GET_ALL_TITLES_FAILURE),
    // });
    //   if (failure) {
    //     console.log(failure);
    //     const message = errorMessage(failure);
    //     yield put(showAlert({ error: true, alert: message }));
    //   }
  } catch (e) {
    console.log(e.message);
    // showAlert({ error: true, alert: e.message });
  }
}

export function* getAllTitlesWatcher() {
  yield takeEvery(ActionTypes.GET_ALL_TITLES, getAllTitlesWorker);
}

export default function* mainSaga() {
  yield all([getAllTitlesWatcher()]);
}
