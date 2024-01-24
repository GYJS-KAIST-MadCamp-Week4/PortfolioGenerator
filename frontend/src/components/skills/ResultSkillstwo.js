import React from 'react'
import { Fade } from "react-awesome-reveal";
import CodeIcon from '@mui/icons-material/Code';
import {frontend} from '../../assets/frontend'
import Cards from './Cards';
import '../../static/skillstwo.scss'

function ResultSkillstwo({frontend, backend, others}) {
  return (
        <div className='skill-section' style={{height: '100vh'}}>

            <Fade duration={3500}>

                    <center><div style={{color: 'whitesmoke', justifyContent: 'center', fontSize: '40pt'}}><CodeIcon style={{fontSize:'40pt'}} /> <span>Skills</span></div></center>
                
            </Fade>

            <Fade duration={3500}>


        <div className='skill-container' style={{height: '100vh'}} >



            <div><div className='frontend'><center><span>Frontend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend.map(e => ( 
                        <div className='card-container'>
                        <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    </div>
                      
                    </div>
            ))}</div></div>
            <div><div className='backend'><center><span>Backend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ backend.map(e => ( 
                       <div className='card-container'>
                       <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                   </div>
                     
                   </div>
            ))}</div></div>
            <div>
            <div className='backend'><center><span>Others</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ others.map(e => ( 
                       <div className='card-container'>
                       <div className='card-image' style={{backgroundImage: `url(${e})`, width: '100%', height: '80px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                   </div>
                     
                   </div>
            ))}</div>
            </div>



        </div>

        </Fade>
    </div>
  )
}

export default ResultSkillstwo
