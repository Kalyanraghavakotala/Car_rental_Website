import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import Header from './Header';

function Home() {
    return (
        <>
            <Header />
            <div className='container' style={{ justifyContent: 'center', marginTop: '100px' }}>
                <div className='row' style={{ marginTop: '10px' }}>
                    <div className='col-md-4' ></div>
                    <div className='col-md-4' style={{ backgroundColor: 'white' }}>
                        <i class="fa fa-user fa-2xl" style={{ fontSize: '80px' }}> &nbsp;&nbsp;DEMO </i>
                    </div>
                    <div className='col-md-4' ></div>
                </div >

                {/* <div className='container' style={{ marginTop: '10px' }}>

                    <div className='col-md'>
                        hi
                    </div>
                </div> */}





                <div className='row' style={{ gap: '20px', alignContent: 'center', marginTop: '50px' }}>
                    {/* <div className='col-md-1'></div> */}
                    <div className="Cards_body row">
                        <div className='col-md card_body'>
                            <div className="card1">
                                <h3><Link to="/profile" className="link">PROFILE SETTINGS</Link></h3>
                            </div>
                        </div>
                        <div className='col-md card_body'>
                            <div className="card1">
                                <h3><Link to="/update" className="link">UPDATE PASSWORD</Link></h3>
                            </div>
                        </div>
                        <div className='col-md card_body'>
                            <div className="card1">
                                <h3><Link to="/booking" className="link">MY BOOKINGS</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-1'></div> */}
                </div>
            </div >
        </>
    )
}

export default Home