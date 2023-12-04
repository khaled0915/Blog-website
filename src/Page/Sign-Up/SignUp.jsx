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


const SignUp = () => {

  const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { createUser  , updateUserProfile} = useContext(AuthContext)


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

  

  //   const handleSignUp = e =>{
  //     e.preventDefault();

  //     const    form = e.target ;

  //     const name = form.name.value; 
  //     const email = form.email.value; 
  //     const password = form.password.value; 
  //     const photo = form.photo.value; 
 
  //     console.log(name , email , password , photo);


      
  //    if(password.length < 6 ){
  //     toast.error('Your password should have at least 6 characters  ');
  //     return ;
  //   }
   
    
  //   else if(!/[A-Z]/.test(password)){
  //     toast.error('Your password must contain at least one capital letter ');
  //     return;
  //   }
  //   else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)){
  //     toast.error('Password must contain at least one special character');
  //     return;

  //   }
  //   else if (!/[\d]/.test(password))
  //   {
  //   // setErrors((prevErrors) => ({ ...prevErrors, numericCharacter: true }));
  //   toast.error("don't have a numeric character")
  //   return ;
  // }

  //   createUser(email , password)
  //   .then(result =>{
  //     console.log(result);
  //     .then(()=>{

  //       const userInfo = {
  //         name : 
  //       }

  //     })
  //     if(result.user){
  //       toast.success('You successfully registered')
  //       navigate('/')
  //     }
  //     else{
  //       toast.error('registration failed')
  //     }
  //   })
  //   .catch(error=>{
  //     console.error(error)
  //     toast.error(error.message)
  //   })
  //   form.reset();

    

    return (
        <div>


            <Helmet>
                <title> EchoMinds | Sign_up </title> 
                
                </Helmet> 


                <div>

{/* 
                <div className=" min-h-screen  ">

<div className="hero-content  flex-col">
  <div className="text-center lg:text-left">

    <h1 className="text-5xl text-white font-extrabold"> Register </h1>
    
   
  </div>


  <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl  ">

    <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-red-700 font-bold">Your Name</span>
        </label>

        <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text  text-red-700 font-bold">Email</span>
        </label>

        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-red-700 font-bold">Password</span>
        </label>
        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        <label className="label">
         
        </label>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-red-700 font-bold">PhotoURL</span>
        </label>
        <input type="text" placeholder="photoUrl" name='photo' className="input input-bordered" required />
        <label className="label">
         
        </label>
      </div>
      <div className="form-control mt-6">


      <button className="btn btn-accent">
       
        
        <ToastContainer></ToastContainer>
        Register</button>
      </div>


      <p className="mt-5 text-yellow-700 font-bold hover:underline "> already register ? 

      <Link to='/signIn' className="ml-10 font-bold hover:text-green-500 text-yellow-400"> login </Link>
      
       </p>




    </form>
  </div>
</div>
</div> */}


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


              
        
              <p className="px-6"> <small> Already have an account ? <Link className="text-xl p-4 text-green-600 font-extrabold hover:underline " to='/login'> Login </Link> </small> </p>

              <p className="mt-5 p-5 text-center font-extrabold bg-cyan-500 "> Or Sign Up with Google  </p>

              
            </div>
          </div>
        </div>






            
        </div>
            
        </div>
    );
};

export default SignUp;