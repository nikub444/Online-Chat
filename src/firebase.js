import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"


var firebaseConfig = {
    apiKey: "AIzaSyCVFqq3zI1gd16_tjEKacuSc6lRXnrEQsE",
    authDomain: "react-slack-clone-b49bc.firebaseapp.com",
    databaseURL: "https://react-slack-clone-b49bc.firebaseio.com",
    projectId: "react-slack-clone-b49bc",
    storageBucket: "react-slack-clone-b49bc.appspot.com",
    messagingSenderId: "402366523324",
    appId: "1:402366523324:web:577783d257d3fec28a6db9",
    measurementId: "G-MHLG38WYSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase