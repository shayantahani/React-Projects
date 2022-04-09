import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import taco from "./images/taco.png"
import Burger from "./images/burger.png"
import Soup from "./images/soup.jpg"
import Pasta from "./images/pasta.jpg"
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Foods</p>
        <div className={styles.foodcontainer}>
        <Card cost="30$" name="taco" image={taco} />
        <Card cost="24$" name="burger" image={Burger}/>
        <Card cost="20$" name="soup" image={Soup}/>
        <Card cost="35$" name="pasta" image={Pasta}/>
        </div>
      </div>
    );
  }
}

export default Cards;
