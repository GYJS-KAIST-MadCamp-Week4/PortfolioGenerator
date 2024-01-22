import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import CoverOne from '../cover/CoverOne';
import { useNavigate } from 'react-router-dom';


function CoverInfo({status}) {
    const navigate = useNavigate();

    // We are going to send this data to the backend

    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalButtonClick = () => {

        if (status === 1) {
          // Navigate to CoverOne component
          navigate('/coverone', { state: { name,subtitle, description, selectedFile } });
        } else if (status === 2) {
          // Navigate to CoverTwo component
          navigate('/covertwo');
        }
        // You can add more conditions for other statuses if needed
      };
  
    // Event handler to update the input value
    const handleInputChange = (event) => {
        setName(event.target.value);
      };
      const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
      };
    // Event handler to update the input value
    const handleDescription = (event) => {
      setDescription(event.target.value);
    };
    const handleUpload = () => {
        // Perform upload logic here, e.g., using an API or FormData
    
        // For demonstration purposes, log the file details
        if (selectedFile) {
          console.log('Selected File:', selectedFile);
        } else {
          console.log('No file selected.');
        }
      };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
  return (
    <>
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Name</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={name} onChange={handleInputChange} placeholder="Whats your name..." />
            <div className='question-subtitle' style={{fontWeight: 'normal'}}>Subtitle</div>
            <input className='question-subtitleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={subtitle} onChange={handleSubtitleChange} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Image</div>
            <input className='question-imageinput' type="file" onChange={handleFileChange} style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', textAlign: 'center', marginBottom: '50px', paddingLeft: '20px'}}  placeholder="Upload Background image" />
            <div className='question-title' style={{fontWeight: 'normal'}}>Introduction</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={description} onChange={handleDescription} placeholder="Describe yourself..." />
            
            <button onClick={handleModalButtonClick}>Open Modal</button>

    </div>
  </>
  )
}

export default CoverInfo
