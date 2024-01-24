import React, {useState, useEffect} from 'react'
import '../../static/covertemplate.scss'
import aboutmeone from '../../assets/aboutmeone.png'
import aboutmetwo from '../../assets/aboutmetwo.png'
import { useNavigate } from 'react-router-dom';
import Aboutinfo from './Aboutinfo'
import { useSignal } from '../../context/SignalContext';

function AboutTemplate({ location }) {

    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { signal, setSignal } = useSignal();

    console.log(signal)

    const handleNextClick = () => {
        navigate('/skillstemplate');
    }
    const [status, setStatus] = useState(0)
    const handleInfo = () => {
        setStatus(1)
    }  

    const handleAnswerClick = (answer, index) => {
        // Update the signal array using useState\
        setSignal((prevSignal) => {
            const newSignal = prevSignal.map((row, i) =>
              i === 1 ? row.map((_, j) => (j === index ? 1 : 0)) : row
            );
            return newSignal;
          });

        setSelectedAnswer(answer);
      };
    
    

  return (
<>
<div className='question-container' style={{marginTop: '-240px'}}>
        <div className='question-image'></div>
        <div className='cover-template-wrapper'>
            <div className='question-title'>Choose your template</div>
            <div className='question-subtitle'>마음에 드는 템플릿을 선택해주세요</div>
            <div className='question-box' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '100%', gap: '50px', flexWrap: 'wrap' }}>
                    <div className={`answerone ${selectedAnswer === 'answerone' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerone',0)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                        <div className='display-one' style={{backgroundImage: `url(${aboutmeone})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Cover</p>
                    </div>
                    <div className={`answertwo ${selectedAnswer === 'answertwo' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answertwo',1)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${aboutmetwo})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>About Me</p></div>
                    <div className={`answerthree ${selectedAnswer === 'answerthree' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerthree',2)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${aboutmetwo})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Skills</p></div>
                    <button onClick={handleInfo} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>Next</p></button>
                    <button onClick={handleNextClick} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>About Me</p></button>

            </div>

        </div>
        {status == 1 && <Aboutinfo status={status} signal={signal}/> }
        </div>

        </>
  )
}

export default AboutTemplate
