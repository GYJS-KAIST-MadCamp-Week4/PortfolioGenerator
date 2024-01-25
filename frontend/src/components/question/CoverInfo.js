import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import CoverOne from '../cover/CoverOne';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

function CoverInfo({status, signal}) {
    const navigate = useNavigate();
    console.log(signal)

    // We are going to send this data to the backend

    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const {userData, setUserData} = useData()

    const handleCover = async () => {
      const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
      console.log(signal);
      console.log("We are inside the cover function");
    
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
            userID: userData[1],
            signal: signal,
            name: name,
            subtitle: subtitle,
            description: description,
            coverimage: base64Image,
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
    <div className='cover-template-wrapper' style={{marginTop: '400px', height: 'max-content', overflowY: 'auto'}}>
            <div className='question-title' style={{fontWeight: 'normal'}}>Name</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={name} onChange={handleInputChange} placeholder="Whats your name..." />
            <div className='question-subtitle' style={{fontWeight: 'normal'}}>Subtitle</div>
            <input className='question-subtitleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={subtitle} onChange={handleSubtitleChange} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Image</div>
            <input className='question-imageinput' type="file" onChange={handleFileChange} style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', textAlign: 'center', marginBottom: '50px', paddingLeft: '20px'}}  placeholder="Upload Background image" />
            <div className='question-title' style={{fontWeight: 'normal'}}>Introduction</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={description} onChange={handleDescription} placeholder="Describe yourself..." />
            
            <button onClick={handleModalButtonClick}>Open Modal</button>
            <button onClick={handleCover}>Next Step</button>

    </div>
  </>
  )
}

export default CoverInfo
