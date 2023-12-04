import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {

    const location = useLocation();
    
    const {user , loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }



    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/signIn'>  </Navigate>
};

export default PrivateRoutes;