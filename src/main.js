import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navigation from './navigation/Navigation.jsx';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.getElementById('root')
);
