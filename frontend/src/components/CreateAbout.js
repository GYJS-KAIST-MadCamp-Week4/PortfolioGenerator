import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
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
                <div className="arrow right-about"></div>
            </main>
        </div>
    );
};

export default CreateAbout;