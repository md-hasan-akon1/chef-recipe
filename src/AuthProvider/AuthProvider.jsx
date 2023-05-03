import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../FireBase/FireBase.config';



export const authContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        logout
    }
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return ()=>{
             unSubscribe()
    }
},[])

    
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;