import React from 'react'
import NavbarOne from './NavbarOne'
import '../../static/CoverOne.scss'
import { Fade } from "react-awesome-reveal";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSignal } from '../../context/SignalContext';
import global from '../global.js';

function CoverOne() {
  // This is how we pass data between components
  const location = useLocation();
  const navigate = useNavigate();

  const { name, subtitle, description, selectedFile } = location.state;
  const { signal, setSignal } = useSignal();

  const backgroundImageStyle = selectedFile
  ? { backgroundImage: `url(${URL.createObjectURL(selectedFile)})`}
  : {};

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


  return (
    // This is the section where the user can select the background image
      <div className='tiger' style={backgroundImageStyle}>

          <Fade duration={3500}>

      {/* This is the Name Section */}
      <div className='text-container'>
        <h1>- <span>{name}</span> -<br /> </h1>
        {/* This is the portfolio intro section */}
        <h2>{subtitle} </h2>
        <h3>____</h3>
        {/* This is the description section */}
        <div className='describe-me'> {description} </div>
        <div className="arrow right" onClick={handleNextClick}></div>

      </div>

        </Fade>

    </div>
  )
}

export default CoverOne
