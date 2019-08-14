import { fetchMovies, fetchDetails } from './api';
import { put, take } from 'redux-saga/effects';
import { putMovies, putDetails } from './action';
import * as types from './types';

export function* Saga() {
  while (true) {
    const action = yield take(types.LOAD_BUTTONS);
    const movies = yield fetchMovies(action.keyword);
    yield put(putMovies(movies));
  }
}

export function* Saga2() {
  while (true) {
    const action = yield take(types.LOAD_INDIV);
    const detail = yield fetchDetails(action.selected.imdbID);
    yield put(putDetails(detail));
  }
}

 /* console.log("okay");
  yield [
    takeEvery('LOAD_MOVIES', getMovies),
    takeEvery('LOAD_DETAILS', getDetails),
  ];*/

