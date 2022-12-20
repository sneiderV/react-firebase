import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import posts from './../data/posts';
import Controllers from './Controllers';
// import { ThemeCtx } from '../contexts/themeContext';

const Blog = () => {
  // const props = useContext(ThemeCtx);
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
            <Controllers/>
        </div>
     );
}
 
export default Blog;