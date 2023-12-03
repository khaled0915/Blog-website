
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const NewsletterSection = () => {
//   return (


//     <section className="bg-gray-800 text-white py-16">
//       <div className="container mx-auto flex flex-col items-center">
//         <h2 className="text-3xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
//         <p className="text-lg mb-8 text-center">
//           Stay up-to-date with our latest articles, trends, and insights. Subscribe to our newsletter for a dose of inspiration delivered to your inbox.
//         </p>
//         <div className="flex flex-col items-center w-full max-w-md mx-auto">
//           <input
          
//             type="email"
//             placeholder="Your Email"
//             className="bg-gray-700 w-full py-3 px-4 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
//           />
          
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-500"
//           >
//             <ToastContainer></ToastContainer>

//             Subscribe
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsletterSection;

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // You can add more sophisticated email validation if needed
    if (email && email.includes('@')) {
      // Simulating a successful subscription
      toast.success('Thank you for subscribing to our newsletter!', {
        position: 'top-center',
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error('Please enter a valid email address.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8 text-center">
          Stay up-to-date with our latest articles, trends, and insights. Subscribe to our newsletter for a dose of inspiration delivered to your inbox.
        </p>
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 w-full py-3 px-4 mb-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-500"
          >
            <ToastContainer></ToastContainer>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

