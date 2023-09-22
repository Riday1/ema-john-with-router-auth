import React, { useContext, useState } from 'react';
import './SignUP.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUP = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState();
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        /* here you can validate or authenticate user email and password by using javascript regEx (regular expression) 
        if(!/^\S+@\S+\.\S+$/.text(email)){
            message = <p>Your email is not valid, please provide a valid email address</p>
            return;
        }
       
        */

        /* 
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)){
            message = <p>provide a strong password</p>
            return ;
        }
        else{
            message = '';
        }
        */

        if (password.length < 6) {
            setError('you have to provide at least 6 character');
            return
        }
        else if (password !== confirm) {
            setError('your password did not match')
            return;
        }
        else {
            setError('');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
            })
            .catch(error => {
                console.error(error)
            })
        console.log(email, password, confirm)
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error:', error)
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit} >

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='create-account'>Already have an account ? <Link className='' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUP;