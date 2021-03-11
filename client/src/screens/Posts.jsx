import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Posts.css';

export default function Posts(props) {
  const { posts } = props;

  return (
    <>
      <h3>Click image to read more.</h3>
  
    <div className="image-cards">
  
      {posts.map((post, key) => (
        <>
          <Link className="image-link" to={`/posts/${post.id}`}><img src={post.image_url} /></Link>
            <p key={post.id}></p>
       </>
       
      ))}
      </div>
    </>
  )
}

