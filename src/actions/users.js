export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};
