import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentCreate from './CommentCreate';

export default function Comments(props) {
  const { comments, handleDelete, currentUser, id } = props;
  const {postsId}  = useParams()
  console.log(id)
  return (
    <div>
      <h3>Comments</h3>
      <>
      {comments && comments.filter((comment) => comment.post_id === Number(id)).map((comment) => (
        <React.Fragment key={comment.id}>
         <Link to='/commentEdit'> <p>{comment.content}</p> </Link>
      
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
      {/* <button>Add Comment</button> */}
      <CommentCreate postId={id}/>
    </div>
  )
}