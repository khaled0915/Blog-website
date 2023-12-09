import useWishList from "../../hooks/useWishList";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const WishList = () => {



    const [wishList] = useWishList();
    console.log(wishList);



    return (
        <div className="mt-10 mb-20">
            <Navbar>

            </Navbar>
            <h3> This is wishlist page  </h3>



            <h2> {wishList.length} </h2>
            <h2> </h2>
            <Footer></Footer>
        </div>
    );
};

export default WishList;
