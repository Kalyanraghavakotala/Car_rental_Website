import React from 'react';
import Headerl from './Header';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';


function Forgot() {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    return (
        <>
            <Headerl />
            <div>
                <div className='body'>
                    <div className='main2'>
                        <form>
                            <h2><b>Forgot Password</b></h2><br></br>
                            <div>
                                <label className='Usermail'>
                                    <input type="email" name='username' placeholder="Enter Your Mail" className="usermail" required />
                                </label>
                            </div><br></br>

                            <div className='login-button1'>
                                <button type='submit' onClick={login} required>Send</button>
                            </div>
                            <div className='forget2' style={{ color: 'white' }}>
                                We'll Send a Recovery password to given mail..!
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Forgot