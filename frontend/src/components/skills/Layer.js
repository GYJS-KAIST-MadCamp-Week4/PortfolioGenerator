import React from 'react'

function Layer({ types, imageUrl}) {
  return (
    <div className='layer-container'>
        <h2 style={{textAlign: 'center'}}></h2>
        <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
            {
                types.map((e,index) => (
                        <div key={index}  
                            style={{backgroundImage: `url(${imageUrl})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Layer
