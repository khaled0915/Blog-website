import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {



    const axiosPublic = useAxiosPublic();

    const {user} = useContext(AuthContext);

    const { data : wishList = [] , refetch } = useQuery({
        queryKey : ['wishList' , user?.email] ,
        queryFn : async ()=>{

            const res = await axiosPublic.get(`/wishList?email=${user.email}`)
return res.data ;
        }
    });

    return [ wishList , refetch ]






};

export default useWishList;