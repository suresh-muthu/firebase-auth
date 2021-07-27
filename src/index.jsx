import '../styles/main.scss';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FIREBASE_CONFIG } from './constants';

firebase.initializeApp(FIREBASE_CONFIG);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));
