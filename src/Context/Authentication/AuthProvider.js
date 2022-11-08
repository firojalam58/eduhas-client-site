import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


  export  const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState();
    const googleProvider = new GoogleAuthProvider();
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logOut = () =>{
        return signOut(auth)
    }

    const google = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                setLoading(false)
            })
            return () =>{
                unsubscribe()
            }
        },[])




    const authInfo = {
        user,
        loading,
        login,
        logOut, 
        google,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;