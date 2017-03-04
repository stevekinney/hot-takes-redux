import { combineReducers } from 'redux';
import authReducer from './auth';
import messagesReducer from './messages';
import newMessageReducer from './new-message';
import usersReducer from './users';


const reducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  newMessage: newMessageReducer,
  users: usersReducer
});

export default reducer;
