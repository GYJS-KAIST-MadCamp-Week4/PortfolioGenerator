import React, {useState} from 'react'
import '../../static/covertemplate.scss'
import coverOneImage from '../../assets/coverone.png';
import coverTwoImage from '../../assets/covertwo.png'
import CoverInfo from './CoverInfo';
import { useNavigate } from 'react-router-dom';
import { useSignal } from '../../context/SignalContext';


function CoverTemplate() {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const { signal, setSignal } = useSignal();

    // const handleNextClick = () => {
    //     navigate('/abouttemplate');
    // }
        const handleNextClick = () => {
        navigate('/create/cover');
    }
    const [status, setStatus] = useState(0)
    const handleInfo = () => {
        setStatus(1)
    }   
    const handleAnswerClick = (answer, index) => {
        // Update the signal array using useState\
        setSignal((prevSignal) => {
            const newSignal = prevSignal.map((row, i) =>
              i === 0 ? row.map((_, j) => (j === index ? 1 : 0)) : row
            );
            return newSignal;
          });

        setSelectedAnswer(answer);
      };
    

  return (
    <>
        <div className='cover-template-wrapper'  style={{marginTop: '-240px'}}>
            <div className="progress-bar-cover"></div>
            <div className='question-title' style={{fontSize: '24pt'}}>Choose your template</div>
            <div className='question-subtitle' style={{fontSize: '16pt'}}>마음에 드는 템플릿을 선택해주세요</div>
            
            <div className='question-box' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '100%', gap: '50px', flexWrap: 'wrap' }}>
                    <div className={`answerone ${selectedAnswer === 'answerone' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerone', 0)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                        <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Cover</p>
                    </div>
                    <div className={`answertwo ${selectedAnswer === 'answertwo' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answertwo', 1)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverTwoImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>About Me</p></div>
                    {/* <div className={`answerthree ${selectedAnswer === 'answerthree' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerthree', 2)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Skills</p></div> */}
                    {/* <div className="arrow right-about" style={{}} onClick={handleNextClick}></div> */}

                    {/* <button onClick={handleInfo} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>Next</p></button> */}

            </div>
            <div className="arrow right" onClick={handleNextClick} style={{position: 'absolute', right: '-10%'}}></div>


        </div>

        </>
  )
}

export default CoverTemplate
