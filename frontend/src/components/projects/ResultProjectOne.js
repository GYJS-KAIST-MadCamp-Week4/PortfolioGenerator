import React from 'react'
import ProjectCard from './ProjectCard'

function ResultProjectone({projects, color}) {

    console.log(projects)

  return (
    <div className='project-container-one' style={{marginBottom: '30px', backgroundColor: `${color.hex}`, paddingBottom: '100px'}} >
        <h2>Projects</h2>
         <div className='project-layout' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '80%', gap: '30px', flexWrap: 'wrap' , alignContent: 'flex-start'}}>
            {
                projects.map((e, index) => (
                    <ProjectCard  key={index} {...e} style={{ flex: '0 0 calc(33.33% - 30px)' , width: '100%'}}/>
                ))
            }
        </div>
    </div>
  )
}

export default ResultProjectone
