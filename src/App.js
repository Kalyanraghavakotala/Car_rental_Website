// import Login from "./components/Login.js";
import { Routes, Route } from 'react-router-dom';
// import Bookride from "./components/Bookride.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Contact from "./components/Contact.js";
import Login from "./components/Login.js";
import Bookride from './components/Bookride.js';
import Profile from './components/Profile.js';
import Update from './components/Update.js';
import Bookings from './components/Bookings.js';
import Contactl from './components/Contactl.js';
import Homel from './components/Homel.js';
import Aboutus from './components/Aboutus.js';
import Forgot from './components/Forgot.js';
import Alogin from './components/Alogin.js';
import AHome from './components/AHome.js';
import Ologin from './components/Ologin.js';
import OHome from './components/OHome.js';
// import Start from './components/Start.js';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Homel />} />
        <Route path='/Cars' element={<Bookride />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Contactl' element={<Contactl />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/update' element={<Update />} />
        <Route path='/booking' element={<Bookings />} />
        <Route path='/About' element={<Aboutus />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/alogin' element={<Alogin />} />
        <Route path='/ahome' element={<AHome />} />

        <Route path='/ologin' element={<Ologin />} />
        <Route path='/ohome' element={<OHome />} />



      </Routes>
      {/* <Start /> */}
    </div>
  );
}

export default App;
