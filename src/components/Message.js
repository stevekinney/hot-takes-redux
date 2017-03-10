import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Message.css';

const Message = ({ belongsToCurrentUser, content, id, isAdmin, user, deleteMessage }) => (
  <article className={classNames('Message', { 'current-user': belongsToCurrentUser })}>
    <div className="Message--avatar">
      <img
        role="presentation"
        src={user.photoURL}
      />
    </div>
    <div className="Message--main">
      <h4 className="Message--user">{ user.displayName }</h4>
      <p className="Message--content">{ content }</p>
      <footer className="Message--controls">
        {
          (belongsToCurrentUser || isAdmin) &&
          <button
            className="small destructive"
            onClick={deleteMessage}
          >
            Delete
          </button>
        }
      </footer>
    </div>
  </article>
);

Message.propTypes = {
  belongsToCurrentUser: PropTypes.bool,
  content: PropTypes.string,
  deleteMessage: PropTypes.func,
  id: PropTypes.string,
  timeStamp: PropTypes.number,
  user: PropTypes.object,
};

export default Message;
