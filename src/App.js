import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import About from './routes/About.js';
import HomePage from './routes/HomePage.js';
import Navbar from './routes/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app-to-host" element={<About />} />
      </Routes>
  
    </div>
  );
}

export default App;
