import React from 'react'
import NavbarOne from './NavbarOne'
import '../../static/CoverOne.scss'
import { Fade } from "react-awesome-reveal";
import {useLocation} from 'react-router-dom';


function CoverOne() {
  // This is how we pass data between components
  const location = useLocation();
  const { name, subtitle, description, selectedFile } = location.state;

  const backgroundImageStyle = selectedFile
  ? { backgroundImage: `url(${URL.createObjectURL(selectedFile)})`}
  : {};


  return (
    // This is the section where the user can select the background image
      <div className='tiger' style={backgroundImageStyle}>
      <NavbarOne />

          <Fade duration={5500}>

      {/* This is the Name Section */}
      <div className='text-container'>
        <h1>- <span>{name}</span> -<br /> </h1>
        {/* This is the portfolio intro section */}
        <h2>{subtitle} </h2>
        <h3>____</h3>
        {/* This is the description section */}
        <div className='describe-me'> {description} </div>
      </div>

        </Fade>

    </div>
  )
}

export default CoverOne
