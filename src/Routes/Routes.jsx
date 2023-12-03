import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import SignUp from "../Page/Sign-Up/SignUp";
import SignIn from "../Page/Sign_In/SignIn";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main> ,
        errorElement : <ErrorPage> </ErrorPage> ,
        children : [
            {
                path :'/' ,
                element : <Home></Home>
            },
            {
                path: '/signUp' ,
                element : <SignUp></SignUp>
            },
            {
                path : '/login' ,
                element : <SignIn></SignIn>
            }
        
        
        
        ]






        
    }
])