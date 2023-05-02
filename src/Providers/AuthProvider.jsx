import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // google sign in 
    const signInGoogle = ()=>{
       return signInWithPopup(auth,googleProvider)
    }


    // handle log out 
    const logOut = ()=>{
        return signOut(auth);
    }
    // find current user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);

        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo ={
        signInGoogle,
        user,
        logOut
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;