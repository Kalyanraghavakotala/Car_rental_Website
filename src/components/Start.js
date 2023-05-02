import React from 'react';
import pic2 from '../images/start.jpg';
import './Start.css';

function Start() {
    return (
        <div className="container">
            <img className="image" src={pic2} alt="Main image" />
            <div className="text"><a href="login" className="link">Click Me to LOGIN</a></div>
        </div>
    );
}

export default Start;