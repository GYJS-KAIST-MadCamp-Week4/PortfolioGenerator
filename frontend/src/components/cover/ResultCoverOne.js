import React from 'react';
// import NavbarOne from './NavbarOne';
import '../../static/CoverOne.scss';
import { Fade } from "react-awesome-reveal";

function ResultCoverOne({ title, subtitle, description, image }) {
  const backgroundImageStyle = image
    ? { backgroundImage: `url(${image})` }
    : {};

  return (
    <div className='tiger' style={backgroundImageStyle}>
      {/* <NavbarOne /> */}
      <Fade duration={3500}>
        <div className='text-container'>
          <h1>- <span>{title}</span> -<br /> </h1>
          <h2>{subtitle} </h2>
          <h3>____</h3>
          <div className='describe-me'> {description} </div>
        </div>
      </Fade>
    </div>
  );
}

export default ResultCoverOne;
