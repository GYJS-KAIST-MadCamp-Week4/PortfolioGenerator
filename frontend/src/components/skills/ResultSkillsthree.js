import React from 'react'
import '../../static/skillsthree.scss'
import Layer from './Layer'

function ResultSkillsthree() {

    const skilllist = [
        {
            name: "Frontend",
            types: [
                "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png",
                "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
                "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"

            ]
        },
        {
            name: "Backend",
            types: [
                "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
                "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
                "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
            ]
        }
    ]


  return (
    <div className='skills-container-three' style={{backgroundColor: '#e7e6e6'}}>
        <h2>Main Skills</h2>
            {
                skilllist.map(e => (
                    <Layer {...e}/>
                ))
            }
    </div>
  )
}

export default ResultSkillsthree
