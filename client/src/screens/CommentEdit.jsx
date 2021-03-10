import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  });
  const { content } = formData;
  const { comments, handleUpdate, handleDelete } = props;
  const { id } = useParams();
console.log(handleDelete)
  useEffect(() => {
    const prefillFormData = () => {
      const commentPost = comments.find((comment) => comment.id === Number(id));
      setFormData({
        content: commentPost
      });
    }
    if (comments.length) {
      prefillFormData();
    }
  }, [comments, id])

  const handleChange = (e) => {
    const { content, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [content]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comment</h3>
      <label>Comment:
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
      <Link to='/Posts'><button>Save Comment</button></Link>
      <button onClick={(id)=>handleDelete(id)}>Delete Comment</button>
    </form>
  )
}
