import React from 'react'
import Header from './Header'

function Profile() {
    return (
        <>
        <Header/>
            <div className='container' style={{ marginTop: '20px' }}>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6' style={{ backgroundColor: 'white' }}>
                        <div className='col-md' style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bolder', fontSize: '30px', borderRadius: '3px' }}><center>MY PROFILE</center></div>
                        <form style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div class="form-group">
                                <label for="username" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;NAME</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User_Name" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="useremail" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;EMAIL ADDRESS</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="usercontact" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;CONTACT NUMBER</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="userdob" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;DATE OF BIRTH</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="useraddress" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;ADDRESS</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="usercountry" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;COUNTRY</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Country" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="usercity" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;CITY</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City Name" />
                            </div>
                            <div class="form-group row" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                <div className='col-md-4'></div>
                                <div class="col-md-4">
                                    <button type="submit" class="btn btn-primary">UPDATE - PROFILE   </button>
                                </div>
                                <div className='col-md-4'></div>
                            </div>


                            <a href='/update' style={{ float: 'left', marginLeft: '10px', marginBottom: '10px' }}>Update password</a><a href='/booking' style={{ float: 'right', marginRight: '10px', marginBottom: '10px' }}>My Bookings</a>

                        </form>

                    </div>


                    <div className='col-md-3'></div>
                    <div className='col-md-6'></div>
                </div>

            </div>
        </>
    )
}

export default Profile