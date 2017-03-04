import React, { PropTypes } from 'react';
import Message from './Message';
import map from 'lodash/map';
import reverse from 'lodash/reverse';
import './Messages.css';

const Messages = ({ auth, messages, users, deleteMessage }) => (
  <section className="Messages">
    {
      reverse(map(messages, (message, key) => (
        <Message
          key={key}
          id={key}
          {...message}
          user={users[message.uid]}
          belongsToCurrentUser={auth.uid && message.uid === auth.uid}
          deleteMessage={deleteMessage}
        />
      )))
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
