const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  messages: {
    'firstMessage': {
      content: 'My spoon is too big.',
      timeStamp: Date.now() - 600,
      uid: 'firstUser'
    },
    'secondMessage': {
      content: 'I am a banana!',
      timeStamp: Date.now() - 540,
      uid: 'secondUser'
    }
  },
  users: {
    'firstUser': {
      displayName: 'Bill Murray',
      email: 'bill@example.com',
      photoURL: 'http://www.fillmurray.com/200/200'
    },
    'secondUser': {
      displayName: 'Place Kitten',
      email: 'kitten@example.com',
      photoURL: 'https://placekitten.com/g/200/200'
    }
  },
  newMessage: ''
};

export default initialState;
