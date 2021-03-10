import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/Posts';


export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    }
    fetchPostData();
  }, [id])

  return (
    <div>
      <h3>{post?.title}</h3>
    </div>
  )
}