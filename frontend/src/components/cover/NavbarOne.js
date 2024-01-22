import React from 'react'
import { Link } from 'react-router-dom';
import '../../static/navbarone.scss'

function NavbarOne() {
  return (
    <div className='nav-container'>
    <div style={{backgroundColor: 'transparent'}} className='monitor-container'>
      <ul style={{color:  'black'}} className='box'>
          <div>
              <Link to='tiger'  style={{color: 'white'}} smooth={true} duration={500}>Home</Link>
          </div>
          <div>
              <Link to='about'  style={{color: 'white'}} smooth={true} duration={500} offset={-50}>About</Link>
          </div>
          <div>
              <Link to='skill-section'  style={{color: 'white'}}  smooth={true} duration={500} offset={-90}>Skills</Link>
          </div>
          <div>
              <Link to='projects' style={{color: 'white'}} smooth={true} duration={500} offset={-90}>Projects</Link>
          </div>

           </ul>
      </div>
    </div>
  )
}

export default NavbarOne
