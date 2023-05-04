import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../FireBase/FireBase.config';



export const authContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
     return   signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            
    }
    const githubLogin=()=>{
        setLoading(true)
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

  


    const authInfo = {
        user,
        createUser,
        signIn,
        logout,
        googleLogin,
        githubLogin,
        loading
      
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;