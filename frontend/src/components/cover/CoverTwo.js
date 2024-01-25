import React, { useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../static/CoverTwo.scss'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { useSignal } from '../../context/SignalContext';
import global from '../global.js';

function CoverTwo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, subtitle, description , userID } = location.state;
  const { signal } = useSignal();

  const {userData} = useData()
  console.log("userData in covertwo")
  console.log(userData.email)


  // useEffect(() => {
  //   const styleElement = document.createElement('style');
  //   document.head.appendChild(styleElement);
  //   const styleSheet = styleElement.sheet;
    
  //   styleSheet.insertRule(`
  //     body::before {
  //       content: "";
  //       display: block;
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       right: 0;
  //       bottom: 0;
  //       background-size: cover;
  //       background-repeat: no-repeat;
  //       opacity: 0.6; 
  //       z-index: -1;
  //     }
  //   `, styleSheet.cssRules.length);

  //   document.body.style.background = 'none';
  
  //   return () => {
  //     document.head.removeChild(styleElement);
  //     document.body.style.background = '';
  //   };
  // }, []);
  const handleNextClick = async()=> {
    await handleCover()
    navigate('/abouttemplate');
  }
  const handleCover = async () => {
    const apiUrl = 'http://' + global.address + ':4000/savecover'; // Replace with your backend API endpoint
      // const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
      console.log(signal);
      console.log("We are inside the cover function");
    
      // Convert selected file to base64
    
     
          // Now you can use base64Image in the rest of your logic
          console.log("This is userDAta in cover2")
          console.log(userData.email)
          const requestData = {
            userID: userData.email,
            signal: signal,
            title: name,
            subtitle: subtitle,
            description: description,
          };
          
    
          try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            });
    
            // Handle the response as needed
            console.log(response);
          } catch (error) {
            // Handle network errors or other issues
            console.error('Error sending answers to backend', error);
          }
    
    };


  return(
    <section id="about">
      <div id="introduction" className="about-inner">
        <div className="typeit">
          <TypeIt options={{
            strings: [name, subtitle],
            speed: 100,
            loop: true,
            loopDelay: [2500],
            waitUntilVisible: true,
          }}/>
        </div>
          <p>{description}</p>
      </div>
      <div className="arrow right" onClick={handleNextClick}></div>
    </section>
  );
}

export default CoverTwo;