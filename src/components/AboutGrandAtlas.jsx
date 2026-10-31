import React from 'react';
import house from "../assets/image 5.png";

export default function AboutGrandAtlas() {
    return (
        <>
            {/* العنوان والخط تحته */}
            <div className="flex flex-col items-center mb-10 md:mb-16.25 px-4">
                <p className="text-2xl md:text-[32px] font-serif text-[#000000] font-semibold mt-16 md:mt-25 text-center">
                    About Grand Atlas
                </p>
                <div className="w-32 md:w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
            </div>

            {/* الحاوية الرئيسية (عمودي على الموبايل، وبجواره بعض على الشاشات الكبيرة) */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-4 max-w-[1440px] mx-auto gap-10 lg:gap-0">
                
                {/* قسم الصورة */}
                <div className="w-full lg:w-[673px] h-[350px] sm:h-[450px] lg:h-[667px] rounded-t-[30px] lg:rounded-t-[40px] border-[4px] border-[#800000] overflow-hidden shadow-lg lg:mr-15 flex-shrink-0">
                    <img
                        src={house}
                        alt="Grand Atlas House"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* قسم النص والزرار */}
                <div className="flex-1 w-full lg:w-auto flex flex-col items-start">
                    <p className="text-[#554E4E] text-base md:text-[24px] leading-relaxed max-w-[624px]">
                        We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
                        <br /><br />
                        We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
                    </p>
                    
                    <button
                        type="button"
                        className="mt-8 lg:mt-28 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-white transition-opacity hover:opacity-95 rounded-xl"
                    >
                        <span className="text-[18px] font-medium">Know More</span>
                        <span className="text-[24px] leading-none">→</span>
                    </button>
                </div>

            </div>
        </>
    );
}