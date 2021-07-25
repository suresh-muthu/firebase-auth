import { useEffect, useState } from 'react';

const useApp = firebase => {
  const [state, setState] = useState({
    loading: false,
    loginError: null,
    showSignUp: false,
    signUpError: null,
    user: null,
  });

  const setStateMerge = nextState => {
    setState(prevState => {
      if (typeof nextState === 'function') {
        return nextState(prevState);
      }

      return { ...prevState, ...nextState };
    });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setStateMerge({ loading: false, loginError: null, user });
    });
  }, [firebase]);

  const login = (form, validators) => {
    setStateMerge({ loading: true, loginError: null });

    const { validate, values } = form;
    const { email, password } = values;

    validate(validators).then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          setStateMerge({ loading: false, loginError: error.message });
        });
    });
  };

  const loginWithProvider = provider => {
    firebase.auth().signInWithPopup(provider);
  };

  const logout = () => {
    firebase.auth().signOut();
    setStateMerge({ showSignUp: false });
  };

  const remove = () => {
    const user = firebase.auth().currentUser;

    user.delete().then(() => {
      setStateMerge({ showSignUp: false });
    });
  };

  const signUp = (form, validators) => {
    setStateMerge({ loading: true, signUpError: null });

    const { validate, values } = form;
    const { email, password } = values;

    validate(validators).then(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          setStateMerge({ loading: false, signUpError: error.message });
        });
    });
  };

  const toggleShowSignUp = () => {
    setStateMerge(prevState => ({
      ...prevState,
      showSignUp: !prevState.showSignUp,
    }));
  };

  return {
    loading: state.loading,
    login,
    loginError: state.loginError,
    loginWithProvider,
    logout,
    remove,
    showSignUp: state.showSignUp,
    signUp,
    signUpError: state.signUpError,
    toggleShowSignUp,
    user: state.user,
  };
};

export default useApp;
