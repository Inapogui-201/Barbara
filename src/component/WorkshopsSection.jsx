import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';
import workshopImage1 from '../assets/th1.jpg'; // Assurez-vous que le chemin est correct
import workshopImage2 from '../assets/th2.jpg';
import workshopImage3 from '../assets/th3.jpg';

const WorkshopsSection = () => {
  const workshops = [
    {
      icon: BookOpen,
      title: "Atelier de Gestion du Stress",
      description: "Apprenez des techniques pratiques pour gérer le stress au quotidien.",
      image: workshopImage1,
    },
    {
      icon: Users,
      title: "Atelier de Communication",
      description: "Développez vos compétences en communication interpersonnelle.",
      image: workshopImage2,
    },
    {
      icon: Calendar,
      title: "Atelier de Planification Personnelle",
      description: "Organisez votre temps et atteignez vos objectifs personnels.",
      image: workshopImage3,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#3a7ca5] mb-8 text-center">
          Ateliers Proposés
        </h2>
        <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto px-4">
          Au cabinet et ailleurs, j’organise des ateliers de yoga, de relaxation et d'écriture pour adultes et pour adolescents. Je propose également des ateliers de développement personnel TCC pour mieux gérer ses émotions, vaincre son stress ou encore développer une meilleure estime de soi. J'organise enfin des stages de découverte en groupe sur plusieurs jours.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {workshops.map(({ icon: Icon, title, description, image }, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-t-xl mb-4" />
              <Icon size={40} className="mb-4 text-[#3a7ca5]" />
              <h3 className="font-semibold text-[#3a7ca5] mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;