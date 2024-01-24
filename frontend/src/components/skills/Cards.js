import React from 'react'
import { Fade } from "react-awesome-reveal";

<<<<<<< HEAD
function Cards({link})  {

    console.log(link)
=======
function Cards({name, link})  {


>>>>>>> 001a1643d7d7738d0447e64b37e933c4ea7f0948
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