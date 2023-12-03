import { Link } from "react-router-dom";

const Navbar = () => {


    const navBar = <>

    
    <li>
                <Link className=" hover:bg-orange-400 hover:underline font-bold text-teal-500 " to='/'>
                    Home </Link>

            </li>
            <li>
                <Link className=" hover:bg-yellow-500 hover:underline font-bold text-orange-600" to='/addBlog'>
                Add Blog


                </Link>

            </li>
            <li>

                
                 <Link className=" hover:bg-pink-400 hover:underline font-bold text-rose-500 " to='/allBlog'>


                 All blogs  

            </Link> </li>

            <li> 
                
                <Link className=" hover:bg-sky-700 hover:underline font-bold text-teal-500" to='/featureBlogs'>

                Featured Blogs 
                
                 </Link>
                 </li>
            <li> 

                
                <Link className=" hover:bg-yellow-400 hover:underline font-bold text-teal-500" to='/wishlist'>

                Wishlist 
                
                 </Link>
                 </li>

    



    
    
     </>
    return (
        <div>
            <div className="navbar bg-base-100">
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

  <Link to='/signUp'>
  <div className="navbar-end">
    <a className="btn"> Sign_Up </a>
  </div>
   </Link>

 <Link to='/signIn'>
 <div className="navbar-end">
    <a className="btn"> Sign_In </a>
  </div></Link>
  </div>


</div>
        </div>
    );
};

export default Navbar;