import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Message.css';

const Message = ({ belongsToCurrentUser, content, id, user, deleteMessage }) => {
  if (!user) return null;
  return (
    <article className={classNames('Message', { 'current-user': belongsToCurrentUser })}>
      <div className="Message--avatar">
        <img
          role="presentation"
          src={(user && user.photoURL) || 'http://www.fillmurray.com/200/200'}
        />
      </div>
      <div className="Message--main">
        <h4 className="Message--user">{ user.displayName }</h4>
        <p className="Message--content">{ content }</p>
        <footer className="Message--controls">
          {
            belongsToCurrentUser &&
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
};

Message.propTypes = {
  belongsToCurrentUser: PropTypes.bool,
  content: PropTypes.string,
  deleteMessage: PropTypes.func,
  id: PropTypes.string,
  timeStamp: PropTypes.number,
  user: PropTypes.object,
};

export default Message;
