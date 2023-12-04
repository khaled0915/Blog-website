import React, { useEffect, useState } from 'react';

const CommentSection = ({comments}) => {



    const [comment , setComment] = useState([])


    useEffect(()=>{


        fetch('https://blog-website-server-beryl.vercel.app/comment')
        .then(res=>res.json())
        .then(data=>setComment(data))
    } , [])

    console.log(comment);



    
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

   
      
      
      
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      
       
        <div>

          
            <div  className="flex items-center mb-4">
              <img
                src=''
                alt=''
                className="h-10 w-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-gray-600"></p>
              </div>
            </div>
          
          
          
        </div>
      

      {/* Add a comment form if needed */}
      {/* <CommentForm /> */}
    </section>
  );
};

export default CommentSection;
