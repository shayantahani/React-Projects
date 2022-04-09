import React from "react";
import banner from "./images/sf.jpg";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="SF View" />
      <div className={styles.text}>
        <h1>San Francisco Food</h1>
        <p>United states</p>
      </div>
    </div>
  );
};

export default Banner;
