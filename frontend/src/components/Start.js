import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Start.css'; 

const Start = () => {
  const [showInitialText, setShowInitialText] = useState(true);
  const [showGradientBackground, setShowGradientBackground] = useState(false); // 상태 변수 정의
  const [showFinalText, setShowFinalText] = useState(false);
  const [showClickToEnter, setShowClickToEnter] = useState(false);
  const [typedText, setTypedText] = useState('');
  const text = "HAEJWO;";

  useEffect(() => {
    if (showFinalText) {
      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          setTypedText((typedText) => {
            const nextIndex = typedText.length;
            if (nextIndex < text.length) {
              return typedText + text[nextIndex];
            } else {
              clearInterval(intervalId);
              setShowClickToEnter(true);
              return typedText;
            }
          });
        }, 550);
        
        return () => clearInterval(intervalId);
      }, 300); 
  
      return () => clearTimeout(timeoutId);
    }
  }, [showFinalText, text]);
  
  useEffect(() => {
    const initialTextTimer = setTimeout(() => {
      setShowInitialText(false);
      setShowGradientBackground(true); 
    }, 1000); 

    const gradientTimer = setTimeout(() => {
      setShowFinalText(true); 
    }, 2000); 

    return () => {
      clearTimeout(initialTextTimer);
      clearTimeout(gradientTimer);
    };
  }, []);

  return (
    <div className="start-page">
      {showInitialText && <div className="initial-text">개발자 포트폴리오 사이트 누가 대신 만들어줘!</div>}
      <div className={`background-image ${!showInitialText ? 'fade' : ''}`} />
      {showFinalText && showGradientBackground &&
        <div className={`final-text ${showFinalText ? 'show' : ''}`}>
          {typedText}
          <span className='cursor'/>
        </div>}
      {showClickToEnter && <Link to="/login"><div className="click-to-enter">click to enter</div></Link> }
    </div>
  );
};

export default Start;
