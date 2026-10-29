import React from 'react'
import image1 from "../assets/Frame 2 (1).png"
import image2 from "../assets/Frame 2 (2).png"
import l1 from "../assets/image 11.png"
import l2 from "../assets/image 10.png"


export default function FutureLandmarks() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center  ">
                    <p className="text-[32px] font-serif text-[#000000] font-semibold mt-25">
                        Future Landmarks
                    </p>
                    {/* الخط الأحمر المصغر في المنتصف */}
                    <div className="w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
                </div>
            </div>
            <div className="flex flex-row gap-6 overflow-x-auto p-4 justify-center">
                {/* الكارت الأول */}
                <div className="card bg-base-100 w-96 shadow-xl border border-gray-100 p-4 rounded-3xl">

                    {/* 1. الصورة الكبيرة في الأعلى وفوقها البادج */}
                    <figure className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image2}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />

                    </figure>

                    {/* 2. قسم المحتوى (الشعار والنصوص) */}
                    <div className="flex items-center gap-3 mt-4 px-2">
                        {/* صورة الشعار الصغير */}
                        <div className="">
                            <img src={l2} alt="Logo" className="w-full h-full object-cover" />
                        </div>

                        {/* العناوين والنصوص */}

                    </div>

                    {/* 3. زر العرض في الأسفل */}
                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>

                </div>

                <div className="card bg-base-100 w-96 shadow-xl border border-gray-100 p-4 rounded-3xl">

                    {/* 1. الصورة الكبيرة في الأعلى وفوقها البادج */}
                    <figure className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image1}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />

                    </figure>

                    {/* 2. قسم المحتوى (الشعار والنصوص) */}
                    <div className="flex items-center gap-3 mt-4 px-2">
                        {/* صورة الشعار الصغير */}
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                            <img src={l1} alt="Logo" className="w-full h-full object-cover" />
                        </div>

                        {/* العناوين والنصوص */}
                        <div className="flex flex-col text-left">
                            <h2 className="text-lg font-bold text-gray-900 leading-tight">Hayah City</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Hayah Development</p>
                        </div>
                    </div>

                    {/* 3. زر العرض في الأسفل */}
                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>

                </div>

                {/* الكارت الثالث */}
                {/* الكارت الأول */}
                <div className="card bg-base-100 w-96 shadow-xl border border-gray-100 p-4 rounded-3xl">

                    {/* 1. الصورة الكبيرة في الأعلى وفوقها البادج */}
                    <figure className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <img
                            src={image2}
                            alt="Hayah City"
                            className="w-full h-full object-cover"
                        />

                    </figure>

                    {/* 2. قسم المحتوى (الشعار والنصوص) */}
                    <div className="flex items-center gap-3 mt-4 px-2">
                        {/* صورة الشعار الصغير */}
                        <div className="">
                            <img src={l2} alt="Logo" className="w-full h-full object-cover" />
                        </div>

                        {/* العناوين والنصوص */}

                    </div>

                    {/* 3. زر العرض في الأسفل */}
                    <div className="card-actions mt-5 px-2">
                        <button className="w-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 py-2.5 rounded-xl font-medium text-sm">
                            View Details
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}
