import React from 'react'
import img1 from "../assets/Frame 2.png"
import img2 from "../assets/Frame 3.png"
import img3 from "../assets/image 4.png"

export default function HandSelectedMasterpieces() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center  ">
                    <p className="text-[32px] font-serif text-[#000000] font-semibold mt-25">
                        Hand-Selected Masterpieces
                    </p>
                    {/* الخط الأحمر المصغر في المنتصف */}
                    <div className="w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
                </div>
            </div>


            <div className='mt-[39px] flex flex-row'>
                <div className="ml-9.25 card bg-base-100 w-[442px] h-[292px] shadow-sm items-start">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img1}
                            alt="Palm Hills Office"
                            className="rounded-3xl w-full h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start">
                        <h2 className="card-title text-2xl font-semibold text-black">
                            01. Palm Hills Office No.3
                        </h2>
                    </div>
                </div>
                <div className="ml-9.25 card bg-base-100 w-[442px] h-[292px] shadow-sm items-start">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img2}
                            alt="Palm Hills Office"
                            className="rounded-3xl w-full h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start">
                        <h2 className="card-title text-2xl font-semibold text-black">
                            02. Hacienda Duplex No.4
                        </h2>
                    </div>
                </div>
                <div className="ml-9.25 card bg-base-100 w-[442px] h-[292px] shadow-sm items-start">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img3}
                            alt="Palm Hills Office"
                            className="rounded-3xl w-full h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start">
                        <h2 className="card-title text-2xl font-semibold text-black">
                            03. Sawary Family Villa 
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
