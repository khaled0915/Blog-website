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

    console.log(blog);


    



    const handleWishListBtn = () =>{
        if(user && user.email)
        {
            const { _id , image , title ,category, shortDescription , longDescription } = blog;

        const wishListInfo  = {
            email : user.email ,
            id : _id ,
        title : title ,
        image : image ,
        category : category,
        longDescription : longDescription ,
        shortDescription : shortDescription

        }
        axiosPublic.post('/wishList' , wishListInfo)
        .then(async res =>{
            if(res.data.insertedId){
                console.log('');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ' the blog has been added to your wishlist ',
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
        console.log(wishListInfo);
    }
}




    return (
        <div>
         
           
           <button onClick={handleWishListBtn} className="btn btn-success font-bold"> WishList </button>  
        </div>
    );
};

export default WishListBtn;