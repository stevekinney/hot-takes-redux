import { auth, provider } from '../firebase';

export const signIn = () => {
  auth.signInWithPopup(provider);

  return {
    type: 'AWAITING_AUTH_RESPONSE'
  };
};

export const signOut = () => {
  auth.signOut();

  return {
    type: 'AWAITING_AUTH_RESPONSE'
  };
};

export const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    displayName: user.displayName,
    email: user.email,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export const signedOut = () => {
  return {
    type: 'SIGN_OUT',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  };
};

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(signedIn(user));
      } else {
        dispatch(signedOut());
      }
    });
  };
};
