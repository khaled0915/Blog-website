import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WishList from "../../Page/Wishlist/WishList";
import WishListBtn from "../../Components/WishListButton/WishListBtn";
import useBlog from "../../hooks/useBlog";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const BlogCard = () => {

    const [blog] = useBlog();

   


    // const axiosPublic = useAxiosPublic();

    // const{user} = useContext(AuthContext);

//     const handleWishListBtn = () =>{
//         if(user && user.email)
        
//         {
//             const { _id , image , title ,category, shortDescription , longDescription } = blog;

//         const wishListInfo  = {
//             email : user.email ,
//             id :_id,
//         BlogTitle : title ,
//         BlogImage : image ,
//         BlogCategory : category,
//         BlogLongDescription : longDescription ,
//         BlogShortDescription : shortDescription

//         }
//         axiosPublic.post('/wishList' , wishListInfo)
//         .then( res =>{
//             if(res.data.insertedId){
//                 console.log('');
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: ' the blog has been added to your wishlist ',
//                     showConfirmButton: false,
//                     timer: 1500
//                   });

//             }
//         })
//         console.log(wishListInfo);
//     }
// }


    // const [ blogs , setBlogs ] = useState([])

    // useEffect(()=>{


    //     fetch('blog.json')
    //     .then( res => res.json() )
    //     .then(data => setBlogs(data));





    // } , [])

 
    console.log(blog);
    return (
        <div className="mt-10 mb-10">

            <h3 className="text-center text-2xl mt-10 mb-10 font-bold underline text-orange-700"> This is recent blog section </h3>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-teal-400 ">

   {
    blog.map(item => 

        <div key={item._id} 
        
        className="hero min-h-screen bg-red-400">
  <div className="hero-content rounded-lg bg-orange-400 flex-col lg:flex-row-reverse">
    <img src={item.image} className=" rounded-lg w-[300px] h-[300px] shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold"> Blog_Title:  {item.title}</h1>

      <p className="mt-5 font-bold bg-sky-500 rounded-full p-4  hover:text-orange-700 "> Category: 
      
     <span className="text-xl underline">  {item.category}  </span>
      
      </p>


      <p className="py-6">{item.shortDescription}</p>


    <div className="text-center mt-5 mb-4 flex">

<Link to={`/blogDetail/${item._id}`}> 
    <button className="btn btn-info font-bold  mr-5 "> Details </button> </Link>


<WishListBtn></WishListBtn>
    {/* <div>
         
           
           <button onClick={handleWishListBtn} className="btn btn-success font-bold"> WishList </button>  
        </div> */}

    </div>
    </div>
  </div>
</div>

    
    
    
       )
   }

</div> 





      


        
        </div>
    );
};

export default BlogCard;