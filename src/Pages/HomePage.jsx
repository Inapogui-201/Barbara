import React from 'react';
import { User, HeartPulse, Calendar, ArrowRight, Link } from 'lucide-react';
import Navbar from '../component/Navbar';
import AboutSection from '../component/AboutSection';
import TCCService from '../component/TCCService';
import TERVService from '../component/TERVService';
import EMDRService from '../component/EMDRService';
import WorkshopsSection from '../component/WorkshopsSection';
import ConsultationsAndWorkshops from '../component/ConsultationsAndWorkshops';
import FooterSection from '../component/FooterSection';
import ConsultationsCards from '../component/ConsultationsCards';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navbar />
      <div className="relative flex-grow flex items-center mt-32">
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Contenu Textuel */}
          <div className="text-gray-800 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Barbara Para
              <span className="block text-3xl md:text-4xl font-medium mt-2 text-gray-600">
                Psychologue Clinicienne
              </span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Découvrez un espace bienveillant dédié à votre santé mentale. Spécialisée dans l'accompagnement des adultes, adolescents et couples, je vous propose un soutien personnalisé pour surmonter vos défis de vie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/appointment" className="bg-[#3a7ca5] text-white px-6 py-3 rounded-full 
                flex items-center justify-center gap-2 font-semibold 
                hover:bg-[#2c6088] transition-colors duration-300 
                shadow-lg hover:shadow-xl">
                <Calendar size={20} />
                Prenez Rendez-vous
                <ArrowRight size={20} />
              </a>
              
              <button className="bg-transparent border-2 border-[#3a7ca5] text-[#3a7ca5]
                px-6 py-3 rounded-full flex items-center justify-center gap-2 
                hover:bg-[#3a7ca5]/10 transition-colors duration-300">
                <User size={20} />
                En savoir plus
              </button>
            </div>
            
            {/* Points forts des Services */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#3a7ca5]/10 p-4 rounded-xl">
                <HeartPulse size={32} className="mx-auto mb-2 text-[#3a7ca5]" />
                <span className="text-sm text-gray-700">Adultes</span>
              </div>
              <div className="bg-[#3a7ca5]/10 p-4 rounded-xl">
                <User size={32} className="mx-auto mb-2 text-[#3a7ca5]" />
                <span className="text-sm text-gray-700">Adolescents</span>
              </div>
              <div className="bg-[#3a7ca5]/10 p-4 rounded-xl">
                <User size={32} className="mx-auto mb-2 text-[#3a7ca5]" />
                <span className="text-sm text-gray-700">Couples</span>
              </div>
            </div>
          </div>
          
          {/* Espace pour l'image */}
          <div className="hidden md:flex justify-center items-center">
            <img 
              src="/src/assets/acceuil.jpg" 
              alt="Barbara Para" 
              className="rounded-2xl shadow-lg max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <AboutSection />
      <section className="services-section bg-[#f4f7f6] py-12">
        {/* Titre et description des services */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3a7ca5] mb-4">Nos Services</h2>
          <p className="text-gray-700 text-lg">
            Découvrez nos différentes approches thérapeutiques adaptées à vos besoins pour vous aider à retrouver équilibre et bien-être.
          </p>
        </div>

        {/* Ajout des composants de services */}
        {/* Utilisation de grid-cols pour assurer la responsivité */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {/* Chaque service est maintenant responsive */}
          <TCCService />
          <TERVService />
          <EMDRService />
        </div>
      </section>

      <WorkshopsSection/>
      < ConsultationsAndWorkshops />
      < ConsultationsCards />
      
      < FooterSection />
      
    </div>
  );
};

export default HomePage;