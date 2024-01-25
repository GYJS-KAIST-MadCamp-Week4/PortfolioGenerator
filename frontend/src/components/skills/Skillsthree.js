import React from 'react'
import '../../static/skillsthree.scss'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import global from '../global.js';
import { Fade } from "react-awesome-reveal";
import { useData } from '../../context/DataContext.js';
import { useSignal } from '../../context/SignalContext.js';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
function Skillsthree() {

    const location = useLocation();
    const navigate = useNavigate();
    const {userData, setUserData} = useData()
    const [color, setColor] = useColor("#561ecb");
    const {   frontskills, backskills, others } = location.state;
    const {signal} = useSignal()
    const apiUrl = 'http://' + global.address + ':4000/saveskills'; // Replace with your backend API endpoint
    const handleNextClick = async() => {
            await handleSkills()
            navigate('/projecttemplate');
        }
        console.log(others)
        console.log("This is the userData")
        console.log(userData.email)

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
    <div className='skills-container-three' style={{backgroundColor: color.hex}}>
                    <Fade duration={2500}>
        <h2>Main Skills</h2>
        <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Frontend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            frontskills.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Backend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            backskills.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Others</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            others.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                    <div className="arrow right" onClick={handleNextClick}></div>

                </div>
                <div style={{position: 'absolute', left: '80%', top: '50%'}}>
                  <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />

                </div>
                </Fade>

    </div>
  )
}

export default Skillsthree
