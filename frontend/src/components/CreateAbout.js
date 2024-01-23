import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import calendarIcon from '../img/calendar_icon.png';
import 'react-datepicker/dist/react-datepicker.css';
import './static/CreateAbout.css';

const CreateAbout = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        address: '',
        email: '',
        education: '',
        image: null
    });

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
      

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setFormData({ ...formData, birthDate: date });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
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
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="birthDate">Birth</label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        customInput={<CustomInput />}
                    />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" id="image" name="image" onChange={handleImageChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="education">Education</label>
                        <input type="text" id="education" name="education" value={formData.education} onChange={handleInputChange} />
                    </div>
                </form>
                <div className="arrow right-about"></div>
            </main>
        </div>
    );
};

export default CreateAbout;