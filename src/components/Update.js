import React from 'react';
import Header from './Header';

function Update() {
    return (
        <>
            <Header />
            <div className='container' style={{ marginTop: '20px' }}>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6' style={{ backgroundColor: 'white' }}>
                        <div className='col-md' style={{ backgroundColor: 'green', marginTop: '10px', fontWeight: 'bolder', fontSize: '30px', borderRadius: '3px' }}><center>UPDATE PASSWORD</center></div>
                        <form style={{ marginTop: '10px' }}>
                            <div class="form-group">
                                <label for="username" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;CURRENT PASSWORD</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="useremail" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;NEW PASSWORD</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group" style={{ marginTop: '5px' }}>
                                <label for="usercontact" style={{ fontWeight: 'bolder', fontFamily: 'Georgia, serif' }}>· &nbsp;RE-ENTER NEW PASSWORD</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" />
                            </div>

                            <div class="form-group row" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                <div className='col-md-4'></div>
                                <div class="col-md-4">
                                    <button type="submit" class="btn btn-primary">UPDATE    </button>
                                </div>
                                <div className='col-md-4'></div>
                            </div>


                            <a href='/profile' style={{ float: 'left', marginLeft: '10px', marginBottom: '10px' }}>Profile Settings</a><a href='/booking' style={{ float: 'right', marginRight: '10px', marginBottom: '10px' }}>My Bookings</a>

                        </form>
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'></div>
                </div>

            </div>
        </>
    )
}

export default Update