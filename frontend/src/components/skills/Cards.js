import React from 'react'
import { Fade } from "react-awesome-reveal";

function Cards({name, link})  {


    return (
        <Fade>

    <div className='card-container'>
        <div className='card-image' style={{backgroundImage: `url(${link})`, width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
    </div>
      
    </div>
    </Fade>

  )
}

export default Cards