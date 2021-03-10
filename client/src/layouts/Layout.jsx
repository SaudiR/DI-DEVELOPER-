import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link to='/'><h1 className='app-title'>Di_Developer</h1></Link>
        {
          currentUser ?
            <>
              <p className='user-name'>{currentUser.username}</p>
              <button className='logout-button' onClick={handleLogout}>Logout</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
        }

        <>
        <Link to='/posts'>Posts</Link>
        
          </>
      </header>
      {props.children}
    </div>
  )
}
