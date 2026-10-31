import React from 'react';
import image1 from "../assets/Frame 2 (1).png";
import image2 from "../assets/Frame 2 (2).png";
import l1 from "../assets/image 11.png";
import l2 from "../assets/image 10.png";

export default function FutureLandmarks() {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-10 my-16 md:my-28">
            {/* العنوان والخط تحته */}
            <div className="flex flex-col items-center mb-10 md:mb-16">
                <p className="text-2xl md:text-[32px] font-serif text-[#000000] font-semibold text-center">
                    Future Landmarks
                </p>
                <div className="w-32 md:w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
            </div>

            {/* شبكة الكارتات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                
                {/* 1. الكارت الرئيسي (يظهر على الموبايل وعلى اللابتوب) */}
                <div className="card bg-base-100 w-full max-w-[380px] md:max-w-none shadow-xl border border-gray-100 p-4 rounded-3xl">
                    <figure className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image1}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-3 mt-4 px-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                            <img src={l1} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h2 className="text-lg font-bold text-gray-900 leading-tight">Hayah City</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Hayah Development</p>
                        </div>
                    </div>

                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>
                </div>

                {/* 2. الكارت الثاني (مخفي على الموبايل يظهر فقط على md فما فوق) */}
                <div className="hidden md:flex flex-col card bg-base-100 w-full shadow-xl border border-gray-100 p-4 rounded-3xl">
                    <figure className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image2}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-3 mt-4 px-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                            <img src={l2} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h2 className="text-lg font-bold text-gray-900 leading-tight">Future Landmark 2</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Grand Atlas Development</p>
                        </div>
                    </div>

                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>
                </div>

                {/* 3. الكارت الثالث (مخفي على الموبايل يظهر فقط على lg فما فوق) */}
                <div className="hidden lg:flex flex-col card bg-base-100 w-full shadow-xl border border-gray-100 p-4 rounded-3xl">
                    <figure className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image2}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-3 mt-4 px-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                            <img src={l2} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h2 className="text-lg font-bold text-gray-900 leading-tight">Future Landmark 3</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Grand Atlas Development</p>
                        </div>
                    </div>

                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}