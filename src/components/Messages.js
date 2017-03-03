import React, { PropTypes } from 'react';
import Message from './Message';
import map from 'lodash/map';

const Messages = ({ messages }) => (
  <section className="Messages">
    {
      map(messages, (message, key) => (
        <Message key={key} {...message} />
      ))
    }
  </section>
);

Message.propTypes = {
  messages: PropTypes.array
};

export default Messages;
