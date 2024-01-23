import React from 'react';
import NavbarOne from './NavbarOne';
import '../../static/CoverOne.scss';
import { Fade } from "react-awesome-reveal";

function CoverOne({ name, subtitle, description, image }) {
  const backgroundImageStyle = image
    ? { backgroundImage: `url(${image})` }
    : {};

  return (
    <div className='tiger' style={backgroundImageStyle}>
      <NavbarOne />
      <Fade duration={5500}>
        <div className='text-container'>
          <h1>- <span>{name}</span> -<br /> </h1>
          <h2>{subtitle} </h2>
          <h3>____</h3>
          <div className='describe-me'> {description} </div>
        </div>
      </Fade>
    </div>
  );
}

export default CoverOne;
