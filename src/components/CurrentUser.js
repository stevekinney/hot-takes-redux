import React, { PropTypes } from 'react';
import './CurrentUser.css';

const CurrentUser = ({ auth, signOut }) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={ auth.photoURL }
        alt={ auth.displayName }
      />
      <div className="CurrentUser--identification">
        <h3 className="CurrentUser--displayName">{ auth.displayName }</h3>
        <p className="CurrentUser--email">{ auth.email }</p>
        <button
          className="CurrentUser--signout"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  auth: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  }),
  signOut: PropTypes.func.isRequired
};

export default CurrentUser;
