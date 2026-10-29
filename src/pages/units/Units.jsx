import Hero from "../../components/Hero";
import photo from "../../assets/image 12.png";
import Icon from "../../assets/Frame 1.png";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/axios-instance.jsx';

const BedIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BathIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v5m8-5v5m-8-3h8m-9-4h10m-11-3V7a2 2 0 012-2h6a2 2 0 012 2v3M4 11h16" />
  </svg>
);

const AreaIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function Units() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  useEffect(() => {
    async function getUnits() {
      try {
        const response = await api.get("/unit");
        console.log("البيانات المستلمة من الـ API:", response.data);

        setUnits(response.data.units || response.data);
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب بيانات الوحدات:", error);
        setLoading(false);
      }
    }

    getUnits();
  }, []);

  const filteredUnits = units.filter((unit) => {
    const term = searchTerm.trim().toLowerCase();

    const title = unit.title_en ? String(unit.title_en).toLowerCase() : '';
    const description = unit.description_en ? String(unit.description_en).toLowerCase() : '';
    const matchesSearch = !term || title.includes(term) || description.includes(term);

    const matchesBedrooms = !selectedBedrooms || String(unit.bedrooms) === String(selectedBedrooms);

    const matchesDeveloper = !selectedDeveloper || String(unit.project?.developer?.name_en || '').toLowerCase() === selectedDeveloper.toLowerCase();

    const matchesZone = !selectedZone || String(unit.zone || '').toLowerCase() === selectedZone.toLowerCase();

    const matchesStatus = !selectedStatus || String(unit.status || '').toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesBedrooms && matchesDeveloper && matchesZone && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-gray-600">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Hero
          bg={photo}
          title={"Redefining the Horizon of Modern Luxury Living"}
          desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
          exist={false}
          icons={Icon}
        />
      </div>

      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto mb-10 bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-4">
            <div className="relative flex items-center lg:col-span-2">
              <input
                type="text"
                placeholder="Search Property"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
              <span className="absolute right-3 text-gray-400">
                <SearchIcon />
              </span>
            </div>

            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>

            <select
              value={selectedDeveloper}
              onChange={(e) => setSelectedDeveloper(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              <option value="">developers</option>
              <option value="hills">1 hills</option>
              <option value="Hayah resident">2 Hayah resident</option>
              <option value="Hayah">3 Hayah</option>
              <option value="elmorshedy">4 elmorshedy</option>  
              <option value="palm hills">5 palm hills</option> 
              <option value="HM Group">6 HM Group</option> 
              <option value="lagoon">7 laggon </option> 
            </select>

            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              <option value="">Zone</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              <option value="">Status</option>
              <option value="available">Available</option>
            </select>

            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            >
              <option value="">Price Range</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="w-full sm:w-[250px] bg-[#800020] text-white py-2.5 rounded-xl font-medium hover:bg-[#600018] transition shadow-md text-sm cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredUnits && filteredUnits.length > 0 ? (
            filteredUnits.map((unit, index) => (
              <div
                key={`${unit.id || index}`}
                className="w-full max-w-[400px] bg-white border border-gray-200 rounded-[16px] p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-[220px] rounded-xl overflow-hidden mb-4">
                    <img
                      src={unit.images && unit.images.length > 0 ? unit.images[0] : "https://via.placeholder.com/400x220"}
                      alt={unit.title_en || "Unit Image"}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                      Available
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-xs py-2 border-b border-gray-100 mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      <BedIcon />
                      <span>{unit.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BathIcon />
                      <span>{unit.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <AreaIcon />
                      <span>{unit.size}m</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-2 px-1">
                    <h3 className="text-lg font-bold text-gray-900 truncate max-w-[60%]">
                      {unit.title_en}
                    </h3>
                    <span className="text-lg font-bold text-gray-900">
                      {unit.price?.toLocaleString()} EGP
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs line-clamp-2 mb-4 px-1 leading-relaxed">
                    {unit.description_en}
                  </p>
                </div>

                <Link
                  to={`/units/${unit.id}`}
                  className="w-full border border-[#800020] text-[#800020] py-2.5 rounded-xl hover:bg-[#800020] hover:text-white transition font-medium text-center block text-sm"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              لا توجد وحدات تطابق خيارات البحث الخاصة بك.
            </div>
          )}
        </div>
      </div>
    </>
  );
}