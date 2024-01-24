import React, { useState } from 'react';
import './static/CreateCover.css';

const CreateCover = () => {

    const [formData, setFormData] = useState({
        name: '',
        image: null,
        subtitle: '',
        introduction: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <div className="create-container">
            <header className="create-header">
                <div className="preview-icon"></div>
                <div className="progress-bar"></div>
            </header>
            <main className="create-main">
                <div className="arrow left"></div>
                <div className="content-container">
                    <div className="photo-container"></div>
                    <form className="form-cover">
                        <div className="form-group-cover">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="이름을 입력해주세요" />
                        </div>
                        <div className="form-group-cover">
                            <label htmlFor="image">Image</label>
                            <input type="file" id="image" name="image" onChange={handleImageChange} />
                        </div>
                        <div className="form-group-cover">
                            <label htmlFor="subtitle">Education</label>
                            <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleInputChange} placeholder="소제목을 입력해주세요" />
                        </div>
                        <div className="form-group-cover">
                            <label htmlFor="introduction">Introduction</label>
                            <textarea
                              id="introduction"
                              name="introduction"
                              value={formData.introduction}
                              onChange={handleInputChange}
                              placeholder="소개글을 입력해주세요"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="arrow right"></div>
            </main>
        </div>
    );
};

export default CreateCover;
