import React from 'react'
import { Fade } from "react-awesome-reveal";
import '../../static/aboutmeone.scss'
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';

function ResultAboutMeOne({name, emailAddress ,education, aboutfile,date}) {
//   const { name, email, education, selectedFile } = location.state;
console.log("We are inside ResultAboutMeOne file")
console.log(aboutfile)

const backgroundImageStyle = aboutfile
? { backgroundImage: `url(${aboutfile})` }
: {};

  return (
    <div className='about'>
                  <Fade  duration={2500}>

            <div className='aboutme-container'>

                <div className='title'>About Me</div>    
                <div className='profile' style={backgroundImageStyle} ></div>
                <div className='Name'><div className='box1'>< Person2Icon /> </div > <div className='box2'><span>이름</span></div><div className='box3'>{name}</div></div>
                <div className='Birth'><div className='box1'>< CakeIcon /> </div > <div className='box2'><span>생일</span></div><div className='box3'>{date}</div></div>
                <div className='School'> <div className='box1'><SchoolIcon /></div> <div className='box2'><span>학교</span></div><div className='box3'>{education}</div></div>
                <div className='Email'> <div className='box1'><EmailIcon /></div><div className='box2'>이메일</div><div className='box3'>{emailAddress}</div> </div>
                <div className='Github'><div className='box1'><GitHubIcon /></div><div className='box2'>Github</div> <div className='box3'><a href="https://github.com/jjpark51" style={{color: 'whitesmoke'}}>jjpark51</a></div> </div>
            </div>   
            </Fade> 

    </div>

  )
}

export default ResultAboutMeOne
