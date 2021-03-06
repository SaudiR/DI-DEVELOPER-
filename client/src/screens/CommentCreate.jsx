import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: ''
  });
  const { content} = formData;
  const { handleCreate, currentUser, postId} = props; 
  const history = useHistory()
console.log(handleCreate)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleCreate({ ...formData, user_id: currentUser?.id, post_id: postId });
      // history.push(`/posts/${postId}`)
    
    }}>
      <h3 className="add-comment">Add Comment:</h3>
      <label>
        <textarea className="comment-area"
          rows={8}
          cols={50}
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
