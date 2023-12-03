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


const SignUp = () => {
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e =>{
      e.preventDefault();

      const    form = e.target ;

      const name = form.name.value; 
      const email = form.email.value; 
      const password = form.password.value; 
      const photo = form.photo.value; 
 
      console.log(name , email , password , photo);


      
     if(password.length < 6 ){
      toast.error('Your password should have at least 6 characters  ');
      return ;
    }
   
    
    else if(!/[A-Z]/.test(password)){
      toast.error('Your password must contain at least one capital letter ');
      return;
    }
    else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)){
      toast.error('Password must contain at least one special character');
      return;

    }
    else if (!/[\d]/.test(password))
    {
    // setErrors((prevErrors) => ({ ...prevErrors, numericCharacter: true }));
    toast.error("don't have a numeric character")
    return ;
  }

    createUser(email , password)
    .then(result =>{
      console.log(result);
      if(result.user){
        toast.success('You successfully registered')
        navigate('/')
      }
      else{
        toast.error('registration failed')
      }
    })
    .catch(error=>{
      console.error(error)
      toast.error(error.message)
    })
    form.reset();

    }

    return (
        <div>


            <Helmet>
                <title> EchoMinds | Sign_up </title> 
                
                </Helmet> 


                <div>


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
</div>




            
        </div>
            
        </div>
    );
};

export default SignUp;