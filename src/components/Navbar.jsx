import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoO.png";

export default function Navbar() {
  // حالة لفتح وإغلاق قائمة الموبايل
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-[90px] px-4 md:px-10 flex items-center justify-between">
        
        {/* 1. اللوجو */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Grand Atlas Logo"
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
          />
        </Link>

        {/* 2. روابط الملاحة للشاشات الكبيرة (Desktop) */}
        <nav className="hidden md:flex items-center gap-x-8">
          <Link to="/" className="text-[#847D7D] hover:text-[#8E1616] transition-colors capitalize">
            home
          </Link>
          <Link to="/units" className="text-[#847D7D] hover:text-[#8E1616] transition-colors capitalize">
            units
          </Link>
          <Link to="/zones" className="text-[#847D7D] hover:text-[#8E1616] transition-colors capitalize">
            zones
          </Link>
          <Link to="/developers" className="text-[#847D7D] hover:text-[#8E1616] transition-colors capitalize">
            developers
          </Link>
          <Link to="/contact" className="text-[#847D7D] hover:text-[#8E1616] transition-colors capitalize">
            contact us
          </Link>
        </nav>

        {/* 3. زر Register للشاشات الكبيرة */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-[#C34B4B] to-[#8E1616] text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity">
            Register
          </button>
        </div>

        {/* 4. زرار الهامبرجر للشاشات الصغيرة (Mobile Menu Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // أيقونة الإغلاق (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // أيقونة القائمة (☰)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 5. القائمة المنسدلة للشاشات الصغيرة (Mobile Dropdown Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-y-4 shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-[#847D7D] hover:text-[#8E1616] py-1 capitalize"
          >
            home
          </Link>
          <Link
            to="/units"
            onClick={() => setIsOpen(false)}
            className="text-[#847D7D] hover:text-[#8E1616] py-1 capitalize"
          >
            units
          </Link>
          <Link
            to="/zones"
            onClick={() => setIsOpen(false)}
            className="text-[#847D7D] hover:text-[#8E1616] py-1 capitalize"
          >
            zones
          </Link>
          <Link
            to="/developers"
            onClick={() => setIsOpen(false)}
            className="text-[#847D7D] hover:text-[#8E1616] py-1 capitalize"
          >
            developers
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-[#847D7D] hover:text-[#8E1616] py-1 capitalize"
          >
            contact us
          </Link>
          <button className="w-full bg-gradient-to-r from-[#C34B4B] to-[#8E1616] text-white py-2 rounded-xl mt-2">
            Register
          </button>
        </div>
      )}
    </header>
  );
}