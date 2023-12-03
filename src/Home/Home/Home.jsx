import { Helmet } from "react-helmet-async";
import Navbar from "../../Page/Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> EchoMinds | Home </title> </Helmet>

            <Navbar ></Navbar>
            
            <Banner></Banner>
            
        </div>
    );
};

export default Home;