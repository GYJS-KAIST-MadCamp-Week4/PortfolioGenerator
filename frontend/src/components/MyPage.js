import React, { useEffect , useState} from 'react'
import CoverOne from './cover/CoverOne';
import ResultCoverOne from './cover/ResultCoverOne'
import ResultCoverTwo from './cover/ResultCoverTwo.js';
import ResultAboutMeTwo from './aboutme/ResultAboutMeTwo.js';
import ResultAboutMeOne from './aboutme/ResultAboutMeOne'
import ResultSkillsone from './skills/ResultSkillsOne';
import ResultSkillstwo from './skills/ResultSkillstwo';
import ResultSkillsthree from './skills/ResultSkillsthree';
import ResultProjectOne from './projects/ResultProjectOne';
import ResultProjecttwo from './projects/ResultProjecttwo';
import global from './global.js';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

function MyPage() {
    const navigate = useNavigate();

    const [responseData, setResponseData] = useState([]); // Assuming you have a context to store user data
    const {userData, setUserData} = useData();
    console.log("This is the userData")
    console.log(userData)
    const apiUrl = 'http://' + global.address + ':4000/result'; // Replace with your backend API endpoint

    const handleLogout=()=> {
      navigate('/login')
    }
    const handleSave=()=> {
      navigate('/mypage')
    }
    useEffect(() => {
        const handleSignal = async () => {
          // const apiUrl = 'http://192.249.29.120:4000/result'; // Replace with your backend API endpoint
    
          const requestData = {
            userID: "jjpark57@hotmail.com"
          };
    
          try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
            });
    
            if (response.ok) {
              const data = await response.json();
    
              // Assuming you have a context or state to store the user data
              // You can update your state or context with the received data
              setResponseData(data);
              console.log("This is the data from the backend")
              console.log(data); // Log the data to the console for verification
            } else {
              console.error('Error getting data from the backend');
            }
          } catch (error) {
            // Handle network errors or other issues
            console.error('Error sending answers to backend', error);
          }
        };
    
        handleSignal();
      }, [setResponseData]); // Add dependencies if needed

      return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div>
          {responseData.userData?.signal?.[0]?.[0] === 1 && (
            <ResultCoverOne
              image={responseData.userData.coverimage}
              title={responseData.userData.title}
              subtitle={responseData.userData.subtitle}
              description={responseData.userData.description}
            />
          )}
          {responseData.userData?.signal?.[0]?.[1] === 1 && (
            <ResultCoverTwo
              title={responseData.userData.title}
              subtitle={responseData.userData.subtitle}
              description={responseData.userData.description}
            />
          )}
          </div>
          <div style={{marginTop: '100vh'}}>
          {responseData.userData?.signal?.[1]?.[0] === 1 && (
            <ResultAboutMeOne
              name={responseData.userData.name}
              emailAddress={responseData.userData.emailAddress}
              education={responseData.userData.education}
              aboutfile={responseData.userData.aboutfile}
              date={responseData.userData.date}
              address={responseData.userData.address}
              color={responseData.userData.aboutcolor}

            />
          )}
          </div>
          <div style={{}}>
          {responseData.userData?.signal?.[1]?.[1] === 1 && (
            <ResultAboutMeTwo
              name={responseData.userData.name}
              emailAddress={responseData.userData.emailAddress}
              education={responseData.userData.education}
              aboutfile={responseData.userData.aboutfile}
              date={responseData.userData.date}
              address={responseData.userData.address}
              color={responseData.userData.aboutcolor}

            />
          )}
          </div>
          <div style={{marginTop: '0vh'}}>
          {responseData.userData?.signal?.[2]?.[0] === 1 && (
            <ResultSkillsone
              frontend={responseData.userData.frontend}
              backend={responseData.userData.backend}
              others={responseData.userData.others}
              color={responseData.userData.skillcolor}

            />
          )}
          {responseData.userData?.signal?.[2]?.[1] === 1 && (
            <ResultSkillstwo
              frontend={responseData.userData.frontend}
              backend={responseData.userData.backend}
              others={responseData.userData.others}
              color={responseData.userData.skillcolor}

            />
          )}
          {responseData.userData?.signal?.[2]?.[2] === 1 && (
            <ResultSkillsthree
              frontend={responseData.userData.frontend}
              backend={responseData.userData.backend}
              others={responseData.userData.others}
              color={responseData.userData.skillcolor}

            />
          )}
          </div>
          <div style={{marginTop: '0vh'}}>
          {responseData.userData?.signal?.[3]?.[0] === 1 && (
            <ResultProjectOne
              projects={responseData.userData.projects}
              color={responseData.userData.projectcolor}


            />
          )}
          {responseData.userData?.signal?.[3]?.[1] === 1 && (
            <ResultProjecttwo
              projects={responseData.userData.projects}
              color={responseData.userData.projectcolor}

            />
          )}
          </div>
          <button onClick={handleLogout}>Logout</button>

        </div>
      );
}

export default MyPage
