
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        
        <Benefits />
        <Contact />
    </BrowserRouter>
  );
}

export default App;
