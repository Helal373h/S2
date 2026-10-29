import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/axios-instance.jsx';

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        async function getProjectDetails() {
            try {
                const response = await api.get(`/projects/${id}`);
                const data = response.data;
                setProject(data);

                if (data.images && data.images.length > 0) {
                    setSelectedImage(data.images[0]);
                }

                setLoading(false);
            } catch (error) {
                console.error("خطأ في جلب تفاصيل المشروع:", error);
                setLoading(false);
            }
        }

        if (id) {
            getProjectDetails();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-bold text-gray-600">جاري التحميل...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-bold text-red-500">لم يتم العثور على المشروع.</div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-6xl mx-auto font-sans">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl md:text-4xl font-serif text-black font-semibold">
                    {project.name_en || project.title || "Project Details"}
                </h1>
                <div className="w-32 h-1 bg-[#C34B4B] rounded-full mt-2"></div>
            </div>

            {project.images && project.images.length > 0 && (
                <div className="mb-10">
                    <div className="w-full h-[450px] mb-4 overflow-hidden rounded-2xl shadow-sm border">
                        <img
                            src={selectedImage || project.images[0]}
                            alt={project.name_en || "Project Image"}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-5 gap-3">
                        {project.images.map((imgUrl, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(imgUrl)}
                                className={`h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition ${selectedImage === imgUrl ? 'border-[#800020] scale-95 shadow-md' : 'border-transparent opacity-80 hover:opacity-100'
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
                        {project.subtitle_en || project.name_en}
                    </h2>
                    {project.location_en && (
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            <span>📍</span> {project.location_en}
                        </p>
                    )}
                </div>

                {project.developer_logo && (
                    <img
                        src={project.developer_logo}
                        alt={project.developer_name || "Developer Logo"}
                        className="h-12 object-contain"
                    />
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">At a glance</h3>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        {project.plot_size && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Plot size ca.:</strong> {project.plot_size} m²
                            </li>
                        )}
                        {project.living_area && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Living area ca.:</strong> {project.living_area} m²
                            </li>
                        )}
                        {project.units_count && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Units:</strong> {project.units_count}
                            </li>
                        )}
                        {project.lakes_count && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Man made Lakes:</strong> {project.lakes_count}
                            </li>
                        )}
                        {project.playgrounds_count && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Playground:</strong> {project.playgrounds_count}
                            </li>
                        )}
                        {project.gyms_count && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Public gyms:</strong> {project.gyms_count}
                            </li>
                        )}
                        {project.schools_count && (
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <strong>Schools:</strong> {project.schools_count}
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                        {project.description_en || "No overview available for this project."}
                    </p>
                </div>
            </div>
        </div>
    );
}