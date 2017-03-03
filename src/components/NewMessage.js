import React from 'react';

const NewMessage = () => (
  <form className="NewMessage">
    <label>
      <input
        className="NewMessage--content"
        type="text"
        placeholder="What's on your mind?"
      />
      <input
        className="NewMessage--submit"
        type="submit"
        value="Post"
      />
    </label>
  </form>
);

export default NewMessage;
