import React from 'react';
import Logo from "./images/sfLogo.png"
import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className='list-container'>
                <ul className={styles.list}>
                    <li>Home page</li>
                    <li>City guide</li>
                    <li>More About city</li>
                </ul>
            </div>
            <div>
                <img src={Logo} className={styles.logo} alt='Logo'/>
            </div>
        </div>
    );
};

export default Navbar;