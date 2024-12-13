import React, { useState } from 'react';
import { Calendar, Video, MapPin, ChevronRight } from 'lucide-react';

const AppointmentOptions = () => {
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    {
      icon: MapPin,
      title: "Rendez-vous au Cabinet",
      description: "Rencontrez-moi en personne dans mon cabinet à Saint-Maur-des-Fossés pour une consultation individuelle.",
      color: "border-blue-500 text-blue-500"
    },
    {
      icon: Video,
      title: "Rendez-vous par Vidéo",
      description: "Profitez d'une consultation à distance via visioconférence, où que vous soyez.",
      color: "border-green-500 text-green-500"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-light text-center text-gray-800 mb-12 tracking-tight">
          Comment Souhaitez-vous <span className="font-bold">Nous Rencontrer ?</span>
        </h2>
        <div className="space-y-6">
          {options.map((option, index) => (
            <div 
              key={index}
              onClick={() => setActiveOption(index)}
              className={`
                group cursor-pointer border-2 rounded-xl p-6 transition-all duration-300
                ${activeOption === index 
                  ? `${option.color} bg-opacity-10 border-opacity-100` 
                  : 'border-gray-200 border-opacity-50 hover:border-opacity-100'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`
                    p-3 rounded-full border-2 transition-all duration-300
                    ${option.color} 
                    ${activeOption === index ? 'bg-opacity-20' : 'bg-opacity-0'}
                  `}>
                    <option.icon 
                      size={32} 
                      className={`
                        transition-all duration-300
                        ${activeOption === index ? 'scale-110' : 'group-hover:scale-110'}
                      `} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-base max-w-md">
                      {option.description}
                    </p>
                  </div>
                </div>
                <ChevronRight 
                  size={24} 
                  className={`
                    text-gray-400 transition-all duration-300 
                    ${activeOption === index ? 'translate-x-1 text-opacity-100' : 'group-hover:translate-x-1'}
                  `} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentOptions;