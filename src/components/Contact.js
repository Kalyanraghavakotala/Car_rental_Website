import React from 'react';
import './Contact.css';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <div className="reach-us-main">
                    <h2 className="reach-us-heading">REACH US</h2>
                    <div className="reach-us-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="reach-us-icon" />
                        <a href="#" className="reach-us-link">
                            <p className="reach-us-text">Demo Location</p>
                        </a>
                    </div>
                    <div className="reach-us-item">
                        <FontAwesomeIcon icon={faEnvelope} className="reach-us-icon" />
                        <a href="#" className="reach-us-link">
                            <p className="reach-us-text">carrental@gmail.com</p>
                        </a>
                    </div>
                    <div className="reach-us-item">
                        <FontAwesomeIcon icon={faPhone} className="reach-us-icon" />
                        <a href="#" className="reach-us-link">
                            <p className="reach-us-text">9967845678</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;