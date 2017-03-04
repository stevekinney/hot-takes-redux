import initialState from '../initial-state';

export default function usersReducer(state = initialState.users, action) {
  switch(action.type) {
    default:
      return state;
  }
}
