import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Projectinfo({status, signal}) {
    const navigate = useNavigate();

    // We are going to send this data to the backend
    const [introduction, setIntroduction] = useState('')
    const [github, setGithub] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);


    // const handleModalButtonClick = () => {

    //     if (status === 1) {
    //       // Navigate to CoverOne component
    //       navigate('/projone', { state: { frontend,backend, vc ,deployment ,certification, others } });
    //     } else if (status === 2) {
    //       // Navigate to CoverTwo component
    //       navigate('/covertwo');
    //     }
    //     // You can add more conditions for other statuses if needed
    //   };
  
    // Event handler to update the input value
      const handleIntroduction = (event) => {
        setIntroduction(event.target.value);
      };
      const handleGithub = (event) => {
        setGithub(event.target.value);
      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
      const handleProject = async () => {
        const apiUrl = 'http://192.249.29.120:4000/saveproject'; // Replace with your backend API endpoint
  
        const requestData = {
          signal: signal,
          userID: 'jjpark57@hotmail.com',
          introduction: introduction,
          github: github,
        };
    
    
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
    <>
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Github Link</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={github} onChange={handleGithub} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Project Image</div>
            <input className='question-imageinput' type="file" onChange={handleFileChange} style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', textAlign: 'center', marginBottom: '50px', paddingLeft: '20px'}}  placeholder="Upload Background image" />
            <div className='question-title' style={{fontWeight: 'normal'}}>Introduction</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={introduction} onChange={handleIntroduction} placeholder="Describe yourself..." />
            
            <button>Open Modal</button>
            <button onClick={handleProject}>Next Step</button>

    </div>
  </>
  )
}

export default Projectinfo
