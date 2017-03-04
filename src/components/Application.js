import React, { PropTypes } from 'react';
import MessagesContainer from '../containers/MessagesContainer';
import NewMessageContainer from '../containers/NewMessageContainer';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import './Application.css';

const Application = ({ auth, signIn, signOut }) => {
  return (
    <main className="Application">
      { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
      { auth.status === 'SIGNED_IN' && <NewMessageContainer /> }
      <MessagesContainer />
      { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
    </main>
  );
};

Application.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Application;
