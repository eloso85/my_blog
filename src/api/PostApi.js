import {useState, useEffect } from "react";
import sanityClient from "../client";

export const usePost = ()=>{
    const [postData, setPostData] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=>setPostData(data))
            .catch(console.error());
            setLoading(false)
    },[])
    return {loading, postData}
}