import firebase from "firebase/app";
import "firebase/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPeTW4JaehraA0ZfWYYwMUAk5XnBdVWGA",
    authDomain: "vue-login-pratice.firebaseapp.com",
    projectId: "vue-login-pratice",
    storageBucket: "vue-login-pratice.appspot.com",
    messagingSenderId: "335460064817",
    appId: "1:335460064817:web:5a0b2494c40ca984993f10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase; 
