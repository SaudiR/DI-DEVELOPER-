import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  });
  const history = useHistory()
  const { content } = formData;
  const { comments, handleUpdate, handleDelete } = props;
  const { id } = useParams();
  const commentPost = comments.find((comment) => comment.id === Number(id));
  console.log(commentPost)
  useEffect(() => {
    const prefillFormData = () => {
      const commentPost = comments.find((comment) => comment.id === Number(id));
      setFormData({
        content: commentPost.content
      });
    }
    if (comments.length) {
      prefillFormData();
    }
  }, [comments, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
        handleUpdate(id, formData);
        history.push(`/posts/${commentPost.post_id}`)
    }}>
      <h3>Edit Comment</h3>
      <label>
        <textarea
          rows={10}
          cols={78}
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
        <br />
        <button className="save-comment" >Save Comment</button>
        <button className="delete-button" onClick={() => handleDelete(id)}>Delete Comment</button>
      </form>
      
  </>
  )
}
