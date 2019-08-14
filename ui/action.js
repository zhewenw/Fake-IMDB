import * as types from './types';

export function handleChanges(text) {
  return {
    type: types.HANDLE_CHANGES,
    text,
  };
}
export function loadMovies(keyword) {
  return {
    type: types.LOAD_BUTTONS,
    keyword,
  };
}

export function loadDetails(selected) {
  return {
    type: types.LOAD_INDIV,
    selected,
  };
}

export function putMovies(movies) {
  return {
    type: types.LOAD_MOVIES,
    movies,
  };
}

export function putDetails(detail) {
  return {
    type: types.LOAD_DETAILS,
    detail,
  };
}
