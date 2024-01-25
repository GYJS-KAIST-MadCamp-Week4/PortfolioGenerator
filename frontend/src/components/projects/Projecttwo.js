import React from 'react'
import '../../static/projecttwo.scss'
import PreviewProjectBox from './PreviewProjectBox'
import global from '../global.js';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext.js';
import { useSignal } from '../../context/SignalContext.js';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
function Projecttwo() {
    const location = useLocation();
    const navigate = useNavigate();
    const {userData} = useData()
    const {signal} = useSignal();
    const {  projects} = location.state;
    const [color, setColor] = useColor("#561ecb");

    console.log(projects)

    const handleNextClick = async() => {
        await handleProject()
        navigate('/result');
    }
    const apiUrl = 'http://' + global.address + ':4000/saveproject'; // Replace with your backend API endpoint

    const handleProject = async() => {
        // const apiUrl = 'http://192.249.29.120:4000/saveproject'; // Replace with your backend API endpoint
  
        console.log("We are inside the project function")

        
            const requestData = {
              signal: signal,
              userID: userData.email,
              projects: projects,
              projectcolor: color

            };

            try {
              const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
              });
              console.log(response)
              
        
            } catch (error) {
              // Handle network errors or other issues
              console.error('Error sending answers to backend', error);
            }
        }  

  return (
<div className='project-container-two' style={{backgroundColor: `${color.hex}`, height: '100vh'}}>
        <h2>Projects</h2>
         <div className='project-layout' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'column', width: '70%', gap: '100px', flexWrap: 'wrap' , alignContent: 'flex-start'}}>
            {
                projects.map((e,index) => (
                    <PreviewProjectBox {...e}/>
                ))
            }
        </div>
        <div className="arrow right" onClick={handleNextClick}></div>
        <div style={{position: 'absolute', left: '78%', top: '50%'}}>
                  <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />

                </div>
    </div>
  )
}

export default Projecttwo
