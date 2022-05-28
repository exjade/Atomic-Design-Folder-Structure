
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAnalytics } from 'firebase/analytics';

/* eslint-disable*/
const config = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
}
const firebase = Firebase.initializeApp(config);
const analytics = getAnalytics(firebase);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue, analytics };