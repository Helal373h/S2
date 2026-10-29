import React from 'react'
import house from "../assets/image 5.png"

export default function AboutGrandAtlas() {
    return (
        <>
            <div className="flex flex-col items-center mb-16.25 ">
                <p className="text-[32px] font-serif text-[#000000] font-semibold mt-25">    About Grand Atlas
                </p>
                <div className="w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
            </div>
            <div className="flex flex-row">
                <div className=" ml-4 rounded-t-[40px] border-[4px] border-[#800000] overflow-hidden shadow-lg w-[673px] h-[667px]  flex-shrink-0 mr-15 ">
                    <img
                        src={house}
                        className="w-full h-auto block object-cover"
                    />
                </div>
                <div className='flex-1'>
                    <p className=' text-[#554E4E] text-[24px] w-[624px] w-[504px]' >
                        We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
                        We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
                    </p>
                    <button
                        type="button"
                        className=" mt-28 flex items-center justify-center gap-3 px-6 py-3  bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white transition-colors hover:bg-[#7f171a] border-raduis rounded-xl border-solid"
                    >
                        <span className="text-[18px] font-medium">Know More</span>
                        <span className="text-[24px] leading-none">→</span>
                    </button>


                </div>

            </div>



        </>
    )
}
