import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

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

    

     
    const authInfo = {

        user ,
        loading,
        createUser,
        logIn
       

    }


    return (


        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider  >
    );
}

export default AuthProvider;