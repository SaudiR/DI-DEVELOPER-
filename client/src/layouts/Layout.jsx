import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Header.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link className='app-title' to='/'><h1>Di_Developer</h1></Link>
        {
          currentUser ?
            <div>
              
              <div className="user-info">
              <p className='user-name'>{currentUser.username}</p>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
                <Link className="posts-link" to='/posts'>Posts</Link>
              </div>
            </div>
            :
            <>
            <Link to='/posts'>Posts</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
        }

        <>
        
        
          </>
      </header>
      {props.children}
    </div>
  )
}
