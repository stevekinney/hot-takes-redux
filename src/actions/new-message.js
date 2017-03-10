export const updateNewMessage = (content) => {
  return {
    type: 'UPDATE_NEW_MESSAGE',
    content
  };
};

export const clearNewMessage = () => {
  return {
    type: 'CLEAR_NEW_MESSAGE'
  };
};
