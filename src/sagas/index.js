import { takeEvery, call, put, fork, all } from 'redux-saga/effects';
import { getRacesSuccess, GET_RACES_REQUEST } from '../redux/actions';
import * as api from '../api';

function* fetchRaces({ startDate, endDate }) {
  try {
    const result = yield call(api.getRaces, startDate, endDate);
    console.log(result, 'resersrereee')
    yield put(getRacesSuccess(result.Quotes));
  } catch (error) {
    console.error(error);
  }
}

function* actionWatcher() {
  yield takeEvery(GET_RACES_REQUEST, fetchRaces)
}

const racesSagas = [fork(actionWatcher)];

export default function* rootSaga() {
  yield all([
    ...racesSagas
  ]);
}