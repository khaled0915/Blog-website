
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useBlog from "../../hooks/useBlog";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

// import useBlog from "../../hooks/useBlog";


const BlogDetail = () => {

    

    const item = useLoaderData();
    console.log(item);


    // const {user} = useContext(AuthContext);

    const [blog , refetch ] = useBlog();

    console.log(blog);

    const axiosPublic = useAxiosPublic();

    const {id}= useParams();
    console.log(id);


  if (!blog || blog.length === 0) {
    return <progress className="progress progress-warning w-56" value="100" max="100"></progress>;
  }

 
  const filteredBlog = blog.find(item => item._id === id);

  
  if (!filteredBlog) {
    return <p>Camp not found</p>; 
  }

  console.log(filteredBlog);

    


    // console.log(selectedBlog);

    return (

        
        <div >
            <Helmet>
                <title> CampSwift | Blog Details  </title>

            </Helmet>
            <Navbar></Navbar>


        
            <div className="card mt-10 lg:card-side bg-base-100 shadow-xl">
  <figure><img className="h-[500px] w-[600px]  " src={filteredBlog.image} alt="Album"/></figure>
  <div className="card-body bg-red-300">
    <h2 className="card-title font-bold underline text-2xl"> {filteredBlog.title} </h2>
    
    
    <p className="text-xl font-semibold"> {filteredBlog.shortDescription
}  </p> 

<p className="text-xl font-semibold text-center mt-10"> {filteredBlog.longDescription
} </p>


    <div className="card-actions justify-end">
      <button className="btn btn-success  text-center mt-5 mb-5 "> Update </button>
    </div>



    <textarea className="textarea textarea-warning" placeholder="comment"></textarea>




  </div>
</div>
      

          


        </div>
    );
};

export default BlogDetail;