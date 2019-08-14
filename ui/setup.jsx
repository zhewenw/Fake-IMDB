import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { Saga, Saga2 } from './saga';
import Detail from './detailview';

const SagaMiddleware = createSagaMiddleware();
const SagaMiddleware1 = createSagaMiddleware();

const store = createStore(
	reducer,
	applyMiddleware(SagaMiddleware),
	applyMiddleware(SagaMiddleware1),
	);

SagaMiddleware.run(Saga);
SagaMiddleware1.run(Saga2);

window.React = React;

const setup = {};

setup.render = function render(app) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={app} />
        <Route path="detail" component={Detail} />
      </Router>
    </Provider>,
	document.getElementById('root')
  );
};

export default setup;
