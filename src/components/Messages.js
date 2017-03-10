import React, { PropTypes } from 'react';
import Message from './Message';
import map from 'lodash/map';
import './Messages.css';

const Messages = ({ auth, messages, users, deleteMessage }) => (
  <section className="Messages">
    {
      map(messages, (message, key) => (
        <Message
          key={key}
          id={key}
          {...message}
          user={users[message.uid]}
          belongsToCurrentUser={auth.uid && message.uid === auth.uid}
          isAdmin={auth.isAdmin}
          deleteMessage={deleteMessage(key)}
        />
      ))
    }
  </section>
);

Messages.propTypes = {
  auth: PropTypes.object,
  messages: PropTypes.object,
  users: PropTypes.object,
  deleteMessage: PropTypes.func
};

export default Messages;
