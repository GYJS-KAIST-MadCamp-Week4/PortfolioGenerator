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
    const {userData} = useData();

    const handleBackClick = () => {
        navigate('/create');
    }
    const handleNextClick = async() => {
        await handleCover()
        navigate('/abouttemplate');
    }
    // console.log("This is the userData")
    // console.log(userData)
    console.log("This is the userData ")
    console.log(userData.email)

    const handleCover = async () => {
      // const apiUrl = 'http://' + global.address + ':4000/savecover'; // Replace with your backend API endpoint
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
              userID: userData.email,
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
        navigate('/covertwo', {state: {name, subtitle, description, selectedFile}});

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
              <form className="form-cover">
                <div className="form-group-cover">
                  <label htmlFor='name'>Name</label>
                  <input type="text" id="name" placeholder="이름을 입력해주세요"  value={name} onChange={handleInputChange} plavehodler="이름을 입력해주세요"/>
                </div>

                <div className="form-group-cover">
                    <label htmlFor='image'>Image</label>
                    <input type="file" id="image" onChange={handleFileChange}/>
                </div>
                  
                <div className="form-group-cover">
                  <label htmlFor="subtitle">Subtitle</label>
                  <input type="text" id="subtitle" value={subtitle} onChange={handleSubtitleChange} placeholder="소제목을 입력해주세요" />
                </div>

                <div className="form-group-cover">
                  <label htmlFor="introduction">Introduction</label>
                  <textarea 
                    id="introduction" 
                    value={description} 
                    onChange={handleDescription}
                    placeholder="소개글을 입력해주세요" >
                  </textarea>
                </div>
          </form>
          <div className="arrow right" onClick={handleNextClick}></div>
          </div>
      </main>
  </div>

        
    );
};

export default CreateCover;