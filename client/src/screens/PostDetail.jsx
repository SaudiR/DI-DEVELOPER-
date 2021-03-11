import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/Posts';
import '../Assets/PostDetail.css';
import Comments from '../screens/Comments';
import { Link } from 'react-router-dom';


export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  
  const { id } = useParams();
  const { comments, handleCreate } = props
  
  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    }
    fetchPostData();
  }, [id])

  return (
    <div>
      <h3 className="post-image"> <img src={post?.image_url} /> </h3>
      {/* <h3 className="post-title">{post?.title}</h3> */}
      <h3 className="post-content">{post?.content}</h3>
      <Comments id={id} comments={comments} handleCreate={handleCreate}/>
    </div>
  )
}