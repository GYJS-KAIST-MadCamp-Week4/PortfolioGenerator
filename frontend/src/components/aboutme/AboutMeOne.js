import React from 'react'
import { Fade } from "react-awesome-reveal";
import '../../static/aboutmeone.scss'
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import global from '../global.js';

function AboutMeOne() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userID, signal, name, email, education, address, selectedFile, date } = location.state;

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
        
              // Now you can use base64Image in the rest of your logic
              const requestData = {
                userID: "jjpark57@hotmail.com",
                signal: signal,
                name: name,
                emailAddress: email,
                address: address,
                education: education,
                aboutfile: base64Image,
                date:date
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
    <div className='about'>
        <Fade  duration={3500}>
            <div className='aboutme-container'>
                <div className='title'>About Me</div>    
                <div className='profile' style={backgroundImageStyle}></div>
                <div className='Name'><div className='box1'>< Person2Icon /> </div > <div className='box2'><span>이름</span></div><div className='box3'>{name}</div></div>
                <div className='Birth'><div className='box1'>< CakeIcon /> </div > <div className='box2'><span>생일</span></div><div className='box3'>{date}</div></div>
                <div className='School'> <div className='box1'><SchoolIcon /></div> <div className='box2'><span>학교</span></div><div className='box3'>{education}</div></div>
                <div className='Email'> <div className='box1'><EmailIcon /></div><div className='box2'>이메일</div><div className='box3'>{email}</div> </div>
                <div className='Github'><div className='box1'><GitHubIcon /></div><div className='box2'>주소지</div> <div className='box3'><a href="https://github.com/jjpark51" style={{color: 'whitesmoke'}}>{address}</a></div> </div>
            </div>   
            <div className="arrow right" onClick={handleNextClick}></div>

        </Fade> 
    </div>
  )
}

export default AboutMeOne
