import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const SignIn = () => {

  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useNavigate();


    const handleLogin = event =>{
        event.preventDefault();
        const form  = event.target;
        
        const email = form.email.value ;

        const password = form.password.value ; 

        console.log(email , password);
        
        if(!password){
          toast.error('Your password doesnt match ')
          return;
        }
        else if(!email){
          toast.error('Your Email doesnt match')
          return;
        }

        logIn(email , password)
        .then(result =>{
          console.log(result.user);
          navigate(location?.state? location.state : '/')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        })
        .catch(error=>{
          console.log(error);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Login failed",
            showConfirmButton: false,
            timer: 1500
          });

        })

    }
    return (
        <div>
             <Helmet>
                <title> EchoMinds | Log_in </title> 
                
                </Helmet>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center w-auto lg:text-left">
    <h1 className="text-5xl my-7 underline font-bold">Login now!</h1>
    
        <img className="w-[400px] h-[300px]" src="https://i.ibb.co/xzv4tj4/3094352.jpg" alt="" />
    
     
    </div>
    <div className="card md:w-3/4 max-w-sm shadow-2xl bg-base-100">
        
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

          

          <input type="submit" value='Login' className="btn btn-secondary btn-outline" />
        </div>
      </form>

      <p className="my-5 p-4 text-sky-500 font-bold underline ml-9 pl-8 " > New Here ? 
 
        <Link className="text-xl p-5 text-orange-600 font-bold hover:underline" to='/SignUp'> 
        Sign UP
         </Link>
        
        
         </p>
         <p className="text-center font-bold bg-green-400"> Or Sign In with Google  </p>

        
    </div>
  </div>
</div>





        </div>
    );
};

export default SignIn;