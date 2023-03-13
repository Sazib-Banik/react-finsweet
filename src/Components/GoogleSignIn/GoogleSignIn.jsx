import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='button text-center'>
            <button className="btn form-btn" onClick={()=>signInWithGoogle()} type="submit">Sign-In with Google</button>
        </div>
    );
};

export default GoogleSignIn;