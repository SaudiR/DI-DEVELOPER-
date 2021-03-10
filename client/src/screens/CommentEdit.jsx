import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;
  const { comments, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const commentPost = comments.find((comment) => comment.id === Number(id));
      setFormData({
        name: commentPost.name
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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comment</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
