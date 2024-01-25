import React, {useState} from 'react'
import CoverModal from '../cover/CoverModal';
import 'reactjs-popup/dist/index.css';
import '../../static/coverinfo.scss'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../static/projectinfo.scss'
import { useSignal } from '../../context/SignalContext';
import {useData} from '../../context/DataContext'
import global from '../global.js';

function CreateProject() {
    const navigate = useNavigate();
    const { signal, setSignal } = useSignal();
    console.log(signal)

    const [selectedFile, setSelectedFile] = useState(null);
    const {userData, setUserData} = useData();

    const handleBackClick = () => {
        navigate('/projecttemplate');
    }
    const handleNextClick = async() => {
        await handleProject()
        navigate('/result');
    }
    const [projects, setProjects] = useState([
      {
        github: '',
        description: '',
        file: null,
        title: '',
        frontend: [],
        backend: [],
        others: []

      },
    ]);


    const handleAddProject = () => {
      setProjects((prevProjects) => [
        ...prevProjects,
        {
          github: '',
          description: '',
          file: null,
          title: '',
          frontend: [],
          backend: [],
          others: []                                                             

        },
      ]);
    };

    const [frontskills, setFrontskills ]= useState([])
    const [backskills, setBackskills ]= useState([])
    const [others, setOthers] = useState([])
  
    const skilllist = [
      {
          name: "Frontend",
          types: [
              "https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png",
              "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
              "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp",
              "https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerMgC8YiCGH7WzGhMCQxU_Fn5hFWedV8coQ&usqp=CAU",
              "data:image/png;base64,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",
              "https://cdn.icon-icons.com/icons2/2699/PNG/512/kotlinlang_logo_icon_170356.png",
              "data:image/png;base64,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"
          ]
      },
      {
          name: "Backend",
          types: [
              "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
              "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
              "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-logo-icon.png",
              "https://blog.appseed.us/content/images/2023/10/cover-flask.jpg",
              "data:image/png;base64,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"
              ,
              "https://cdn.iconscout.com/icon/free/png-256/free-aws-3215369-2673787.png"
            ]
      },
  {
    name: "Others",
    types: [
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png",
        "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue-thumbnail.png",
        "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/scala_lang_logo_icon_168847.png",
         "https://www.shareicon.net/data/2015/08/30/93005_on_395x512.png",
         "https://cdn.icon-icons.com/icons2/2699/PNG/512/pytorch_logo_icon_169823.png",
         "https://cdn.icon-icons.com/icons2/2699/PNG/512/tensorflow_logo_icon_170598.png"
    ]
  }
  ]
  const apiUrl = 'http://' + global.address + ':4000/saveproject'; // Replace with your backend API endpoint

    const handleProject = async() => {
        // const apiUrl = 'http://192.249.29.120:4000/saveproject'; // Replace with your backend API endpoint
  
        console.log("We are inside the project function")

        
            const requestData = {
              signal: signal,
              userID: userData.emails,
              projects: projects
    
            };

            try {
              const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
              });
              console.log(response)
              
        
            } catch (error) {
              // Handle network errors or other issues
              console.error('Error sending answers to backend', error);
            }
        }  

        
    

      const handleGithub = (event, index) => {
        const newProjects = [...projects];
        newProjects[index].github = event.target.value;
        setProjects(newProjects);
      };
      const handleTitle = (event, index) => {
        const newProjects = [...projects];
        newProjects[index].title = event.target.value;
        setProjects(newProjects);
      };
    
    
      const handleDescription = (event, index) => {
        const newProjects = [...projects];
        newProjects[index].description = event.target.value;
        setProjects(newProjects);
      };
    
      const handleFileChange = (event, index) => {
        const newProjects = [...projects];
        let base64Image = event.target.files[0];
        console.log("There is a selectedFile");
          const reader = new FileReader();
          console.log(reader);
      
          reader.onloadend = async () => {
            base64Image = reader.result.split(',')[1]; // Get base64 portion of the result
            console.log("We are inside the image loader")
            console.log(base64Image);

            newProjects[index].file = base64Image
            setProjects(newProjects);

            await handleProject();
          }
          reader.readAsDataURL(base64Image); // Start reading the file as a data URL

      };

      const handleFrontend = (projectIndex, skillIndex) => {
        console.log("Inside the frontend function")
        setProjects((prevProjects) => {
          return prevProjects.map((project, index) => {
            if (index === projectIndex) {
              return {
                ...project,
                frontend: [...project.frontend, skilllist[0].types[skillIndex]],
              };
            }
            return project;
          });
        });
      };

      const handleBackend = (projectIndex, skillIndex) => {
        console.log("Inside the frontend function")
        setProjects((prevProjects) => {
          return prevProjects.map((project, index) => {
            if (index === projectIndex) {
              return {
                ...project,
                backend: [...project.backend, skilllist[1].types[skillIndex]],
              };
            }
            return project;
          });
        });
      };
      const handleOthers = (projectIndex, skillIndex) => {
        console.log("Inside the frontend function")
        setProjects((prevProjects) => {
          return prevProjects.map((project, index) => {
            if (index === projectIndex) {
              return {
                ...project,
                others: [...project.others, skilllist[2].types[skillIndex]],
              };
            }
            return project;
          });
        });
      };

      const handlePreview = ()=> {
        const userID = "jjpark57@hotmail.com"

        if(signal[3][0] == 1){
          navigate('/project1', {state: {userID, signal, projects}});
        }
        else if(signal[3][1] == 1){
          navigate('/project2', {state: {userID, signal, projects}});
        }
  
      }
  
  return (
<div className="create-container">
            <header className="create-header">
                <div className="preview-icon" onClick={handlePreview}></div>
                <div className="progress-bar"></div>
            </header>
            <main className="create-main">
                <div className="arrow left" onClick={handleBackClick}></div>
                      <div className='cover-template-wrapper' style={{marginTop: '-200px', height: 'max-content'}}>
                      <div className='project-container' style={{backgroundColor: 'white', marginTop: '200px', gridTemplateColumns: '1fr'}}>
      {projects.map((project, index) => (
        <div key={index} className='project-card' style={{backgroundColor: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', height: '460px', border: '1px solid black', borderRadius: '20px', padding: '15px', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
          <div>
            <div className='question-title' style={{ fontWeight: 'normal', fontSize: '16pt', marginLeft: '10px' }}>Github Link</div>
            <input
              className='question-titleinput'
              type="text"
              style={{ border: '1px solid #BEBEBE', width: '70%', height: '30px', borderRadius: '20px', paddingLeft: '20px', marginTop: '10px', marginLeft: '10px' }}
              value={project.github}
              onChange={(event) => handleGithub(event, index)}
              placeholder="Github link..."
            />
          </div>
          <div>
            <div className='question-title' style={{ fontWeight: 'normal', fontSize: '16pt', marginLeft: '10px' }}>Project Title</div>
            <input
              className='question-titleinput'
              type="text"
              style={{ border: '1px solid #BEBEBE', width: '70%', height: '30px', borderRadius: '20px', paddingLeft: '20px', marginTop: '10px', marginLeft: '10px' }}
              value={project.title}
              onChange={(event) => handleTitle(event, index)}
              placeholder="Github link..."
            />
          </div>
          <div>
              <div style={{ fontSize: '16pt', marginTop: '5px', fontWeight: 'normal', marginLeft: '10px' }}>Project Image</div>
              <input
                className='question-imageinput'
                type="file"
                onChange={(event) => handleFileChange(event, index)}
                style={{ border: '1px solid #BEBEBE', width: '80%', height: '30px', borderRadius: '20px', textAlign: 'center', marginBottom: '15px', paddingLeft: '20px', marginLeft: '10px', marginTop: '10px' }}
                placeholder="Upload Background image"
              />
          </div>
          <div>
              <div className='question-title' style={{ fontWeight: 'normal', fontSize: '16pt', marginLeft: '10px' }}>Desecription</div>
              <input
                type="text"
                style={{ border: '1px solid #BEBEBE', width: '80%', height: '100px', borderRadius: '20px', marginBottom: '50px', paddingLeft: '20px', marginLeft: '10px', marginTop: '10px' }}
                value={project.description}
                onChange={(event) => handleDescription(event, index)}
                placeholder="Describe yourself..."
              />
          </div>
          <div>
          <div className='question-title' style={{fontWeight: 'normal', fontSize: '16pt'}}>Frontend</div>
          <div className='layer-container' style={{backgroundColor: 'white', width: '90%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <h2 style={{textAlign: 'center'}}></h2>
                <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                    {
                        skilllist[0].types.map((e,skillIndex) => (
                                <div key={skillIndex}  
                                     onClick={() => handleFrontend(index, skillIndex)}
                                    className={`skill-card ${frontskills.includes(e) ? 'selected' : ''}`}
                                    style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '30px', height: '30px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                </div>
                        ))
                    }
                </div>
              </div>
          </div>
          <div>
          <div className='question-title' style={{fontWeight: 'normal', fontSize: '16pt'}}>Others</div>
          <div className='layer-container' style={{backgroundColor: 'white', width: '90%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <h2 style={{textAlign: 'center'}}></h2>
                <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                    {
                        skilllist[2].types.map((e,skillIndex) => (
                                <div key={skillIndex}  
                                    onClick={()=> handleBackend(index,skillIndex )}
                                    className={`skill-card ${frontskills.includes(e) ? 'selected' : ''}`}
                                    style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '30px', height: '30px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                </div>
                        ))
                    }
                </div>
              </div>
          </div>
          <div>
            <div style={{fontSize: '16pt', marginTop: '0px', fontWeight: 'normal'}}>Backend</div>
              <div className='layer-container'>
                  <h2 style={{textAlign: 'center'}}></h2>
                  <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                      {
                          skilllist[1].types.map((e,skillIndex) => (
                                  <div key={skillIndex}  
                                  onClick={()=> handleOthers(index, skillIndex)}
                                      style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '30px', height: '30px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                  </div>
                          ))
                      }
                  </div>
              </div>
          </div>
        </div>
      ))}
      </div>
      <button onClick={handleAddProject}>+ Add Project</button>
                    </div>
                <div className="arrow right" onClick={handleNextClick}></div>
            </main>
        </div>
  )
}

export default CreateProject
