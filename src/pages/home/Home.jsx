import Hero from "../../components/Hero";
import photo from "../../assets/image 1.png";
import Icon from "../../assets/Frame 1.png"; 
import Benchmarks from "../../components/Benchmarks";
import AboutGrandAtlas  from "../../components/AboutGrandAtlas";
import StrategicLocations from "../../components/StrategicLocations";
import HandSelectedMasterpieces from "../../components/HandSelectedMasterpieces";
import FutureLandmarks from "../../components/FutureLandmarks";
export default function Home() {
  return (
    <div>
      <Hero bg={photo}
        title={"Redefining the Horizon of Modern Luxury Living"}
        desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
        btncontent={"Explore"}
        exist={true}
        icons={Icon}
      /> 
       <Benchmarks/> 
      <AboutGrandAtlas/>  
      <HandSelectedMasterpieces/>
      <StrategicLocations/> 
       <FutureLandmarks/> 
    </div>

  );
}