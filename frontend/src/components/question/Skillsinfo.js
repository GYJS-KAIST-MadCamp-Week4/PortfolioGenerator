import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Skillsinfo({status}) {
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
          navigate('/skills1', { state: { frontend,backend, vc ,deployment ,certification, others } });
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
    const handleCertification = (event) => {
      setCertification(event.target.value);
    };
    const handleOthers = (event) => {
        setOthers(event.target.value);
      };
    
  
  return (
    <>
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Frontend</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={frontend} onChange={handleFrontend} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Backend</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={backend} onChange={handleBackend} placeholder="Describe yourself..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Version Control</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={vc} onChange={handleVc} placeholder="Enter your email" />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Deployment</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={deployment} onChange={handleDeployment} placeholder="Enter your education..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Certification</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={certification} onChange={handleCertification} placeholder="Enter your education..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Others</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={others} onChange={handleOthers} placeholder="Enter your education..." />
            <button onClick={handleModalButtonClick}>Open Modal</button>

    </div>
  </>
  )
}

export default Skillsinfo
