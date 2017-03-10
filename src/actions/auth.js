export const signIn = () => {
  return {
    type: 'SIGN_IN',
    email: 'bill@example.com',
    displayName: 'Bill Murray',
    photoURL: 'http://www.fillmurray.com/200/200',
    uid: 'firstUser'
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
