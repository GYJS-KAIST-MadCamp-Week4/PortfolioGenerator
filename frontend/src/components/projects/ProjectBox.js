import React from 'react'
import '../../static/projecttwo.scss'
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectBox({title, image, github, description, skills, frontend, backend}) {
  return (
<div className="Box">
      <div className="Box_image" style={{ backgroundSize: 'cover',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '300px', width: '400px'}}>
         <img src={image} style={{padding: '15px',paddingTop: '40px',  width:'400px', height: '100%'}}/>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">{title}</h1>
        {/* <p className="company">근무처 : 소프트웨어인라이프</p> */}
        {/* <p className="name">개발기간 :2019.10.20 ~ </p> */}
        <p className="Box_content">
            {description}
          {/* Docswave Application의 프론트엔드 컴포넌트 개발.<br/>
          인사 페이지 개발 및 유지보수. */}
        </p>
        <ul className="Box_ul">
            <h3>Frontend</h3>  
            {frontend.map((e, index) => (
                
                    <li className="Box_li" ><div style={{backgroundImage: `url(${e})`,borderRadius: '20px',  width: '40px', height: '40px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}></div> </li>  
            ))}
            <h3>Backend</h3>
            {backend.map((e, index) => (
                
                <li className="Box_li" ><div style={{backgroundImage: `url(${e})`,borderRadius: '20px',  width: '40px', height: '40px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}></div> </li>  
        ))}
        </ul>

        <ul className="Box_ul">
          <li className="Box_li">
          <a href={github} alt="homepage"> <GitHubIcon /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectBox
