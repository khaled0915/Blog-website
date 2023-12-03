import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider  = ({children}) =>{

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);



 // for sign up 

     const createUser = (email , password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email , password)
    }

    // for signin 
    const logIn = (email , password)=>{
        return signInWithEmailAndPassword(auth , email  , password);
    }

    // for logout

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);


    }

    const handleGoogleSignIn = () =>{
        return signInWithPopup(auth , googleProvider);
    }

    useEffect ( () =>{

        const unSubscribe = onAuthStateChanged ( auth , createUser =>{
            console.log( ' user in tbe state' , createUser);
            setUser(createUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }

    })

    

     
    const authInfo = {

        user ,
        loading,
        createUser,
        logIn,
        logOut,
        handleGoogleSignIn
       

    }


    return (


        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider  >
    );
}

export default AuthProvider;