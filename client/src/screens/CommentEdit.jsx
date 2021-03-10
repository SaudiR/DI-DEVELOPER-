import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  });
  const { content } = formData;
  const { comments, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const commentPost = comments.find((comment) => comment.id === Number(id));
      setFormData({
        content: commentPost.name
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
      <label>content:
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
