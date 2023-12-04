import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const BlogDetail = () => {

    const selectedBlog = useLoaderData();
    console.log(selectedBlog);

    const  {image ,title , shortDescription ,category}  = selectedBlog;

    // console.log(selectedBlog);

    return (

        
        <div>
            <Navbar></Navbar>
            <h2> This is Blog details </h2>

            <h3> {selectedBlog.length} </h3>


        </div>
    );
};

export default BlogDetail;