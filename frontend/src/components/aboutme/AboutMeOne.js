import React from 'react'
import { Fade } from "react-awesome-reveal";
import '../../static/aboutmeone.scss'
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext.js';
import { useSignal } from '../../context/SignalContext.js';
import global from '../global.js';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function AboutMeOne() {
  const location = useLocation();
  const navigate = useNavigate();
  const {userData, setUserData} = useData()
  const { userID, name, email, education, address, selectedFile, date } = location.state;
  const {signal} = useSignal()
  const [color, setColor] = useColor("#561ecb");

  const backgroundImageStyle = selectedFile
  ? { backgroundImage: `url(${URL.createObjectURL(selectedFile)})`}
  : {};
  const handleNextClick = async()=> {
    await handleAbout()
    navigate('/skillstemplate');
  }
      const apiUrl = 'http://' + global.address + ':4000/saveabout'; // Replace with your backend API endpoint
  
      const handleAbout = async () => {
        const apiUrl = 'http://' + global.address + ':4000/saveabout'; // Replace with your backend API endpoint
          // const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
          console.log(signal);
          console.log("We are inside the about function");
        
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
              console.log(userData.email)
        
              // Now you can use base64Image in the rest of your logic
              const requestData = {
                userID: userData.email,
                signal: signal,
                name: name,
                emailAddress: email,
                address: address,
                education: education,
                aboutfile: base64Image,
                date:date,
                aboutcolor: color
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
        console.log(color)

  return (
    <div className='about' style={{backgroundColor: color.hex}}>
        <Fade  duration={3500}>
            <div className='aboutme-container'>
              <div className='title'>About Me</div>
   
                <div className='profile' style={backgroundImageStyle}></div>
                <div className='Name'><div className='box1'>< Person2Icon /> </div > <div className='box2'><span>이름</span></div><div className='box3'>{name}</div></div>
                <div className='Birth'><div className='box1'>< CakeIcon /> </div > <div className='box2'><span>생일</span></div><div className='box3'>{date}</div></div>
                <div className='School'> <div className='box1'><SchoolIcon /></div> <div className='box2'><span>학교</span></div><div className='box3'>{education}</div></div>
                <div className='Email'> <div className='box1'><EmailIcon /></div><div className='box2'>이메일</div><div className='box3'>{email}</div> </div>
                <div className='Github'><div className='box1'><HomeIcon /></div><div className='box2'>주소지</div> <div className='box3'>{address}</div> </div>
                <div style={{position: 'absolute', left: '80%', top: '20%'}}>
                  <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />

                </div>

            </div>   
            <div className="arrow right" onClick={handleNextClick}></div>

        </Fade> 
    </div>
  )
}

export default AboutMeOne
