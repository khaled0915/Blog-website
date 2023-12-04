import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useBlog from "../../hooks/useBlog";
import Swal from "sweetalert2";

const WishListBtn = () => {

    const axiosPublic = useAxiosPublic();

    const {user} = useContext(AuthContext);

    const [blog ] = useBlog();
    



    const handleWishListBtn = () =>{
        if(user && user.email)
        {

        const wishListInfo  = {
        title : blog.title ,
        image : blog.image ,
        category : blog.category,
        longDescription : blog.longDescription ,
        shortDescription : blog.shortDescription

        }
        axiosPublic.post('/wishList' , wishListInfo)
        .then(res =>{
            if(res.data.insertedId){
                console.log('info added');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ' info saved successfully ',
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
    }
}




    return (
        <div>
           
           <button onClick={handleWishListBtn} className="btn btn-success font-bold"> WishList </button>  
        </div>
    );
};

export default WishListBtn;