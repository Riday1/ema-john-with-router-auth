import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }


    /* set an observer to store user information */
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        })


        return () => unSubscribed();

    }, [])



    const authInfo = { user, createUser, signIn, loginWithGoogle, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/* here children is our  <App/> component */}
        </AuthContext.Provider>
    );
};
export default UserContext;


/* const validateEmail = (email) => {
    if (!/^\S+@\S+\.\S+$/.text(email)) {
        message = <p>Your email is not valid, please provide a valid email address</p>
        return;
    }
    else {
        message = '';
    }
}
const validatePassword = (password) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)) {
        message = <p>provide a strong password</p>
        return;
    }
    else {
        message = '';
    }
} */

