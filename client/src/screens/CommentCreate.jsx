import { useState } from 'react';

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: ''
  });
  const { content} = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { content, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [content]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Add Comment</h3>
      <label>
        <textarea
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
