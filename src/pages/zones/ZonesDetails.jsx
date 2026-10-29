import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/axios-instance.jsx';

export default function ZonesDetails() {
  const { id } = useParams();
  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getZoneDetails() {
      try {
        const response = await api.get(`/zone`);
        const foundZone = response.data.find((item) => String(item.id) === String(id));
        setZone(foundZone);
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب تفاصيل المنطقة:", error);
        setLoading(false);
      }
    }

    if (id) {
      getZoneDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-gray-600">جاري تحميل البيانات...</div>
      </div>
    );
  }

  if (!zone) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-bold text-red-500">لم يتم العثور على هذه المنطقة.</div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <div className="flex flex-col items-center mb-12">
        <p className="text-[32px] font-serif text-[#000000] font-semibold">
          {zone.name_en || "Strategic Locations"}
        </p>
        <div className="w-45 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
      </div>   

      {zone.images && zone.images.length > 0 && (
        <div className="w-full h-[450px] mb-12 overflow-hidden rounded-2xl shadow-md border">
          <img 
            src={zone.images[0]} 
            alt={zone.name_en || "Zone Image"} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {zone.projects && zone.projects.length > 0 ? (
          zone.projects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="w-full max-w-[442px] h-[529px] bg-white border border-gray-200 rounded-[16px] p-4 shadow-md hover:shadow-lg transition flex flex-col justify-between box-border"
            >
              <div>
                <div className="relative h-[220px] rounded-xl overflow-hidden mb-4">
                  <img 
                    src={project.images && project.images.length > 0 ? project.images[0] : ""} 
                    alt={project.name_en} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-[#800020] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {zone.name_en || "New Cairo"}
                  </span>
                </div>
                
                <div className="px-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name_en}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-3">
                    {project.description_en}
                  </p>
                </div>
              </div>

              <Link 
                to={`/projects/${project.id}`} 
                className="w-full border border-[#800020] text-[#800020] py-2.5 rounded-xl hover:bg-[#800020] hover:text-white transition font-medium text-center block"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            لا توجد مشاريع متاحة في هذه المنطقة حالياً.
          </div>
        )}
      </div>
    </div>
  );
}