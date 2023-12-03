import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg mb-8 text-center">
            Welcome to echoMinds, your go-to destination for insightful content and meaningful discussions. We believe in the power of ideas and the impact of shared knowledge. Our mission is to inspire, educate, and connect minds across various domains. Join us on this journey of exploration, creativity, and continuous learning.
          </p>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Follow us on social media:</p>
            <div className="flex space-x-4 text-xl">
              {/* Add your social media icons and links here */}
              <FaFacebook></FaFacebook>

              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;