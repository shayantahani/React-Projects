import React from 'react';

import styles from "./Banner.module.css";
import banner from "../images/toomas-tartes-41gqn1q-tqc-unsplash.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>Shop</h1>
                <p>
                    New <span>Products</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;