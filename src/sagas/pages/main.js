import { takeEvery, all, put, race, take, select } from 'redux-saga/effects';
import ActionTypes from 'actionTypes';

export function* getAllDriversWorker() {
  yield console.log(123);
  // try {
  //   yield put(getAllDriversRequest());
  //   const { failure } = yield race({
  //     failure: take(ActionTypes.GET_ALL_DRIVER_FAILURE),
  //   });
  //   if (failure) {
  //     console.log(failure);
  //     const message = errorMessage(failure);
  //     yield put(showAlert({ error: true, alert: message }));
  //   }
  // } catch (e) {
  //   showAlert({ error: true, alert: e.message });
  // }
}

export function* getAllDriversWatcher() {
  yield takeEvery(ActionTypes.CHANGE_TITLE, getAllDriversWorker);
}

export default function* mainSaga() {
  yield all([getAllDriversWatcher()]);
}
