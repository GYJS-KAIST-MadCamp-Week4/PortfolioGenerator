import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useData } from '../../context/DataContext';
function Aboutinfo({status, signal}) {
    const navigate = useNavigate();

    // We are going to send this data to the backend

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEducation] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const {userData, setUserData} = useData()

    const handleModalButtonClick = () => {

        if (status === 1) {
          // Navigate to CoverOne component
          navigate('/aboutmeone', { state: { name,date, address ,email ,education, selectedFile } });
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
      const handleAddress = (event) => {
        setAddress(event.target.value);
      };
    // Event handler to update the input value
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
        // Event handler to update the input value
    const handleEducation = (event) => {
            setEducation(event.target.value);
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

      // Check if a file is selected
      if (file) {
        const reader = new FileReader();
    
        reader.onloadend = () => {
          // When reading is complete, set the result (base64 string) in state
          const base64String = reader.result;
          setSelectedFile(base64String);
        };
    
        // Read the contents of the file as a data URL (base64 encoded)
        reader.readAsDataURL(file);
      } else {
        // Handle the case where no file is selected
        setSelectedFile(null);
      }
    };

    const handleAbout = async () => {
      const apiUrl = 'http://192.249.29.120:4000/saveabout'; // Replace with your backend API endpoint

      const requestData = {
        userID: userData[1],
        signal: signal,
        date: date,
        address: address,
        email: email,
        education: education,
        // selectedFile: selectedFile
      };
  
      console.log(selectedFile)
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
            <div className='question-title' style={{fontWeight: 'normal'}}>Name</div>
            <input className='question-titleinput' type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '50px', borderRadius: '20px', paddingLeft: '20px'}} value={name} onChange={handleInputChange} placeholder="Whats your name..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Image</div>
            <input className='question-imageinput' type="file" onChange={handleFileChange} style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', textAlign: 'center', marginBottom: '50px', paddingLeft: '20px'}}  placeholder="Upload Background image" />
            <div>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Address</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={address} onChange={handleAddress} placeholder="Describe yourself..." />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Email</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={email} onChange={handleEmail} placeholder="Enter your email" />
            <div style={{fontSize: '28pt', marginTop: '60px', fontWeight: 'normal'}}>Education</div>
            <input  type="text" style={{border: '1px solid #BEBEBE', width: '80%', height: '150px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px'}} value={education} onChange={handleEducation} placeholder="Enter your education..." />
            
            <button onClick={handleModalButtonClick}>Open Modal</button>
            <button onClick={handleAbout}>Next Step</button>

    </div>
  </>
  )
}

export default Aboutinfo
