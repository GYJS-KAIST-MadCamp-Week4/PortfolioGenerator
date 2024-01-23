import React from 'react'
import { Fade } from "react-awesome-reveal";
import CodeIcon from '@mui/icons-material/Code';
import {frontend} from '../../assets/frontend'
import Cards from './Cards';
import '../../static/skillstwo.scss'

function ResultSkillstwo() {
  return (
        <div className='skill-section' >

            <Fade duration={3500}>

                    <center><div style={{color: 'whitesmoke', justifyContent: 'center', fontSize: '40pt'}}><CodeIcon style={{fontSize:'40pt'}} /> <span>Skills</span></div></center>
                
            </Fade>

            <Fade duration={3500}>


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
            ))}</div>
            </div>



        </div>

        </Fade>
    </div>
  )
}

export default ResultSkillstwo
