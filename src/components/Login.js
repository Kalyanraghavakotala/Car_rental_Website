import React from 'react';
import './Login.css';
// import Header from './Header';
import Headerl from './Headerl';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/home')
  }
  return (
    <>
      <Headerl />
      <div>
        <div className='body'>
          <div className='main2'>
            <form>
              <h2><b>Login</b></h2><br></br>
              <div>
                <label className='Username1'>
                  <input type="text" name='username' placeholder="Enter Your Name" className="name" required />
                </label>
              </div><br></br>
              <div className="second-input1">
                <label className='Password1'>
                  <input type="password" name='password' placeholder="Enter password" className="name" required />
                </label>
              </div><br></br>


              <div className='login-button1'>
                <button type='submit' onClick={home}>Login</button>
              </div>
              <div className='forget2'>
                <a href='/forgot'>Forgot Password..?</a>
                <span className="spacer"></span>
                <a href='/Signup'>Make an Account..!</a>
              </div>
            </form>

          </div>

        </div>
      </div>

    </>
  );
}

export default Login;