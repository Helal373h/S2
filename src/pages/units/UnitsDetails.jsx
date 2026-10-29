import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/axios-instance.jsx';

export default function UnitDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    async function fetchUnitDetails() {
      try {
        const response = await api.get(`/unit/${id}`);
        console.log("تفاصيل الوحدة:", response.data);
        
        const unitData = response.data.unit || response.data;
        setUnit(unitData);
        
        if (unitData.images && unitData.images.length > 0) {
          setSelectedImage(unitData.images[0]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب تفاصيل الوحدة:", error);
        setLoading(false);
      }
    }

    fetchUnitDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-gray-600">جاري تحميل التفاصيل...</div>
      </div>
    );
  }

  if (!unit) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">عذراً، هذه الوحدة غير موجودة</h2>
        <Link to="/units" className="text-[#800020] underline font-medium">العودة إلى قائمة الوحدات</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <div className="mb-8">
        <div className="w-full h-[450px] md:h-[520px] rounded-xl overflow-hidden shadow-sm mb-4 bg-gray-100">
          <img 
            src={selectedImage || "https://via.placeholder.com/1200x600"} 
            alt={unit.title_en} 
            className="w-full h-full object-cover"
          />
        </div>

        {unit.images && unit.images.length > 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {unit.images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`h-24 rounded-lg overflow-hidden border-2 transition ${selectedImage === img ? 'border-[#800020] opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#800020] mb-2">
            {unit.title_en}
          </h1>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>📍</span> {unit.location || "New Cairo, Egypt"} — <span className="text-gray-400">ref. {unit.id?.slice(0, 8)}</span>
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right">
          <span className="text-3xl md:text-4xl font-bold text-gray-700">
            {unit.price?.toLocaleString()} EGP
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-5 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">At a glance</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="text-gray-500">Plot / Size:</span>
              <span className="font-semibold text-gray-800">{unit.size} m²</span>
            </li>
            <li className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="text-gray-500">Bedrooms:</span>
              <span className="font-semibold text-gray-800">{unit.bedrooms}</span>
            </li>
            <li className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="text-gray-500">Bathrooms:</span>
              <span className="font-semibold text-gray-800">{unit.bathrooms}</span>
            </li>
            <li className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="text-gray-500">Living rooms:</span>
              <span className="font-semibold text-gray-800">1</span>
            </li>
            <li className="flex justify-between border-b border-gray-200/60 pb-3">
              <span className="text-gray-500">Property Type:</span>
              <span className="font-semibold text-gray-800">{unit.title_ar || "شقة دوبلكس"}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              {unit.description_en}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={`https://wa.me/?text=I am interested in ${unit.title_en}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#008000] hover:bg-[#007000] text-white py-3.5 px-6 rounded-xl font-medium text-center transition shadow-sm flex items-center justify-center gap-2"
            >
              Contact via WhatsApp
            </a>
            <a 
              href="tel:+201000000000" 
              className="border border-gray-300 hover:border-gray-400 text-gray-800 py-3.5 px-6 rounded-xl font-medium text-center transition flex items-center justify-center gap-2"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}