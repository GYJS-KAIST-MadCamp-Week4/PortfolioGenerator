import React, {useState, useEffect} from 'react'
import '../../static/question.scss'
import CoverTemplate from './CoverTemplate';
import '../../static/covertemplate.scss'

function Question() {

    const [status, setStatus] = useState(0)

    const handleClick = ()=> {
        setStatus(status + 1);
    }
    console.log(status)
  return (
    <div className='question-container' style={{ overflowY: 'auto' }}>
         <div className='question-image'></div>
        <CoverTemplate />
    </div>
  )
}

export default Question
