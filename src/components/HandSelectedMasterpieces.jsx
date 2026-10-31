import React from 'react';
import img1 from "../assets/Frame 2.png";
import img2 from "../assets/Frame 3.png";
import img3 from "../assets/image 4.png";

export default function HandSelectedMasterpieces() {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-10 my-16 md:my-28">
            {/* العنوان والخط تحته */}
            <div className="flex flex-col items-center mb-10 md:mb-16">
                <p className="text-2xl md:text-[32px] font-serif text-[#000000] font-semibold text-center">
                    Hand-Selected Masterpieces
                </p>
                <div className="w-32 md:w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
            </div>

            {/* حاوية الكارتات (عمودي على الموبايل، و 3 أعمدة على الكمبيوتر) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                
                {/* الكارت الأول */}
                <div className="card bg-base-100 w-full max-w-[442px] shadow-sm items-start flex flex-col">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img1}
                            alt="Palm Hills Office"
                            className="rounded-3xl w-full h-[260px] md:h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start w-full">
                        <h2 className="card-title text-xl md:text-2xl font-semibold text-black">
                            01. Palm Hills Office No.3
                        </h2>
                    </div>
                </div>

                {/* الكارت الثاني */}
                <div className="card bg-base-100 w-full max-w-[442px] shadow-sm items-start flex flex-col">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img2}
                            alt="Hacienda Duplex"
                            className="rounded-3xl w-full h-[260px] md:h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start w-full">
                        <h2 className="card-title text-xl md:text-2xl font-semibold text-black">
                            02. Hacienda Duplex No.4
                        </h2>
                    </div>
                </div>

                {/* الكارت الثالث */}
                <div className="card bg-base-100 w-full max-w-[442px] shadow-sm items-start flex flex-col">
                    <figure className="w-full justify-start p-0">
                        <img
                            src={img3}
                            alt="Sawary Family Villa"
                            className="rounded-3xl w-full h-[260px] md:h-[320px] object-cover"
                        />
                    </figure>
                    <div className="card-body p-0 pt-4 text-left items-start w-full">
                        <h2 className="card-title text-xl md:text-2xl font-semibold text-data text-black">
                            03. Sawary Family Villa 
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
}