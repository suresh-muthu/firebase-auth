import PropTypes from 'prop-types';
import React from 'react';
import Confetti from './Confetti';

const propTypes = {
  app: PropTypes.object.isRequired,
};

const SignedIn = ({ app }) => {
  const { logout, remove, user } = app;

  return (
    <Confetti>
      <div className="login">
        <div className="login__signedin">
          <span>{'Hi '}</span>
          <span className="text--bold">{user.email}</span>
          <span>
            ! Thank you for taking the time to enjoy this wonderful app.
          </span>
        </div>
        <div className="login__signup">
          {'Tired of all this content? '}
          <button className="link" onClick={logout} type="button">
            Log out
          </button>
        </div>
        <div className="login__signup">
          {'Really tired of all this content? '}
          <button className="link" onClick={remove} type="button">
            Delete your account
          </button>
        </div>
      </div>
    </Confetti>
  );
};

SignedIn.propTypes = propTypes;

export default SignedIn;
