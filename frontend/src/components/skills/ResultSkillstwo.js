import React from 'react'
import { Fade } from "react-awesome-reveal";
import CodeIcon from '@mui/icons-material/Code';
import {frontend} from '../../assets/frontend'
import Cards from './Cards';
import '../../static/skillstwo.scss'

<<<<<<< HEAD
function ResultSkillstwo({frontend, backend, others}) {
  return (
        <div className='skill-section' style={{height: '100vh'}}>
=======
function ResultSkillstwo() {
  return (
        <div className='skill-section' >
>>>>>>> 001a1643d7d7738d0447e64b37e933c4ea7f0948

            <Fade duration={3500}>

                    <center><div style={{color: 'whitesmoke', justifyContent: 'center', fontSize: '40pt'}}><CodeIcon style={{fontSize:'40pt'}} /> <span>Skills</span></div></center>
                
            </Fade>

            <Fade duration={3500}>


<<<<<<< HEAD
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
=======
        <div className='skill-container'>



            <div><div className='frontend'><center><span>Frontend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[0].map(e => ( 
                    < Cards {...e} />
            ))}</div></div>
            <div><div className='backend'><center><span>Backend</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[1].map(e => ( 
                    < Cards {...e} />
            ))}</div></div>
            <div className='version-control'><div className='backend'><center><span>Version Control</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[2].map(e => ( 
                    < Cards {...e} />
            ))}</div></div>
            <div className='AI'>   <div className='backend'><center><span>Artificial Intelligence</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[3].map(e => ( 
                    < Cards {...e} />
            ))}</div></div>
            <div>
            <div className='backend'><center><span>Others</span><br/><a style={{color: '#214832'}}> ____________________________ </a></center>{ frontend[4].map(e => ( 
                    < Cards {...e} />
>>>>>>> 001a1643d7d7738d0447e64b37e933c4ea7f0948
            ))}</div>
            </div>



        </div>

        </Fade>
    </div>
  )
}

export default ResultSkillstwo
