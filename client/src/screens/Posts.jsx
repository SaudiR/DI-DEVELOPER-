import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Posts.css';

export default function Posts(props) {
  const { posts } = props;

  return (
    <>
      <h3>Posts</h3>
      {posts.map((post, key) => (
        <div className="allPosts">
          <Link to={`/posts/${post.id}`}><img src={post.image_url} /></Link>
            <p key={post.id}>{post.title} </p>
       </div>
        
      ))}
    </>
  )
}

