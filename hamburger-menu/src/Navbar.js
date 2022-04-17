import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  display: flex;
  font-size: 1.3rem;
  justify-content: right;
  align-items: center;
  margin: 20px 50px;
  z-index: 15;
  list-style: none;
  li {
    padding: 17px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    background-color: #1565df;
    margin: 0;
    transition: all 0.01s ease;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    padding-top: 35px;
    li {
      color: #ffff;
      margin: 15px;
    }
  }
`;
const Navbar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Docs</li>
      <li>About Us</li>
      <li>Github</li>
    </Ul>
  );
};

export default Navbar;
