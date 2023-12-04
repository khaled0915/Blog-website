
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useBlog from "../../hooks/useBlog";

// import useBlog from "../../hooks/useBlog";


const BlogDetail = () => {

    const item = useLoaderData();
    console.log(item);


    // const {user} = useContext(AuthContext);

    const [blog ] = useBlog();

    console.log(blog);

    


    // console.log(selectedBlog);

    return (

        
        <div>
            <Navbar></Navbar>
            <h2> This is Blog details {item.length} </h2>

          


        </div>
    );
};

export default BlogDetail;