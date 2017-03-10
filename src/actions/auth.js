import { auth, database, googleAuthProvider } from '../firebase';
import registerMessaging from '../register-messaging';
import pick from 'lodash/pick';

export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithPopup(googleAuthProvider);
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signOut();
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



export const startListeningToAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signedIn(user));
        database.ref('users')
                .child(user.uid)
                .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
        database.ref('admins').child(user.uid)
                              .once('value')
                              .then((snapshot => {
                                if (snapshot.val()) dispatch({ type: 'SET_AS_ADMIN' });
                              }));
        registerMessaging(user);
      } else {
        dispatch(signedOut());
      }
    });
  };
};
