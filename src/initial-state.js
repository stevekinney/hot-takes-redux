const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  messages: {},
  users: {},
  newMessage: ''
};

export default initialState;
