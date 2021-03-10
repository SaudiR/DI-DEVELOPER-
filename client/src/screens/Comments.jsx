import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Comments(props) {
  const { comments, handleDelete, currentUser, id } = props;
  console.log(comments[0].post_id)
  console.log(id)
  // console.log(comments.filter((comment) => comment.post_id === Number(id)).map((comment) => {}))
  return (
    <div>
      <h3>Comments</h3>
      <>
      {comments && comments.filter((comment) => comment.post_id === Number(id)).map((comment) => (
        <React.Fragment key={comment.id}>
          <p>{comment.content}</p>
          <p>test</p>
          {comment.user_id === currentUser?.id &&
            <>
              <Link to={`/comments/${comment.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(comment.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
        </>
      <br />
      <Link to='/commentCreate'><button>Add Comment</button></Link>
    </div>
  )
}