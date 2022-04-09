import React from "react";
import GSW from "./images/R.png";
import ERS from "./images/49.png";
import OIP from "./images/OIP.jpg";
import styles from "./Teams.module.css";
const Teams = () => {
  return (
    <div className={styles.container}>
      <h2>Sport Teams</h2>
      <div className={styles.teamslogo}>
        <img src={GSW} alt="gsw logo" />
        <img src={ERS} alt="49ers logo" />
        <img src={OIP} alt="oip" />
      </div>
    </div>
  );
};

export default Teams;
