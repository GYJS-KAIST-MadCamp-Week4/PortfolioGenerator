import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import calendarIcon from '../../img/calendar_icon.png';
import 'react-datepicker/dist/react-datepicker.css';
import '../../static/CreateAbout.css';
import { useSignal } from '../../context/SignalContext';
import { useNavigate } from 'react-router-dom';

const CreateAbout = () => {
    const { signal, setSignal } = useSignal();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEducation] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);


    const CustomInput = ({ value, onClick }) => (
        <button 
          className="custom-input" 
          onClick={(e) => {
            e.preventDefault(); 
            e.stopPropagation(); 
            onClick(e); 
          }}
        >
          {value}
          <img src={calendarIcon} alt="calendar icon" className="calendar-icon" />
        </button>
    );
      
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
              userID: "jjpark57@hotmail.com",
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
            <div className="create-container-about">
                <header className="create-header-about">
                    <div className="preview-icon-about"></div>
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
                        <div className="form-group">
                        <label htmlFor="birthDate">Birth</label>
                        <DatePicker
                           selected={date} onChange={(date) => setDate(date)}
                            customInput={<CustomInput />}
                        />
                        </div>
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