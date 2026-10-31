import Hero from "../../components/Hero";
import photo from "../../assets/image 28.png";
import Icon from "../../assets/Frame 1.png";
import React, { useEffect, useState } from 'react';
import api from '../utils/axios-instance.jsx';
import { Link } from 'react-router-dom';

export default function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDevelopers() {
            try {
                const response = await api.get("/developer");
                console.log("البيانات المستلمة من الـ API:", response.data);
                
                setDevelopers(response.data.developers || response.data);
                setLoading(false);
            } catch (error) {
                console.error("خطأ في جلب بيانات المطورين:", error);
                setLoading(false);
            }
        }

        getDevelopers();
    }, []);

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
                    title={"Defining the Future Skyline."}
                    desc={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
                    exist={false}
                    icons={Icon}
                />
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 max-w-[1440px] mx-auto justify-items-center">
                {developers && developers.length > 0 ? (
                    developers.map((dev, index) => (
                        <div 
                            key={`${dev.id || index}`} 
                            className="w-full max-w-[442px] bg-white border border-gray-200 rounded-[16px] p-5 shadow-md hover:shadow-lg transition flex flex-col justify-between box-border"
                        >
                            <div>
                                {/* صورة الكارد والبادج */}
                                <div className="relative h-[220px] rounded-xl overflow-hidden mb-4">
                                    <img 
                                        src={dev.images && dev.images.length > 0 ? dev.images[0] : ""} 
                                        alt={dev.name_en || "Developer Image"} 
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-3 right-3 bg-[#800020] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        {dev.location || "New Cairo"}
                                    </span>
                                </div>
                                
                                {/* الشعار والاسم والـ Subtitle */}
                                <div className="flex items-center gap-3 mb-3 px-1">
                                    {dev.logo ? (
                                        <img src={dev.logo} alt={dev.name_en} className="w-10 h-10 object-contain rounded-lg border border-gray-100" />
                                    ) : null}
                                    
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {dev.name_en}
                                        </h3>
                                        {dev.subtitle && (
                                            <p className="text-gray-500 text-xs mt-0.5">
                                                {dev.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* 📌 التفاصيل الجديدة التي تأتي من الـ API (مثل الوصف أو المميزات) */}
                                {dev.description && (
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 px-1">
                                        {dev.description}
                                    </p>
                                )}

                                {/* أمثلة إضافية لتفاصيل أخرى (لو موجودة في الـ API عندك مثل عدد المشاريع أو غيره) */}
                                {dev.projects_count && (
                                    <div className="text-xs text-gray-500 mb-4 px-1 font-medium">
                                        Projects: <span className="text-gray-900 font-bold">{dev.projects_count}</span>
                                    </div>
                                )}
                            </div>

                            {/* زر عرض المشاريع */}
                            <Link 
                                to={`/developers/${dev.id}`} 
                                className="w-full border border-[#800020] text-[#800020] py-2.5 rounded-xl hover:bg-[#800020] hover:text-white transition font-medium text-center block mt-4"
                            >
                                View Projects
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 py-8">
                        لا توجد بيانات متاحة حالياً.
                    </div>
                )}
            </div>
        </>
    );
}