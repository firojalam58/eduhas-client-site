import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     
        
    }
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const Google = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
     });

    return () =>{
            return unsubscribe()
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        Google,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;