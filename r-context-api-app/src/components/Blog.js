import React from 'react';
import { NavLink } from 'react-router-dom';
import posts from './../data/posts';

const Blog = () => {
    console.log(posts);
    return ( 
        <div>
            <h1>Blog</h1>
            <ul>
              {
                posts.map((post)=>{
                    return <li key={post.id}> <NavLink to={`/post/${post.id}`}>  {post.tittle} </NavLink> </li>
                })
              }
            </ul>
        </div>
     );
}
 
export default Blog;