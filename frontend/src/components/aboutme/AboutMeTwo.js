import React from 'react';
import { Fade } from "react-awesome-reveal";
import '../../static/aboutmetwo.scss';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import global from '../global.js';
import { useSignal } from '../../context/SignalContext.js';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
function AboutMeTwo() {
    const location = useLocation();
    const navigate = useNavigate();
    const { address, email, education, name, date, } = location.state;
    const {userData, setUserData} = useData()
    const {signal} = useSignal()
    const [color, setColor] = useColor("#561ecb");

    console.log(date);

    const handleAbout = async () => {
        // const apiUrl = 'http://' + global.address + ':4000/saveabout'; // Replace with your backend API endpoint
          const apiUrl = 'http://192.249.29.120:4000/saveabout'; // Replace with your backend API endpoint
          
              console.log(userData.email)
              // Now you can use base64Image in the rest of your logic
              const requestData = {
                userID: userData.email,
                signal: signal,
                name: name,
                emailAddress: email,
                education: education,
                date: date,
                address: address,
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

        const handleNextClick = async()=> {
            await handleAbout()
            navigate('/skillstemplate');
          }
    return (
        <Fade>
        <div className='about-me-container' style={{backgroundColor: color.hex}}>
            <div className='about-me-header'>ABOUT ME</div>

            <div className='about-me-sections'>
            <div className='personal-info'>
                <div className='info-input'>
                    <div className='info-item'>< Person2Icon />이름</div>
                    <div className='info-item-input'>{name}</div>
                </div>
                <div className='info-input'>
                    <div className='info-item'>< CakeIcon />생년월일</div>
                    <div className='info-item-input'>{date}</div>
                </div> 
                <div className='info-input'>
                    <div className='info-item'>< EmailIcon />이메일</div>
                    <div className='info-item-input'>{email}</div>
                </div>
            </div>
            <div className='education-address'>
                <div className='info-input'>
                    <div className='info-item'>< SchoolIcon />학력</div>
                    <div className='info-item-input'>{education}</div>
                </div>
                <div className='info-input'>
                    <div className='info-item'>< HomeIcon />주소지</div>
                    <div className='info-item-input'>{address}</div>
                </div>
            </div>
            </div>
            <div className="arrow right" onClick={handleNextClick}></div>
        </div>
        <div style={{position: 'absolute', left: '10%', top: '50%', }}>
                  <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />

                </div>
        </Fade>
    );
}

export default AboutMeTwo;
