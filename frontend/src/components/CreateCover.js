import React from 'react';
import './static/CreateCover.css';

const CreateCover = () => {
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
                    <div className="form-container">
                        <label className="input-label">Name</label>
                        <input type="text" className="name-input" placeholder="이름을 입력해주세요" />
                        
                        <label className="input-label">Subtitle</label>
                        <input type="text" className="-input" placeholder="소제목을 입력해주세요" />
                        
                        <label className="input-label">Image</label>
                        <div className="image-upload-wrapper">
                            <input type="file" className="image-upload-input" />
                        </div>

                        <label className="input-label">Introduction</label>
                        <textarea className="introduction-input" placeholder="소개글을 입력해주세요"></textarea>
                    </div>
                </div>
                <div className="arrow right"></div>
            </main>
        </div>
    );
};

export default CreateCover;
