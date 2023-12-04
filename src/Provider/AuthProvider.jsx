import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


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

    const axiosPublic = useAxiosPublic();
    useEffect ( () =>{

        const unSubscribe = onAuthStateChanged ( auth , currentUser =>{
            console.log( ' user in tbe state' ,  currentUser);
            setUser(currentUser);

            if(currentUser){
                const userInfo = { email : currentUser.email };

                axiosPublic.post('/jwt' , userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token' , res.data.token)
                        setLoading(false);
                    }
                })

                
            }

            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            console.log('current user' , currentUser);
            setLoading(false);
            
        })
        return () =>{
            unSubscribe();
        }

    } ,[axiosPublic] )

    const updateUserProfile = (name , photo) =>{
        return updateProfile(auth.currentUser , {
            displayName : name , photoURL : photo 
        })
    }

    

     
    const authInfo = {

        user ,
        loading,
        createUser,
        logIn,
        logOut,
        handleGoogleSignIn,
        updateUserProfile
       

    }


    return (


        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider  >
    );
}

export default AuthProvider;