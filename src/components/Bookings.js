import React from 'react';
import car1 from '../images/BMW.jpg';
import Header from './Header';

function Bookings() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md' style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bolder', fontSize: '30px', borderRadius: '3px', color: '#000000' }}><center>MY BOOKINGS</center></div>
                            <div className='col-md-4'></div>
                        </div>
                        <div className='row' style={{ marginTop: `10px` }}>
                            <div className='col-md' style={{ alignItems: 'center' }}>
                                <div className='row' style={{ display: 'flex', marginTop: '10px', backgroundColor: 'black' }}>

                                    <img className='col-md-4' src={car1} style={{ width: "20%", height: "80%", marginTop: '30px', marginLeft: '50px', marginBottom: '30px' }} />



                                    <center className='col-md-4' style={{ marginLeft: '20px' }}>

                                        <h4 style={{ color: 'white', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>Mahindra Scorpio</h4>
                                        <h5 style={{ color: 'white', marginTop: '10px', marginLeft: '10px', alignItems: 'center' }}>Booking Date&nbsp;:&nbsp;28-01-2023</h5>
                                        <h5 style={{ color: 'white', marginTop: '10px', alignItems: 'center' }}>To Date&nbsp;:&nbsp;02-03-2023</h5>


                                    </center>
                                    <center className='col-md-3' style={{ marginTop: '80px', marginLeft: '20px' }}>
                                        <button className="btn " style={{ marginBottom: '10px', backgroundColor: 'green' }}>Total cost : 100$</button>
                                    </center>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-2'></div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Bookings