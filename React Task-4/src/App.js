
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Chennai from './Components/Chennai';
import Rameshwaram from './Components/Rameshwaram';
import Kodaikanal from './Components/Kodaikanal';
import Ooty from './Components/Ooty';
import Kanyakumari from './Components/Kanyakumari';
import Kumbakonam from './Components/Kumbakonam';
import Madurai from './Components/Madurai';
import Yercaud from './Components/Yercaud';
import Theni from './Components/Theni';
import Hogenakal from './Components/Hogenakal';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Slider/>
        <Chennai/>
        <Rameshwaram/>
        <Kodaikanal/>
        <Ooty/>
        <Kanyakumari/>
        <Kumbakonam/>
        <Madurai/>
        <Yercaud/>
        <Theni/>
        <Hogenakal/>
        
    </BrowserRouter>
  );
}

export default App;
