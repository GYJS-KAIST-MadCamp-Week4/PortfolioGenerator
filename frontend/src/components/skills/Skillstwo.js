import React from 'react'
import { Fade } from "react-awesome-reveal";
import '../../static/skillstwo.scss'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import global from '../global.js';
import { useData } from '../../context/DataContext.js';
import { useSignal } from '../../context/SignalContext.js';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
function Skillstwo() {
        const location = useLocation();
        const navigate = useNavigate();
        const {userData, setUserData} = useData()
        const [color, setColor] = useColor("#561ecb");
        const { frontskills, backskills, others } = location.state;
        const {signal} = useSignal()
        const apiUrl = 'http://' + global.address + ':4000/saveskills'; // Replace with your backend API endpoint
        const handleNextClick = async() => {
                await handleSkills()
                navigate('/projecttemplate');
            }
        const handleSkills = async () => {
          // const apiUrl = 'http://192.249.29.120:4000/saveskills'; // Replace with your backend API endpoint
    
          const requestData = {
            userID: userData.email,
            signal: signal,
            frontend: frontskills,
            backend: backskills,
            others: others,
            skillcolor: color
            // selectedFile: selectedFile
          };
      
          // console.log(selectedFile)
          try {
      
      
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            });
            
      
          } catch (error) {
            // Handle network errors or other issues
            console.error('Error sending answers to backend', error);
          }
      
        };

        return (
                <div className='skill-section' style={{height: '100vh', backgroundColor: color.hex}}>
        
                    <Fade duration={3500}>
        
                            <center><div style={{color: 'black', justifyContent: 'center'}}><span style={{fontSize: '24pt', fontWeight: 'bold'}}>Skills</span></div></center>
                    </Fade>
        
                    <Fade duration={3500}>
        
        
                <div className='skill-container' style={{height: '100vh'}} >
        
        
        
                    <div><div className='frontend'><center><span>Frontend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontskills.map(e => ( 
                                <div className='card-container'>
                                <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                            </div>
                              
                            </div>
                    ))}</div></div>
                    <div><div className='backend'><center><span>Backend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ backskills.map(e => ( 
                               <div className='card-container'>
                               <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                           </div>
                             
                           </div>
                    ))}</div></div>
                    <div>
                    <div className='backend'><center><span>Others</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ others.map(e => ( 
                               <div className='card-container'>
                               <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                           </div>
                             
                           </div>
                    ))}</div>
                    </div>
                    <div className="arrow right" onClick={handleNextClick}></div>
        
                    <div style={{position: 'absolute', left: '80%', top: '60%'}}>
                  <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />

                </div>
        
                </div>
        
                </Fade>
            </div>
          )
}

export default Skillstwo
