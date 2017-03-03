import initialState from '../initial-state';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    default:
      return state;
  }
}
