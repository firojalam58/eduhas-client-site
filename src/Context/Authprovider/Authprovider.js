import React, { createContext, useState } from 'react';
import app from '../../../public/Firebase/firebase.config';
import {getAuth} from 'firebase/app'

export const AuthContext = createContext()
const auth = getAuth(app)

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
    return (auth, email, password)
    setLoading(true)
};

const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true)
}
const logOut = () =>{
    return signOut(auth )
}

useEffect( ()=>{
  const unsubscribe = onAuthStateChanged (auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    });
    return () =>{
        return unsubscribe()
    }
},[]);

const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
}
const AuthProvider = ({children}) => {
   

    const authInfo = {

    }


    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    )
};

export default AuthProvider;