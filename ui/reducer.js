
const initialState = {
  keyword: '',
  selectedMovie: [],
  movies: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_CHANGES':
      return { state, keyword: action.text };
    case 'LOAD_MOVIES':
      return { ...state, movies: action.movies };
    case 'LOAD_DETAILS':
      return { ...state, selectedMovie: action.detail };
    default:
      return state;
  }
}
