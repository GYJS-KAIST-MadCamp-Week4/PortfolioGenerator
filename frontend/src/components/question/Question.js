import React, {useState, useEffect} from 'react'
import '../../static/question.scss'
import Skillstwo from '../skills/Skillstwo';
import CoverTemplate from './CoverTemplate';
import coverOneImage from '../../assets/coverone.png';
import '../../static/covertemplate.scss'

function Question() {

    const [status, setStatus] = useState(0)

    const handleClick = ()=> {
        setStatus(status + 1);
    }
    console.log(status)
  return (
    <div className='question-container'>
        <div className='question-image'></div>
        {/* <div className='cover-template-wrapper'>
            <div className='question-title'>Choose your template</div>
            <div className='question-subtitle'>마음에 드는 템플릿을 선택해주세요</div>
            <div className='question-box' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '100%', gap: '50px', flexWrap: 'wrap' }}>
                    <div className='answerone' style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                        <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Cover</p>
                    </div>
                    <div className='answertwo' style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>About Me</p></div>
                    <div className='answerthree' style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Skills</p></div>
                    {/* <button onClick={handleClick} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '0px'}}><p style={{color: 'white'}}>Next</p></button> */}

            {/* </div> */}
        {/* </div> */} 
        <CoverTemplate />
    </div>
  )
}

export default Question
