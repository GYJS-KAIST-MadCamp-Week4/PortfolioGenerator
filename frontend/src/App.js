import Login from './components/Login';
import Start from './components/Start';
import Home from './components/Home';
import CreateCover from './components/CreateCover';
import CreateAbout from './components/CreateAbout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create/cover" element={<CreateCover />} />
          <Route path="/create/about" element={<CreateAbout />} />
        </Routes>
      </Router>
    </DataProvider> 
  );
}

export default App;
