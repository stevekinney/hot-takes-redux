export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    setTimeout(() => {
      dispatch(signedIn({
        email: 'bill@example.com',
        displayName: 'Bill Murray',
        photoURL: 'http://www.fillmurray.com/200/200',
        uid: 'firstUser'
      }));
    }, 2000);
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    setTimeout(() => {
      dispatch(signedOut());
    }, 2000);
  };
};

const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const signedOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
