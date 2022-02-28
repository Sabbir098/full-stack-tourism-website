import React from 'react';
import useAuth from '../../CustomHooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    return (
        <div>
            <h2 className='login-title'>Please Login </h2>

            <button onClick={signInUsingGoogle} className='google-btn' >Google Sign In</button>

        </div>
    );
};

export default Login;