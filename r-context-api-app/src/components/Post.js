import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import posts from '../data/posts';

const Post = () => {
    const {id} = useParams();
    return ( 
        <>
            {posts[id-1] ? 
                <div>
                    <h1>Article: {posts[id-1].tittle}</h1>
                    <p>{posts[id-1].text}</p>
                </div>
                :
                // <div>
                //     <h1> The Article {id} not exist ! </h1>
                // </div>
                < Navigate replace to="/" />
        }
        </>
        
     );
}
 
export default Post;