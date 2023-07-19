import React from "react";
import Google from "../assets/google.svg";
import styles from "./Login.module.css";
import firebase from "firebase/app";
import { authenticate } from "../firebase";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>welcome to my Chat app!</h1>
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
