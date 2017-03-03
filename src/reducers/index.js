import { combineReducers } from 'redux';
import authReducer from './auth';
import messagesReducer from './messages';

const reducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer
});

export default reducer;
