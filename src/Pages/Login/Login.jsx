import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    const messageDiv = document.getElementById('message-div'); 
        if (error) {
          messageDiv.innerHTML = error;
        }
        if (loading) {
            messageDiv.innerHTML = "Loading...";
        }
        if (user) {
            messageDiv.innerHTML = "User Login Successfull";

        }
    return (
        <section id='login-part'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <h2 className='text-center'>Login</h2>
                            
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" value={email}
        onChange={(e) => setEmail(e.target.value)} />
                                    
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <p className='mb-4'>New User ? <NavLink to="/reg">Create An Account</NavLink> </p>
                                <div id="message-div" className='mb-4'></div>
                                <div className='button text-center'>
                                <button type="submit" className="btn form-btn" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;