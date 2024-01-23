import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Layer from '../skills/Layer';

function Skillsinfo({status, signal}) {


  const skilllist = [
    {
        name: "Frontend",
        types: [
            "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
            "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"

        ]
    },
    {
        name: "Backend",
        types: [
            "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
            "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
            "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
        ]
    }
]

    const navigate = useNavigate();

    // We are going to send this data to the backend

    const [frontend, setFrontend] = useState('');
    const [backend, setBackend] = useState('')
    const [vc, setVc] = useState('')
    const [deployment, setDeployment] = useState('')
    const [certification, setCertification] = useState('');
    const [others, setOthers] = useState('');

    const handleModalButtonClick = () => {

        if (status === 1) {
          // Navigate to CoverOne component
          navigate('/skills1', { state: { frontend,backend, vc ,deployment , others } });
        } else if (status === 2) {
          // Navigate to CoverTwo component
          navigate('/covertwo');
        }
        // You can add more conditions for other statuses if needed
      };
  
    // Event handler to update the input value
    const handleFrontend = (event) => {
        setFrontend(event.target.value);
      };
      const handleBackend = (event) => {
        setBackend(event.target.value);
      };
    // Event handler to update the input value
    const handleVc = (event) => {
      setVc(event.target.value);
    };
        // Event handler to update the input value
    const handleDeployment = (event) => {
            setDeployment(event.target.value);
          };

    const handleOthers = (event) => {
        setOthers(event.target.value);
      };
      const handleSkills = async () => {
        const apiUrl = 'http://192.249.29.120:4000/saveskills'; // Replace with your backend API endpoint
  
        const requestData = {
          userID: "jjpark57@hotmail.com",
          signal: signal,
          frontend: frontend,
          backend: backend,
          vc: vc,
          deployment: deployment,
          others: others,
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
    <>
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Frontend</div>
            {skilllist && skilllist[0]?.types?.map(url => (
                <Layer key={url} imageUrl={url} />
              ))}
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={frontend} onChange={handleFrontend} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Backend</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={backend} onChange={handleBackend} placeholder="Describe yourself..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Version Control</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={vc} onChange={handleVc} placeholder="Enter your email" />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Deployment</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={deployment} onChange={handleDeployment} placeholder="Enter your education..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Others</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={others} onChange={handleOthers} placeholder="Enter your education..." />
            <button onClick={handleModalButtonClick}>Open Modal</button>
            <button onClick={handleSkills}>Send Skills</button>


    </div>
  </>
  )
}

export default Skillsinfo
