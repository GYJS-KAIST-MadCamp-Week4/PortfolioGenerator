import React from 'react'
import '../../static/projecttwo.scss'
import ProjectBox from './ProjectBox'
import { Fade } from "react-awesome-reveal";

function ResultProjecttwo({projects, color}) {

    console.log(projects)

   
  return (
<div className='project-container-two' style={{backgroundColor: `${color.hex}`, marginBottom: '30px', paddingBottom: '100px'}}>
<Fade duration={2500}>

        <h2 style={{fontSize: '24pt'}}>Projects</h2>
         <div className='project-layout' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'column', width: '100%', gap: '100px', flexWrap: 'wrap' , alignContent: 'flex-start'}}>
            {
                projects.map((e,index) => (
                    <ProjectBox {...e}/>
                ))
            }
        </div>
        </Fade>
    </div>
  )
}

export default ResultProjecttwo
