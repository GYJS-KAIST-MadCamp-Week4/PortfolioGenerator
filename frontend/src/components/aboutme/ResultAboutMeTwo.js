import React from 'react';
import { Fade } from "react-awesome-reveal";
import '../../static/aboutmetwo.scss';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';

import global from '../global.js';

function ResultAboutMeTwo({address, email ,education, name, date}) {



    return (
        <Fade>
        <div className='about-me-container'>
            <div className='about-me-header'>ABOUT ME</div>
            <div className='about-me-sections'>
            <div className='personal-info'>
                <div className='info-input'>
                    <div className='info-item'>< Person2Icon />이름</div>
                    <div className='info-item-input'>{name}</div>
                </div>
                <div className='info-input'>
                    <div className='info-item'>< CakeIcon />생년월일</div>
                    <div className='info-item-input'>{date}</div>
                </div> 
                <div className='info-input'>
                    <div className='info-item'>< EmailIcon />이메일</div>
                    <div className='info-item-input'>{email}</div>
                </div>
            </div>
            <div className='education-address'>
                <div className='info-input'>
                    <div className='info-item'>< SchoolIcon />학력</div>
                    <div className='info-item-input'>{education}</div>
                </div>
                <div className='info-input'>
                    <div className='info-item'>< HomeIcon />주소지</div>
                    <div className='info-item-input'>{address}</div>
                </div>
            </div>
            </div>
        </div>
        </Fade>
    );
}

export default ResultAboutMeTwo;
