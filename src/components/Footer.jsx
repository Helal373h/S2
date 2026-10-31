import React from "react";
import Logo from "../assets/logof.png";
import IN from "../assets/ic Linkedin.png";
import FC from "../assets/ic Facebook.png";
import TW from "../assets/ic Twitter.png";

export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] text-[#0A142F] pt-12 pb-6 px-4 md:px-12 mt-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* 1. اللوجو والتواصل */}
        <div className="flex flex-col items-start">
          <a href="/" className="mb-4">
            <img src={Logo} alt="Grand Atlas Logo" className="w-[120px] md:w-[151px] h-auto" />
          </a>
          <p className="text-[#847D7D] mb-2">+1 (2345) 678-90-12</p>
          <p className="text-[#847D7D]">support@personal.com</p>
        </div>

        {/* 2. روابط سريعة */}
        <div>
          <p className="font-semibold text-lg mb-4">Quick links</p>
          <div className="text-[#847D7D] flex flex-col gap-2">
            <a href="/" className="hover:text-[#991b1e] transition-colors">Home</a>
            <a href="/units" className="hover:text-[#991b1e] transition-colors">Inventories</a>
            <a href="/zones" className="hover:text-[#991b1e] transition-colors">Zones</a>
            <a href="/developers" className="hover:text-[#991b1e] transition-colors">Developers</a>
            <a href="/contact" className="hover:text-[#991b1e] transition-colors">Contact Us</a>
          </div>
        </div>

        {/* 3. عن الشركة */}
        <div>
          <p className="font-semibold text-lg mb-4">About</p>
          <div className="text-[#847D7D] flex flex-col gap-2">
            <p className="cursor-pointer hover:text-[#991b1e] transition-colors">Grand Atlas</p>
            <p className="cursor-pointer hover:text-[#991b1e] transition-colors">Privacy Policy</p>
            <p className="cursor-pointer hover:text-[#991b1e] transition-colors">Legal</p>
            <p className="cursor-pointer hover:text-[#991b1e] transition-colors">Help</p>
            <p className="cursor-pointer hover:text-[#991b1e] transition-colors">Support</p>
          </div>
        </div>

        {/* 4. الاشتراك والسوشيال ميديا */}
        <div className="flex flex-col items-start">
          <p className="font-semibold text-lg mb-4">Get In touch</p>
          
          {/* حقل الإدخال */}
          <div className="flex h-[42px] w-full max-w-[300px] overflow-hidden rounded-[13px] border-2 border-[#991b1e] bg-white mb-4">
            <input
              type="text"
              placeholder="Get product updates"
              className="flex-1 px-3 py-1 text-sm text-gray-700 outline-none placeholder:text-[#aaa5a5]"
            />
            <button
              type="button"
              className="w-[50px] flex items-center justify-center bg-[#991b1e] text-2xl text-white transition-colors hover:bg-[#7f171a]"
            >
              →
            </button>
          </div>

          {/* أيقونات السوشيال ميديا */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3] bg-white hover:border-[#991b1e] transition-colors">
              <img src={IN} alt="LinkedIn" className="h-[14px] w-[14px] object-contain" />
            </a>
            <a href="#" className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3] bg-white hover:border-[#991b1e] transition-colors">
              <img src={FC} alt="Facebook" className="h-[14px] w-[14px] object-contain" />
            </a>
            <a href="#" className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3] bg-white hover:border-[#991b1e] transition-colors">
              <img src={TW} alt="Twitter" className="h-[14px] w-[14px] object-contain" />
            </a>
          </div>
        </div>

      </div>

      {/* حقوق الملكية */}
      <div className="border-t border-[#C9C9C9] pt-6 text-center">
        <p className="text-xs md:text-sm text-[#0A142F]">
          © 2020 Lift Media. All rights reserved
        </p>
      </div>
    </footer>
  );
}