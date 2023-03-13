import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Registation.css';

const Registation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const messageDiv = document.getElementById('message-div');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }
    return (
        <section id='login-part'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <h2 className='text-center'>Registration</h2>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email}
        onChange={(e) => setEmail(e.target.value)} />
                                    
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" value={password}
        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <p className='mb-4'>Already have an account ? <NavLink to="/login">Sign-in here</NavLink> </p>
                                <div id="message-div" className='mb-4'></div>
                                <div className='button text-center'>
                                <button type="submit" className="btn form-btn" onClick={() => createUserWithEmailAndPassword(email, password)}>Registation</button>
                                </div>
                                <div className='py-2 text-center'>
                                <p>OR</p>
                                </div>
                                {/* <div className='button text-center'>
                                <button className="btn form-btn">Sign-In with Google</button>
                                </div> */}
                                <GoogleSignIn/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registation;