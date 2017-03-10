import { database } from '../firebase';

const messagesRef = database.ref('messages');

export const addMessage = (key , { content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key,
    uid
  };
};

export const removeMessage = (key) => {
  return {
    type: 'REMOVE_MESSAGE',
    key
  };
};

export const createMessage = ({ content, uid }) => {
  return (dispatch) => {
    const message = {
      content,
      uid,
      timeStamp: Date.now()
    };

    messagesRef.push(message);
  };
};

export const destroyMessage = (key) => {
  return (dispatch) => {
    messagesRef.child(key).remove().then(() => {
      dispatch(removeMessage(key));
    });
  };
};

export const startListeningForMessages = () => {
  return (dispatch) => {
    messagesRef.on('child_added', (snapshot) => {
      dispatch(addMessage(snapshot.key, snapshot.val()));
    });

    messagesRef.on('child_removed', (snapshot) => {
      dispatch(removeMessage(snapshot.key));
    });
  };
};
