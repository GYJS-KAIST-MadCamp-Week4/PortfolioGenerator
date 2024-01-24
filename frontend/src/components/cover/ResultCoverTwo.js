import React, { useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../static/CoverTwo.scss'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ResultCoverTwo({title, subtitle, description, selectedFile}) {


  const backgroundImageStyle = selectedFile
  ? { backgroundImage: `url(${URL.createObjectURL(selectedFile)})`}
  : {};

  useEffect(() => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;
    
    styleSheet.insertRule(`
      body::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${backgroundImageStyle});
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.6; 
        z-index: -1;
      }
    `, styleSheet.cssRules.length);

    document.body.style.background = 'none';
  
    return () => {
      document.head.removeChild(styleElement);
      document.body.style.background = '';
    };
  }, [backgroundImageStyle]);
  

  return(
    <section id="about">
      <div id="introduction" className="about-inner">
        <div className="typeit">
          <TypeIt options={{
            strings: [title, subtitle],
            speed: 100,
            loop: true,
            loopDelay: [2500],
            waitUntilVisible: true,
          }}/>
        </div>
          <p>{description}</p>
      </div>
    </section>
  );
}

export default ResultCoverTwo;