import React from "react";
import Google from "../assets/google.svg";
import styles from "./Login.module.css";
import firebase from "firebase/app";
import { authenticate } from "../firebase";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1 className={styles.text}>welcome to Chatgram!</h1>
        <div
          className={styles.button}
          onClick={() =>
            authenticate.signInWithRedirect(
              new firebase.auth.GoogleAuthProvider()
            )
          }
        >
          <img src={Google} alt="icon" />
          Sign up with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
