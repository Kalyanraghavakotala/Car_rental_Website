import React, { useState, useEffect } from 'react';
import './Aboutus.css';
import Header from './Header';

function AboutUs() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((data) => {
                setLocation({
                    latitude: data.latitude,
                    longitude: data.longitude,
                    city: data.city,
                    country: data.country_name,
                    address: data.city + ', ' + data.region + ', ' + data.country_name,
                });
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Header />
            <div className="about-us">
                <div className="container-about">
                    <h1>About Us</h1>
                    <div className='paras'>
                        <p>Welcome to our car rental service! We are committed to providing our customers with reliable, affordable and efficient transportation. Our fleet includes a variety of vehicles to meet your needs, from compact cars to spacious SUVs.Our team of experienced professionals is dedicated to ensuring that your rental experience is smooth and hassle-free. We offer flexible rental terms and competitive rates, so you can focus on enjoying your trip.</p>
                        <ul>
                            <li>If you have any questions or concerns, please don't hesitate to contact us. We are always here to help.</li>
                            <li>Thank you for choosing our car rental service. We look forward to serving you!</li>
                        </ul>
                    </div>
                    {location && (
                        <div className="office-location">
                            <h2>Our Office Location</h2>
                            <div className='paras'>
                                <p className="location-details"><b>City:</b> {location.city}</p>
                                <p className="location-details"><b>Country:</b> {location.country}</p>
                                <p className="location-details"><b>Address:</b> {location.address}</p></div>
                            <div className="map">
                                <iframe
                                    title="Map"
                                    width="100%"
                                    height="400"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=14&output=embed`}
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AboutUs;