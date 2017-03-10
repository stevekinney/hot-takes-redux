import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone';
import omit from 'lodash/omit';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return extend(clone(state), {
        [action.key]: {
          content: action.content,
          timeStamp: action.timeStamp,
          uid: action.uid
        }
      });
    case 'DELETE_MESSAGE':
      return omit(clone(state), action.key);
    default:
      return state;
  }
}
