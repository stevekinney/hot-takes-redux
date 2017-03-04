import { database } from '../firebase';

const messagesRef = database.ref('messages');

export const createMessage = ({ content, uid }) => {
  const message =  {
    timeStamp: Date.now(),
    content,
    uid
  };

  messagesRef.push(message);
};

export const deleteMessage = (id) => {
  messagesRef.child(id).remove();
};

export const addMessage = (id, { content, uid, timestamp }) => {
  return {
    type: 'ADD_MESSAGE',
    id,
    content,
    uid,
    timestamp
  };
};

export const removeMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id
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
