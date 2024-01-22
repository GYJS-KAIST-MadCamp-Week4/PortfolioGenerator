import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Projectinfo({status}) {
    const navigate = useNavigate();

    // We are going to send this data to the backend
    const [description, setDescription] = useState('')
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
      const handleDescription = (event) => {
        setDescription(event.target.value);
      };
      const handleGithub = (event) => {
        setGithub(event.target.value);
      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    
  
  return (
    <>
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Github Link</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={github} onChange={handleGithub} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Project Image</div>
            <input className='question-imageinput' type="file" onChange={handleFileChange} style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', textAlign: 'center', marginBottom: '50px', paddingLeft: '20px'}}  placeholder="Upload Background image" />
            <div className='question-title' style={{fontWeight: 'normal'}}>Introduction</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={description} onChange={handleDescription} placeholder="Describe yourself..." />
            
            <button>Open Modal</button>

    </div>
  </>
  )
}

export default Projectinfo
