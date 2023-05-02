import React from 'react';
import logo from '../images/logo.jpg';


import './header.css';

function Header() {
    return (
        <header>


            <div className="logo">
                <img className='pic' src={logo}></img>
                <div className='tex'> Car Rentals</div>
            </div>
            <nav>
                <ul>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/Cars">CARS</a></li>
                    <li><a href="/About">ABOUT US</a></li>
                    <li><a href="/Contact">CONTACT US</a></li>
                    <li><a href="/">LOGOUT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;