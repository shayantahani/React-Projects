import React from "react";
import styled from "styled-components";
import Logo from "./images/sfLogo.png";
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  list-style: none;
  background: rgb(235, 118, 68);
  z-index: 14;
  li {
    padding: 5px 15px;
    font-size: 22px;
    font-weight: bold;
  }
  li:hover {
    color: rgb(156, 74, 40);
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <>
      <Ul>
        <li>Home</li>
        <li>City guide</li>
        <li>Location</li>
        <li>About city</li>
        <img
          src={Logo}
          style={{ width: "50px", borderRadius: "10px" }}
          alt="logo"
        />
      </Ul>
    </>
  );
};

export default Navbar;
