import React from 'react';
import './bookride.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import car3 from '../images/BMW.jpg';
import car2 from '../images/Hyundai.jpg'
import car1 from '../images/Mahindra.jpg'
import car4 from '../images/Toyota.jpg'
import car5 from '../images/images.jpeg'
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';

function Bookride() {
    return (
        <>
            <Header />
            <div className='ridepage'>
                <div className='container'>
                    <center id='carhead'>BOOK YOUR RIDE NOW..!!!</center>
                    <div className='row'>
                        <div className='col-md-4'> </div>
                        <div className='col-md-4'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>LOCATION</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Location" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type="date" placeholder="Select date" />
                                </Form.Group>
                                <center>
                                    <Button variant="primary" type="submit" className='btn-success'>
                                        Find Cars
                                    </Button>
                                </center>
                            </Form>
                        </div>

                        <div className='col-md-4'> </div>
                    </div>

                    <div className='row' style={{ marginTop: `10px` }}>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car1} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details<br></br>Milage : 23Kmpl<br></br>Reg No : IND XXXX XX</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>Mahindra Scorpio</h4>
                                        <h6>$45 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car2} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>TOYOTA</h4>
                                        <h6>$30 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car3} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>BMW Z-33</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car4} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>KIA A-70</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: `10px`, marginBottom: `10px` }}>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car5} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>Hyundai Creta</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car4} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>Hyundai Creta</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car1} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>Hyundai Creta</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="card">
                                <div class="card-body">
                                    <img src={car2} style={{ width: "280px", height: "170px" }} />
                                    <div class="overlay">
                                        <div class="text">Car Details</div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <center>
                                        <h6><span><i class="fa fa-star" style={{ color: "orangered" }}></i></span> 4.0 (55 Rides)</h6>
                                        <h4>Hyundai Creta</h4>
                                        <h6>$90 per hour &nbsp;&nbsp;<button className="btn btn-primary">Book Now</button> </h6>

                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bookride;