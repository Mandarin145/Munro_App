import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checklist from './pages/checklist';
import MunroInfo from './pages/MunroInfo';
import Transport from './pages/Transport';
import Weather from './pages/weather';
import LandingPage from './pages/landingpage';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/aboutus';


function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/munroinfo" element={<MunroInfo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;


