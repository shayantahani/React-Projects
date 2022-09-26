import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    isAccepted: false,
  });
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  return (
    <form>
      <h2>SignUp</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPass"
          value={data.confirmPass}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>I accept terms of conditions</label>
        <input
          type="checkbox"
          name="isAccepted"
          value={data.isAccepted}
          onChange={changeHandler}
        />
      </div>
      <div>
        <a href="https://api.freerealapi.com/blogs">Login</a>
        <button type="submit">SignUp</button>
      </div>
    </form>
  );
};

export default SignUp;
