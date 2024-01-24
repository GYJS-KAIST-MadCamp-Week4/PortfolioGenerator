import React from 'react'
import '../../static/skillsthree.scss'
import Layer from './Layer'

function ResultSkillsthree({frontend, backend, others}) {
    console.log(frontend)
    console.log(backend)
    console.log(others)

    // const skilllist = [
    //     {
    //         name: "Frontend",
    //         types: [
    //             "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png",
    //             "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    //             "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    //             "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"

    //         ]
    //     },
    //     {
    //         name: "Backend",
    //         types: [
    //             "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
    //             "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
    //             "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
    //         ]
    //     }
    // ]


  return (
    <div className='skills-container-three' style={{backgroundColor: '#e7e6e6'}}>
        <h2>Main Skills</h2>

                    <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Frontend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            frontend.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Backend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            backend.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Others</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            others.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
    </div>
  )
}

export default ResultSkillsthree
