import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import calendarIcon from '../../img/calendar_icon.png';
import 'react-datepicker/dist/react-datepicker.css';
import '../../static/CreateAbout.css';
import { useSignal } from '../../context/SignalContext';
import { useNavigate } from 'react-router-dom';
import {useData} from '../../context/DataContext'
import global from '../global.js';

const CreateAbout = () => {
    const { signal, setSignal } = useSignal();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEducation] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const {userData, setUserData} = useData();

    // console.log("This is the userData")
    // console.log(userData)

    // const CustomInput = ({ value, onClick }) => (
    //     <button 
    //       className="custom-input" 
    //       onClick={(e) => {
    //         e.preventDefault(); 
    //         e.stopPropagation(); 
    //         onClick(e); 
    //       }}
    //     >
    //       {value}
    //       <img src={calendarIcon} alt="calendar icon" className="calendar-icon" />
    //     </button>
    // );
      
    const handleNextClick = async() => {
        await handleAbout()
        navigate('/skillstemplate');
    }

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


          const apiUrl = 'http://' + global.address + ':4000/saveabout'; // Replace with your backend API endpoint
      
          const handleAbout = async () => {
            const apiUrl = 'http://' + global.address + ':4000/saveabout'; // Replace with your backend API endpoint
              // const apiUrl = 'http://192.249.29.120:4000/savecover'; // Replace with your backend API endpoint
              console.log(signal);
              console.log("We are inside the about function");
            
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
                    name: name,
                    address: address,
                    emailAddress: email,
                    education: education,
                    aboutfile: base64Image,
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
            const handleFileChange = (event) => {
              const file = event.target.files[0];
              setSelectedFile(file);
            };
            const handlePreview = ()=> {
              const userID = "jjpark57@hotmail.com"

              if(signal[1][0] == 1){
                navigate('/aboutmeone', {state: {userID, signal, name, address, email, education, selectedFile}});
        
              }
              else {
                navigate('/aboutmetwo', {state: {userID, signal, name, address, email, education, selectedFile}});

              }
  
        
            }

          return (
            <div className="create-container-about">
                <header className="create-header-about">
                    <div className="preview-icon-about" onClick={handlePreview}></div>
                    <div className="progress-bar-about"></div>
                </header>
                <main className="create-main">
                    <div className="arrow left-about"></div>
                    <div className="content-container-about">
                        <div className="photo-container-about"></div>
                    </div>
                    <form className="form-about">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} placeholder="이름을 입력해주세요"/>
                        </div>
                        {/* <div className="form-group"> */}
                        {/* <label htmlFor="birthDate">Birth</label>
                        <DatePicker
                           selected={date} onChange={(date) => setDate(date)}
                            customInput={<CustomInput />}
                        /> */} 
                        {/* </div> */}
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="file" id="image" name="image" onChange={handleFileChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleEmail} placeholder="이메일(연락처)을 입력해주세요" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" value={address} onChange={handleAddress} placeholder="주소지를 입력해주세요" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="education">Education</label>
                            <input type="text" id="education" name="education" value={education} onChange={handleEducation} placeholder="학력을 기입해주세요" />
                        </div>
                    </form>
                    <div className="arrow right-about" onClick={handleNextClick}></div>
                </main>
            </div>
        );
};

export default CreateAbout;