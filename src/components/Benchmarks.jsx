import React from 'react';
import v from "../assets/Vector1.png";
import v2 from "../assets/V2.png";
import v3 from "../assets/V3.png";
import v4 from "../assets/V4.png";

export default function Benchmarks() {
  return (
    <>
      {/* العنوان والخط تحته */}
      <div className="flex flex-col items-center px-4">
        <p className="text-2xl md:text-[32px] font-serif text-[#000000] font-semibold mt-16 md:mt-25 text-center">
          Benchmarks of Success
        </p>
        <div className="w-32 md:w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
      </div>

      {/* حاوية الإحصائيات (Grid متجاوب) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center px-4 gap-6 max-w-[1440px] mx-auto mt-12 md:mt-25 mb-16 md:mb-28">
        
        {/* الصندوق الأول */}
        <div className="flex flex-col items-center justify-center p-6 w-full sm:w-[325px] h-[143px] border border-gray-200 rounded-xl bg-white shadow-sm">
          <img className="w-6 h-6 mb-2 object-contain" src={v} alt="Properties Managed" /> 
          <p className="text-[24px] font-bold text-black mb-1">48</p> 
          <p className="text-[14px] text-[#554E4E]">Properties Managed</p>
        </div>

        {/* الصندوق الثاني */}
        <div className="flex flex-col items-center justify-center p-6 w-full sm:w-[325px] h-[143px] border border-gray-200 rounded-xl bg-white shadow-sm">
          <img className="w-6 h-6 mb-2 object-contain" src={v2} alt="Total Managed Investments" /> 
          <p className="text-[24px] font-bold text-black mb-1">90M</p> 
          <p className="text-[14px] text-[#554E4E]">Total Managed Investments</p>
        </div>

        {/* الصندوق الثالث */}
        <div className="flex flex-col items-center justify-center p-6 w-full sm:w-[325px] h-[143px] border border-gray-200 rounded-xl bg-white shadow-sm">
          <img className="w-6 h-6 mb-2 object-contain" src={v3} alt="Happy Clients" /> 
          <p className="text-[24px] font-bold text-black mb-1">500</p> 
          <p className="text-[14px] text-[#554E4E]">Happy Clients</p>
        </div>

        {/* الصندوق الرابع */}
        <div className="flex flex-col items-center justify-center p-6 w-full sm:w-[325px] h-[143px] border border-gray-200 rounded-xl bg-white shadow-sm">
          <img className="w-6 h-6 mb-2 object-contain" src={v4} alt="Client Satisfaction" /> 
          <p className="text-[24px] font-bold text-black mb-1">99%</p> 
          <p className="text-[14px] text-[#554E4E]">Client Satisfaction</p>
        </div>

      </div>
    </>
  );
}