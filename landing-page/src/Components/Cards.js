import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import taco from "./images/taco.png";
import Burger from "./images/burger.png";
import Soup from "./images/soup.jpg";
import Pasta from "./images/pasta.jpg";
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Delicious Meals</p>
        <div className={styles.foodcontainer}>
          <Card cost="30$" name="Taco" image={taco} />
          <Card cost="24$" name="Burger" image={Burger} />
          <Card cost="20$" name="Soup" image={Soup} />
          <Card cost="35$" name="Pasta" image={Pasta} />
        </div>
      </div>
    );
  }
}

export default Cards;
