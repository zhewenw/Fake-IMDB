// eslint-disable-next-line react/prefer-stateless-function
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './action';
import { browserHistory } from 'react-router';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }
  renderResults(movies) {
    if (!movies) return null;
    return movies.map(this.renderResult);
  }
  renderResult = (item, i) => (
    <button
      className="movieBtn"
      key={i}
      onClick={() => { this.props.loadDetails(item); browserHistory.push('/detail'); }}
    >{item.Title}</button>
  )

  render() {
    const { keyword, selectedMovie, movies, loadMovies, handleChanges } = this.props;
    return (
      <div>
        <div className="brand">
          Movie JS
        </div>
        <div className="inputholder">
          <input
            className="input1"
            type="text"
            ref="textinput"
            placeholder="Title Here"
            value={keyword}
            onChange={() => {
              const text = this.refs.textinput.value;
              handleChanges(text);
            }}
          />
        </div>
        <div className="holder">
          <button
            className="searchBtn"
            onClick={() => {
              loadMovies(keyword);
            }
            }
          >
            FIND MY MOVIES!
          </button>
        </div>
        {this.renderResults(movies)}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.keyword,
    selectedMovie: state.selectedMovie,
    movies: state.movies,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App);
