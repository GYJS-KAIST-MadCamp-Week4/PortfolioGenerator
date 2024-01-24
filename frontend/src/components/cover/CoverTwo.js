import React, { useEffect } from 'react';
import TypeIt from "typeit-react";
import '../../static/CoverTwo.scss'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CoverTwo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name,signal, subtitle, description, selectedFile } = location.state;

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
  const handleNextClick = async()=> {
    await handleCover()
    navigate('/abouttemplate');
  }
  const handleCover = async () => {
    const apiUrl = 'http://' + global.address + ':4000/savecover'; // Replace with your backend API endpoint
      // const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
      console.log(signal);
      console.log("We are inside the cover function");
    
      console.log("Selected Image is " + selectedFile);
      // Convert selected file to base64
      let base64Image = null;
    
      if (selectedFile) {
        console.log("There is a selectedFile");
        const reader = new FileReader();
        console.log(reader);
    
        reader.onloadend = async () => {
          base64Image = reader.result.split(',')[1]; // Get base64 portion of the result
          console.log(base64Image);
    
          // Now you can use base64Image in the rest of your logic
          const requestData = {
            userID: "jjpark57@hotmail.com",
            signal: signal,
            title: name,
            subtitle: subtitle,
            description: description,
            coverimage: base64Image,
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
    
        reader.readAsDataURL(selectedFile);
        console.log("We transformed to base64");
      } else {
        console.log("Did not select file");
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