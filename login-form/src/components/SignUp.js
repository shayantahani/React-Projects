import React, { useState, useEffect } from "react";
import { validate } from "./Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Signup.module.css";
const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    IsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success");
    } else {
      notify("error");
      setTouched({
        username: true,
        email: true,
        password: true,
        confirmPass: true,
        IsAccepted: true,
      });
    }
  };
  useEffect(() => {
    setErrors(validate(data, "SignUp"));
  }, [data]);
  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>SignUp</h2>
        <div className={styles.formField}>
          <label>Username</label>
          <input
            className={
              errors.username && touched.username
                ? styles.uncompleted
                : styles.formInput
            }
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPass && touched.confirmPass
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="confirmPass"
            value={data.confirmPass}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPass && touched.confirmPass && (
            <span>{errors.confirmPass}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkboxContainer}>
            <label>I accept terms and conditions</label>
            <input
              type="checkbox"
              name="IsAccepted"
              value={data.IsAccepted}
              onChange={changeHandler}
            />
          </div>
          {errors.IsAccepted && touched.IsAccepted && (
            <span>{errors.IsAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
