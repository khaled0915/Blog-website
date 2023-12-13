import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const {user , logOut} = useContext(AuthContext);


  const handleLogOut = () =>{
    logOut()
    .then()
    .catch()
  }


    const navBar = <>

    
    <li>
                <Link className=" hover:bg-orange-400 hover:underline font-extrabold text-white " to='/'>
                    Home </Link>

            </li>
            <li>
                <Link className=" hover:bg-yellow-500 hover:underline font-extrabold text-white" to='/addBlog'>
                Add Blog


                </Link>

            </li>
            <li>

                
                 <Link className=" hover:bg-pink-400 hover:underline font-extrabold text-white " to='/allBlog'>


                 All blogs  

            </Link> </li>

            <li> 
                
                <Link className=" hover:bg-sky-700 hover:underline font-extrabold text-white" to='/featureBlogs'>

                Featured Blogs 
                
                 </Link>
                 </li>
            <li> 

                
                <Link className=" hover:bg-yellow-400 hover:underline font-extrabold text-white" to='/wishlist'>

                Wishlist 
                
                 </Link>
                 </li>

    



    
    
     </>
    return (
        <div>
            <div className="navbar max-w-screen-xl  bg-opacity-30 text-white bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navBar}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">EchoMinds</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navBar}
    </ul>
  </div>



  <div>

 {
  user ? 
  <>

<button className="btn btn-warning btn-outline mr-5" onClick={handleLogOut}> LogOut </button>

<img className="w-[40px] h-[40px] rounded-full " src={user?.photoURL
} alt="" />
  
   </>
   :
   <> 

<Link to='/signUp'>
  <div className="navbar-end">
    <a className="btn"> Sign_Up </a>
  </div>
   </Link>

 <Link to='/signIn'>
 <div className="navbar-end">
    <a className="btn"> Sign_In </a>
  </div></Link>
   
   </>
 }

  </div>


</div>
        </div>
    );
};

export default Navbar;