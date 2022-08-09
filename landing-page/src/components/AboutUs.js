import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h1> &copy; All Rights Reserved 2022</h1>
      <Outlet />
      <button onClick={clickHandler}>Go Home</button>
      <ul>
        <li>
          <Link to="/about/insta">Insta</Link>
        </li>
        <li>
          <Link to="/about/telegram">Telegram</Link>
        </li>
        <li>
          <Link to="/about/twitter">Twitter</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
