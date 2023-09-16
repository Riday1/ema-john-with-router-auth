import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="passowrd">Passowrd</label>
                    <input type="passowrd" name="passowrd" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='create-account'>New to ema john <Link className='' to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;