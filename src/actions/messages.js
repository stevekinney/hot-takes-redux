export const addMessage = (key = Date.now(), { content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key,
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
