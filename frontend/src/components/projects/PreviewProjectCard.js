import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../static/projectone.scss'
import GitHubIcon from '@mui/icons-material/GitHub';

function PreviewProjectCard({title, file, github, description, skills, frontend, backend}) {

    const [isFlipped, setFlipped] = useState(false);
    

    const handleClick = (e) => {
      e.preventDefault();
      setFlipped(!isFlipped);
    };
    console.log("We are inside the preview project card")
    // console.log(file)
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div onClick={handleClick}
        style={{backgroundImage: `url(data:image/png;base64,${file})`,borderRadius: '20px',  width: '380px', height: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
    </div>

    <div onClick={handleClick}
        style={{borderRadius: '20px',  width: '380px', height: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>

          <div className='back-container' style={{display: 'flex', flexDirection: 'column', columnGap: '30px', flexWrap: 'wrap', padding: '20px'}}>
            <div className='back-title' style={{fontWeight: 'bold', marginBottom: '20px'}}>{title}</div>
            <div className='back-description'>{description}</div>
              <ul className="back-skills" style={{listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', columnGap: '20px'}}>
                <div>
                <p style={{fontWeight: 'bold'}}>Frontend</p>  
                {frontend.map((e, index) => (
                    
                        <li className="front-list" style={{display: 'inline-block', margin: 0}} ><div style={{backgroundImage: `url(${e})`,borderRadius: '20px',  width: '30px', height: '30px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}></div> </li>  
                ))}
                </div>
                <div>
                <p style={{fontWeight: 'bold'}}>Backend</p>
                {backend.map((e, index) => (
                    
                    <li className="back-list" style={{display: 'inline-block', margin: 0}} ><div style={{backgroundImage: `url(${e})`,borderRadius: '20px',  width: '30px', height: '30px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}></div> </li>  
            ))}
            </div>
          </ul>
            <a href={github} alt="homepage"> <GitHubIcon /></a>
            


          </div>
    </div>

    </ReactCardFlip>
  )
}

export default PreviewProjectCard
