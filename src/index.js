import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';
import Application from './containers/ApplicationContainer';
import { startListeningToAuth } from './actions/auth';
import { startListeningForUsers } from './actions/user';
import { startListeningForMessages } from './actions/messages';
import './index.css';

const middleware = [ thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

store.dispatch(startListeningToAuth());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForMessages());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
