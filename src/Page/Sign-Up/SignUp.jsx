import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Result } from "postcss";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {

  const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { createUser  , updateUserProfile , handleGoogleSignIn} = useContext(AuthContext)


    const handleGoogleBtn = (auth , googleProvider) =>{

      handleGoogleSignIn(auth , googleProvider)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        const userInfo = {
          email : result.user?.email ,
          name : result.user?.displayName 
        }
        axiosPublic.post('/users' , userInfo)
        .then(res=>{
          console.log(res.data);
  
          navigate('/')
        })
        
        
        
      })
      .catch(error =>{
        console.log(error);
      })
  
  
  
  
  
    }
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()



    const onSubmit = (data) =>  {


        
      console.log(data)


      createUser(data.email , data.password)
      .then(result =>{
          const loggedUser = result.user ;
          console.log(loggedUser);
          updateUserProfile(data.name , data.photoURL)
          .then(() =>{

            const userInfo = {
              name : data.name ,
              email : data.email ,

              
            }

            // create user entry in the database

            axiosPublic.post('/users' , userInfo)
            .then(res =>{
              if(res.data.insertedId){

                console.log('user added in the db');


                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/')

               
                
              }
            })


              // console.log('user profile updated');
             

          })
          .catch(error => console.log(error))

          
          

      })
  
  }

  



    

    return (
        <div>


            <Helmet>
                <title> EchoMinds | Sign_up </title> 
                
                </Helmet> 


                <div>



<div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left px-5">
              <h1 className="text-5xl my-6 underline font-bold"> Sign Up now!</h1>

              <img className="w-[500px] h-[400px]" src="https://i.ibb.co/mFZp7zH/6368592.jpg" alt="" />

            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name" , { required: true})} placeholder="Your Name" name='name' className="input input-bordered" required />
        
                  {errors.name && <span className="text-red-500">This field is required</span>}
                </div>


        




                


                <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL" , { required: true})} placeholder="Photo uRl"  className="input input-bordered" required />

          {errors.photoURL && <span className="text-red-500">photo url  is required</span>}
        </div>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" {...register("email" , { required: true} )} placeholder="email" name='email' className="input input-bordered" required />
        
                  {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password" , { required: true, minLength :6 , 
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ ,
                     maxLength: 20 } )} placeholder="password" name='password' className="input input-bordered" required />
                  {errors.password?.type==='required' && <p className="text-red-600"> 
                    Password is required</p>}
        
                  {errors.password?.type === "minLength" && (
                <p className=" text-red-600"> password  must be 6 characters </p>
              )}
                  {errors.password?.type === "maxLength" && (
                <p className=" text-red-600"> password  must be less than 20 characters </p>
              )}
                  {errors.password?.type === "pattern" && (
                <p className=" text-red-600"> password  must be  have one uppercase , one lower case,one number and one special characters </p>
              )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                 
        
                  <input 
                  className="btn btn-outline"
        
                   
                   type="submit"
                    value='Sign up' />
        
        
                </div>
              </form>


              
        
              <p className="px-6"> <small> Already have an account ? <Link className="text-xl p-4 text-green-600 font-extrabold hover:underline " to='/signIn'> Login </Link> </small> </p>

              <p className="mt-5 p-5 text-center font-extrabold bg-cyan-500 "> Or Sign Up with Google  </p>

              <button onClick={handleGoogleBtn} className="btn  btn-secondary  mt-10   " > <FaGoogle className="text-black mr-5"></FaGoogle> Google </button>

              
            </div>
          </div>
        </div>






            
        </div>
            
        </div>
    );
};

export default SignUp;