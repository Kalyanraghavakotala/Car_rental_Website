import React from 'react';
import logo from '../images/logo.jpg';


import './headerl.css';

function Headerl() {
    return (
        <header>


            <div className="logo">
                <img className='pic' src={logo}></img>
                <div className='tex'> Car Rentals</div>
            </div>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    {/* <li><a href="/Cars">CARS</a></li> */}
                    <li><a href="/Login">LOGIN</a></li>
                    <li><a href="/SignUp">SIGN UP</a></li>
                    <li><a href="/Contactl">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Headerl;