import Hero from "../../components/Hero";
import photo from "../../assets/image 29.png";
import p1 from "../../assets/Frame 99.png";
import p2 from "../../assets/Frame 100.png";
import p3 from "../../assets/Frame 101.png";
import p4 from "../../assets/Frame 102.png";
import Icon from "../../assets/Frame 1.png";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../utils/axios-instance.jsx';

export default function Zones() {
  const [zones, setZones] = useState([]);
  let navigate = useNavigate();

  const localImages = [p3, p1, p2, p4];

  useEffect(() => {
    async function getZones() {
      try {
        const response = await api.get("/zone");
        setZones(response.data);
      } catch (error) {
        console.error("خطأ في جلب المناطق:", error);
      }
    }
    getZones();
  }, []);

  return (
    <>
      <div>
        <Hero 
          bg={photo}
          title={"Destinations Defined by Distinction"}
          desc={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
          exist={false}
          icons={Icon}
        />
      </div>

      <div className="flex flex-row flex-wrap gap-6 items-center justify-center mt-[87px]">
        {zones.map((zone, index) => {
          return (
            <button 
              key={zone.id} 
              className="focus:outline-none group cursor-pointer"
              onClick={() => {
                navigate(`/zones/${zone.id}`);
              }}
            >
              <img
                src={localImages[index] || localImages[0]} 
                alt="Zone"
                className="w-[327px] h-[221px] object-cover rounded-lg group-hover:opacity-90 transition shadow-md"
              />
            </button>
          );
        })}
      </div>
    </>
  );
}