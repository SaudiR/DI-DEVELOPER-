import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link to='/'><h1>Di_Developer</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
        }
        <hr /> 
        <>
        <Link to='/posts'>Posts</Link>
        {
          currentUser &&
          <>
            
            <Link to='/comments'>Comments</Link>
            <hr />
          </>
          }
          </>
      </header>
      {props.children}
    </div>
  )
}
