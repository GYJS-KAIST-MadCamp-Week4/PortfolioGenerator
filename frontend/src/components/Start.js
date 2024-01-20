import React, { useState, useEffect } from 'react';
import './Start.css'; 

const Start = () => {
  const [showInitialText, setShowInitialText] = useState(true);
  const [showGradientBackground, setShowGradientBackground] = useState(false); // 상태 변수 정의
  const [showFinalText, setShowFinalText] = useState(false);
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
              return typedText;
            }
          });
        }, 550);
        
        return () => clearInterval(intervalId);
      }, 1000); 
  
      return () => clearTimeout(timeoutId);
    }
  }, [showFinalText, text]);
  
  useEffect(() => {
    const initialTextTimer = setTimeout(() => {
      setShowInitialText(false);
      setShowGradientBackground(true); // 여기서 그라데이션 배경을 활성화
    }, 1000); 

    const gradientTimer = setTimeout(() => {
      setShowFinalText(true); // 여기서 최종 텍스트를 활성화
    }, 2000); // 초기 이미지가 흐려진 후 1초 뒤에 최종 텍스트가 나타남

    return () => {
      clearTimeout(initialTextTimer);
      clearTimeout(gradientTimer);
    };
  }, []);

  return (
    <div className="start-page">
      {showInitialText && <div className="initial-text">개발자 포트폴리오 사이트 누가 대신 만들어줘!</div>}
      <div className={`background-image ${showGradientBackground ? 'show-gradient' : ''} ${!showInitialText ? 'fade' : ''}`} />
      {showFinalText && 
        <div className={`final-text ${showFinalText ? 'show' : ''}`}>
          {typedText}
          <span className='cursor'/>
        </div>}
    </div>
  );
};

export default Start;
