import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../logos/Group 1329.png"
import "./RegisterPage.css";

const RegisterPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let {serviceName}=useParams();

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };



    return (
        <div className='container mt-3 pt-3'>
            <Link to="/">
                <img style={{ marginLeft: '40%' }} src={logo} alt="" width="150px" />
            </Link>


            <div style={{ width: '550px', height: "510px", top: '50px', left: '265px' }} className="card text-center registrationForm">

                <div className="card-body">

                    <p className='volunteerText'>Register as a Volunteer</p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='form-group'>
                            <input type='text'
                                placeholder="Full Name"
                                {...register("Name", {
                                    required: "this is a required",
                                    maxLength: {
                                        value: 20,
                                        message: "Max length is 25"
                                    }
                                })}
                                defaultValue={loggedInUser.name}
                            />
                           
                        </div>
                        <div className='form-group'>
                            <input
                                placeholder="Username or Email"
                                type="text"
                                {...register("email", {
                                    required: "this is required",
                                   
                                })}
                                defaultValue={loggedInUser.email}
                            />
                          
                        </div>


                        <div className='form-group'>
                            <input
                                placeholder="Date"
                                {...register("date", {
                                    required: "this is required",
                                    
                                })}
                            />
                            
                        </div>
                        <div className='form-group'>
                            <input type='text'
                                placeholder="Description"
                                {...register("Description", {
                                    required: "this is a required",
                                   
                                })}
                            />
                           
                        </div>
                        <div className='form-group'>
                            <input type='text'
                                placeholder="Volunteer For"
                                {...register("Volunteer", {
                                    required: "this is a required",
                                    
                                })}

                                defaultValue={serviceName}
                            />
                           
                        </div>


                        
                        <input type="submit" />
                    </form>
                   
                </div>


            </div>


        </div>

    );
};

export default RegisterPage;