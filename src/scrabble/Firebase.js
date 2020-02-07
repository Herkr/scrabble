import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web Apps Firebase configurations
  var firebaseConfig = {
    apiKey: "AIzaSyD0rlPUZM1zxFB3sbQYxNIVHaUlJv782ns",
    authDomain: "scrabble-eb380.firebaseapp.com",
    databaseURL: "https://scrabble-eb380.firebaseio.com",
    projectId: "scrabble-eb380",
    storageBucket: "scrabble-eb380.appspot.com",
    messagingSenderId: "636831067990",
    appId: "1:636831067990:web:bfaa0546c013d79c17b0f7",
    measurementId: "G-ZBCDYQYFGL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;