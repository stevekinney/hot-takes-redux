export const addMessage = ({ content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key: Date.now(),
    timeStamp: Date.now(),
    uid
  };
};

export const removeMessage = (key) => {
  return {
    type: 'REMOVE_MESSAGE',
    key
  };
};

export const createMessage = (message) => {
  return addMessage(message);
};

export const destroyMessage = (key) => {
  return removeMessage(key);
};
