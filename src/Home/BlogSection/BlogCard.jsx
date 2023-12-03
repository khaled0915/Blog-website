import { useEffect, useState } from "react";


const BlogCard = () => {


    const [ blogs , setBlogs ] = useState([])

    useEffect(()=>{


        fetch('blog.json')
        .then( res => res.json() )
        .then(data => setBlogs(data));





    } , [])
    console.log(blogs);
    return (
        <div className="mt-10 mb-10">

            <h3 className="text-center text-2xl mt-10 mb-10 font-bold underline text-orange-700"> This is recent blog section </h3>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-teal-400 ">

   {
    blogs.map(item => 

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


    <div className="text-center mt-5 mb-4">
    <button className="btn btn-info font-bold  mr-5 "> Details </button>
    <button className="btn btn-success font-bold">wishlist</button>
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