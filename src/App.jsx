import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
// import About from './pages/about/About';
import { Route, Routes } from 'react-router-dom';
// import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Layout from './components/Layout';
import Developers from './pages/developers/Developer';
import Units from './pages/units/Units';
import Zones from './pages/zones/Zones'; 
import ZonesDetails from './pages/zones/ZonesDetails'; 
import ProjectDetails from './pages/zones/ProjectDetails'; 
import DevelopersDetails from './pages/developers/DevelopersDetails'; 
import UnitDetails from './pages/units/UnitsDetails'; 

function App() {
  return (
    <div>



      <Routes>
        <Route element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="developers" element={<Developers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="zones" element={<Zones />} />
          <Route path="units" element={<Units />} /> 
          <Route path="/zones/:id" element={<ZonesDetails />} /> 
          <Route path="/projects/:id" element={<ProjectDetails />} />  
          <Route path="/developers/:id" element={<DevelopersDetails />} /> 
          <Route path="/units/:id" element={<UnitDetails />} />
         
        </Route>
      </Routes>

    </div>



  );
}

export default App;