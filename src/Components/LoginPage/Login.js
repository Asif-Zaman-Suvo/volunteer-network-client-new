import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import googleLogo from '../../logos/googleLogo.png';
import facebookLogo from '../../logos/FbLogo2.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';



const Login = () => {

    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //Google Sign In//

    

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();


        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);

        }



        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;

                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    photo: photoURL,
                    email:email,
                    message: "Logged In Successfully"
                }

                setLoggedInUser(signedInUser);
                storeAuthToken();

                history.replace(from);
            })

            .catch(error => {
                const newUser = { message: error.message };
                setLoggedInUser(newUser);
            })

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);

            }).catch(function (error) {
                // Handle error
            });
    }


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
                        <button onClick={handleSignIn} className=" btn btn-light border rounded-pill btn-lg btn-block">
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