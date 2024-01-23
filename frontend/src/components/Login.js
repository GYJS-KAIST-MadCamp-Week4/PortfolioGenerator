import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <h1> Hiiiii</h1>
        <li>
          <Link to="/coverone" style={{color: 'black'}}>Cover One</Link>
        </li>
        <li>
          <Link to="/aboutme1" style={{color: 'black'}}>About Me One</Link>
        </li>
        <li>
          <Link to="/skills1" style={{color: 'black'}}>Skills One</Link>
        </li>
        <li>
          <Link to="/skills2" style={{color: 'black'}}>Skills Two</Link>
        </li>
        <li>
          <Link to="/skills3" style={{color: 'black'}}>Skills Three</Link>
        </li>
        <li>
          <Link to="/project1" style={{color: 'black'}}>Project One</Link>
        </li>
        <li>
          <Link to="/project2" style={{color: 'black'}}>Project Two</Link>
        </li>
        <li>
          <Link to="/question" style={{color: 'black'}}>Question</Link>
        </li>
        <li>
          <Link to="/test" style={{color: 'black'}}>Test</Link>
        </li>
    </div>
  )
}

export default Login
