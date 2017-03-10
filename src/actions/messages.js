export const addMessage = ({ content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key: Date.now(),
    timeStamp: Date.now(),
    uid
  };
};

export const deleteMessage = (key) => {
  return {
    type: 'DELETE_MESSAGE',
    key
  };
};
