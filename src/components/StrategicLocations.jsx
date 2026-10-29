import React from 'react' 
import map from "../assets/image 6.png"

export default function StrategicLocations() {
  return (
    <>
    <div> 
        <div className="flex flex-col items-center  ">
      <p className="text-[32px] font-serif text-[#000000] font-semibold mt-25">
        Strategic Locations
      </p>
      {/* الخط الأحمر المصغر في المنتصف */}
      <div className="w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
    </div>   
    </div>  
    <div>
        <img className="w-full h-full mt-7.25 " src={map} alt="Client Satisfaction" /> 
    </div>
    </>
  )
}
