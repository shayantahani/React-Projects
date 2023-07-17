import React from 'react';
import spinner from '../gif/spinner.gif'
const Loader = () => {
    return (
        <>
            <img src={spinner} alt='spin'/>
            <h1>Loading...</h1>
        </>
    );
};

export default Loader;