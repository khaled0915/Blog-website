import { Helmet } from "react-helmet-async";
import Navbar from "../../Page/Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> EchoMinds | Home </title> </Helmet>

            <Navbar ></Navbar>
            <h3> This is Home </h3>
            <h2> Welcome to EchoMinds </h2>
            
        </div>
    );
};

export default Home;