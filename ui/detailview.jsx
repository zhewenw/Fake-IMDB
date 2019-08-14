import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as appActions from './action';


export class detailView extends React.Component {
  constructor(props) {
    super(props);
    this.renderDetails = this.renderDetails.bind(this);
  }
  renderDetails(selectedMovie) {
    if (!selectedMovie || selectedMovie.length === 0) return null;
    return (
      <div className="container">
        <div className="picture">
          <img className="poster" src={selectedMovie.Poster} alt="Moive Poster" />
        </div>
        <div className="info">
          <div className="title">Title: {selectedMovie.Title} </div>
          <div className="snip">Rated: {selectedMovie.Rated}</div>
          <div className="snip">Plot: {selectedMovie.Plot}</div>
          <div className="snip">Released: {selectedMovie.Released}</div>
          <div className="snip">Runtime: {selectedMovie.Runtime}</div>
          <div className="snip">Genre{selectedMovie.Genre}</div>
          <div className="snip">Director{selectedMovie.Director}</div>
          <div className="snip">Writer: {selectedMovie.Writer}</div>
          <div className="snip">Language: {selectedMovie.Language}</div>
          <div className="snip">Awards: {selectedMovie.Awards}</div>
          <div className="snip">IMDB Rating: {selectedMovie.imdbRating}</div>
        </div>
        <div className="exit">
          <button className="X" onClick={() => browserHistory.push('/')}>X</button>
        </div>
      </div>
    );
  }
  render() {
    return <div> {this.renderDetails(this.props.selectedMovie)} </div>;
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
const Detail = connect(mapStateToProps, mapActionCreatorsToProps)(detailView);
export default Detail;
