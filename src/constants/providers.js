import * as firebase from 'firebase/app';

export default [
  {
    img: 'https://img.icons8.com/color/36/000000/google-logo.png',
    label: 'Google',
    provider: new firebase.auth.GoogleAuthProvider(),
  },
];
