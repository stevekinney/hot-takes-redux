import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';
import Application from './containers/ApplicationContainer';
import './index.css';

import { startListeningToAuthChanges } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import { startListeningForMessages } from './actions/messages';

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

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForMessages());
