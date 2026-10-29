import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/axios-instance.jsx';

export default function DeveloperDetails() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    async function getDeveloperDetails() {
      try {
        const response = await api.get(`/developer/${id}`);
        const data = response.data;
        setDeveloper(data);

        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب تفاصيل المطور:", error);
        setLoading(false);
      }
    }

    if (id) {
      getDeveloperDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-gray-600">جاري التحميل...</div>
      </div>
    );
  }

  if (!developer) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-red-500">لم يتم العثور على هذا المطور.</div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-black font-semibold">
          {developer.name_en || "Developer Details"}
        </h1>
        <div className="w-32 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
      </div>

      {developer.images && developer.images.length > 0 && (
        <div className="mb-10">
          <div className="w-full h-[450px] mb-4 overflow-hidden rounded-2xl shadow-sm border">
            <img 
              src={selectedImage || developer.images[0]} 
              alt={developer.name_en} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="grid grid-cols-5 gap-3">
            {developer.images.map((imgUrl, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImage(imgUrl)}
                className={`h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                  selectedImage === imgUrl ? 'border-[#800020] scale-95 shadow-md' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b pb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#800020] mb-1">
            {developer.subtitle_en || developer.name_en}
          </h2>
          {developer.location && (
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <span>📍</span> {developer.location}
            </p>
          )}
        </div>

        {developer.logo && (
          <img 
            src={developer.logo} 
            alt={developer.name_en} 
            className="h-12 object-contain"
          />
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
        <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
          {developer.description_en || "No overview available for this developer."}
        </p>
      </div>
    </div>
  );
}