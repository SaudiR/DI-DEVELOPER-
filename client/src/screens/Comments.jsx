import React from 'react';
import { Link } from 'react-router-dom';

export default function Comments(props) {
  const { Comments, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Comments</h3>
      {Comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <Link to={`/comments/${comment.id}`}><p>{comment.name}</p></Link>
          { comment.user_id === currentUser?.id &&
            <>
              <Link to={`/comments/${comment.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(comment.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/comments/new'><button>Create</button></Link>
    </div>
  )
}