import { auth, provider } from '../firebase';
import extend from 'lodash/extend';
import pick from 'lodash/pick';

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

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(authData => {
      if (authData) {
        dispatch(
          extend(
            { type: 'SIGN_IN' },
            pick(authData, [ 'displayName', 'email', 'uid', 'photoURL' ])
          )
        );
      } else {
        if (getState().auth.status !== 'ANONYMOUS') {
          dispatch({
            type: 'SIGN_OUT',
            email: null,
            displayName: null,
            photoURL: null,
            uid: null
          });
        }
      }
    });
  }
};
