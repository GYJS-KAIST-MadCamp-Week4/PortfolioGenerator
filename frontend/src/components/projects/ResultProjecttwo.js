import React from 'react'
import '../../static/projecttwo.scss'
import ProjectBox from './ProjectBox'

function ResultProjecttwo({projects}) {

    console.log(projects)

    // const projectlist = [
    //     {
    //         title: "GreenStory",
    //         image: "https://github.com/jjpark51/GreenStory/raw/main/public/main1.png",
    //         github: "https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator",
    //         description: "프론트 엔드와 백 엔드를 모두 Django로 구현한 원시적인 형태의 웹 어플리케이션입니다. 현재 회사에서 채택하고 있는 환경 및 기술에 대한 완전한 이해를 목적으로 진행한 프로젝트입니다.",
    //         skills: ["React", "MongoDB", "Flask"],
    //         frontend: ["https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"],
    //         backend: ["https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png", "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"]
    //     },
    //     {
    //         title: "FindMyBMW",
    //         image: "https://private-user-images.githubusercontent.com/68769481/298263219-2d7fa4e0-52ec-4688-abd8-2d6d523679a4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU3NDMxNDUsIm5iZiI6MTcwNTc0Mjg0NSwicGF0aCI6Ii82ODc2OTQ4MS8yOTgyNjMyMTktMmQ3ZmE0ZTAtNTJlYy00Njg4LWFiZDgtMmQ2ZDUyMzY3OWE0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTIwVDA5MjcyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAwYTZhNGVhNzhlNTVjOGRiNGM5Y2YyYjAwNTAxMzgyMjk4MjQxNzkwNTgyMTUyYzkyMTdiMDBiYjNmN2YxNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DaZTspTXzM9VQiDusss9ZKFSWd2mrc70gscQSgxL7as",
    //         github: "https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator",
    //         description: "프론트 엔드와 백 엔드를 모두 Django로 구현한 원시적인 형태의 웹 어플리케이션입니다. 현재 회사에서 채택하고 있는 환경 및 기술에 대한 완전한 이해를 목적으로 진행한 프로젝트입니다.",
    //         skills: ["React", "MongoDB", "Flask"],
    //         frontend: ["https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"],
    //         backend: ["https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png", "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"]
    //     },
    //     {
    //         title: "Hangout",
    //         image: "https://github.com/jjpark51/Hangout/raw/main/public/img/main.png",
    //         github: "https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator",
    //         description: "프론트 엔드와 백 엔드를 모두 Django로 구현한 원시적인 형태의 웹 어플리케이션입니다. 현재 회사에서 채택하고 있는 환경 및 기술에 대한 완전한 이해를 목적으로 진행한 프로젝트입니다.",
    //         skills: ["React", "MongoDB", "Flask"],
    //         frontend: ["https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"],
    //         backend: ["https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png", "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"]
    //     },
    //     {
    //         title: "Hangout",
    //         image: "https://github.com/jjpark51/GreenStory/blob/main/public/main2.png?raw=true",
    //         github: "https://github.com/GYJS-KAIST-MadCamp-Week4/PortfolioGenerator",
    //         description: "프론트 엔드와 백 엔드를 모두 Django로 구현한 원시적인 형태의 웹 어플리케이션입니다. 현재 회사에서 채택하고 있는 환경 및 기술에 대한 완전한 이해를 목적으로 진행한 프로젝트입니다.",
    //         skills: ["React", "MongoDB", "Flask"],
    //         frontend: ["https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"],
    //         backend: ["https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png", "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"]
    //     }
    // ]

  return (
<div className='project-container-two' style={{backgroundColor: '#e7e6e6', marginBottom: '30px'}}>
        <h2>Projects</h2>
         <div className='project-layout' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'column', width: '70%', gap: '100px', flexWrap: 'wrap' , alignContent: 'flex-start'}}>
            {
                projects.map((e,index) => (
                    <ProjectBox {...e}/>
                ))
            }
        </div>
    </div>
  )
}

export default ResultProjecttwo
