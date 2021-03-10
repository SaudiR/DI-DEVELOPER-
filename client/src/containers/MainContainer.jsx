import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { destroyComment, getAllComments, postComment, putComment } from '../services/Comments';
import { getAllPosts } from '../services/Posts';
import Comments from '../screens/Comments';
import Posts from '../screens/Posts';
import CommentCreate from '../screens/CommentCreate';
import CommentEdit from '../screens/CommentEdit';
import PostDetail from '../screens/PostDetail'; 


export default function MainContainer(props) {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments();
      setComments(commentsList);
    }
    fetchComments();
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const postsList = await getAllPosts();
      setPosts(postsList);
    }
    fetchPosts();
  }, [])

  const handleCreate = async (formData) => {
    const newComment = await postComment(formData);
    setComments(prevState => [...prevState, newComment]);
    history.push('/posts');
  }

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments(prevState => prevState.filter((comment) => comment.id !== id))
  }

  const handleUpdate = async (id, formData) => {
    const updatedComment = await putComment(id, formData);
    setComments(prevState => prevState.map((comment) => {
      return comment.id === Number(id) ? updatedComment : comment
    }));
    history.push('/comments');
  }

  return (
    <Switch>
      {/* {
        !currentUser &&
        <Redirect to='/' />
      } */}
      <Route path='/commentCreate'>
        <CommentCreate
          handleCreate={handleCreate} 
          comments={comments}
          currentUser={currentUser}
          posts={posts}
        />
      </Route>
      <Route path='/commentEdit'>
        <CommentEdit
          comments={comments}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/posts/:id'>
        <PostDetail posts={posts} comments={comments}/>
      </Route>
      <Route path='/comments/id'>
        <Comments
          comments={comments}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/posts'>
        <Posts
          posts={posts}
        />
      </Route>
    </Switch>
  )
}
