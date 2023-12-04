import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import SignUp from "../Page/Sign-Up/SignUp";
import SignIn from "../Page/Sign_In/SignIn";
import BlogDetail from "../Page/BlogDetail/BlogDetail";


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
                path : '/signIn' ,
                element : <SignIn></SignIn>
            },
            {
                path : '/blogDetail/:id',
                element : <BlogDetail></BlogDetail>,
                loader : ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
            }
        
        
        
        ]






        
    }
])