import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>  {
        console.log(data);




        
    
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

      <img className="w-[500px] h-[400px]" src="https://i.ibb.co/r0JMttj/6310507.jpg" alt="" />

    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-400 underline ">Name</span>
          </label>
          <input type="text" {...register("name" , { required: true})} placeholder="Your Name" name='name' className="input input-bordered" required />

          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>







        


        <div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-orange-400 underline ">Photo URL</span>
  </label>
  <input type="text" {...register("photoURL" , { required: true})} placeholder="Photo uRl"  className="input input-bordered" required />

  {errors.photoURL && <span className="text-red-500">photo url  is required</span>}
</div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-400 underline ">Email</span>
          </label>
          <input type="email" {...register("email" , { required: true} )} placeholder="email" name='email' className="input input-bordered" required />

          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-400 underline ">Password</span>
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
         
        </div>
        <div className="form-control mt-6">
         

          <input 
          className="btn btn-success btn-outline"

           
           type="submit"
            value='Sign up' />


        </div>
      </form>


      

      <p className="px-6"> <small className="text-lg font-semibold text-pink-500 underline "> Already have an account ? <Link className="text-xl p-4 text-yellow-600 font-extrabold hover:underline  " to='/signIn'> Login </Link> </small> </p>

      <p className="mt-5 p-5 text-center font-extrabold bg-cyan-500 "> Or Sign Up with Google  </p>

     
    </div>
  </div>
</div>
            
        </div>
            
        </div>
    );
};

export default SignUp;