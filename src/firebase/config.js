import  firebase from 'firebase/app'; 
//New way to import in 8.0.0 version : import firebase from "firebase/app"
import 'firebase/storage';
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB2MVhVgHE0VblkLVM_rhKZ65OB0gWZ5Zw",
    authDomain: "kunal-firegram.firebaseapp.com",
    projectId: "kunal-firegram",
    storageBucket: "kunal-firegram.appspot.com",
    messagingSenderId: "744441245991",
    appId: "1:744441245991:web:20a0fbe67601de8e2e3902"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //You can name the constant anything
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };