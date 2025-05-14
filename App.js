import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Plan from './Components/Plan';
import GroupTourism from './Components/GroupTourism';
import Trip from './Components/Trip'
// const response = await fetch(`http://localhost:8000/recommend/${userInput}`);import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import MapComponent from './Components/MapComponent'



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/Itinerary" element={<Itinerary />} /> */}
        <Route path="/Trip" element={<Trip />} />
{/* <Route path="/MapComponent" element={<MapComponent />} /> */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Plan' element={<Plan/>}/>
        <Route path='/GroupTourism' element={<GroupTourism/>}/>
        <Route path="/MapComponent" element={<MapComponent />} />



      </Routes>
    </Router>
  )
}

export default App; 

