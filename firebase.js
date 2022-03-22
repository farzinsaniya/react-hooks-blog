import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQExSnYV6F7t10UyRNzuo7BVqjwcOKmU0",
    authDomain: "react-hooks-blog-921ec.firebaseapp.com",
    projectId: "react-hooks-blog-921ec",
    storageBucket: "react-hooks-blog-921ec.appspot.com",
    messagingSenderId: "236837741185",
    appId: "1:236837741185:web:8faab3af68023818002380"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
