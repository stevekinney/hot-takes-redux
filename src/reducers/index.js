import { combineReducers } from 'redux';
import authReducer from './auth';
import messagesReducer from './messages';
import usersReducer from './users';


const reducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  users: usersReducer
});

export default reducer;
