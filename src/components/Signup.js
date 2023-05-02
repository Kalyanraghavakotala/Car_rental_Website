import React from 'react';
import './Signup.css';
// import Header from './Header';
import Headerl from './Headerl';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <><Headerl />
            <div>
                <div className='body'>
                    <div className='main1'>
                        <form>
                            <h2><b>SignUp</b></h2><br></br>
                            <div>
                                <label className='Username'>
                                    <input type="text" name='username' placeholder="Enter Your Name" className="name" required />
                                </label>
                            </div><br></br>
                            <div className="second-input">
                                <label className='Password'>
                                    <input type="number" name='password' placeholder="contact number" className="name" required />
                                </label>
                            </div><br></br>
                            <div className="second-input">
                                <label className='Password'>
                                    <input type="email" name='password' placeholder="Email Address" className="name" required />
                                </label>
                            </div><br></br>
                            <div className="second-input">
                                <label className='Password'>
                                    <input type="password" name='password' placeholder="Password" className="name" required />
                                </label>
                            </div><br></br>
                            <div className="second-input">
                                <label className='Password'>
                                    <input type="password" name='password' placeholder="confirm password" className="name" required />
                                </label>
                            </div><br></br>
                            <div className='box'>

                                <div className='box1'>
                                    <p><input type="checkbox" name='password' placeholder="Password" className="name" /> I agree with <a href="#">Terms and conditions</a></p>
                                </div>
                            </div><br></br>

                            <div className='login-button'>
                                <button type='submit' onClick={login}>Sign Up</button>
                            </div>
                            <div className='forget1'>
                                <a href='Login'>Already have a Account?</a>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;