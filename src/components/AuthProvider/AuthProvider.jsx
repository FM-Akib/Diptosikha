import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types'; // ES6


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();



    const createUser=(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=() => {
        return signInWithPopup(auth,googleProvider)
    }
    
    const logOut=() => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node
}