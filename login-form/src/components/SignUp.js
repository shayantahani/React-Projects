import React, { useState, useEffect } from "react";
import { validate } from "./Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify";
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
    setErrors(validate(data));
  }, [data]);
  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>SignUp</h2>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
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
        <div>
          <label>Confirm Password</label>
          <input
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
        <div>
          <label>I accept terms and conditions</label>
          <input
            type="checkbox"
            name="IsAccepted"
            value={data.IsAccepted}
            onChange={changeHandler}
          />
          {errors.IsAccepted && touched.IsAccepted && (
            <span>{errors.IsAccepted}</span>
          )}
        </div>
        <div>
          <a href="google.com">Login</a>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
