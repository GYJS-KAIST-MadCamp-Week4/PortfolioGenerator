import React , {useState, useEffect} from 'react';
import '../../static/CreateCover.css';
import { useNavigate } from 'react-router-dom';
import { useSignal } from '../../context/SignalContext';
import {useData} from '../../context/DataContext'
import global from '../global.js';

const CreateCover = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const { signal, setSignal } = useSignal();
    const {userData, setUserData} = useData();

    const handleBackClick = () => {
        navigate('/create');
    }
    const handleNextClick = async() => {
        await handleCover()
        navigate('/abouttemplate');
    }
    // console.log("This is the userData")
    // console.log(userData)

    const handleCover = async () => {
      const apiUrl = 'http://' + global.address + ':4000/savecover'; // Replace with your backend API endpoint
        // const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
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
              userID: "jjpark57@hotmail.com",
              signal: signal,
              title: name,
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
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };

    const handlePreview = ()=> {

      if(signal[0][0] == 1){
        navigate('/coverone', {state: {name, subtitle, description, selectedFile}});

      }
      else {
        navigate('/coverone', {state: {name, subtitle, description, selectedFile}});

      }

    }
    
    return (
        <div className="create-container">
            <header className="create-header">
                <div className="preview-icon" onClick={handlePreview}></div>
                <div className="progress-bar"></div>
            </header>
            <main className="create-main">
                <div className="arrow left" onClick={handleBackClick}></div>
                <div className="content-container">
                    <div className="photo-container"></div>
                    <div className="form-container">
                        <label className="input-label">Name</label>
                        <input type="text" className="name-input" placeholder="이름을 입력해주세요"  value={name} onChange={handleInputChange}/>
                        
                        <label className="input-label">Subtitle</label>
                        <input type="text" className="-input" placeholder="소제목을 입력해주세요" value={subtitle} onChange={handleSubtitleChange}/>
                        
                        <label className="input-label">Image</label>
                        <div className="image-upload-wrapper">
                            <input type="file" className="image-upload-input" onChange={handleFileChange}/>
                        </div>

                        <label className="input-label">Introduction</label>
                        <textarea className="introduction-input" placeholder="소개글을 입력해주세요" value={description} onChange={handleDescription}></textarea>
                    </div>
                </div>
                <div className="arrow right" onClick={handleNextClick}></div>
            </main>
            
        </div>
    );
};

export default CreateCover;