import React from 'react';
import { HeartPulse, Medal, Brain } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu Textuel */}
          <div>
            <h2 className="text-4xl font-bold text-[#3a7ca5] mb-6">
              À Propos de Barbara Para
            </h2>
            <div className="space-y-4 text-gray-700">
              {/* Paragraphe 1 */}
              <div className="flex items-start">
                <HeartPulse size={30} className="mr-3 text-[#3a7ca5]" />
                <p>
                  Je suis Barbara Para, psychologue clinicienne, psychothérapeute et chercheur. Je pratique les psychothérapies dites brèves d'orientation cognitive et comportementale (TCC). En complément, je propose la thérapie par intégration du cycle de la vie (ICV) pour traiter les troubles de l'attachement et la gestion des émotions, ainsi que la thérapie par mouvements oculaires (EMDR) pour soigner le trouble du stress post-traumatique.
                </p>
              </div>

              {/* Paragraphe 2 */}
              <div className="flex items-start">
                <Brain size={30} className="mr-3 text-[#3a7ca5]" />
                <p>
                  Je reçois des patients adultes dans mon cabinet de Saint-Maur-des-Fossés pour des consultations individuelles et des ateliers en groupe, offrant un accompagnement personnalisé et bienveillant.
                </p>
              </div>

              {/* Paragraphe 3 */}
              <div className="flex items-start">
                <Medal size={30} className="mr-3 text-[#3a7ca5]" />
                <p>
                  Mon site est conçu pour vous fournir des informations détaillées sur ma pratique et répondre aux questions que vous pourriez vous poser avant de consulter un psychologue. Je vous souhaite une agréable navigation.
                </p>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: HeartPulse,
                  title: "Approche Empathique",
                  description: "Écoute attentive et sans jugement"
                },
                {
                  icon: Brain,
                  title: "Thérapies Modernes",
                  description: "Techniques evidence-based"
                },
                {
                  icon: Medal,
                  title: "Expertise Professionnelle",
                  description: "Plus de 10 ans d'expérience"
                }
              ].map(({ icon: Icon, title, description }, index) => (
                <div 
                  key={index} 
                  className="bg-[#3a7ca5]/10 p-4 rounded-xl text-center hover:bg-[#3a7ca5]/20 transition-colors duration-300"
                >
                  <Icon size={30} className="mx-auto mb-3 text-[#3a7ca5]" />
                  <h3 className="font-semibold text-[#3a7ca5] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="md:block hidden md:col-span-1 mt-8 md:mt-0">
            <img 
              src="/src/assets/para.jpg" 
              alt="Barbara Para" 
              className="rounded-2xl shadow-lg object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image pour petits écrans */}
          <div className="md:hidden block mt-8">
            <img 
              src="/src/assets/para.jpg" 
              alt="Barbara Para" 
              className="rounded-2xl shadow-lg object-cover w-full h-[300px] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;