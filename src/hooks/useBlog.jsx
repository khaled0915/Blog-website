import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useBlog = () => {


    const axiosPublic = useAxiosPublic();

    const { data : blog = [] , refetch } = useQuery({
        queryKey : ['blog'] ,
        queryFn : async ()=>{
            const res = await axiosPublic.get('/blogs')
            return res.data ;
        }
    });

    return [blog    , refetch]
};

export default useBlog;