export const addMessage = ({ content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    timeStamp: Date.now(),
    content,
    uid
  };
};

export const deleteMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id
  };
};
