import firebase from "firebase/app";
import "firebase/auth";
export const authenticate = firebase
  .initializeApp({
    apiKey: "AIzaSyAtVxIpJ_HAyWk8ggQO8wL7OWktqzIf6do",
    authDomain: "chat-app-63e5f.firebaseapp.com",
    projectId: "chat-app-63e5f",
    storageBucket: "chat-app-63e5f.appspot.com",
    messagingSenderId: "210298930672",
    appId: "1:210298930672:web:f5f08d7639f89901ac8935",
  })
  .auth();
