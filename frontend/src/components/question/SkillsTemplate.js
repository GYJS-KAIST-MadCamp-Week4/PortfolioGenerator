import React, {useState} from 'react'
import '../../static/covertemplate.scss'
import { useNavigate } from 'react-router-dom';
import skillsone from '../../assets/skillsone.png'
import skillstwo from '../../assets/skillstwo.png'
import skillsthree from '../../assets/skillsthree.png'
import { useSignal } from '../../context/SignalContext';

function SkillsTemplate() {

    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { signal, setSignal } = useSignal();
    console.log("Signal inside the skills template")
    console.log(signal)

    const handleNextClick = () => {
        navigate('/create/skills');
    }
    const [status, setStatus] = useState(0)

    const handleAnswerClick = (answer, index) => {
        // Update the signal array using useState\
        setSignal((prevSignal) => {
            const newSignal = prevSignal.map((row, i) =>
              i === 2 ? row.map((_, j) => (j === index ? 1 : 0)) : row
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
        <div className="progress-bar-about"></div>
            <div className='question-title' style={{fontSize: '24pt'}}>Choose your template</div>
            <div className='question-subtitle' style={{fontSize: '16pt'}}>마음에 드는 템플릿을 선택해주세요</div>
            <div className='question-box' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '100%', gap: '50px', flexWrap: 'wrap' }}>
                    <div className={`answerone ${selectedAnswer === 'answerone' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerone',0)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                        <div className='display-one' style={{backgroundImage: `url(${skillsone})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Cover</p>
                    </div>
                    <div className={`answertwo ${selectedAnswer === 'answertwo' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answertwo',1)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${skillstwo})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>About Me</p></div>
                    <div className={`answerthree ${selectedAnswer === 'answerthree' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerthree',2)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${skillsthree})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Skills</p></div>
                    {/* <button onClick={handleInfo} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>Next</p></button> */}
                    <button onClick={handleNextClick} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '-10px'}}><p style={{color: 'white'}}>Details</p></button>

            </div>

        </div>
        {/* {status == 1 && <Skillsinfo status={status} signal={signal}/> } */}
        </div>

        </>
  )
}

export default SkillsTemplate
