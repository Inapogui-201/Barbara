import React from 'react';
import parisImage from '../assets/thh1.jpg'; // Assurez-vous que le chemin est correct
import saintMaurImage from '../assets/th2.jpg';
import portLesneyImage from '../assets/th1.jpg';

const ConsultationsAndWorkshops = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
          Consultations et Ateliers
        </h2>
        <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto px-4">
          Dans le cadre de consultations, je peux vous recevoir dans mon cabinet de Saint-Maur-des-Fossés en région parisienne ainsi qu'au cabinet du Port dans la région de Dole - Besançon - Dijon. Il est également possible d'échanger par visioconférence.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center">
            <img src={saintMaurImage} alt="Cabinet de Saint-Maur-des-Fossés" className="w-full h-[200px] object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-[#3a7ca5]">Saint-Maur-des-Fossés</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={portLesneyImage} alt="Cabinet de Port-Lesney" className="w-full h-[200px] object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-[#3a7ca5]">Port-Lesney</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={parisImage} alt="Paris" className="w-full h-[200px] object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-[#3a7ca5]">Paris</h3>
          </div>
        </div>

        <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto px-4">
          En ce qui concerne les ateliers, ils peuvent avoir lieu au cabinet de Saint-Maur-des-Fossés, au cabinet de Port-Lesney ainsi que dans Paris (quartiers Nation et Louvre).
        </p>
      </div>
    </section>
  );
};

export default ConsultationsAndWorkshops;