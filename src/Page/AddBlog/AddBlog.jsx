import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddBlog = () => {

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

    const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const { register, handleSubmit , reset } = useForm()

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {


        const imageFile = {image : data.image[0]}

        const res = await axiosPublic.post(image_hosting_api ,  imageFile ,{
            headers : {
                'content-type' : 'multipart/form-data'
            }
        } );

        console.log(res.data);

        if(res.data.success){

            const blogData = {
                title : data.title ,
                image : res.data.data.display_url,

                shortDesc : data.shortDesc ,
                longDesc : data.longDesc 


                
                
               

               

            }


            const campRes = await axiosPublic.post('/blogs' , blogData)
            console.log(campRes.data);
            if(campRes.data.insertedId){
                reset()

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the camp`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }



        }








        
        
        
        console.log(data)}

    return (
        <div>
            <Navbar></Navbar>
               <Helmet> 

<title> Dashboard | Add a Blog </title>


</Helmet>

<h1 className="text-4xl text-center font-bold underline mb-10 "> add blog page </h1>

<div className="bg-orange-300 mb-10">
                
                <form onSubmit={handleSubmit(onSubmit)}>
         
    
    
    
          <div>
    
          <label className="label">
        <span className="label-text text-green-700 underline font-semibold"> Blog Title : </span>
       
      </label>
          <input 
          
          {...register("title")} 
         
         type="text" 
         placeholder="Type the title" className="input input-bordered input-accent w-full max-w-xs" />
          </div>
    
    
    
          <div className="flex gap-10">
    
          <div>
    
    <label className="label">
    <span className="label-text  text-green-700 underline font-semibold"> Category :</span>
    
    </label>

    <select  {...register("category")} className="select select-primary w-full max-w-xs">
  <option disabled selected>select your blog category</option>
  <option>Lifestyle</option>
  <option>Science</option>
  <option>Food</option>
  <option>Technology</option>
  <option>nature</option>
  <option>Art</option>
</select>


    {/* <input 
    
    {...register("category")} 
    
    type="text" 
    placeholder="enter the category" className="input input-bordered input-accent w-full max-w-xs" /> */}
    </div>
    
    <div>
    
    <label className="label">
    <span className="label-text  text-green-700 underline font-semibold"> short description :</span>
    
    </label>
    <input 
    
    {...register("shortDesc")} 
    
    type="text" 
    placeholder="enter a short description" className="input input-bordered input-accent w-full max-w-xs" />
    </div>
    
          </div>
    
    
          
    
    
         
    
    
          <div>
    
          <label className="label">
        <span className="label-text  text-green-700 underline font-semibold"> Long Description</span>
       
      </label>
          <input 
          
          {...register("longDesc")} 
         
         type="text" 
         placeholder="enter a long description " className="input input-bordered input-accent w-full max-w-xs" />
          </div>
    
         
    
    
   
         
    
    
        
    
    
         <div className="flex gap-10 justify-center items-center">
         
    
    
    <input {...register('image',{required : true})} type="file" className="file-input file-input-bordered mt-10 file-input-warning w-full max-w-xs" />
         </div>
         
    
    
    
    
    
    
    
    
         
    
    
    
    
         
    
    
       <button className="btn text-center mt-10 btn-success btn-wide ml-20 "> 
       
       
       submit  </button>
    
    
        </form>
                </div>





            <Footer></Footer>
        </div>
    );
};

export default AddBlog;