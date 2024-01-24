import React from 'react'
import PreviewProjectCard from './PreviewProjectCard'
import global from '../global.js';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Projectone() {

    const location = useLocation();
    const navigate = useNavigate();
    const {signal, userID, projects} = location.state;
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
              userID: "jjpark57@hotmail.com",
              projects: projects
    
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
<div className='project-container-one' >
        <h2>Projects</h2>
         <div className='project-layout' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '80%', gap: '30px', flexWrap: 'wrap' , alignContent: 'flex-start'}}>
            {
                projects.map((e, index) => (
                    <PreviewProjectCard key={index} {...e} style={{ flex: '0 0 calc(33.33% - 30px)' , width: '100%'}}/>
                ))
            }
        </div>
        <div className="arrow right" onClick={handleNextClick}></div>
    </div>
  )
}

export default Projectone
