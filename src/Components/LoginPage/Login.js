import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import googleLogo from '../../logos/googleLogo.png';
import facebookLogo from '../../logos/FbLogo2.png';

const Login = () => {
    return (
        <div className="container text-center py-5 mt-3">
            <Link to="/">
                <img src={logo} alt="" width="150px" />
            </Link>
            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className='col-md-6 mt-3' style={{ width: '550px', height: '350px', border: '2px solid lightgrey' }}>
                    <h2 className="text-dark mt-5">Login With</h2>

                    <div className='p-3'>
                        <button className=" btn btn-light border rounded-pill btn-lg btn-block">
                            <img src={googleLogo} alt="" width="30px" className="mb-1 float-left" />
                            <h6>Continue With Google</h6>
                        </button>
                        <button className=" btn btn-light border rounded-pill btn-lg btn-block">
                            <img src={facebookLogo} alt="" width="28px" height="28px" className="mb-1 float-left" />
                            <h6>Continue With Facebook</h6>
                        </button>
                       
                    </div>
                   

                    <h6 className="mt-1">Don't have an account?<button className="btn btn-link mb-2">Create an account</button></h6>
                    <h4 className="text-danger mt-5"></h4>

                </div>
                <div className="col-md-3"></div>
            </div>



        </div>
    );
};

export default Login;