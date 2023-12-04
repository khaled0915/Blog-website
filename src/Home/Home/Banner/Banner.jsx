import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
          

            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/42Dxjzz/blog.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-yellow-400 ">

      Unlocking Echoes of the Mind

      </h1>
      <p className="mb-5 font-bold text-lg text-teal-300   ">Discover a world of inspiration at echoMinds – where thoughts reverberate and creativity resonates. Engage with captivating articles, explore diverse perspectives, and join a community of thinkers. EchoMinds, where ideas find their voice.


</p>
     <Link to='/signUp'> 
     <button className="btn btn-accent font-bold mt-5 "> get Started 
</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;