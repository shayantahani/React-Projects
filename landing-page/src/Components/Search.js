import React, { Component } from 'react';
import styles from "./Search.module.css"
class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Explore into city</h1>
                <input type="search" placeholder='Search...' />
            </div>
        );
    }
}

export default Search;