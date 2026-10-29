import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Benchmarks from "./Benchmarks";
import AboutGrandAtlas from "./AboutGrandAtlas";

export default function Layout() {
  return (
    <div>
      <Navbar/>  
      <Outlet/> 
      {/* <Benchmarks/> 
      <AboutGrandAtlas/> */}
      <Footer/>
    </div>
  );
}