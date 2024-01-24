import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import CoverOne from './components/cover/CoverOne';
import AboutMeOne from './components/aboutme/AboutMeOne'
import Skillsone from './components/skills/Skillsone';
import Skillstwo from './components/skills/Skillstwo';
import Skillsthree from './components/skills/Skillsthree';
import Projectone from './components/projects/Projectone';
import Projecttwo from './components/projects/Projecttwo';
import Question from './components/question/Question';
import Test from './components/Test';
import { DataProvider } from './context/DataContext';
import SkillsTemplate from './components/question/SkillsTemplate';
import AboutTemplate from './components/question/AboutTemplate';
import ProjectTemplate from './components/question/ProjectTemplate';
import { SignalProvider } from './context/SignalContext';
import Result from './components/Result';
import Start from './components/Start'
import Login from './components/Login'
import CreateCover from './components/question/CreateCover';
import CreateAbout from './components/question/CreateAbout';
import CreateSkills from './components/question/CreateSkills';
import CreateProject from './components/question/CreateProject';
import CoverPreview from './components/cover/CoverPreview';
import MyPage from './components/MyPage';

function App() {
  return (
    <SignalProvider>
    <DataProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/coverone" element={<CoverOne/>} />
        <Route path="/aboutmeone" element={<AboutMeOne/>} />
        <Route path="/skills1" element={<Skillsone/>} />
        <Route path="/skills2" element={<Skillstwo/>} />
        <Route path="/skills3" element={<Skillsthree/>} />
        <Route path="/project1" element={<Projectone/>} />
        <Route path="/project2" element={<Projecttwo/>} />
        {/* This is temporary */}
        <Route path="/create" element={<Question/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/abouttemplate" element={<AboutTemplate/>} />
        <Route path="/skillstemplate" element={<SkillsTemplate/>} />
        <Route path="/projecttemplate" element={<ProjectTemplate/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/create/cover" element={<CreateCover />} />
          <Route path="/create/about" element={<CreateAbout />} />
          <Route path="/create/skills" element={<CreateSkills />} />
          <Route path="/create/project" element={<CreateProject />} />

        <Route path="/coverpreview" element={<CoverPreview />} />


      </Routes>
    </Router>
    </DataProvider>
    </SignalProvider>
  );
}

export default App;
