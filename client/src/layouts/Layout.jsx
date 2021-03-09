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
            <Link to='/login'>Login/Register</Link>
        }
        <hr />
        {
          currentUser &&
          <>
            <Link to='/foods'>Foods</Link>
            <Link to='/flavors'>Flavors</Link>
            <hr />
          </>
        }
      </header>
      {props.children}
    </div>
  )
}