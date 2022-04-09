import React, { Component } from "react";
import styles from "./Card.module.css";
class Card extends Component {
  render() {
    const { name, image, cost } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="food" />
        <h3>{name}</h3>
        <span>{cost}</span>
      </div>
    );
  }
}

export default Card;
