import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import SignUp from "../Page/Sign-Up/SignUp";
import SignIn from "../Page/Sign_In/SignIn";
import BlogDetail from "../Page/BlogDetail/BlogDetail";
import AddBlog from "../Page/AddBlog/AddBlog";
import PrivateRoutes from "./PrivateRoutes";
import AllBlogs from "../Page/AllBlogs/AllBlogs";
import WishList from "../Page/Wishlist/WishList";
import FeatureBlog from "../Page/FeatureBlog/FeatureBlog";


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
                loader : ({params}) => fetch(`https://blog-website-server-beryl.vercel.app/blogs/${params.id}`)
            },
            {
                path :'/addBlog',
                element : <PrivateRoutes>  <AddBlog></AddBlog> </PrivateRoutes>
            },
            {
                path : '/allBlog',
                element : <AllBlogs></AllBlogs>
            },
            {
                path : '/wishList',
                element : <WishList></WishList>
            },
            {
                path : '/feature',
                element: <FeatureBlog></FeatureBlog>
            }
        
        
        
        ]






        
    }
])