import React from "react";

import { usePost } from "../api/PostApi";

export default function Posts(){
    const {loading, postData } = usePost()
    console.log(postData);
    return(
        <>
        {loading ? "...loading": postData.map((posts, slug)=>{
            console.log(posts);
            return(
                <>
                <img src={posts.mainImage.asset.url} alt="" />
                </>
            )
        })}
        </>
    )
}