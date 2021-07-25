import * as firebase from 'firebase/app';
import React from 'react';
import Login from './Login';
import SignedIn from './SignedIn';
import SignUp from './SignUp';
import { useApp } from '../hooks';

const App = () => {
  const app = useApp(firebase);
  const { showSignUp, user } = app;

  if (user) {
    return <SignedIn app={app} />;
  }

  if (showSignUp) {
    return <SignUp app={app} />;
  }

  return <Login app={app} />;
};

export default App;
