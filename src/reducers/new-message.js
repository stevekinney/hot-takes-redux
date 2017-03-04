import initialState from '../initial-state';

export default function newMessageReducer(state = initialState.newMessage, action) {
  switch(action.type) {
    case 'UPDATE_NEW_MESSAGE':
      return action.content;
    case 'CLEAR_NEW_MESSAGE':
      return '';
    default:
      return state;
  }
}
