import React, { Component} from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 70x;
  right: 25px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${(props) => (props.open ? "#fff" : "#1565df")};
    transition: all 0.2s linear;
    transform-origin: 1px;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
      transition: all 0.01s ease;
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}

export default Hamburger;
